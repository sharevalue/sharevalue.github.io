<script setup lang="ts">
</script>

<template>
<!--  <div class="scroll-sections"></div>-->
  <div class="section-1 use-full-bg-image">
    <div class="px-5 default-container">
      <div class="title">
        <div>부킹 엔진으로 쉽고 빠른 상품 판매와</div>
        <div><b>실시간 전자결제</b>까지 한 번에!</div>
      </div>
      <div class="description">
        <div>개인(B2C) 및 기업체(B2B) 모든 잠재 고객에게 예약, 결제서비스를 제공하고</div>
        <div>판매 정산과 고객관리만 하세요.</div>
      </div>
    </div>
  </div>
  <div class="section-2">
    <div class="px-5 default-container">
      <div class="title">Our Solution = 클라우드서비스 +@ 운영지원</div>
      <div class="description">
        <div>30년 여행사에서의 업무 노하우를 바탕으로 모든 고객의 니즈에 맞는 맞춤 솔루션을 비용과 시간을 절약할 수 있는 클라우드서비스로 제공하며 운영 업무도 지원합니다.</div>
      </div>
      <div class="content flex flex-row justify-evenly items-center">
        <div class="icon-block bg-primary-500 c-white">
          <div class="mb-6">
            <img src="/image/icon/ico_white_computer.webp"
                 width="48"
                 height="50"
                 alt="개발"/>
          </div>
          <div class="icon-title">개발</div>
          <div class="icon-description">Development</div>
        </div>
        <div class="plus-icon">+</div>
        <div class="icon-block bg-primary-500 c-white">
          <div class="mb-6">
            <img src="/image/icon/ico_white_map-home.webp"
                 width="39"
                 height="50"
                 alt="인프라"/>
          </div>
          <div class="icon-title">인프라</div>
          <div class="icon-description">Infrastructure</div>
        </div>
        <div class="plus-icon">+</div>
        <div class="icon-block bg-primary-500 c-white">
          <div class="mb-6">
            <img src="/image/icon/ico_white_engineer.webp"
                 width="53"
                 height="50"
                 alt="전문인력"/>
          </div>
          <div class="icon-title">전문인력</div>
          <div class="icon-description">IT Resource</div>
        </div>
        <div class="at-icon c-secondary-500">@</div>
        <div class="icon-block bg-secondary-500 c-white">
          <div class="mb-6">
            <img src="/image/icon/ico_white_graph.webp"
                 width="66"
                 height="50"
                 alt="운영 지원"/>
          </div>
          <div class="icon-title">운영지원</div>
          <div class="icon-description">Operation</div>
        </div>
      </div>
    </div>
  </div>
  <div class="section-3">
    <div class="px-5 default-container">
      <div class="title">
        <div>(주)쉐어밸류는 다양한 고객 및 파트너와</div>
        <div>여행 디지털 서비스의 가치를 공유합니다.</div>
      </div>
      <div class="content flex justify-between items-center">
        <div class="slogans text-left">
          <div>TO BE AND WE DO</div>
          <div>ANY TIME</div>
          <div>ANY PRODUCTS</div>
          <div>ANY PARTNER</div>
          <div>ANY FUNCTION</div>
          <div>ANY CUSTOMIZATION</div>
          <div>ANY WORK</div>
        </div>
        <div class="roadmap-circle-area flex justify-center items-center">
          <div class="roadmap-circle"></div>
          <div class="roadmap-stage oclock-12">Our<br/>Development</div>
          <div class="roadmap-stage oclock-1-5">B2C<br/>Booking</div>
          <div class="roadmap-stage oclock-3">B2B<br/>Booking</div>
          <div class="roadmap-stage oclock-4-5">BTMS<br/>Booking</div>
          <div class="roadmap-stage oclock-6">
            <div>PG</div>
            <div class="stage-description">(Payment Gateway)</div>
          </div>
          <div class="roadmap-stage oclock-7-5">
            <div>PMS</div>
            <div class="stage-description">(Property Management System)</div>
          </div>
          <div class="roadmap-stage oclock-9">Business<br/>Agent</div>
          <div class="roadmap-stage oclock-10-5">Dynamic<br/>Package<br/>Booking</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll-sections {
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  height: calc(100vh - 90px);
}

.scroll-sections::-webkit-scrollbar {
  display: none;
}

.section-1,
.section-2,
.section-3 {
  scroll-snap-align: start; /* 자식 적용 */
}

.section-1 {
  background-color: #16B6DD;
  background-image: url(/image/common/engine.webp);
  position: relative;
  text-align: left;
}

