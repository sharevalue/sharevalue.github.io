<template>
  <div class="kakao-channel">
    <a href="http://pf.kakao.com/_QyEss/chat">
      <p>카카오톡 상담하기</p>
      <img src="/image/logo/kakao-logo-yellow.png" alt="kakaotalk" width="60" height="60">
    </a>
  </div>
</template>
<script>
export default {
  name: "kakao-chatting"
}
</script>
<style scoped>
.kakao-channel{
  z-index:1;
  position:fixed;
  top:90%; right:2%;
  height:60px;
  background-color: #FFFFFF;
  border-radius: 30px;box-shadow:0px 5px 20px rgba(73, 73, 73, 0.4);
  transition-duration:0.3s;
}
.kakao-channel>a{
  display:flex;
  align-items:center;
}
.kakao-channel>a>img{
  background-color: #F7E600;
  background-image: url(/image/logo/kakao-channel-logo-yellow.png);
  background-size: contain;border-radius:30px;
  border-radius: 30px;box-shadow:0px 0px 5px rgba(73, 73, 73, 0.6);
}
.kakao-channel>a>p{
  white-space: nowrap;
  font-size: 18px;
  font-weight: 700;
  padding: 0 10px;
  color: #3A1D1D;
}
.kakao-channel:hover{transform: scale(1.03);}
</style>
