import React, { useState } from 'react';
import styles from './Search.module.scss';

export default function Search() {
    const [search, setSearch] = useState('');

    return (
        
        <input
            className={styles.search}
            type='search'
            id='search'
            name='search'
            placeholder='search'
            value={search}
            onChange={(e) => setSearch(e.target.value) }
            />
    );
}