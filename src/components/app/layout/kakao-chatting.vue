<template>
  <div v-if="!isEnglish" class="kakao-channel">
    <a href="http://pf.kakao.com/_QyEss/chat">
      <p>서비스 문의</p>
      <img src="/image/logo/kakao-logo-yellow.png" alt="kakaotalk" width="48" height="48">
    </a>
  </div>
</template>
<script setup>
import { computed } from 'vue'

const route = useRoute()

const isEnglish = computed(() =>
  route.path === '/en' || route.path.startsWith('/en/')
)
</script>
<style scoped>
.kakao-channel{
  z-index:1;
  position:fixed;
  top:90%; right:2%;
  height:48px;
  background-color: #FFFFFF;
  border-radius: 24px;box-shadow:0px 5px 20px rgba(73, 73, 73, 0.4);
  transition-duration:0.3s;
}
.kakao-channel>a{
  display:flex;
  align-items:center;
}
.kakao-channel > a > img {
  width: 48px;
  height: 48px;
  background-color: #F7E600;
  background-image: url(/image/logo/kakao-channel-logo-yellow.png);
  background-size: contain;
  border-radius: 24px;
  box-shadow: 0px 0px 5px rgba(73, 73, 73, 0.6);
}
.kakao-channel>a>p{
  white-space: nowrap;
  font-size: 18px;
  font-weight: 700;
  padding: 0 0.5em 0 0.95em;
  color: #152038;
}
.kakao-channel:hover{transform: scale(1.03);}
</style>
