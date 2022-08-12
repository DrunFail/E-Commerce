import styles from './Footer.module.scss';


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.sell}>
                <p className={styles.title}>покупателям</p>
                <a className={styles.link} href='#'>оформление заказа</a>
                <a className={styles.link} href='#'>доставка</a>
                <a className={styles.link} href='#'>услуги</a>
                <a className={styles.link} href='#'>гарантия</a>
                <a className={styles.link} href='#'>акции</a>
                <a className={styles.link} href='#'>кредит и рассрочка</a>
                <a className={styles.link} href='#'>бонусная программа</a>
            </div>
            <div className={styles.buis}>
                <p className={styles.title}>бизнесу</p>
                <a className={styles.link} href='#'>тендеры</a>
                <a className={styles.link} href='#'>поставщикам</a>
                <a className={styles.link} href='#'>электронный документооборот</a>
                <a className={styles.link} href='#'>арендуем помещения</a>
            </div>
            <div className={styles.about}>
                <p className={styles.title}>о компании</p>
                <a className={styles.link} href='#'>про компанию</a>
                <a className={styles.link} href='#'>вакансии</a>
                <a className={styles.link} href='#'>наши новости</a>
            </div>
            <div className={styles.cont} >
            <p className={styles.title}>контакты</p>
                <a className={styles.link} href='#'>обратная связь</a>
                <a className={styles.link} href='#'>фэйс</a>
                <a className={styles.link} href='#'>телега</a>
                <a className={styles.link} href='#'>чат</a>
            </div>
        </footer>
    );
}