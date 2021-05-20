import React from 'react';
import { productlist } from '../Assets/DataSet/product';
import TitleComponent from './common/TitleComponent';
import ProductCard from './productCard';

function Product() {
	return (
		<div style={{ margin: '110px 50px 50px 50px' }}>
			<TitleComponent title="Product List" />
			<div style={{ display: 'flex', flexWrap: 'wrap', alignContent: 'stretch' }}>
				{productlist.map((data, index) => {
					return (
						<div>
							<ProductCard data={data} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Product;
