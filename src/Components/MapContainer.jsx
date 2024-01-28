import React from 'react';
import GoogleMapReact from 'google-map-react';
import locationMaker from '../Assets/SVG/location-marker.svg';

// const Marker = ({ text }) => <div style={{ fontSize: '20px', color: 'red' }}>{text}</div>;

const Marker = (props) => {
	console.log(props.$hover);
	return (
		<>
			<img src={locationMaker} />
			{props.$hover && (
				<div className="info-window">
					<h5>{props.title}</h5>
					<p>{props.address}</p>
				</div>
			)}
		</>
	);
};
function MapContainer() {
	return (
		<div style={{ height: '35vh', width: '100%' }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: 'AIzaSyBjlwvfiPfWzuDQLsGrGcxYAiUxFDsyUqA' }}
				// defaultCenter={{ lat: 12.955620971719103, lng: 77.56396856564696 }}
				defaultCenter={{ lat: 12.956527562373685, lng: 77.57030211278646 }}
				defaultZoom={12}
			>
				<Marker
					lat={12.945240857960632}
					lng={77.57030211278646}
					title="Cleanmart"
					address="No 92, EAT St, Gandhi Bazaar, Basavanagudi, Bengaluru, Karnataka 560004"
				/>
				<Marker
					lat={12.956527562373685}
					lng={77.56125338465536}
					title="Unitech Products"
					address="185/B,(Ground floor), 5th Main,
								
								Devanathachar Street, Chamrajpet,
								 Bengaluru, Karnataka - 560018"
				/>
			</GoogleMapReact>
		</div>
	);
}

export default MapContainer;
