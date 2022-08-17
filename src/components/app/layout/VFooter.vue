<script setup lang="ts">
</script>

<template>
  <!-- footer component -->
  <footer
      class="md:rtl:pr-20 duration-700 w-full right-0 items-center justify-center md:justify-between  md:space-y-none md:h-16 md:flex-row">
    <div class="bg-secondary-500 text-white">
      <div class="default-container footer-company">
        <div class="flex flex-row justify-between mb-6">
          <div class="text-sm	md:text-lg footer-company-name">(주) 쉐어밸류</div>
          <div class="footer-company-sns">
            <a href="https://blog.naver.com/sharevaluecorp"
               class="inline-block px-2">
              <img src="/image/logo/dark_blog.webp"
                   width="35"
                   height="32"
                   class="pt-0.2"
                   alt="blog"/>
            </a>
            <a href="https://www.youtube.com/channel/UC7oNi16xzMz4b043bucT5ww"
               class="inline-block px-2">
              <img src="/image/logo/dark_youtube.webp"
                   width="35"
                   height="25"
                   class="pt-0.5 pb-1.5"
                   alt="youtube"/>
            </a>
            <a href="https://www.facebook.com/sharevaluecorp/"
               class="inline-block px-2">
              <img src="/image/logo/dark_facebook.webp"
                   width="35"
                   height="35"
                   alt="facebook"/>
            </a>
          </div>
        </div>
        <div class="text-xs	md:text-base footer-company-desc text-left">
          <div>
            <div class="block md:inline-block">사업자등록번호 : 750-86-00899</div>
            <span class="hidden md:inline"> | </span>
            <div class="block md:inline-block">통신판매업번호 : 제2020-서울중구-1067호</div>
          </div>
          <div>
            <div class="block md:inline-block">주소 : 서울시 중구 무교로15, 남강건설회관빌딩 1805호</div>
            <span class="hidden md:inline"> | </span>
            <div class="block md:inline-block">대표 : 조미숙</div>
          </div>
          <div class="text-xs md:text-sm copyright">Copyright 2020 Sharevalue Co., Ltd. All rights reserved</div>
        </div>
      </div>
    </div>
    <div class="bg-white">
      <div class="flex-wrap md:flex-nowrap text-xs md:text-sm tracking-tighter md:tracking-tight flex flex-row md:justify-between items-center text-center footer-record">
        <div class="items-center text-center mb-5 md:mb-0">
          <img src="/image/logo/klbo.webp"
               width="119"
               height="30"
               alt="로고"
               class="inline-block"/>
          <div>기술벤처인증기업</div>
        </div>
        <div class="items-center text-center mb-5 md:mb-0">
          <img src="/image/logo/koita.webp"
               width="51"
               height="30"
               alt="로고"
               class="inline-block"/>
          <div>기업부설연구소 인증기업</div>
        </div>
        <div class="items-center text-center">
          <img src="/image/logo/startup.webp"
               width="29"
               height="30"
               alt="로고"
               class="inline-block"/>
          <div>초기관광벤처기업</div>
        </div>
        <div class="items-center text-center">
          <img src="/image/logo/iata.webp"
               width="47"
               height="30"
               alt="로고"
               class="inline-block"/>
          <div>International Air Transport Association</div>
        </div>
      </div>
    </div>
  </footer>

</template>
<style scoped>
.footer-company {
  padding:40px 30px 45px;
  box-sizing: border-box;
  color: inherit;
  background-color: inherit;
}

.footer-company .footer-company-name {
  color: #98a2ac;
  font-weight: bold;
  line-height: 35px;
}

.footer-company .footer-company-sns {
  color: #98a2ac;
  height: 35px !important;
}

.footer-company .footer-company-desc {
  color: #5b6e81;
  line-height: 1.75;
  letter-spacing: -.4px;
  word-break: keep-all;
}

.footer-company .footer-company-desc .copyright {
  letter-spacing: -.35px;
  line-height: 1.75;
}

.footer-record {
  color: #5b6e81;
  max-width: 900px;
  margin: 0 auto;
  padding: 24px 0;
  line-height: 2;
}

.footer-record >div {
  flex: 50%;
  width: 50%;
  white-space: nowrap;
}

.footer-record >div div {
  /*float: unset;*/
}
</style>