import styles from './Order.module.scss';


export default function Order() {
    return (
        <div className={styles.container} >
            
            <label htmlFor='name'>имя</label> 
            <input id='name' placeholder="name" />
            <label htmlFor='last_name'>фамилия</label> 
            <input id='last_name'placeholder="last name" />
            <label htmlFor='phone'>телефон</label> 
            <input id='phone'placeholder="phone" />
            <label htmlFor='email'>email</label> 
            <input id='email' placeholder="email" />
            
            
            
        </div>
    );
}