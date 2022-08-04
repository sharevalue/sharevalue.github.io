
<script setup lang="ts">
import {IProductSpec} from "~/types";

const engineSpecList: Array<IProductSpec> = [{
  icon: 'ico_black_tickets.webp',
  title: '모든 항공권',
  specList: [
    '일반 항공권',
    '출장 항공권',
    '저비용 항공사 전용 항공권',
    '전세기 항공권',
    '단체좌석(블록) 항공권',
  ],
}, {
  icon: 'ico_black_passenger.webp',
  title: '모든 고객',
  specList: [
    '개인, 일반 고객',
    '출장 고객',
    '기업체 고객',
    '여행사 고객',
  ],
}, {
  icon: 'ico_black_media.webp',
  title: '모든 디바이스',
  specList: [
    'PC',
    '모바일',
    '테블릿',
    '모든 기기 사용',
  ],
}, {
  icon: 'ico_black_checklist.webp',
  title: '기업고객 전용(BTMS)',
  specList: [
    '기업체 관리자 전용페이지',
    '예약목록, 정산 목록, 통계항공 비용 승인 프로세스',
    '임직원 관리',
    '기업체 별 전용 사이트',
  ],
}, {
  icon: 'ico_black_management.webp',
  title: '자율 운영 기능',
  specList: [
    '거래처 별 운임 설정',
    '사이트 별 운임 설정',
    '배너 설정',
    '팝업 설정',
    '공지사항 설정',
    '자주하는 질문 설정',
  ],
}, {
  icon: 'ico_black_sales.webp',
  title: '판매・수익 관리',
  specList: [
    '현금 입출금 및 미수 관리',
    '판매 수익 관리',
    '할인 & 할증 관리',
    '서비스 수수료 관리',
    '발권 & 환불 DSR',
    'BSP 정산 금액 관리',
  ],
}, {
  icon: 'ico_black_payment.webp',
  title: '특화 기능',
  specList: [
    'PG 카드인증 결제 모듈 연동',
    'PG 가상계좌 입금화 모듈 연동',
    '카카오 알림톡 연동',
    '로그인 연동',
    '다국어 고객용 사이트'
  ],
}, {
  icon: 'ico_black_worker-with-gear.webp',
  title: '운영 대행',
  specList: ['사이트 운영 대행', '예약 관리', '고객 문의 관리', '고객 요청 관리', '발권 서비스'],
}];
</script>

<template>
  <div></div>
  <div></div>
  <div class="px-5 py-37.5">
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
  <div></div>
  <div class="engine-faq">
    <div class="default-container">
      <div class="support-title mb-17.5">자주하는 질문</div>
      <Faq/>
    </div>
  </div>
</template>

<style scoped>
.engine-spec-list {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}

.engine-faq {
  padding: 150px 20px;
  background-color: #ffffff;
}


</style>
