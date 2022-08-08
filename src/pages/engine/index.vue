
<script setup lang="ts">
import {IEngineMainBg, IProductSpec} from "~/types";
import { ref, onUnmounted } from 'vue'

let engineMainBgIndex = ref(0);

const engineMainBgList: Array<IEngineMainBg> = [{
  title: 'SMART<br/>BOOKING<br/>PLUS',
  content: '스마트 부킹 플러스는 모든 고객이 직접 <b>검색, 예약, 결제, 발권</b>까지 가능한 항공 부킹 엔진입니다.',
  video: 'engine_booking.mp4',
  playTime: '35.5s',
}];

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

const engineProcessStages = [
  '협약서 체결',
  'GDS 웹 계정 생성<br/>및 승인',
  '항공전용 사이트 설정',
  '백오피스 설정',
  '서비스 오픈 테스트',
  '관리자(사용자) 교육',
  '서비스 오픈',
];

const scrollYPosition = ref(0);

const selectedEngineMainBg = computed(() => {
  if (engineMainBgIndex.value !== -1) {
    return engineMainBgList[engineMainBgIndex.value];
  } else {
    return undefined;
  }
});

const engineBgOrderText = computed(() => {
  return `${engineMainBgIndex.value + 1} / ${engineMainBgList.length}`;
});

const engineProcessStageStyleList = computed(() => {
  const foundTarget = document.getElementById('engine_process');

  if (scrollYPosition.value > 0 && foundTarget) {
    const { top } = foundTarget.getBoundingClientRect();
    const paddingTopSize = 450;
    const startPosition = top - window.innerHeight + paddingTopSize;

    if (startPosition < 0) {
      const endPosition = top - (window.innerHeight / 2) + paddingTopSize;
      const stageSize = Math.ceil((endPosition - startPosition) / engineProcessStages.length);
      const absStartPosition = Math.abs(startPosition);

      return engineProcessStages.map((stage, index) => {
        const stageStartPosition = (index * stageSize);

        if (absStartPosition - stageStartPosition > 0) {
          const result = (absStartPosition - stageStartPosition);
          return result >= stageSize ? 'opacity: 1' : `opacity: ${result / stageSize}`;
        }

        return 'opacity: 0';
      });
    }
  }

  return engineProcessStages.map(() => 'opacity: 0');
});

function moveEngineMainBgIndex(index: number) {
  const result: number = engineMainBgIndex.value + index;

  if (index > 0) {
    const isMaximum = result >= engineMainBgList.length;
    engineMainBgIndex.value = isMaximum ? result - engineMainBgList.length : result;
  } else {
    const isMinimum = result < 0;
    engineMainBgIndex.value = isMinimum ? result + engineMainBgList.length : result;
  }

  restartEngineProgressBarTrigger();
}

function restartEngineProgressBarTrigger() {
  const foundElement = document.getElementById('progress_bar_trigger');

  if (foundElement) {
    foundElement.classList.remove('trigger-animation');
    setTimeout(() => {
      foundElement.classList.add('trigger-animation');
    }, 10);
  }
}

function getScrollYPosition(e: any) {
  scrollYPosition.value = (window.pageYOffset || 0);
}

window.addEventListener('scroll', getScrollYPosition);

onUnmounted(() => {
  window.removeEventListener('scroll', getScrollYPosition);
});
</script>

