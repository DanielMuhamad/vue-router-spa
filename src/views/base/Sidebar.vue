<template>
  <div class="sidebar">
    <div id="style-nav" class="sidebar-wrapper">
      <div class="list-nav">
        <br>
        <ul>
          <br>
          <br>
          <li id="li">
            <router-link id="rl" to="/">
              <fa-icon class="faicon" icon="coffee"></fa-icon> Home
            </router-link>
          </li>
          <li id="li">
            <router-link id="rl" to="/users">
              <fa-icon class="faicon" icon="user-friends"></fa-icon> User
            </router-link>
          </li>
          <li id="li">
            <router-link id="rl" to="/login">
              <fa-icon class="faicon" icon="user"></fa-icon> Login
            </router-link>
          </li>
  
          <li id="li">
            <router-link id="rl" to="/movie">
              <fa-icon class="faicon" icon="cogs"></fa-icon> Movie
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
  @import url("./../../statics/sidebar.css");
</style>
