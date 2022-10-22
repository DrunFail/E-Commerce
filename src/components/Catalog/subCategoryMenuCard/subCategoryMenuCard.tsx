import React from "react";
import { Link } from "react-router-dom";
import styles from './SubCategoryMenuCard.module.scss';

interface SubCategoryMenuCardProps {
    cate: {
        title: string,
        img: string,
        link: string
    }
}

export default function SubCategoryMenuCard({cate }: SubCategoryMenuCardProps) {
    return (
        <div className={styles.card}>
            <img
                src={process.env.PUBLIC_URL + `subCategoryImg/${cate.link}.jpg`}
                alt={cate.title }
            />
            <Link
                to={cate.link}>
                {cate.title}
            </Link>
        </div>
        );
}