.section-1 .title {
  position: absolute;
  top: 32.5%;
  color: #fefefe;
  font-size: 45px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -1.13px;

  animation: fadein 1s;
  -moz-animation: fadein 1s; /* Firefox */
  -webkit-animation: fadein 1s; /* Safari and Chrome */
  -o-animation: fadein 1s; /* Opera */

  /*text-shadow: 1px 1px 2px #cccccc;*/
}

.section-1 .title b {
  color: #00264b;
  /*text-shadow: 1px 1px 2px #00264b;*/
}

.section-1 .description {
  position: absolute;
  top: 55.7%;
  font-size: 18px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.83;
  letter-spacing: -0.45px;
  color: #ffffff;

  animation: fadein 2.5s;
  -moz-animation: fadein 2.5s; /* Firefox */
  -webkit-animation: fadein 2.5s; /* Safari and Chrome */
  -o-animation: fadein 2.5s; /* Opera */
}

.section-2 {
  padding: 200px 0;
  background-color: #ffffff;
  box-shadow: 5.4px 8.4px 10px 0 rgba(0, 0, 0, 0.07);
  font-stretch: normal;
  font-style: normal;
  color: #152038;
  text-align: center;
  line-height: 36px;
  scroll-snap-align: start; /* 자식 적용 */
}

.section-2 .title {
  font-size: 45px;
  font-weight: bold;
  letter-spacing: -1.13px;
  margin-bottom: 40px;
}

.section-2 .description {
  font-size: 21px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.53px;
  margin-bottom: 70px;
}

.section-2 .content {
  color: #152038;
  line-height: 33px;
  padding: 0 95px;
}

.section-2 .content .plus-icon {
  font-size: 36px;
  font-weight: normal;
}

.section-2 .content .at-icon {
  font-size: 72px;
  letter-spacing: -1.8px;
  font-weight: normal;
}

.section-2 .icon-block {
  border-radius: 65.9px;
  padding: 30px;
  width: 221px;
  height: 185px;
  text-align: center;
}

.section-2 .icon-block img {
  display: inline-block;
}

.section-2 .icon-block .icon-title {
  font-size: 21px;
  font-weight: bold;
  letter-spacing: -0.53px;
}

.section-2 .icon-block .icon-description {
  font-family: Raleway;
  font-size: 16px;
  font-weight: normal;
}

.section-3 {
  padding: 200px 0;
}

.section-3 .title {
  font-size: 36px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 60px;
  letter-spacing: -0.9px;
  color: #152038;
  margin-bottom: 55px;
}

.section-3 .content {
  flex-wrap: wrap;
}

.section-3 .content .slogans {
  @apply c-secondary-500;

  font-family: Raleway;
  font-size: 36px;
  font-weight: 200;
  font-stretch: normal;
  font-style: italic;
  line-height: 72px;
  letter-spacing: 0.36px;
}

.section-3 .content .roadmap-circle-area {
  width: 800px;
  height: 800px;
  position: relative;
}

.section-3 .content .roadmap-circle {
  width: 600px;
  height: 600px;
  border: 4.5px dashed #ffffff;
  border-radius: 50%;
  background-image: linear-gradient(#fff, #fff), linear-gradient(to top, #063c83, #1eb6ff);
  background-origin: border-box;
  background-clip: content-box, border-box;
}

.section-3 .content .roadmap-stage {
  @apply flex flex-col justify-center items-center;

  font-family: Raleway;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  box-shadow: 0 0 9px 1px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  color: #2e2d33;
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 30px;
  display: flex;
  z-index: 1;
}
.section-3 .content .roadmap-stage .stage-description {
  font-size: 16px;
  line-height: 24px;
}

.section-3 .content .oclock-12 {
  top: 0;
  left: calc(50% - 100px);
  font-weight: bold;
  background-color: #eff3f7;
}

.section-3 .content .oclock-1-5 {
  top: calc(25% - 100px);
  right: calc(25% - 100px);
}

.section-3 .content .oclock-3 {
  top: calc(50% - 100px);
  right: 0;
}

.section-3 .content .oclock-4-5 {
  bottom: calc(25% - 100px);
  right: calc(25% - 100px);
}

.section-3 .content .oclock-6 {
  bottom: 0;
  left: calc(50% - 100px);
}

.section-3 .content .oclock-7-5 {
  bottom: calc(25% - 100px);
  left: calc(25% - 100px);
}

.section-3 .content .oclock-9 {
  top: calc(50% - 100px);
  left: 0;
}

.section-3 .content .oclock-10-5 {
  top: calc(25% - 100px);
  left: calc(25% - 100px);
  background-image: linear-gradient(to top, #063c83, #1eb6ff);
  color: #ffffff;
  font-weight: 300;
}
</style>
