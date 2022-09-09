import { Link } from 'react-router-dom';
import styles from './SignInButton.module.scss';

export default function SignInButton({text }) {
    return (
        <Link className={styles.button} to='login'>{text }</Link>
    );
}