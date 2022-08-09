<script setup lang="ts">
const router = useRouter();

function moveToIndex() {
  if (router) {
    router.push('/');
  } else {
    history.go(-1);
  }
}
</script>

<template>
  <main p="x4 y10" class="block h-100vh">
    <div class="flex flex-col items-center justify-center h-full">
      <RouterView />
      <div class="pb-12 flex justify-center mt-4 text-center">
        <button class="btn bg-primary-500 c-white"
                @click="moveToIndex">
          돌아가기
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.btn {
  width: 150px;
  height: 50px;
}
</style>
