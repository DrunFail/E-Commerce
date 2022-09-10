import styles from './Search.module.scss';
import { useState } from 'react';

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