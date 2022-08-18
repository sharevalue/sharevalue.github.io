
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

const mobileEngineMainBgList: Array<IEngineMainBg> = [{
  title: 'SMART<br/>BOOKING<br/>PLUS',
  content: '스마트 부킹 플러스는 모든 고객이 직접<br/><b>검색, 예약, 결제, 발권</b>까지 가능한<br/>항공 부킹 엔진입니다.',
  video: 'mobile_engine_booking.mp4',
  playTime: '32.5s',
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
    '태블릿',
    '모든 기기 사용',
  ],
}, {
  icon: 'ico_black_checklist.webp',
  title: '기업고객 (BTMS)',
  specList: [
    '기업체 관리자 페이지',
    '예약/정산 목록, 통계',
    '비용 승인 처리',
    '임직원 관리',
    '기업체별 전용 사이트',
  ],
}, {
  icon: 'ico_black_management.webp',
  title: '자율 운영 기능',
  specList: [
    '거래처별 운임 설정',
    '사이트별 운임 설정',
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
    'BSP 빌링/금액 관리',
  ],
}, {
  icon: 'ico_black_payment.webp',
  title: '특화 기능',
  specList: [
    'PG 카드결제 연동',
    'PG 가상계좌 연동',
    '카카오 알림톡 연동',
    '로그인 연동',
    '고객용 다국어 사이트'
  ],
}, {
  icon: 'ico_black_worker-with-gear.webp',
  title: '운영 대행',
  specList: ['사이트 운영 대행', '예약 관리', '고객 문의 관리', '고객 요청 관리', '발권 서비스'],
}];