<template>
  <div class="engine-main">
    <div class="engine-main-bg-video-area">
      <video :src="`/video/${ selectedEngineMainBg.video }`"
             autoplay loop playsinline muted/>
    </div>
    <div class="engine-main-content-area">
      <div class=" default-container text-left c-secondary-500">
        <div class="engine-bg-order">{{ engineBgOrderText }}</div>
        <div v-if="selectedEngineMainBg.title"
             class="engine-main-content-title"
             v-html="selectedEngineMainBg.title"/>
        <div v-if="selectedEngineMainBg.content"
             class="engine-main-content engine-main-content-text"
             v-html="selectedEngineMainBg.content"/>
        <div class="engine-main-content engine-main-bg-nav">
          <button class="nav-left-btn"
                  @click="moveEngineMainBgIndex(-1)"/>
          <button class="nav-right-btn"
                  @click="moveEngineMainBgIndex(1)"/>
        </div>
        <div v-if="selectedEngineMainBg.playTime"
             class="engine-bg-progress-bar">
          <div id="progress_bar_trigger"
               class="engine-bg-progress-bar-trigger trigger-animation"
               :style="{'animation-duration': selectedEngineMainBg.playTime}"/>
        </div>
      </div>
    </div>
  </div>
  <div class="engine-sub-description">
    <div class="default-container px-35 flex flex-row items-center">
      <div class="mr-5 title">개인 항공권, 단체 항공권, 전세기 항공권, 저비용 항공사 전용 항공권까지~! 세상의 모든 항공권 상품을 24시간 고객에게 제공하세요!</div>
      <img src="/image/icon/ico_white_airplane.webp"
           width="72"
           height="70"
           alt="icon"/>
    </div>
  </div>
  <div class="px-5 py-37.5 bg-white">
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
  <div id="engine_process"
       ref="el"
       class="engine-process">
    <div class="px-5 default-container">
      <div class="engine-process-title mb-17.5">서비스 계약 및 진행 절차</div>
      <div class="engine-process-content">
        <div class="flex flex-row justify-evenly">
          <div v-for="(stage, index) in engineProcessStages"
               :key="`engine_process_${index}`"
               :style="engineProcessStageStyleList[index]">
            <div class="engine-process-stage">{{ `0${index + 1}` }}</div>
            <div class="engine-process-stage-bar">
              <span class="dot"/>
            </div>
            <div class="engine-process-stage-title"
                 v-html="stage"/>
          </div>
        </div>
        <div class="engine-process-line"/>
      </div>
    </div>
  </div>
  <div class="engine-price-table">
    <div class="px-5 default-container">
      <div class="price-table-title mb-17.5">PLAN</div>
      <table class="price-table">
        <thead>
        <tr>
          <th colspan="2"></th>
          <th>EASY</th>
          <th>WITH</th>
          <th>PRO</th>
          <th>PMS</th>
          <th>API</th>
          <th>CUSTOMIZING</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th colspan="2">대상</th>
          <td>ATR</td>
          <td>BSP</td>
          <td>BSP</td>
          <td>ALL</td>
          <td>ALL</td>
          <td>ALL</td>
        </tr>
        <tr>
          <th colspan="2">GDS 웹서비스 PCC</th>
          <td><div class="icon-checked"/></td>
          <td><div class="icon-checked"/></td>
          <td><div class="icon-checked"/></td>
          <td rowspan="13">문의</td>
          <td rowspan="13">문의</td>
          <td rowspan="13">문의</td>
        </tr>
        <tr>
          <th colspan="2">웹 호스팅</th>
          <td><div class="icon-checked"/></td>
          <td><div class="icon-checked"/></td>
          <td><div class="icon-checked"/></td>
        </tr>
        <tr>
          <th colspan="2">유지관리</th>
          <td><div class="icon-checked"/></td>
          <td><div class="icon-checked"/></td>
          <td><div class="icon-checked"/></td>
        </tr>
        <tr>
          <th colspan="2">카카오알림톡 연동</th>
          <td><div class="icon-checked"/></td>
          <td><div class="icon-checked"/></td>
          <td><div class="icon-checked"/></td>
        </tr>
        <tr>
          <th colspan="2">판매 사이트 추가</th>
          <td><div class="icon-dashed"/></td>
          <td><div class="icon-dashed"/></td>
          <td><div class="icon-checked"/></td>
        </tr>
        <tr>
          <th colspan="2">자동 발권</th>
          <td>문의</td>
          <td>문의</td>
          <td>문의</td>
        </tr>
        <tr>
          <th colspan="2">전세기, 단체항공 서비스</th>
          <td>문의</td>
          <td>문의</td>
          <td>문의</td>
        </tr>
        <tr>
          <th colspan="2">항공사 API 연동</th>
          <td>문의</td>
          <td>문의</td>
          <td>문의</td>
        </tr>
        <tr>
          <th colspan="2">PG 카드결제 연동</th>
          <td>문의</td>
          <td>문의</td>
          <td>문의</td>
        </tr>
        <tr>
          <th colspan="2">PG 가상계좌 결제 연동</th>
          <td>문의</td>
          <td>문의</td>
          <td>문의</td>
        </tr>
        <tr>
          <th colspan="2">고객용 다국어 지원</th>
          <td>문의</td>
          <td>문의</td>
          <td>문의</td>
        </tr>
        <tr>
          <th colspan="2">고객 DB이동 및 로그인 연동</th>
          <td>문의</td>
          <td>문의</td>
          <td>문의</td>
        </tr>
        <tr>
          <th colspan="2">월 사용 수수료</th>
          <td>10만원</td>
          <td>20만원</td>
          <td>
            <div class="percentage">0.8% - 0.5%</div>
            <div class="percentage-description">(판매금액대비)</div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="engine-faq">
    <div class="default-container">
      <div class="support-title mb-17.5">자주하는 질문</div>
      <Faq/>
    </div>
  </div>
</template>

<style>
.engine-main-content-text b {
  @apply c-primary-500;
}
</style>

<style scoped>
@import '/src/styles/engine.css';
</style>
