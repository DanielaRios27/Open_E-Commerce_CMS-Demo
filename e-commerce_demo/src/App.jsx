import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './assets/components/mainNavBar/navBar';
import Home from './assets/pages/Home/Home';
import Services from './assets/pages/Services/Services';
import Products from './assets/pages/Products/Products';
import UserInfo from './assets/pages/UserInfo/UserInfo';
import FooterElement from './assets/components/footerElement/footerElement';
import About from './assets/pages/About/about';
import './App.css';

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/services" element={<Services />} />
					<Route path="/products" element={<Products />} />
					<Route path="/user" element={<UserInfo />} />
					<Route path='/about' element={<About />} />
				</Routes>
				<FooterElement />
			</BrowserRouter>
		</>
	);
}

export default App;
