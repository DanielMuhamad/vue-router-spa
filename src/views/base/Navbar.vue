<template>
  <div class="top-nav">
    <b-navbar class="navbar-top" toggleable="md">
  
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  
      <div class="logo-img">
        <a href="">
          <img src="./../../assets/at.png" alt="">
        </a>
      </div>
  
      <b-collapse is-nav id="nav_collapse">
  
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
  
          <b-nav-item-dropdown text="Notifications" right>
            <b-dropdown-item href="#">Notification 1</b-dropdown-item>
            <b-dropdown-item href="#">Notification 1</b-dropdown-item>
            <b-dropdown-item href="#">Notification 1</b-dropdown-item>
            <b-dropdown-item href="#">Notification 1</b-dropdown-item>
          </b-nav-item-dropdown>
  
          <b-nav-item-dropdown text="User" right>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
  
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style>
  @import url("./../../statics/navbar.css");
</style>
