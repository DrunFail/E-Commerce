import smartGadzhet from '../../data/smartGadzhet';
import { Outlet } from 'react-router-dom';
import './style.css';

export default function Smart() {
    return (
        <div className='contain'>
            {smartGadzhet.map((cate, index) => <div key={ index } >
                <a  href={cate.link }>{cate.title }</a>
            </div>)}
            <Outlet/>
            </div>
        );
}