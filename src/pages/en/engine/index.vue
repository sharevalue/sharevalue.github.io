
<script setup lang="ts">
import {IProductSpec} from "~/types";

useHead({
  title: 'Booking Engine | Travel Booking & Sales Platform | ShareValue',

  meta: [
    {
      name: 'description',
      content: 'A travel booking engine for flights, hotels, golf and tours. ShareValue supports B2C, B2B, corporate travel and customized travel sales with flexible system integration.'
    },
    {
      property: 'og:title',
      content: 'Booking Engine | Travel Booking & Sales Platform | ShareValue'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://www.sharevaluecorp.com/en/engine'
    },
    {
      property: 'og:image',
      content: 'https://www.sharevaluecorp.com/image/logo/logo-og.png'
    },
    {
      property: 'og:description',
      content: 'A travel booking engine for flights, hotels, golf and tours, supporting B2C, B2B and corporate travel sales.'
    },
    {
      property: 'og:site_name',
      content: 'ShareValue'
    },
    {
      property: 'og:locale',
      content: 'en_US'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Booking Engine | Travel Booking & Sales Platform | ShareValue'
    },
    {
      name: 'twitter:url',
      content: 'https://www.sharevaluecorp.com/en/engine'
    },
    {
      name: 'twitter:image',
      content: 'https://www.sharevaluecorp.com/image/logo/logo-og.png'
    },
    {
      name: 'twitter:description',
      content: 'A travel booking engine for flights, hotels, golf and tours, supporting B2C, B2B and corporate travel sales.'
    }
  ],

  link: [
    {
      rel: 'canonical',
      href: 'https://www.sharevaluecorp.com/en/engine'
    },
    {
      rel: 'alternate',
      hreflang: 'ko',
      href: 'https://www.sharevaluecorp.com/engine'
    },
    {
      rel: 'alternate',
      hreflang: 'en',
      href: 'https://www.sharevaluecorp.com/en/engine'
    },
    {
      rel: 'alternate',
      hreflang: 'x-default',
      href: 'https://www.sharevaluecorp.com/engine'
    }
  ]
});
const engineSpecList: Array<IProductSpec> = [
  {
    icon: 'ico_engine_airbooking.webp',
    title: 'Flight Booking & Ticketing',
    specList: [
      'Real-Time International Flights',
      'Multi-GDS Integration',
      'Charter & Group Flights',
      'Automated Ticketing',
    ],
  },
  {
    icon: 'ico_engine_hotel.webp',
    title: 'Hotels · Golf · Tours',
    specList: [
      'Hotel Booking',
      'Golf Products',
      'Tours & Activities',
      'Instant Booking & On-Request Booking',
    ],
  },
  {
    icon: 'ico_engine_package.webp',
    title: 'Packages & Tailor-Made Travel',
    specList: [
      'Package Tours',
      'Tailor-Made Travel',
      'Flights · Hotels · Tours',
      'Itinerary & Option Management',
    ],
  },
  {
    icon: 'ico_engine_business.webp',
    title: 'B2C · B2B · Corporate Travel',
    specList: [
      'B2C Travel Services',
      'B2B Agency Services',
      'Corporate Travel Booking',
      'Dedicated Sales Channels',
    ],
  },
  {
    icon: 'ico_engine_channel.webp',
    title: 'Sales & Supply Channels',
    specList: [
      'Web & Mobile',
      'Dedicated Sales Channels',
      'Supplier Operations',
      'Sales & Supply Integration',
    ],
  },
  {
    icon: 'ico_engine_payment.webp',
    title: 'Payment & Automated Ticketing',
    specList: [
      'Card · Cash · Points',
      'Payment Gateway Integration',
      'Automated Ticketing',
      'Cancellation & Refunds',
    ],
  },
  {
    icon: 'ico_engine_integration.webp',
    title: 'Service & System Integration',
    specList: [
      'Website Integration',
      'Login Integration',
      'Kakao Notifications',
      'External Systems & APIs',
    ],
  },
  {
    icon: 'ico_engine_ai.webp',
    title: 'AI & Operations Automation',
    specList: [
      'Request Analysis & Workflow',
      'Booking Automation',
      'Task Automation',
      'AI-Powered Operations',
    ],
  },
];
  

