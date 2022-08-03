<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main p="x4 y10" class="flex flex-col items-center justify-center h-full ">
    <RouterView />
    <div class="flex justify-center mt-4 text-center">
      <VBtn variant="primary"
            rounded="lg"
            @click="router.back()">돌아가기</VBtn>
    </div>
  </main>
</template>
