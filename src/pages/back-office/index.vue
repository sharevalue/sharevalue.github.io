
<script setup lang="ts">
import {IProductSpec} from "~/types";

const backOfficeSpecList: Array<IProductSpec> = [{
  icon: 'ico_black_customer.webp',
  title: '고객 관리',
  specList: ['고객 통합 검색', '온라인 개인 회원', '온라인 거래처 회원', '기존 고객 / 거래처'],
}, {
  icon: 'ico_black_gears.webp',
  title: '홈페이지 관리',
  specList: ['로고, 파비콘 설정', '배너 / 팝업 설정', 'SNS 아이콘 노출 설정', '이용약관 템플릿', '공지사항 템플릿', '자주하는 질문 템플릿'],
}, {
  icon: 'ico_black_management-sms.webp',
  title: '운임 및 메시지 설정',
  specList: ['운임 할인, 할증 설정', '발권수수료 설정', '사용자 계정 설정', '카카오 알림톡 템플릿', '메시지 템플릿', '이메일 템플릿'],
}, {
  icon: 'ico_black_laptop-with-customer.webp',
  title: '예약・판매관리',
  specList: ['예약 관리', '판매 / 환불 관리', '변경요청 관리', '고객문의 및 답변', '항공예약 요청 관리'],
}, {
  icon: 'ico_black_schedule.webp',
  title: '전세기 및 단체 항공권 판매',
  specList: ['스케줄 생성 관리', '거래처 블록 생성 관리', '상품별 탑승자 목록 관리', '규정 생성', '수수료 생성', '운임 생성'],
}, {
  icon: 'ico_black_documents.webp',
  title: '항공 BSP 관리',
  specList: ['발권 DSR', '환불 DSR', 'BSP 빌링 관리', 'BSP 증빙 관리', 'ADM / ACM 관리', '발권 통계'],
}, {
  icon: 'ico_black_flight.webp',
  title: '여행상품 판매 관리',
  specList: ['여행 상품 판매 관리', '인보이스, 일정표 발송관리', '여행자 보험 가입 관리', '항공 예약 관리', '정산 관리', '정산 마감 관리'],
}, {
  icon: 'ico_black_commission.webp',
  title: 'PG 결제 및 입출금 관리',
  specList: ['PG 결제 목록', '입 / 출금 관리', '입금 완료 리스트', '출금 완료 리스트', '미수 / 미지급 관리', '지급 커미션 관리'],
}];
</script>

<template>
  <div></div>
  <div></div>
  <div class="px-5 py-37.5">
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
  <div></div>
  <div class="back-office-faq">
    <div class="default-container">
      <div class="support-title mb-17.5">자주하는 질문</div>
      <Faq/>
    </div>
  </div>
</template>

<style scoped>
.back-office-spec-list {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}

.back-office-faq {
  padding: 150px 20px;
  background-color: #ffffff;
}
</style>
