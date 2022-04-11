import { WeatherApp } from './pages/WeatherApp';
import { Favorites } from './pages/Favorites';

const routes = [
    {
        path: '/favorites',
        component: Favorites
    },
    {
        path: '/',
        component: WeatherApp
    }
];

export default routes;