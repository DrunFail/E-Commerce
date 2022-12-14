import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './BreadCrumbs.module.scss';


const routes = [
    {
        "path": "smartfony-i-gadzhety",
        "name": "Смартфоны и гаджеты"
    },
    {
        "path": "smartfony",
        "name": "Смартфоны"
    },
    {
        "path": "cart",
        "name": "Корзина"
    },
    {
        "path": "compare",
        "name": "Список сравнения"
    },
    {
        "path": "favorite",
        "name": "Избранное"
    },
    {
        "path": "forum",
        "name": "Форум"
    }
]

export default function BreadCrumbs() {
    const [titleById, setTitleById] = useState<string | null | undefined>('');

    useEffect(() => {
        setTitleById(document.getElementById('title')?.textContent)
    }, [])

    const location = useLocation();
    const { pathname } = location;
    const pathnames = pathname.split('/').slice(1);

    const getNameCrumbs = (path: string) => {
        const match = routes.find(route =>
            route.path === path

        )
        return match?.name || titleById || path
    }

    const getLinkCrumbs = (index: number) => {
        let getLink = '';
        for (let i = 0; i <= index; i++) {
            getLink += '/' + pathnames[i]
        }
        return getLink
    }



    return (
        <>
            {pathname === '/' ||
                <div className={styles.breadCrumbs}>
                    <Link
                        to='/'>
                        Главная
                        <span>{`>`}</span>
                    </Link>
                    {pathnames.map((path, index) =>
                        <Link
                            key={index}
                            to={getLinkCrumbs(index)}
                        >
                            {getNameCrumbs(path)}
                            {index !== pathnames.length - 1 && <span>{`>`}</span>}
                        </Link>
                    )}
                </div>}
        </>
    );
}