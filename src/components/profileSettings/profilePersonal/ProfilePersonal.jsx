import styles from './ProfilePersonal.module.scss';

export default function ProfilePersonal({ elem }) {
    const { data } = elem

    return (
        <>
            {data.map(props =>
                <div className={styles.wrapper}>
                    <p>{props.description}</p>
                    <p> {props.value}</p>
                </div>)}


        </>
    );
}