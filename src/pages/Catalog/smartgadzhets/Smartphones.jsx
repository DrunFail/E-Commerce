import { lazy, Suspense } from "react";

const SmartphoneList = lazy(() => import('../../../components/Catalog/smartphoneList/SmartphoneList'))

export default function Smartphones() {
    return (
        <Suspense>
            <SmartphoneList/>
            </Suspense>
        );
}