const engineProcessStages = [
  'Service Consultation',
  'Contract & Integration',
  'Service Setup',
  'Back Office Setup',
  'Integration & Launch Test',
  'Admin Training',
  'Service Launch',
];

</script>


<template>
 <!-- ONLY VISIBLE ABOVE 768px-->
<div class="section-1 use-full-bg-image hidden md:block">
  <div class="px-5 default-container">

    <div class="title">
      <div>One Engine for</div>
      <div>Travel Business</div>
    </div>

    <div class="description">
      <div>
        Flights · Hotels · Golf · Tours · Packages · Tailor-Made Travel
      </div>
      <div>
        Connect search, booking, and payment in one booking engine.
      </div>
    </div>

  </div>
</div>
  <!-- ONLY VISIBLE UNDER 768px-->
<div class="mobile-section-1 use-full-bg-image md:hidden">
  <div class="px-5 default-container">

    <div class="title">
      <div>One Engine for</div>
      <div>Travel Business</div>
    </div>

    <div class="description">
      <div>Flights · Hotels · Golf · Tours</div>
      <div>Packages · Tailor-Made Travel</div>

      <div class="sub-description">
        Connect search, booking, and payment<br>
        in one booking engine.
      </div>
    </div>

  </div>
</div>
  <!-- Section 2 -->
<!-- Section 2 -->
<div class="py-11 bg-secondary-500 c-white md:py-8 section-2">
  <div class="px-5 text-center md:px-25 lg:px-15 default-container">
    <div class="title">
      <span class="inline-block">
        B2C&nbsp;&nbsp;·&nbsp;&nbsp;B2B&nbsp;&nbsp;·&nbsp;&nbsp;Corporate Travel&nbsp;&nbsp;·&nbsp;&nbsp;Tailor-Made Travel&nbsp;&nbsp;·&nbsp;&nbsp;All Sales Channels in One Engine
      </span>
    </div>
  </div>
</div>
  <div class="bg-white py-16.5 md:px-10 lg:px-5 lg:py-37.5">
    <div class="default-container engine-spec-list">
      <ProductSpec v-for="(engineSpec, index) in engineSpecList"
             :key="`engine_spec_${index}`"
             :icon="engineSpec.icon">
  <template v-slot:title>{{ engineSpec.title }}</template>
  <template v-slot:list>
    <li v-for="(spec, specIndex) in engineSpec.specList"
        :key="`engine_spec_${index}_${specIndex}`">{{ spec }}</li>
  </template>
</ProductSpec>
    </div>
  </div>
  <!-- Section 4: Price Table 숨김 시작
  <div class="section-4">
    <div class="md:px-5 default-container">
      <div class="mb-8.5 md:mb-17.5 price-table-title">사용료</div>
      <table class="price-table">
        <thead>
        <tr>
          <th colspan="3"></th>
          <th colspan="2">홈페이지 미연동</th>
          <th colspan="2">홈페이지 연동</th>
          <th colspan="2">타 판매<br class="md:hidden"/>채널 연동</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th colspan="3">유지 관리</th>
          <td colspan="2"><div class="icon-checked"/></td>
          <td rowspan="7"
              colspan="2">문의</td>
          <td rowspan="7"
              colspan="2">문의</td>
        </tr>
        <tr>
          <th colspan="3">카카오 알림톡</th>
          <td colspan="2"><div class="icon-checked"/></td>
        </tr>
        <tr>
          <th colspan="3">웹 호스팅</th>
          <td colspan="2">문의</td>
        </tr>
        <tr>
          <th colspan="3">PG 카드결제 연동</th>
          <td colspan="2">문의</td>
        </tr>
        <tr>
          <th colspan="3">PG 가상계좌 연동</th>
          <td colspan="2">문의</td>
        </tr>
        <tr>
          <th colspan="3">고객용 다국어 지원</th>
          <td colspan="2">문의</td>
        </tr>
        <tr>
          <th colspan="3">월 사용 수수료</th>
          <td colspan="2">문의</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
