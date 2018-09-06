<template>
  <div class="sidebar">
    <div id="style-nav" class="sidebar-wrapper">
      <div class="list-nav">
        <br>
        <ul>
          <br>
          <br>

          <li id="li">
            <router-link id="rl" to="/dashboard">
              <fa-icon class="faicon" icon="user"></fa-icon> Dashboard
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
  
          <li id="li">
            <router-link id="rl" to="/userform">
              <fa-icon class="faicon" icon="user"></fa-icon> User Form
            </router-link>
          </li>
  
          <li id="li">
            <router-link id="rl" to="/setup">
              <fa-icon class="faicon" icon="cogs"></fa-icon> Setup Lomba
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
  @import url("./../../statics/css/sidebar.css");
</style>
