import React from "react";
import styles from './HeaderStepper.module.scss';


interface HeaderStepperProps {
    links: string[],
    setStepById: (id: number) => void,
    step: number
}



export default function HeaderStepper({links, setStepById, step }: HeaderStepperProps) {
    return (
        <div className={styles.head}>
            {links.slice(0, links.length - 1)
                .map((link, id) =>

                    <p key={id}
                        onClick={() => setStepById(id)}
                        className={styles[id < step ? 'active' : id === step ? 'current' : 'non_active']}>
                        {link}
                    </p>
                )}
        </div>
        );
}