import React from 'react';
import ReactModal from 'react-awesome-modal';
import Close from '../../Assets/SVG/close.svg';
function Modal(props) {
	return (
		<div>
			<ReactModal
				visible={props.visible}
				width="700"
				height="400"
				effect="fadeInUp"
				onClickAway={props.closeModal}
			>
				<div className="product-modal">
					<div className="row">
						<div className="col-md-10">
							<h3 className="text-center">{props.data.name}</h3>{' '}
						</div>

						<div className="col-md-2">
							<img src={Close} onClick={props.closeModal} />
						</div>
					</div>
					<p>Some Contents</p>
				</div>
			</ReactModal>
		</div>
	);
}

export default Modal;
