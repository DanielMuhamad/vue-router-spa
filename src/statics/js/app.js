import Sidebar from "./views/base/Sidebar.vue";
import Navbar from "./views/base/Navbar.vue";
import MainHeader from "./views/base/MainHeader.vue";
import Footer from './views/base/Footer.vue'

export default {
    components: {
        "vue-sidebar": Sidebar,
        "vue-navbar": Navbar,
        "vue-main-header": MainHeader,
        "vue-footer": Footer
    },
    name: "App"
};