import React from "react";
import styles from './ButtonBlock.module.scss';


interface ButtonBlockProps {
    step: number,
    links: string[],
    prevStep: () => void
}


export default function ButtonBlock({ step, links, prevStep }: ButtonBlockProps) {
    return (
        <div className={styles.buttons}>

            {step === 0 || step === 4 ||
                <button onClick={prevStep}>
                    {links[step - 1]}
                </button>}

            {step === 4 ||
                <button type='submit'
                    
                    className={styles.next} id='btn2' >
                    {links[step + 1]}
                </button>}

        </div>
    );
}