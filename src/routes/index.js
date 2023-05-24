import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import HeaderOnly from '~/components/Layout/HeaderOnly';

import routeConfig from '~/config/route';

const publicRoutes = [
    {
        path: routeConfig.home,
        component: Home,
    },
    {
        path: routeConfig.following,
        component: Following,
    },
    {
        path: routeConfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: routeConfig.profile,
        component: Home,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
