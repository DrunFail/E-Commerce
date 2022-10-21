import React, { useState } from 'react';

interface InputSectionProps {
    propertie: string
}

export default function InputSection({propertie }: InputSectionProps) {
    const [visible, setVisible] = useState(false)

    return (
        <>
            <legend onClick={() => setVisible(!visible)}>{propertie}</legend>
            {visible && <>
                <section>
                    <input type='checkbox' id='1' />
                    <label htmlFor='1'>5.5</label>
                </section>
                <section>
                    <input type='checkbox' id='2' />
                    <label htmlFor='2'>6.5</label>
                </section>
                <section>
                    <input type='checkbox' id='3' />
                    <label htmlFor='3'>4.5</label>
                </section>
            </>}
            
        </>
        );
}