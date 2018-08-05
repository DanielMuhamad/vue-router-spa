// Components
import Home from './../components/Home'
import User from './../components/User'
// Views - Components
import Sidebar from './../views/base/Sidebar.vue'
import Navbar from './../views/base/Navbar.vue'
// Views - Pages
import Login from './../views/pages/Login.vue'
import MovieForm from './../views/pages/MovieForm.vue'

const routes = [{
    path: '/',
    component: Home
  },
  {
    path: '/users',
    component: User
  },
  {
    path: '/sidebar',
    component: Sidebar
  },
  {
    path: '/navbar',
    component: Navbar
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/movie',
    component: MovieForm
  }
]

export default routes