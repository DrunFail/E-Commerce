import styles from './ForumThemeList.module.scss';
import ForumThemeCard from '../forumThemeCard/ForumThemeCard';
import forum from '../../../data/forum.json';

export default function ForumThemeList() {
    return (
        <div className={styles.container }>
            <h1>Форум</h1>
            {forum.map(elem => 
                <ForumThemeCard key={elem.id} elem={elem }/>)
                
}
        </div>
        );
}