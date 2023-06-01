import styles from './Home.module.css';
import ProductsInterface from '../../components/productsInterface/productsInterface';

function Home() {
	return (
		<div className={styles.Home}>
			<ProductsInterface />
		</div>
	);
}

export default Home;
