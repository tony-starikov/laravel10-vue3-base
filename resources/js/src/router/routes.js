import Home from '../pages/Home.vue';
import First from '../pages/First.vue';
import Second from '../pages/Second.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/first',
        component: First
    },
    {
        path: '/second',
        component: Second
    },
]

export default routes;