Section 4: Price Table 숨김 끝 --> 
 <!-- Service Process -->
<div id="engine_process"
     class="engine-process">
  <div class="px-5 default-container">
    <div class="mb-8 md:mb-17.5 engine-process-title">
  Service Setup &amp; Launch Process
</div>

    <div id="engine_process_content"
         class="engine-process-content">
      <div class="flex flex-col justify-center lg:flex-row lg:justify-evenly">
        <div v-for="(stage, index) in engineProcessStages"
             :key="`engine_process_${index}`"
             class="flex flex-row my-10 lg:block lg:my-0">

          <div class="engine-process-stage">
            {{ `0${index + 1}` }}
          </div>

          <div class="rotate-270 -scale-x-100 engine-process-stage-bar">
            <span class="dot"/>
          </div>

          <div class="engine-process-stage-title"
               v-html="stage"/>
        </div>
      </div>

      <div class="hidden lg:block engine-process-vertical-line"/>
      <div class="lg:hidden engine-process-horizontal-line"/>
    </div>
  </div>
</div>
<div class="engine-faq">
  <div class="default-container">
    <div class="support-title mb-8 md:mb-17.5">
  Frequently Asked Questions
</div>
<Faq faq-type="SBP"/>
  </div>
</div>
 
</template>

<style scoped>

.section-1,
.mobile-section-1 {
  @apply c-white;

  background-color: #154999;
  position: relative;
  text-align: left;
}

.section-1 {
  height: calc(100vh - 90px - 100px);
  background-image: url(/image/common/engine.webp);
}

.section-1 .title,
.mobile-section-1 .title {
  font-family: Raleway;
  position: absolute;
  font-weight: 800;
  letter-spacing: normal;
  animation: fadein 1s;
  -moz-animation: fadein 1s; /* Firefox */
  -webkit-animation: fadein 1s; /* Safari and Chrome */
  -o-animation: fadein 1s; /* Opera */
}

.section-1 .description,
.mobile-section-1 .description {
  position: absolute;
  letter-spacing: -0.45px;
  text-align: left;

  animation: fadein 2.5s;
  -moz-animation: fadein 2.5s; /* Firefox */
  -webkit-animation: fadein 2.5s; /* Safari and Chrome */
  -o-animation: fadein 2.5s; /* Opera */
}
.mobile-section-1 .title,
.mobile-section-1 .description {
  left: 0;
  width: 100%;
  text-align: center;
}

.section-1 .description .sub-description,
.mobile-section-1 .description .sub-description {
}

.section-1 .description b,
.mobile-section-1 .description b {
  font-weight: 800;
}

.section-1 .title {
  top: calc(55.9% - 240px);
  font-size: 80px;
  line-height: 85px;
}

.section-1 .description {
  top: calc(73.6% - 84px);
  font-size: 18px;
  line-height: 33px;
}

.section-1 .description .sub-description {
  font-size: 16px;
  letter-spacing: -0.4px;
}

.mobile-section-1 {
  height: calc(100vh - 65px);
  background-image: url(/image/common/engine_mobile.webp);
}

.mobile-section-1 .title {
  @apply text-5xl;
  top: calc(30.3% - 144px);
}

.mobile-section-1 .description {
  top: calc(39% - 65px);
  font-size: 16px;
  line-height: 24px;
}

.mobile-section-1 .description .sub-description {
  @apply mt-1;

  font-size: 12px;
   line-height: 18px;
}

.section-2 .title {
  @apply text-sm inline md:text-lg md:block lg:text-xl;
  line-height: 1.66;
  letter-spacing: -0.53px;
  word-break: keep-all;
}

.section-4 {
  @apply py-25 md:py-50;
  background-color: #f8f9fb;
}

.section-4 .price-table tbody th {
  @apply text-xs md:text-lg;

  word-break: keep-all;
}

.engine-spec-list {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.engine-spec-list > div {
  @apply w-49/100 lg:w-24/100;
}


.engine-faq {
  @apply py-16 md:px-5 md:py-37.5;
  background-color: #ffffff;
}
</style>
<style scoped>
@import '/src/styles/engine.css';
</style>
