import { lazy, Suspense } from "react";

const SmartphoneList = lazy(() => import('../../../components/catalog/smartphoneList/SmartphoneList'))

export default function Smartphones() {
    return (
        <Suspense>
            <SmartphoneList/>
            </Suspense>
        );
}