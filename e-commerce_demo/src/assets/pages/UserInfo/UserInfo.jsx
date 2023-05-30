import styles from './UserInfo.module.css';

function UserInfo() {
	return (
		<div className={styles.UserInfo}>
			Aquí va la información y los componentes relacionados con el usuario que
			está en la página aunque está información no se va a consultar en una base
			de datos si no que en un formulario propio
		</div>
	);
}

export default UserInfo;
