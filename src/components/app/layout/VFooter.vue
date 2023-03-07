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
               class="inline-block external-link px-2">
              <svg xmlns="http://www.w3.org/2000/svg"
                   width="32"
                   viewBox="0 0 512 512"
                   aria-labelledby="blog_icon_title">
                <desc id="blog_icon_title">blog</desc>
                <!--! Font Awesome Free 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. -->
                <path d="M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32zM96 144c0-26.5-21.5-48-48-48S0 117.5 0 144V368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144H128v96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48V144z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/UC7oNi16xzMz4b043bucT5ww"
               class="inline-block external-link px-2">
              <svg xmlns="http://www.w3.org/2000/svg"
                   width="37.5"
                   viewBox="0 0 576 512">
                <desc id="youtube_icon_title">youtube</desc>
                <!--! Font Awesome Free 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. -->
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/sharevaluecorp/"
               class="inline-block external-link px-2">
              <svg xmlns="http://www.w3.org/2000/svg"
                   width="34"
                   viewBox="0 0 512 512"
                   aria-labelledby="fb_icon_title">
                <desc id="fb_icon_title">facebook</desc>
                <!--! Font Awesome Free 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. -->
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/>
              </svg>
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

.external-link {
  color: #98a2ac !important;
}

.external-link path {
  fill: #98a2ac;
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