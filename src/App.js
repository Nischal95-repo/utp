import { Route, withRouter } from 'react-router-dom';
import ProductPage from './Pages/ProductPage';
import HomePage from './Pages/HomePage';
import ContactUs from './Pages/ContactPage';
import ContactPage from './Pages/ContactPage';

function App() {
	console.log('app.js');
	return (
		<>
			<Route path="/product-list" component={ProductPage} />
			<Route path="/home" component={HomePage} />
			<Route path="/contact-us" component={ContactPage} />
			<Route exact path="/" component={HomePage} />
		</>
	);
}

export default withRouter(App);
