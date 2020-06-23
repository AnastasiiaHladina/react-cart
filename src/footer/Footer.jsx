import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footerMenu">
                    <ul>
                        <li>Shopping terms </li>
                        <li>Club bonprix</li>
                        <li>Site Map</li>
                        <li>Size charts </li>
                    </ul>
                </div>
                <div className="footerMenu">
                    <ul>
                        <li>For Bloggers</li>
                        <li>Suggestions and criticism</li>
                        <li>Product Reviews</li>
                    </ul>
                </div>
                <div className="footerMenu">
                    <ul>
                        <li>Female</li>
                        <li>Male</li>
                        <li>Child</li>
                        <li>House</li>
                        <li>Sale</li>
                    </ul>
                </div>
                <div className="footerMenu">
                    <ul>
                        <li>Company data</li>
                        <li>About Us</li>
                        <li>Our responsibility</li>
                        <li>Press</li>
                        <li>Cookies Policy</li>
                    </ul>
                </div>
            </footer>
        )
    }
}
export default Footer;
