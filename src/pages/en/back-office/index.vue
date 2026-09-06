
<script setup lang="ts">
import {IProductSpec} from "~/types";

useHead({
  title: 'Back Office | Travel Operations Management Platform | ShareValue',

  meta: [
    {
      name: 'description',
      content: 'Manage reservations, customers, travel inventory, suppliers, payments and settlement in one back-office platform. ShareValue helps travel businesses streamline operations and expand into AI-powered automation.'
    },
    {
      property: 'og:title',
      content: 'Back Office | Travel Operations Management Platform | ShareValue'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://www.sharevaluecorp.com/en/back-office'
    },
    {
      property: 'og:image',
      content: 'https://www.sharevaluecorp.com/image/logo/logo-og.png'
    },
    {
      property: 'og:description',
      content: 'Manage reservations, customers, travel inventory, suppliers, payments and settlement in one integrated back-office platform.'
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
      content: 'Back Office | Travel Operations Management Platform | ShareValue'
    },
    {
      name: 'twitter:url',
      content: 'https://www.sharevaluecorp.com/en/back-office'
    },
    {
      name: 'twitter:image',
      content: 'https://www.sharevaluecorp.com/image/logo/logo-og.png'
    },
    {
      name: 'twitter:description',
      content: 'Manage reservations, customers, travel inventory, suppliers, payments and settlement in one integrated back-office platform.'
    }
  ],

  link: [
    {
      rel: 'canonical',
      href: 'https://www.sharevaluecorp.com/en/back-office'
    },
    {
      rel: 'alternate',
      hreflang: 'ko',
      href: 'https://www.sharevaluecorp.com/back-office'
    },
    {
      rel: 'alternate',
      hreflang: 'en',
      href: 'https://www.sharevaluecorp.com/en/back-office'
    },
    {
      rel: 'alternate',
      hreflang: 'x-default',
      href: 'https://www.sharevaluecorp.com/back-office'
    }
  ]
});
const backOfficeSpecList: Array<IProductSpec> = [
  {
    icon: 'ico_ops_customer.webp',
    title: 'Customer & Member Management',
    specList: [
      'Customer & Client',
      'Individual & Corporate',
      'Login Integration',
      'Customer Search',
    ],
  },
  {
    icon: 'ico_ops_booking.webp',
    title: 'Booking & Sales Management',
    specList: [
      'Changes & Refunds',
      'Booking & Sales',
      'Customer Requests',
      'Booking History',
    ],
  },
  {
    icon: 'ico_ops_inventory.webp',
    title: 'Travel Products & Inventory',
    specList: [
      'Golf · Hotels · Tours',
      'Inventory & Suppliers',
      'Tailor-Made Travel',
      'Itineraries & Invoices',
    ],
  },
  {
    icon: 'ico_ops_ticketing.webp',
    title: 'Flight Booking & Ticketing',
    specList: [
      'Flights & PNR',
      'Automated Ticketing',
      'VOID & Refunds',
      'TASF & Fees',
    ],
  },
  {
    icon: 'ico_ops_group_air.webp',
    title: 'Group & Charter Flights',
    specList: [
      'Schedules & Inventory',
      'Client Blocks & Sales',
      'Fares · Rules · Fees',
      'Passengers & Settlement',
    ],
  },
  {
    icon: 'ico_ops_bsp.webp',
    title: 'BSP & Settlement Management',
    specList: [
      'Ticketing & Refund DSR',
      'BSP Billing & Documents',
      'ADM & ACM Management',
      'Ticketing & Refund Statistics',
    ],
  },
  {
    icon: 'ico_ops_payment.webp',
    title: 'Payment & Cash Management',
    specList: [
      'Card · Cash · Points',
      'Payment Gateways',
      'Cancellations & Refunds',
      'Receipts & Receivables',
    ],
  },
  {
    icon: 'ico_ops_system.webp',
    title: 'Operations & Integration',
    specList: [
      'Users & Permissions',
      'Kakao & Email',
      'External Systems & APIs',
      'ERP & Accounting',
      'Automation & AI',
    ],
  },
];
</script>

<template>
 <!-- ONLY VISIBLE ABOVE 768px-->
<div class="section-1 use-full-bg-image hidden md:block">
  <div class="px-5 default-container">

    <div class="title">
      <div>One Platform for</div>
      <div>Travel Operations</div>
    </div>

    <div class="description">
      <div>
        Bookings · Customers · Products · Suppliers · Payments · Settlement
      </div>
      <div>
        Manage your entire travel operation in one platform.
      </div>
    </div>

  </div>
</div>
  <!-- ONLY VISIBLE UNDER 768px-->
<div class="mobile-section-1 use-full-bg-image md:hidden">
  <div class="px-5 default-container">

    <div class="title">
      <div>One Platform for</div>
      <div>Travel Operations</div>
    </div>

    <div class="description">
      <div>Bookings · Customers · Products · Suppliers</div>
      <div>Payments · Settlement</div>
    </div>

  </div>
</div>
  <!-- Section 2 -->
<div class="py-11 bg-secondary-500 c-white md:py-8 section-2">
  <div class="px-5 text-center md:px-25 lg:px-15 default-container">
    <div class="title">
      <span class="inline-block">
        Anytime, Anywhere&nbsp;&nbsp;·&nbsp;&nbsp;Easy for Everyone&nbsp;&nbsp;·&nbsp;&nbsp;Automate Repetitive Tasks&nbsp;&nbsp;·&nbsp;&nbsp;See Your Business at a Glance
      </span>
    </div>
  </div>
</div>
  <div class="bg-white py-16.5 md:px-10 lg:px-5 lg:py-37.5">
    <div class="default-container back-office-spec-list">
      <ProductSpec v-for="(backOfficeSpec, index) in backOfficeSpecList"
                   :key="`back_office_spec_${index}`"
                   :icon="backOfficeSpec.icon">
        <template v-slot:title>{{ backOfficeSpec.title }}</template>
        <template v-slot:list>
          <li v-for="(spec, specIndex) in backOfficeSpec.specList"
              :key="`back_office_spec_${index}_${specIndex}`">{{ spec }}</li>
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
  <div class="back-office-faq">
    <div class="default-container">
      <div class="support-title mb-8 md:mb-17.5">Frequently Asked Questions</div>
      <Faq faq-type="SBM"/>
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
  background-image: url(/image/common/backoffice.webp);
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
  background-image: url(/image/common/backoffice_mobile.webp);
}

.mobile-section-1 .title {
  @apply text-5xl;
  top: calc(30.3% - 144px);
}

.mobile-section-1 .description {
  top: calc(44% - 65px);
  font-size: 16px;
  line-height: 24px;
}

.mobile-section-1 .description .sub-description {
  @apply mt-6;

  font-size: 12px;
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

.back-office-spec-list {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.back-office-spec-list >div {
  @apply w-49/100 lg:w-24/100;
}

.back-office-faq {
  @apply py-16 md:px-5 md:py-37.5;
  background-color: #ffffff;
}
</style>
