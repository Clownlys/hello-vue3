<template>
  <div class="content">
    <img alt="Vue logo" :src="logo" />
    <p>This is a children router.</p>
    <router-link to="/">Go Back</router-link>
    <button @click="backToHome">返回首页</button>
  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/img/logo.png';

import ToggleTheme from '@/components/ToggleTheme.vue';

import HelloWorld from '@/components/HelloWorld.vue';

import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
console.log(route.name);
console.log(route.path);
const parent = route.matched[route.matched.length - 2];
console.log('parentRoute', parent);
const backToHome = () => {
  router.push({
    name: 'home',
  });
};

console.log(ToggleTheme, HelloWorld);
console.log(logo);
</script>

<style lang="less" scoped>
.content {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--c-text);
  margin-top: calc(var(--w-space) * 3);
  a {
    color: #42b983;
    background-color: #42b983;
  }
}
</style>
