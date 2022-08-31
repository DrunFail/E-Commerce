import styles from './MainBlock.module.scss';

export default function MainBlock({ name, price }) {
    return (
        <div className={styles.container}>
            <h1 >{name}</h1>
            <p >{price} P</p>
            <div className={styles.buttons}>
                <button >в корзину</button>
                <button >fav</button>
                <button >srav</button>
            </div>
        </div>
        );

}


