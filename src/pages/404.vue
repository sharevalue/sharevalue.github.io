<script setup lang="ts">
</script>

<template>
  <div class="title text-5xl font-bold text-primary-600 letter-spacing m-3">
    다시 돌아가주세요.
  </div>
  <div class="description text-3xl text-secondary-800 m-3">
    요청하신 페이지를 찾을 수 없습니다 :(
  </div>
</template>

<style scoped>
.title,
.description {
  letter-spacing: -.5px;
  word-break: keep-all;
}
</style>

<route lang="yaml">
meta:
  layout: 404
</route>
