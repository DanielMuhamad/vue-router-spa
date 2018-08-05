<template>
  <div id="app">
    <div class="app-header">
      <vue-navbar class="nav"></vue-navbar>
    </div>

    <div class="app-body">
      <b-row class="justify-content-md-center">
        <b-col cols="2">
          <vue-sidebar></vue-sidebar>
        </b-col>

        <b-col cols="10" class="content-col">
          <vue-main-header></vue-main-header>
          <b-container fluid class="content">
            <div class="route-view">
              <router-view></router-view>
            </div>
          </b-container>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
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
</script>

<style>
.content {
  overflow: hidden;
  margin-top: 50px;
  background-color: #e3e4e5;
}

.app-header {
  position: fixed;
  z-index: 1020;
  width: 100%;
  background-color: #ffffff;
}
</style>
