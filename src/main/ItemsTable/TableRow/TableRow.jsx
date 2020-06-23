import React from 'react';

class TableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.el;
        this.onUpdate = this.props.onUpdate;
        this.onRemove = this.props.onRemove;
        this.decrease = this.decrease.bind(this);
        this.increase = this.increase.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
    }
    decrease() {
        if(this.state.count > 1)
        this.setState({count: this.state.count-1});
        this.update({...this.state, count: this.state.count-1});
    }
    increase() {
        this.setState({count: this.state.count+1});
        this.update({...this.state, count: this.state.count+1});
    }
    update(state) {
        this.onUpdate(state);
    }
    remove(id) {
        this.onRemove(id);
    }
    render(){
        return (
            <tr>
                <td> { this.state.id } </td>
                <td> { this.state.title } </td>
                <td>
                    <button onClick={this.decrease}
                            className='decrease'
                            type='button'>-</button>
                    { this.state.count }
                    <button onClick={this.increase}
                            className='increase'
                            type='button'>+</button></td>
                <td> { this.state.price * this.state.count } $</td>
                <td>
                    <button onClick={()=>this.remove(this.state.id)}
                            className='buttonDelete'
                            type='button'>
                        <i className="fas fa-times"></i>
                    </button>
                </td>
            </tr>
        )
    }
}
export default TableRow;
