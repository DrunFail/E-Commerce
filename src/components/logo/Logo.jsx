import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

export default function Logo() {
    return (
        <Link className={styles.logo} to='/'>Logo</Link>
        );
}