import React from 'react';
import styles from './ProfilePersonal.module.scss';


type Data = {
    name: string,
    value: string,
    description: string
}

type PData = {
    id: number,
    name: string,
    data: Data[]
}

interface ProfilePersonalProps {
    elem: PData
}


export default function ProfilePersonal({ elem }:ProfilePersonalProps) {
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