const engineProcessStages = [
  '협약서 체결',
  'GDS 웹 계정 생성 <br class="hidden lg:block"/>및 승인',
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

const selectedMobileEngineMainBg = computed(() => {
  if (engineMainBgIndex.value !== -1) {
    return mobileEngineMainBgList[engineMainBgIndex.value];
  } else {
    return undefined;
  }
});

const engineBgOrderText = computed(() => {
  return `${engineMainBgIndex.value + 1} / ${engineMainBgList.length}`;
});

const mobileEngineBgOrderText = computed(() => {
  return `${engineMainBgIndex.value + 1} / ${mobileEngineMainBgList.length}`;
});

const engineProcessStageStyleList = computed(() => {
  const foundTarget = document.getElementById('engine_process');

  if (scrollYPosition.value > 0 && foundTarget) {
    const { top } = foundTarget.getBoundingClientRect();
    let elementScrollSize = 400;
    const foundElement = document.getElementById('engine_process_content');

    if (foundElement) {
      const paddingTop = window.getComputedStyle(foundElement, null).getPropertyValue('padding-top');
      const parsedPaddingTop = parseInt(paddingTop.replace('px', ''));

      if (parsedPaddingTop > 0) {
        elementScrollSize = (parsedPaddingTop * 12);
      }
    }

    const startPosition = top - window.innerHeight + elementScrollSize;

    if (startPosition < 0) {
      const endPosition = top - (window.innerHeight / 2) + elementScrollSize;
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
  const foundElements = document.getElementsByClassName('engine-bg-progress-bar-trigger');

  if (foundElements.length > 0) {
    Array.from(foundElements).forEach((foundElement) => {
      foundElement.classList.remove('trigger-animation');
      setTimeout(() => {
        foundElement.classList.add('trigger-animation');
      }, 10);
    });
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
  <!--ONLY VISIBLE ABOVE 768px-->
  <div class="engine-main hidden md:block">
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
             class="engine-main-content-text"
             v-html="selectedEngineMainBg.content"/>
        <div class="engine-main-bg-nav">
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
  <!--ONLY VISIBLE UNDER 768px-->
  <div class="mobile-engine-main md:hidden">
    <div class="engine-main-bg-video-area">
      <video :src="`/video/${ selectedMobileEngineMainBg.video }`"
             autoplay loop playsinline muted/>
    </div>
    <div class="engine-main-content-area">
      <div class=" default-container text-left c-secondary-500">
        <div class="engine-bg-order">{{ mobileEngineBgOrderText }}</div>
        <div class="engine-main-bg-nav">
          <button class="nav-left-btn"
                  @click="moveEngineMainBgIndex(-1)"/>
          <button class="nav-right-btn"
                  @click="moveEngineMainBgIndex(1)"/>
        </div>
        <div v-if="selectedMobileEngineMainBg.title"
             class="engine-main-content-title"
             v-html="selectedMobileEngineMainBg.title"/>
        <div v-if="selectedMobileEngineMainBg.content"
             class="engine-main-content-text"
             v-html="selectedMobileEngineMainBg.content"/>
        <div v-if="selectedMobileEngineMainBg.playTime"
             class="engine-bg-progress-bar">
          <div class="engine-bg-progress-bar-trigger trigger-animation"
               :style="{'animation-duration': selectedMobileEngineMainBg.playTime}"/>
        </div>
      </div>
    </div>
  </div>
  <div class="py-11 bg-primary-500 c-white md:py-4 engine-sub-description">
    <div class="px-5 text-center md:px-20 md:text-left md:flex md:flex-row md:items-center lg:px-35 default-container">
      <div class="mr-2 md:mr-5 title">개인 항공권, 단체 항공권, 전세기 항공권, 저비용 항공사 전용 항공권까지~! 세상의 모든 항공권 상품을 24시간 고객에게 제공하세요!</div>
      <img src="/image/icon/ico_white_airplane.webp"
           srcset="/image/icon/ico_white_airplane@2x.webp 768w,
                   /image/icon/ico_white_airplane@3x.webp 1024w"
           width="24"
           height="23"
           alt="icon"
           class="inline-block w-24px h-23px md:w-48px md:h-46px lg:w-72px lg:h-70px"/>
    </div>
  </div>
  <div class="bg-white py-16.5 md:px-10 lg:px-5 lg:py-37.5">
    <div class="w-full default-container engine-spec-list">
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
       class="engine-process">
    <div class="px-5 default-container">
      <div class="mb-8 md:mb-17.5 engine-process-title">서비스 계약 및 진행 절차</div>
      <div id="engine_process_content"
           class="engine-process-content">
        <div class="flex flex-col justify-center lg:flex-row lg:justify-evenly">
          <div v-for="(stage, index) in engineProcessStages"
               :key="`engine_process_${index}`"
               class="flex flex-row my-10 lg:block lg:my-0"
               :style="engineProcessStageStyleList[index]">
            <div class="engine-process-stage">{{ `0${index + 1}` }}</div>
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
  <div class="engine-price-table">
    <div class="md:px-5 default-container">
      <div class="mb-8.5 md:mb-17.5 price-table-title">PLAN</div>
      <table class="mb-8.5 md:mb-0 price-table">
        <thead>
        <tr>
          <th colspan="2"></th>
          <th>EASY</th>
          <th>WITH</th>
          <th>PRO</th>
          <th class="hidden md:table-cell">PMS</th>
          <th class="hidden md:table-cell">API</th>
          <th class="hidden md:table-cell">CUSTOM</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th colspan="2">대상</th>
          <td>ATR</td>
          <td>BSP</td>
          <td>BSP</td>
          <td class="hidden md:table-cell">ALL</td>
          <td class="hidden md:table-cell">ALL</td>
          <td class="hidden md:table-cell">ALL</td>
        </tr>
        <tr>
          <th colspan="2">GDS 웹서비스 PCC</th>
          <td><div class="icon-checked"/></td>
          <td><div class="icon-checked"/></td>
          <td><div class="icon-checked"/></td>
          <td class="hidden md:table-cell"
              rowspan="13">문의</td>
          <td class="hidden md:table-cell"
              rowspan="13">문의</td>
          <td class="hidden md:table-cell"
              rowspan="13">문의</td>
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
          <th colspan="2">카카오 알림톡 연동</th>
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
          <td>10만 원</td>
          <td>20만 원</td>
          <td>문의</td>
        </tr>
        </tbody>
      </table>
      <table class="table md:hidden price-table">
        <thead>
        <tr>
          <th colspan="2"></th>
          <th>PMS</th>
          <th>API</th>
          <th>CUSTOM</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th colspan="2">대상</th>
          <td>ALL</td>
          <td>ALL</td>
          <td>ALL</td>
        </tr>
        <tr>
          <th colspan="2">GDS 웹서비스 PCC</th>
          <td rowspan="13">문의</td>
          <td rowspan="13">문의</td>
          <td rowspan="13">문의</td>
        </tr>
        <tr>
          <th colspan="2">웹 호스팅</th>
        </tr>
        <tr>
          <th colspan="2">유지관리</th>
        </tr>
        <tr>
          <th colspan="2">카카오 알림톡 연동</th>
        </tr>
        <tr>
          <th colspan="2">판매 사이트 추가</th>
        </tr>
        <tr>
          <th colspan="2">자동 발권</th>
        </tr>
        <tr>
          <th colspan="2">전세기, 단체항공<br/>서비스</th>
        </tr>
        <tr>
          <th colspan="2">항공사 API 연동</th>
        </tr>
        <tr>
          <th colspan="2">PG 카드결제 연동</th>
        </tr>
        <tr>
          <th colspan="2">PG 가상계좌<br/>결제 연동</th>
        </tr>
        <tr>
          <th colspan="2">고객용 다국어 지원</th>
        </tr>
        <tr>
          <th colspan="2">고객 DB이동 및<br/>로그인 연동</th>
        </tr>
        <tr>
          <th colspan="2">월 사용 수수료</th>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="engine-faq">
    <div class="default-container">
      <div class="support-title mb-8 md:mb-17.5">자주하는 질문</div>
      <Faq faq-type="SBP"/>
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
