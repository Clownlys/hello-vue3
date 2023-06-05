<template>
  <div class="home">
    <img alt="Vue logo" :src="logo" />
    <ToggleTheme />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <img @click="resetCode" :src="codeUrl" alt="" />
    <button @click.prevent="submit"></button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import logo from '@/assets/img/logo.png';
const codeUrl = ref<string>('http://localhost:3000/user/code');
const resetCode = () => {
  codeUrl.value =
    'http://localhost:3000/user/code?time=' + new Date().getTime();
};
const submit = () => {};
</script>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--c-text);
  padding: calc(var(--w-space) * 3) 0;
  margin: 0 auto;
}
</style>
