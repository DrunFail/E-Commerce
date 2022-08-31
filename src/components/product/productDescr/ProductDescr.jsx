import styles from './ProductDescr.module.scss';
import huawei from '../../../data/phones/huawei.json';
import ImageBlock from './imageBlock/imageBlock';
import MainBlock from './mainBlock/MainBlock';
import MenuChoices from './menuChoices/MenuChoices';


export default function ProductDescr() {
    const {name,price } = huawei.body
    const { key } = huawei.body.properties
    const { all } = huawei.body.properties
    const { imagesBig } = huawei.body
    
    return (
        <div className={styles.container}>
            <ImageBlock images={imagesBig }/>
            <MainBlock name={name} price={price }/>
            <MenuChoices keys={key} all={all} />
            
        </div>
    );
}