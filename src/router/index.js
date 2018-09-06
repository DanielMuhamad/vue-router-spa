// Views - Components
import Sidebar from './../views/base/Sidebar.vue'
import Navbar from './../views/base/Navbar.vue'
// Views - Pages
import Dashboard from './../views/pages/Dashboard.vue'
import Login from './../views/pages/Login.vue'
import MovieForm from './../views/pages/MovieForm.vue'
import UserForm from './../views/pages/UserForm.vue'
import SetupLomba from './../views/pages/SetupLomba.vue'

const routes = [{
    path: '/dashboard',
    component: Dashboard
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
  },
  {
    path: '/userform',
    component: UserForm
  },
  {
    path: '/setup',
    component: SetupLomba
  }
]

export default routes