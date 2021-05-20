import React from 'react';
import logo from '../../Assets/Images/logo.jpg';

function Header() {
	return (
		<header className="header">
			<div className="row">
				<div className="col-md-4 text-center">
					<img src={logo} style={{ height: '55px' }} />
				</div>
				<div className="col-md-4"></div>
				<div className="col-md-4 text-left">
					<ul id="menu" style={{ marginTop: '8px', paddingLeft: '0px' }}>
						<li>
							<a href="/home">Home</a>{' '}
						</li>
						<li>
							<a href="/product-list">Products</a>{' '}
						</li>
						<li>
							<a href="/home#about-us">About Us</a>{' '}
						</li>
						<li>
							<a href="/contact-us">Contact Us</a>{' '}
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default Header;
