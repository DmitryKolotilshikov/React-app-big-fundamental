import { AboutPage } from '../Pages/About';
import { HomePage } from '../Pages/Home';
import { LoginPage } from '../Pages/Login';
import { PostPage } from '../Pages/PostPage';
import { PostsPage } from '../Pages/Posts';

export const publicRoutes = [
  { path: '/', component: HomePage, exact: true },
  { path: '/login', component: LoginPage, exact: true },
];
export const privateRoutes = [
  { path: '/', component: HomePage, exact: true },
  { path: '/about', component: AboutPage, exact: true },
  { path: '/posts', component: PostsPage, exact: true },
  { path: '/posts/:id', component: PostPage, exact: true },
];
