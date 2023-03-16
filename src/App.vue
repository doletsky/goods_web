<script setup>
import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!--
      <div class="main">
    <header>
    <h1 class="title">Vue Shop</h1>

      <div class="wrapper"> -->
      <!--HelloWorld msg="You did it!" /-->
<!--
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>
  </div>
  -->


  <div class="main">
    <div class="box">
        <div class="header">
            <div class="title">Vue Shop</div>
            <nav>
              <RouterLink to="/new_item">Новый товар</RouterLink>
              <RouterLink to="/">Каталог</RouterLink>
              <!--
                <a href="#">Новый товар</a>
                <a href="#">Каталог</a>
              -->

            </nav>    
        </div>

        <div class="body">                    
          <RouterView />
        </div>
      </div>
  </div>
  

  
</template>

<style scoped>
html {
  font-family: 'Roboto';
  font-style: normal;
}

.main {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  overflow: auto;
  flex-direction: column;
  background: #F5F5F5;
}
.box {
  width: 80%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 33px rgba(190, 190, 190, 0.3);
}

.header {
  width: 100%; 
  margin: 0 auto; 
  position: relative;
  background: #FFFFFF;
}

.title {
  float: left;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #567AA6;
  margin: 10px 40px;
}

nav {
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -9px;
  margin-right: 40px;
}
nav a {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  text-align: right;
  text-decoration-line: underline;
  padding-left: 20px;
  color: #138DFD;
}
.body {
  width: 100%;
  background: #F7F8FB;
  margin: 0 auto;
  position: relative;
  
}
</style>
