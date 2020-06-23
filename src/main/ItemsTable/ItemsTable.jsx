import React from 'react';
import TableRow from './TableRow/TableRow';

class ItemsTable extends React.Component {
    constructor(props) {
        super(props);
        this.sortType = [true, false, false];
        this.sortIcon = 'fas fa-sort-down';

    }
    sortAscending(by) {
        this.props.onSortAscending(by);
        console.log('sortAscending')
    }
    sortDescending(by) {
        this.props.onSortDescending(by);
        console.log('sortDescending')
    }
    sort(by, index) {
        this.sortType[index] = !this.sortType[index];

        if( this.sortType[index] ){
            this.sortIcon = 'fas fa-sort-down';
            this.sortAscending(by)
        } else {
            this.sortIcon = 'fas fa-sort-up';
            this.sortDescending(by);
        }
    }
    render() {
        const tableRow = this.props.cartItems.map(el => {
            const item = {
                el: el,
                onUpdate: this.props.onUpdate,
                onRemove: this.props.onRemove,
            };
            return <TableRow {...item} key={item.el.id.toString()}></TableRow>
        });
        return (
            <table>
                <thead>
                <tr>
                    <th>
                        Id
                    </th>
                    <th>Item
                        <button
                            onClick={()=>{this.sort('title', 0)}}
                            className='buttonSort'>
                            <i className={this.sortType[0]? 'fas fa-sort-down': 'fas fa-sort-up'}></i>
                        </button>
                    </th>
                    <th>Count
                        <button
                            onClick={()=>{this.sort('count', 1)}}
                            className='buttonSort'>
                            <i className={this.sortType[1]? 'fas fa-sort-down': 'fas fa-sort-up'}></i>
                        </button>
                    </th>
                    <th>Price
                        <button
                            onClick={()=>{this.sort('price', 2)}}
                            className='buttonSort'>
                            <i className={this.sortType[2]? 'fas fa-sort-down': 'fas fa-sort-up'}></i>
                        </button>
                    </th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {tableRow}
                </tbody>
            </table>
        )
    }
}
export default ItemsTable;
