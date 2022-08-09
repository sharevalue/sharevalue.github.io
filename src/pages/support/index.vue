

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
  <div class="support-cs bg-primary-500 c-white">
    <div class="default-container flex flex-row justify-between">
      <div class="support-cs-number">
        <img src="/image/icon/ico_white_cs.webp"
             width="70"
             height="42"
             alt="cs"
             class="inline-block mr-6"/>
        <a href="tel:02-364-5400"
           class="inline-block">02.364.5400</a>
      </div>
      <div class="support-cs-info">
        <span>상담 가능 시간 | 평일 </span>
        <span class="hours-of-operation">9:30 ~ 18:30</span>
      </div>
    </div>
  </div>
  <!--공지사항-->
  <div class="support-notice">
    <div class="default-container">
      <div class="support-title mb-17.5">공지사항</div>
      <Notice/>
    </div>
  </div>
  <!--자주하는 질문-->
  <div class="support-faq">
    <div class="default-container">
      <div class="support-title mb-17.5">자주하는 질문</div>
      <Faq/>
    </div>
  </div>
  <!--CONTACT US-->
  <div id="contact_us"
       class="shadow-md">
    <div class="support-title normal-letter-spacing mb-17.5">CONTACT US</div>
    <div class="flex flex-row justify-between">
      <div class="contact-us-map">
        <div>
          <div id="map" class="map"/>
        </div>
      </div>
      <div class="contact-us-address">
        <div>
          <div class="address-title">오시는 길</div>
          <div class="address-content flex flex-col">
            <div class="flex flex-low items-center pl-0.5 ">
              <img src="/image/icon/ico_white_map.webp"
                   width="25"
                   height="30"
                   alt="address"
                   class="address-icon"/>
              <div class="mr-7">Address</div>
              <div>서울특별시 중구 무교로 15, 남강건설회관빌딩 1805호</div>
            </div>
            <div class="flex flex-low items-center">
              <img src="/image/icon/ico_white_mail.webp"
                   width="30"
                   height="23"
                   alt="email"
                   class="email-icon"/>
              <div class="mr-10">E-Mail</div>
              <div>sales@sharevaluecorp.com</div>
            </div>
          </div>
          <div class="address-caution">* 궁금한 점이 있으면 언제든 연락해주세요.</div>
        </div>
      </div>
    </div>
  </div>
  <!--INQUIRY-->
  <div id="inquiry">
    <Inquiry/>
  </div>
</template>

<style scoped>
.support-cs {
  padding: 32px 30px;
  box-sizing: border-box;
  font-weight: 300;
}

.support-cs .support-cs-number {
  font-weight: 300;
  font-size: 48px;
  line-height: 65px;
}

.support-cs .support-cs-info {
  font-size: 18px;
  line-height: 65px;
  letter-spacing: -0.45px;
}
.support-cs .support-cs-info .hours-of-operation {
  font-weight: 300;
  letter-spacing: 0.45px;
}

.support-notice,
.support-faq {
  padding: 150px 20px;
  box-shadow: 0 0 9px 1px rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
}

#contact_us {
  padding-top: 150px;
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
  padding: 50px 60px 50px 0;
}

#contact_us .contact-us-address >div {
  padding: 89px 0 19px 60px;
}

.map {
  width: 32.23vw;
  max-width: 659px;
  min-width: 500px;
  height: 300px;
  display: block;
  position: relative;
}

.address-title {
  margin-bottom: 46px;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -.6px;
  @apply c-primary-500  font-bold;

}

.address-content {
  margin-bottom: 60px;
}

.address-content >div {
  margin-bottom: 24px;
  word-break: keep-all;
}

.address-content >div >div {
  letter-spacing: -0.45px;
  font-size: 18px;
  line-height: 36px;
}

.address-content .address-icon {
  margin-right: 31.5px;
  height: 30px;
}

.address-content .email-icon {
  margin-right: 30px;
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
  padding: 150px 0;
  background-color: #e0e8f3;
}
</style>
