<template>
  <div id="app">
    <div id="nav">
      <h1 class="__header">Movies bag</h1>
    </div>
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap");

* {
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
}
body {
  background: #101012;
}
.__header {
  color: #ffffff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
