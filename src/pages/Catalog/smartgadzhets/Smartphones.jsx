import { lazy } from "react";

const SmartphoneList = lazy(() => import('../../../components/Catalog/smartphoneList/SmartphoneList'))

export default function Smartphones() {
    return (
        <>
            <SmartphoneList/>
            </>
        );
}