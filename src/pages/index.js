import {lazy} from 'react';

const Home = lazy(() => import('./home/home.component'))
const NotFound = lazy(() => import('./not-found/not-found.component'))

export {
    Home,
    NotFound
}