import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import ViewContent from './Pages/ViewContent';
import Starships from './Pages/Starships';
import Characters from './Pages/Characters';
import Planets from './Pages/Planets';

export default [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Content',
    path: '/:type/:id',
    component: ViewContent
  },
  {
    name: 'Starships',
    path: '/starships',
    component: Starships
  },
  {
    name: 'Characters',
    path: '/characters',
    component: Characters
  },
  {
    name: 'Planets',
    path: '/planets',
    component: Planets
  },
  {
    name: 'Not Found',
    path: '*',
    component: () => NotFound
  }
];
