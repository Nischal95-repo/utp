import React, { useState } from 'react';
import test_img from '../Assets/Images/product_img.png';
import Modal from '../Components/common/Modal';

function ProductCard(props) {
	const [showModal, setShowModal] = useState(false);
	const { data } = props;
	return (
		<div className="product-card-1">
			{showModal ? (
				<Modal
					visible={showModal}
					data={data}
					closeModal={() => {
						setShowModal(false);
					}}
				/>
			) : null}
			<div
				className="product-card"
				style={{ cursor: 'pointer' }}
				onClick={() => {
					setShowModal(true);
				}}
			>
				<div className="row" style={{ alignItems: 'center' }}>
					<img src={test_img} height="200px" />
				</div>

				<div className="row" style={{ padding: '10px', backgroundColor: '#f1eff1' }}>
					<label>{data.name}</label>
					<p>{data.description}</p>
					<label> Available Qty: {data.qty.join() + ' liters'}</label>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
