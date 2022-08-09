
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
  specList: ['운임 할인 / 할증 설정', '발권 수수료 설정', '사용자 계정 설정', '카카오 알림톡 템플릿', '메시지 템플릿', '이메일 템플릿'],
}, {
  icon: 'ico_black_laptop-with-customer.webp',
  title: '예약・판매관리',
  specList: ['예약 관리', '판매 / 환불 관리', '변경요청 관리', '고객문의 및 답변', '항공 예약 요청 관리'],
}, {
  icon: 'ico_black_schedule.webp',
  title: '전세기 및 단체항공권',
  specList: ['항공 스케줄 생성', '거래처 블록 생성', '판매 탑승자목록', '판매 정산 목록', '운임/규정 생성', '수수료 생성'],
}, {
  icon: 'ico_black_documents.webp',
  title: '항공 BSP 관리',
  specList: ['발권 DSR', '환불 DSR', 'BSP 빌링 관리', 'BSP 증빙 관리', 'ADM / ACM 관리', '발권 / 환불 통계'],
}, {
  icon: 'ico_black_flight.webp',
  title: '여행상품 판매관리',
  specList: ['여행상품 판매관리', '인보이스, 일정표 발송관리', '여행자 보험 가입 관리', '항공 예약 관리', '정산 / 마감 관리', '정산서 생성 / 출력'],
}, {
  icon: 'ico_black_commission.webp',
  title: 'PG 결제 및 입출금 관리',
  specList: ['PG 결제 목록', '입 / 출금 관리', '입금 완료 리스트', '출금 완료 리스트', '미수 / 미지급 관리', '지급 커미션 관리'],
}];
</script>

<template>
  <div class="section-1 use-full-bg-image c-white">
    <div class="px-5 default-container">
      <div class="title">
        <div>SMART</div>
        <div>BUSINESS</div>
        <div>MANAGEMENT</div>
      </div>
      <div class="description">
        <div>스마트 비엠은 고객의 <b>예약, 결제, 변경요청, 문의</b>에 대한 온라인 업무 처리와</div>
        <div>여행사의 <b>상품 판매 및 미수, 수익, 정산</b>을 한 번에 관리할 수 있는 전문 백오피스입니다.</div>
        <div class="sub-description">* 고객 관리부터 예약, 판매 정산까지 올인원 솔루션으로 언제 어디서나 비대면 업무처리가 가능합니다. </div>
      </div>
    </div>
  </div>
  <div class="section-2 bg-secondary-500 c-white">
    <div class="default-container px-15 flex flex-row items-center">
      <div class="mr-5 title">소중한 고객 정보를 관리하고, 카카오톡 채널의 친구추가 및 알림이 자유롭고, 업무의 생산성 및 효율성 증대로 비용 절감과 업무 리스크 관리가 가능합니다.</div>
      <img src="/image/icon/ico_white_worker.webp"
           width="67"
           height="70"
           alt="icon"/>
    </div>
  </div>
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
  <div class="section-4">
    <div class="px-5 default-container">
      <div class="price-table-title mb-17.5">사용료</div>
      <div>
        <table class="price-table">
          <thead>
          <tr>
            <th></th>
            <th>홈페이지 미연동</th>
            <th>홈페이지 연동</th>
            <th>타 판매채널 연동</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th>유지 관리</th>
            <td><div class="icon-checked"/></td>
            <td rowspan="7">문의</td>
            <td rowspan="7">문의</td>
          </tr>
          <tr>
            <th>카카오 알림톡</th>
            <td><div class="icon-checked"/></td>
          </tr>
          <tr>
            <th>웹 호스팅</th>
            <td>문의</td>
          </tr>
          <tr>
            <th>PG 카드결제 연동</th>
            <td>문의</td>
          </tr>
          <tr>
            <th>PG 가상계좌 결제 연동</th>
            <td>문의</td>
          </tr>
          <tr>
            <th>고객용 다국어 지원</th>
            <td>문의</td>
          </tr>
          <tr>
            <th>월 사용 수수료</th>
            <td>5만 원</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="back-office-faq">
    <div class="default-container">
      <div class="support-title mb-17.5">자주하는 질문</div>
      <Faq faq-type="SBM"/>
    </div>
  </div>
</template>

<style scoped>
.section-1 {
  height: calc(100vh - 90px - 100px);
  background-color: #154999;
  background-image: url(/image/common/erp.webp);
  position: relative;
  text-align: left;
}

.section-1 .title {
  font-family: Raleway;
  position: absolute;
  top: 25.2%;
  font-size: 80px;
  font-weight: 800;
  line-height: 85px;
  letter-spacing: normal;
  animation: fadein 1s;
  -moz-animation: fadein 1s; /* Firefox */
  -webkit-animation: fadein 1s; /* Safari and Chrome */
  -o-animation: fadein 1s; /* Opera */
}

.section-1 .description {
  position: absolute;
  top: 62.5%;
  font-size: 18px;
  line-height: 33px;
  letter-spacing: -0.45px;
  text-align: left;

  animation: fadein 2.5s;
  -moz-animation: fadein 2.5s; /* Firefox */
  -webkit-animation: fadein 2.5s; /* Safari and Chrome */
  -o-animation: fadein 2.5s; /* Opera */
}

.section-1 .description .sub-description {
  font-size: 16px;
  letter-spacing: -0.4px;
}

.section-1 .description b {
  font-weight: 800;
}

.section-2 {
  padding: 15px 0;
}

.section-2 .title {
  font-size: 21px;
  line-height: 35px;
  letter-spacing: -0.53px;
  text-align: left;
  word-break: keep-all;
}

.section-4 {
  background-color: #f8f9fb;
  padding: 200px;
}

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
