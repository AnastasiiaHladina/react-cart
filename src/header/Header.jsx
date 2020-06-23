import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className='topHeader'>
                    <div className='topHeaderLi'>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png"
                            alt="logo"/>
                    </div>
                    <div className='topHeaderLi'>
                        <div className="search">
                            <input className='inputSearch' type="text"/>
                            <button className='buttonSearch'>Search</button>
                        </div>
                    </div>
                    <div className='topHeaderLi'><i className="fas fa-user-alt"></i> Profile</div>
                    <div className='topHeaderLi'><i className="fas fa-heart"></i> Like</div>
                    <div className='topHeaderLi'><i className="fas fa-shopping-basket"></i> Cart</div>
                </div>
                <div className='bottomHeader'>
                    <div className='bottomHeaderLi'>Female</div>
                    <div className='bottomHeaderLi'>Male</div>
                    <div className='bottomHeaderLi'>Child</div>
                    <div className='bottomHeaderLi'>Home</div>
                    <div className='bottomHeaderLi'>Sale</div>
                </div>
            </header>
        )
    }
}
export default Header;
