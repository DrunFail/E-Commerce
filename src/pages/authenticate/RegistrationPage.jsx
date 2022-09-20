import { lazy, Suspense } from 'react';

const Registration = lazy(() => import('../../components/authenticate/registration/Registration'))


export default function RegistrationPage() {
    return (

        <Suspense>
            <Registration />
        </Suspense>);
}