import React, { useState } from 'react';
import styles from './AddTheme.module.scss';


interface AddThemeProps {
    visibleAddThemeForm: any,
    setVisibleAddThemeForm: any
}


export default function AddTheme({ visibleAddThemeForm, setVisibleAddThemeForm }: AddThemeProps) {
    const [theme, setTheme] = useState({
        name: '',
        value: ''
    })
    return (
        <div className={styles.container}>
            <form>
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
                        onClick={() => setVisibleAddThemeForm(!visibleAddThemeForm)}>
                        close
                    </button>

                    <button>
                        Опубликовать
                    </button>
                </div>
            </form>
        </div>

    );
}