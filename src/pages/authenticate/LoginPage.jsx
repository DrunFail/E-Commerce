import { lazy, Suspense }  from 'react';

const Login = lazy(() => import('../../components/authenticate/login/Login'))

export default function LoginPage() {
   
    return (
        <Suspense>
            <Login />
        </Suspense>
    );
}