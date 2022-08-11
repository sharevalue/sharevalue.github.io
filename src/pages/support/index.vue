

<script setup lang="ts">
import { onMounted } from 'vue'

function initNaverMap() {
  try {
    //  @ts-ignore
    const map = new naver.maps.Map('map');
    //  @ts-ignore
    const point = new naver.maps.Point(126.978976, 37.567271);

    // 검색된 좌표로 지도 이동
    map.setCenter(point);

    const icon = {
      url: '/image/common/map-pin.png',
      //  @ts-ignore
      size: new naver.maps.Size(104, 85),
      //  @ts-ignore
      anchor: new naver.maps.Point(52, 85)
    };

    //  @ts-ignore
    const marker = new naver.maps.Marker({
      position: point,
      map,
      icon,
    });
  } catch (e) {
    console.error('네이버 지도 로딩 실패 : ', e.message);
  }
}

const route = useRoute();

//  DOM 그려진 후 실행
onMounted(() => {
  if (route.query && route.query['targetId']) {
    const { targetId = '' } = route.query;
    const foundElement = document.getElementById(String(targetId));
    foundElement?.scrollIntoView({ behavior: 'smooth' });
  }

  initNaverMap();
});
</script>

<template>
  <div class="px-7.5 py-4 md:py-8 support-cs bg-primary-500 c-white">
    <div class="default-container flex text-center flex-col md:text-left md:flex-row justify-between">
      <div class="support-cs-number">
        <img src="/image/icon/ico_white_cs.webp"
             width="70"
             height="42"
             alt="cs"
             class="inline-block mr-4 md:mr-6"/>
        <a href="tel:02-364-5400"
           class="font-bold text-4xl md:font-light md:text-5xl inline-block">02.364.5400</a>
      </div>
      <div class="text-base leading-8 md:text-lg md:leading-16 support-cs-info">
        <span>상담 가능 시간 | 평일 </span>
        <span class="hours-of-operation">9:30 ~ 18:30</span>
      </div>
    </div>
  </div>
  <!--INQUIRY-->
  <div id="inquiry"
       class="pt-20.5 pb-12.5 md:py-37.5">
    <Inquiry/>
  </div>
  <!--공지사항-->
  <div class="support-notice py-16 md:px-5 md:py-37.5">
    <div class="default-container">
      <div class="support-title mb-8 md:mb-17.5">공지사항</div>
      <Notice/>
    </div>
  </div>
  <!--자주하는 질문-->
  <div class="support-faq py-16 md:px-5 md:py-37.5">
    <div class="default-container">
      <div class="support-title mb-8 md:mb-17.5">자주하는 질문</div>
      <Faq/>
    </div>
  </div>
  <!--CONTACT US-->
  <div id="contact_us"
       class="shadow-md">
    <div class="support-title normal-letter-spacing mb-8 md:mb-17.5">CONTACT US</div>
    <div class="flex flex-col md:flex-row justify-between">
      <div class="contact-us-map">
        <div>
          <div id="map" class="map"/>
        </div>
      </div>
      <div class="contact-us-address">
        <div>
          <div class="address-title">오시는 길</div>
          <div class="address-content flex flex-col text-left">
            <div class="flex flex-col md:flex-row md:items-center pl-0.5 ">
              <div class="flex flex-row">
                <img src="/image/icon/ico_white_map.webp"
                     width="25"
                     height="30"
                     alt="address"
                     class="address-icon"/>
                <div class="text-base md:text-lg">Address</div>
              </div>
              <div class="text-sm ml-10 md:text-lg md:ml-7">서울특별시 중구 무교로 15, 남강건설회관빌딩 1805호</div>
            </div>
            <div class="flex flex-col md:flex-row md:items-center">
              <div class="flex flex-row">
                <img src="/image/icon/ico_white_mail.webp"
                     width="30"
                     height="23"
                     alt="email"
                     class="email-icon"/>
                <div class="text-base md:text-lg">E-Mail</div>
              </div>
              <div class="text-sm ml-10 md:text-lg">sales@sharevaluecorp.com</div>
            </div>
          </div>
          <div class="hidden md:block address-caution">* 궁금한 점이 있으면 언제든 연락해주세요.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.support-cs {
  box-sizing: border-box;
  font-weight: 300;
}

.support-cs .support-cs-number {
  font-weight: 300;
  font-size: 48px;
  line-height: 1.35;
}

.support-cs .support-cs-info {
  letter-spacing: -0.45px;
}
.support-cs .support-cs-info .hours-of-operation {
  font-weight: 300;
  letter-spacing: 0.45px;
}

.support-notice,
.support-faq {
  box-shadow: 0 0 9px 1px rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
}

#contact_us {
  @apply pt-12.5 md:pt-37.5;
  background-color: #f8f9fb;
  box-shadow: 0 0 18px 2px rgba(0, 0, 0, 0.2);
}

#contact_us .support-title {
  font-family: Raleway;
}

#contact_us >div {
  width: 100%;
}

#contact_us .contact-us-map {
  flex: 1;
  @apply bg-primary-500 c-white text-right;
}

#contact_us .contact-us-address {
  flex: 1;
  @apply bg-secondary-500 c-white text-left;
}

#contact_us .contact-us-map >div,
#contact_us .contact-us-address >div {
  display: inline-block;
  max-width: 720px;
  box-sizing: border-box;
}

#contact_us .contact-us-map >div {
  @apply py-6 px-5 md:py-12.5 md:pr-15 md:pl-0;
}

#contact_us .contact-us-address >div {
  @apply py-12.5 px-5 md:pt-22.5 md:pr-0 md:pb-5 md:pl-15;
}

.map {
  @apply w-full h-180px md:w-32.23vw md:min-w-500px md:h-300px;
  /*width: 32.23vw;*/
  max-width: 659px;
  display: block;
  position: relative;
}

.address-title {
  @apply c-primary-500 font-bold mb-8 text-xl md:mb-11.5 md:text-2xl;
  line-height: 30px;
  letter-spacing: -.6px;
}

.address-content {
  @apply md:mb-15;
}

.address-content >div {
  margin-bottom: 24px;
  word-break: keep-all;
}

.address-content >div >div {
  letter-spacing: -0.45px;
  line-height: 2;
}

.address-content .address-icon {
  @apply mr-4 md:mr-8;
  height: 30px;
}

.address-content .email-icon {
  @apply mr-2.5 md:mr-7.5;
  height: 23px;
}

.address-caution {
  font-size: 14px;
  font-weight: 200;
  line-height: 36px;
  letter-spacing: -0.35px;
  text-align: left;
  color: rgba(256, 256, 256 ,0.8);
}

#inquiry {
  background-color: #e0e8f3;
}
</style>
