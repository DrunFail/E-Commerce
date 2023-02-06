import React, { useState } from 'react';
import styles from './AddTheme.module.scss';


interface AddThemeProps {
    closeAddThemeForm: () => void
}


export default function AddTheme({ closeAddThemeForm}: AddThemeProps) {
    const [theme, setTheme] = useState({
        name: '',
        value: ''
    })
    return (
        <div className={styles.container}>
            <form onSubmit={(event) => event.preventDefault() }>
                <h1>Добавить новую тему</h1>
                <input
                    onChange={(e) => setTheme({ ...theme, name: e.target.value })}
                    value={theme.name}
                    placeholder='Введите вопрос' />
                <textarea
                    onChange={(e) => setTheme({ ...theme, value: e.target.value })}
                    placeholder='Введите подробное описание' />
                <div>

                    <button
                        onClick={closeAddThemeForm}>
                        close
                    </button>

                    <button onClick={closeAddThemeForm }>
                        Опубликовать
                    </button>
                </div>
            </form>
        </div>

    );
}