import React from 'react';

import dmart from '../Assets/Images/dmart-vector-logo.png';
import big_bazar from '../Assets/Images/Big-Bazaar-Logo-PNG.png';
import metro from '../Assets/Images/Metro_logo_Cash_and_Carry.png';
import grofers from '../Assets/Images/Grofers-Logo-Vector.png';
import big_basket from '../Assets/Images/99-991436_quail-clip-art.png';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Home() {
	return (
		<div style={{ marginTop: '90px' }}>
			<div style={{ minHeight: '400px' }}>
				{/* <Carousel showArrows={true} showThumbs={false} dynamicHeight={true} stopOnHover={true}>
					<div>
						<img src={big_bazar} />
					</div>
					<div>
						<img src={big_bazar} />
					</div>
					<div>
						<img src={big_basket} />
					</div>
				</Carousel> */}
			</div>

			<div className="customer">
				<h1 className="text-center" style={{ color: 'black' }}>
					Customers
				</h1>
				<br />
				{/* <hr className="hr-line" /> */}
				<br />
				<ul id="customer-list">
					<li>
						<img src={dmart} />
					</li>
					<li>
						<img src={big_bazar} />
					</li>
					<li>
						<img src={metro} />
					</li>
					<li>
						<img src={big_basket} />
					</li>
					<li>
						<img src={grofers} />
					</li>
				</ul>
			</div>
			<div className="about-us" id="about-us">
				<h1 className="text-center">About Us</h1>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
					industry's standard dummy text ever since the 1500s. When an unknown printer took a galley of type
					and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
					leap into electronic typesetting.
					<br />
					<br />
					Remaining essentially unchanged. It was popularised in the 1960s simply dummy text printing standard
					dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
					has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
					galley of type and scrambled it to make a type specimen book. It has survived not only five
					centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
				</p>
			</div>
		</div>
	);
}

export default Home;
