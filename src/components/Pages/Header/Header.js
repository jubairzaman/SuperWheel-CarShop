import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div className='header  text-white'>
            <div className='container'>
                <div>
                    <h1 className='text'>SUPER <span className="text-danger">WHEELS</span></h1>
                    <p className="w-50">Superwheels is one of the leading online platforms and marketplaces in Bangladesh for buying and selling cars online. We have Advanced Features Trusted Car Dealer Seller. You can easily choose a car from us </p>
                    <Link to="/vehicles">
                        <button className="btn btn-danger me-2 fw-bold">
                            Shop Now
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Header;