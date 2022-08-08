import smartGadzhet from '../../data/smartGadzhet';
import { Outlet } from 'react-router-dom';

export default function Smart() {
    return (
        <div>
            {smartGadzhet.map((cate, index) => <div key={ index } >
                <a  href={cate.link }>{cate.title }</a>
            </div>)}
            <Outlet/>
            </div>
        );
}