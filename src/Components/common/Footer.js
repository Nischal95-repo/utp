import React from 'react';
import upArrow from '../../Assets/SVG/up-arrow.svg';
import mail from '../../Assets/SVG/open-mail.svg';
import phone from '../../Assets/SVG/phone-call.svg';
import logo from '../../Assets/Images/logo.jpg';

function Footer() {
	return (
		<div className="footer">
			<div className="footer-dark">
				<div style={{ margin: '0px 100px' }}>
					<div className="row">
						<div className="col-md-4">
							<img src={logo} style={{ height: '80px', paddingTop: '30px' }} />
						</div>
						<div className="col-md-4">
							<h3>Quick Links</h3>
							<ul>
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
						<div className="col-md-4">
							<h3>Contact Info</h3>
							<span>
								185/B,(Ground floor), 5th Main,
								<br />
								Devanathachar Street, Chamrajpet,
								<br /> Bengaluru, Karnataka - 560018
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-light">
				<div className="row copyright" style={{ margin: '0px 100px' }}>
					<div className="col-md-4 ">
						<p>
							Unitech Products © 2018. <b>All Rights Reserved</b>
						</p>
					</div>
					<div
						className="col-md-4"
						style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
					>
						<img src={mail} style={{ padding: ' 0 5px 12px 10px' }} />
						<a href="mailto:support@atriapower.com">
							<p>unitech_products@gmail.com</p>
						</a>
						<img src={phone} style={{ padding: ' 0 5px 12px 10px' }} /> <p> 080-22424293</p>
					</div>
					<div
						className="col-md-4 text-center"
						style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
						onClick={() => {
							// document.body.scrollTop = 0;
							// document.documentElement.scrollTop = 0;
							window.scroll({
								top: 0,
								left: 0,
								behavior: 'smooth',
							});
						}}
					>
						<p>Go Up</p>
						<img src={upArrow} style={{ padding: ' 0 0 12px 10px' }} />
					</div>
				</div>
			</div>
		</div>
	);
}
export default Footer;
