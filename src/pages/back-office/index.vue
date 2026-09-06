
<script setup lang="ts">
import {IProductSpec} from "~/types";

useHead({
  title: '백오피스 | 여행사 통합 운영·관리 시스템 | 쉐어밸류',

  meta: [
    {
      name: 'description',
      content: '예약, 고객, 여행상품, 공급사, 결제와 정산까지 여행사 운영에 필요한 업무를 하나의 시스템에서 관리합니다. 반복 업무 자동화와 AI 기반 운영 자동화로 확장 가능한 쉐어밸류 백오피스입니다.'
    },
    {
      property: 'og:title',
      content: '백오피스 | 여행사 통합 운영·관리 시스템 | 쉐어밸류'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://www.sharevaluecorp.com/back-office'
    },
    {
      property: 'og:image',
      content: 'https://www.sharevaluecorp.com/image/logo/logo-og.png'
    },
    {
      property: 'og:description',
      content: '예약, 고객, 여행상품, 공급사, 결제와 정산까지 여행사 운영에 필요한 업무를 하나의 시스템에서 통합 관리합니다.'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: '백오피스 | 여행사 통합 운영·관리 시스템 | 쉐어밸류'
    },
    {
      name: 'twitter:url',
      content: 'https://www.sharevaluecorp.com/back-office'
    },
    {
      name: 'twitter:image',
      content: 'https://www.sharevaluecorp.com/image/logo/logo-og.png'
    },
    {
      name: 'twitter:description',
      content: '예약, 고객, 여행상품, 공급사, 결제와 정산까지 여행사 운영에 필요한 업무를 하나의 시스템에서 통합 관리합니다.'
    }
  ],

  link: [
    {
      rel: 'canonical',
      href: 'https://www.sharevaluecorp.com/back-office'
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
    title: '고객 · 회원 관리',
    specList: [
      '고객 · 거래처 통합 관리',
      '개인 · 기업회원 관리',
      '회원 로그인 연동',
      '고객 통합검색',
    ],
  },
  {
    icon: 'ico_ops_booking.webp',
    title: '예약 · 판매 관리',
    specList: [
      '예약 · 변경 · 취소 · 환불',
      '예약 · 판매 통합 관리',
      '고객 요청 · 업무 관리',
      '예약 상세 · 업무 이력',
    ],
  },
  {
    icon: 'ico_ops_inventory.webp',
    title: '여행상품 · 인벤토리',
    specList: [
      '골프 · 숙박 · 투어 상품',
      '재고 · 공급사 · 예약 관리',
      '맞춤형 여행상품 구성',
      '일정표 · 인보이스 생성',
    ],
  },
  {
    icon: 'ico_ops_ticketing.webp',
    title: '항공 예약 · 자동발권',
    specList: [
      '실시간 항공 · PNR 관리',
      '항공권 자동발권',
      'VOID · 환불 관리',
      'TASF · 수수료 설정',
    ],
  },
  {
    icon: 'ico_ops_group_air.webp',
    title: '단체 · 전세기 항공',
    specList: [
      '항공 스케줄 · 인벤토리 관리',
      '거래처별 블록 · 판매 관리',
      '운임 · 규정 · 수수료 설정',
      '탑승자 · 판매 정산 관리',
    ],
  },
  {
    icon: 'ico_ops_bsp.webp',
    title: '항공 BSP · 정산 관리',
    specList: [
      '발권 · 환불 DSR 관리',
      'BSP 빌링 · 증빙 관리',
      'ADM · ACM 관리',
      '발권 · 환불 통계',
    ],
  },
  {
    icon: 'ico_ops_payment.webp',
    title: '결제 · 입출금 관리',
    specList: [
      '카드 · 현금 · 포인트 결제',
      '다양한 PG 결제 연동',
      '결제 · 취소 · 환불 관리',
      '입금 · 출금 · 미수금 관리',
    ],
  },
  {
    icon: 'ico_ops_system.webp',
    title: '운영 · 시스템 연동',
    specList: [
      '사용자 계정 · 권한 관리',
      '알림톡 · 이메일 메시지 관리',
      '외부 시스템 · API 연동',
      'ERP · 회계 시스템 연동',
      '업무 자동화 · AI 연계',
    ],
  },
];
</script>

<template>
 <!-- ONLY VISIBLE ABOVE 768px-->
<div class="section-1 use-full-bg-image hidden md:block">
  <div class="px-5 default-container">
    <div class="title">
      <div>여행 비즈니스</div>
      <div>운영을 하나로</div>
    </div>

    <div class="description">
      <div>
        예약부터 고객, 상품, 공급사, 결제와 정산까지
      </div>
      <div>
        여행사의 복잡한 운영 업무를 하나의 플랫폼에서 관리합니다.
      </div>
    </div>
  </div>
</div>
  <!-- ONLY VISIBLE UNDER 768px-->
<div class="mobile-section-1 use-full-bg-image md:hidden">
  <div class="px-5 default-container">

    <div class="title">
      <div>여행 비즈니스</div>
      <div>운영을 하나로</div>
    </div>

    <div class="description">
      <div>예약부터 고객, 상품, 공급사, 결제와 정산까지</div>
      <div>여행사의 복잡한 운영 업무를 하나의 플랫폼에서 관리합니다.</div>
    </div>

  </div>
</div>
  <!-- Section 2 -->
<div class="py-11 bg-secondary-500 c-white md:py-8 section-2">
  <div class="px-5 text-center md:px-25 lg:px-15 default-container">
    <div class="title">
      <span class="inline-block">
        언제 어디서나&nbsp;&nbsp;·&nbsp;&nbsp;누구나 쉽게&nbsp;&nbsp;·&nbsp;&nbsp;반복 업무는 자동으로&nbsp;&nbsp;·&nbsp;&nbsp;비즈니스는 한눈에
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
      <div class="support-title mb-8 md:mb-17.5">자주하는 질문</div>
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
