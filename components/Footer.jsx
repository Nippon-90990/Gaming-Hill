import Link from 'next/link'
import React from 'react'
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <footer className='section-p1'>
        <div className="col">
            <span className='logo font-bold h-20 w-20'>BitLoom</span>
            {/* <img className="logo h-20 w-18" src="/Screenshot (2).png" alt=""/> */}
            <h4>Contact</h4>
            <p><strong>Address: </strong>562 Wellington Road, Street 32, San Francisco </p>
            <p><strong>Phone: </strong> +01 2222 365 / (+91) 01 2345 6789 </p>
            <p><strong>Hours: </strong> 10:00 - 18:00 , Mon - Sat </p>
            <div className="follow">
                <h4>Follow us</h4>
                <div className="icon">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-pinterest-p"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
        </div>

        <div className="col">
            <h4>About</h4>
            <a href="#">About Us</a>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy and Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact Us</a>
        </div>

        <div className="col">
            <h4>My Account</h4>
            <a href="#">Sing In</a>
            <a href="#">View Cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Trac My Order</a>
            <a href="#">Help</a>
        </div>

        <div className="col install">
            <h4>Install App</h4>
            <p>From App Stor or Google Play Store</p>
            <div className="row">
                <img src="https://res.cloudinary.com/dxwpkpyxh/image/upload/v1709196835/app_basgqt.jpg" alt=""/>
                <img src="https://res.cloudinary.com/dxwpkpyxh/image/upload/v1709196834/play_xc8vk2.jpg" alt=""/>
            </div>
            <p>Secure Payment Gateway</p>
            <img src="https://res.cloudinary.com/dxwpkpyxh/image/upload/v1709196834/pay_guflkc.png" alt=""/>
        </div>

        <div className="copyright">
            <p>BitLoom &copy; All Copyright Reserved </p>
        </div>

    </footer>
  )
}

export default Footer