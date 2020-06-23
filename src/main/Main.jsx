import React from 'react';
import AddItemForm from './AddItemForm/AddItemForm';
import ItemsTable from './ItemsTable/ItemsTable';
import cartItems from '../dataSourse/cartItems.json';

class Main extends React.Component {
    constructor() {
        super({});
        this.onAdd = this.onAdd.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.onSortDescending = this.onSortDescending.bind(this);
        this.onSortAscending = this.onSortAscending.bind(this);
        this.state = {
            cartItems:cartItems,
            onAdd: this.onAdd,
            onUpdate: this.onUpdate,
            onRemove: this.onRemove,
            onSortAscending: this.onSortAscending,
            onSortDescending: this.onSortDescending
        };
    }
    onAdd(newItem) {
        this.setState({cartItems: [...this.state.cartItems, newItem]});
    }
    onUpdate(stateElement) {
        const newArray = [...this.state.cartItems];
        const index = newArray.findIndex(el=>el.id === stateElement.id)
        newArray[index] = stateElement;
        this.setState({cartItems: newArray});
    }
    onRemove(itemId) {
        this.setState({cartItems:this.state.cartItems.filter(el => el.id !== itemId)});
    }
    onSortAscending(by) {
        this.setState({
            cartItems:this.state.cartItems.sort(
                (a, b) => a[by].toString().localeCompare(b[by].toString()))
        });
    }
    onSortDescending(by) {
        this.setState({
            cartItems:this.state.cartItems.sort(
                (a, b) => b[by].toString().localeCompare(a[by].toString()))
        });
    }
    getTotal() {
        return this.state.cartItems.reduce((ac, el) => ac+el.price*el.count, 0);
    }
    render() {
        return (
            <main>
                <div className="content">
                    <h2>Add Item</h2>
                    <AddItemForm onAdd={this.onAdd} ></AddItemForm>
                    <h2>Cart</h2>
                    <ItemsTable {...this.state}></ItemsTable>
                </div>
                <div className='total'>
                    <h3>Order price</h3>
                    <p>
                        To pay US  <span className='price'> $ { this.getTotal() }</span>
                    </p>
                    <button className='buttonBuy'>Buy</button>
                </div>
            </main>
        )
    }
}
export default Main;
