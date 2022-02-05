import { WeatherApp } from './pages/WeatherApp';
import { Favorites } from './pages/Favorites';

const routes = [
    {
        path: '/weather',
        component: WeatherApp
    },
    {
        path: '/favorites',
        component: Favorites
    }
];

export default routes;