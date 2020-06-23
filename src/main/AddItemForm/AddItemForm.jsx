import React from 'react';

class AddItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id:Math.round(Math.random()*9999), title:'', count:1, price:0};
        this.onAdd = props.onAdd;
        this.changeItemTitle = this.changeItemTitle.bind(this);
        this.changeItemPrice = this.changeItemPrice.bind(this);
        this.decrease = this.decrease.bind(this);
        this.increase = this.increase.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    changeItemTitle(e) {
        const valid = this.validateTitle(e.target.value);
        this.setState({title: e.target.value, validTitle: valid});
    }
    changeItemPrice(e) {
        const valid = this.validatePrice(Number(e.target.value));
        this.setState({price: Number(e.target.value), validPrice: valid});
    }
    validateTitle(title){
        return title.length>2;
    }
    validatePrice(price){
        return price>0;
    }
    decrease() {
        if(this.state.count > 1)
            this.setState({count: this.state.count-1});
    }
    increase() {
        this.setState({count: this.state.count+1});
    }
    handleSubmit(e) {
        e.preventDefault();
        if(this.state.validPrice === true && this.state.validTitle === true){
            this.onAdd({...this.state});
            this.setState({id:Math.round(Math.random()*9999), title:'', count:1, price:0});
        }
    }
    render() {
        let titleColor = this.state.validTitle===true?"lightgray":"red";
        let priceColor = this.state.validPrice===true?"lightgray":"red";
        return (
            <form
                onSubmit={this.handleSubmit}
                className="addItem">
                <input
                    value={this.state.title}
                    onChange={this.changeItemTitle}
                    style={{borderColor: titleColor}}
                    type="text"
                    placeholder='Write item title'/>
                <input
                    value={this.state.price}
                    onChange={this.changeItemPrice}
                    style={{borderColor: priceColor}}
                    type="text"
                    placeholder='Write item price'/>
                <div className="countNewItem">
                    <button onClick={this.decrease}
                            className='decrease'
                            type='button'>-</button>
                    <input className='inputCountNewItem' type="text" value={ this.state.count }/>
                    <button onClick={this.increase}
                            className='increase'
                            type='button'>+</button>
                </div>
                <button type='submit' className='buttonAdd'>Add item</button>
            </form>
        )
    }
}
export default AddItemForm;
