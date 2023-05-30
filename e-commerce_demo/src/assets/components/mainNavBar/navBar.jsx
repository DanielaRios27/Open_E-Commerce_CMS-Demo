import { Link } from 'react-router-dom';
import logo from '../../icons/navBarIcons/logo.png';
import user from '../../icons/navBarIcons/user.svg';
import cart from '../../icons/navBarIcons/cart.svg';
import menu from '../../icons/navBarIcons/menu.svg';
import styles from './navBar.module.css';
import { useState } from 'react';

function NavBar() {
	const [isOpen, setIsOpen] = useState(false);
	const handlerMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<header>
			<Link className={styles.logo} to="/">
				<img src={logo} alt="logo" />
				<div className={styles.logoTitle}>X BAKERY</div>
			</Link>
			<nav className={styles.navList}>
				<Link className={styles.navItem} to="/">
					Home
				</Link>
				<Link className={styles.navItem} to="/services">
					Services
				</Link>
				<Link className={styles.navItem} to="/products">
					Products
				</Link>
			</nav>
			<div className={styles.navInfo}>
				<Link to="/user">
					<img src={user} alt="User avatar" />
				</Link>
				<img src={cart} alt="Cart icon" />
			</div>
			<div className={styles.menuMobile}>
				<img src={menu} alt="Menu icon" onClick={handlerMenu} />
				<nav className={isOpen ? styles.menuOpen : styles.menuClose}>
					<Link className={styles.navItem} to="/" onClick={handlerMenu}>
						Home
					</Link>
					<Link className={styles.navItem} to="/services" onClick={handlerMenu}>
						Services
					</Link>
					<Link className={styles.navItem} to="/products" onClick={handlerMenu}>
						Products
					</Link>
					<Link to="/user" onClick={handlerMenu}>
						<img src={user} alt="User avatar" />
					</Link>
					<img src={cart} alt="Cart icon" onClick={handlerMenu}/>
				</nav>
			</div>
		</header>
	);
}

export default NavBar;
