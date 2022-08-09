
<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue'
import {IInquiryForm} from "~/types";

let agreement: boolean = false;
let visibleModal = ref(false);
let isSuccessfulRequest = ref(false);
let loadingRequest = ref(false);

const inquiryForm: IInquiryForm = {
  name: '',
  tel: '',
  email: '',
  title: '',
  companyName: '',
  content: '',
};

function changeAgreement(event: any) {
  agreement = !!(event.target.checked);
}

function requestInquiry() {
  const {
    name,
    tel,
    email
  } = inquiryForm;

  if (!(name && tel && email)) {
    alert("업체명 / 대표자명, 연락처, 이메일 입력내용을 확인해주세요.");
    return;
  }

  if (!agreement) {
    alert("마케팅 수신 동의를 확인해주세요.");
    return;
  }

  loadingRequest.value = true;
  axios.post(
      'https://api.smartbm.co.kr/sbm/inquiry',
      JSON.stringify(inquiryForm),
  ).then(() => {
    isSuccessfulRequest.value = true;
  }).catch((e) => {
    isSuccessfulRequest.value = false;
  }).finally(() => {
    visibleModal.value = true;
    loadingRequest.value = false;
  });
}

function closeModal() {
  visibleModal.value = false;
  // window.location.reload();
}
</script>

<template>
  <div class="default-container px-5">
    <div class="inquiry-title">
      <div>전문 여행 솔루션과 운영지원 서비스를 제공하는 쉐어밸류입니다.</div>
      <div>
        <span class="c-primary-600">상품소개서 및 서비스 연동, 제휴 문의</span>
        <span>를 남겨 주시면 신속히 연락드리겠습니다.</span>
      </div>
    </div>
    <form class="inquiry-content text-left"
          @submit.prevent="requestInquiry">
      <div class="flex flex-row inquiry-input-area">
        <div>
          <div class="inquiry-input-title">
            <span class="c-primary-500 pr-1">*</span>
            <span> 업체명 / 대표자명</span>
          </div>
          <div>
            <input type="text"
                   v-model="inquiryForm.name"
                   placeholder="업체명 / 대표자명을 입력하세요."/>
          </div>
        </div>
        <div>
          <div class="inquiry-input-title">
            <span class="c-primary-500 pr-1">*</span>
            <span> 연락처</span>
          </div>
          <div>
            <input type="text"
                   v-model="inquiryForm.tel"
                   placeholder="연락처를 입력하세요."/>
          </div>
        </div>
        <div>
          <div class="inquiry-input-title">
            <span class="c-primary-500 pr-1">*</span>
            <span> 이메일</span>
          </div>
          <div>
            <input type="text"
                   v-model="inquiryForm.email"
                   placeholder="이메일 주소를 입력하세요."/>
          </div>
        </div>
        <div>
          <div class="inquiry-input-title">
            <span>상품소개서 신청</span>
          </div>
          <div>
            <input type="text"
                   v-model="inquiryForm.title"
                   placeholder="필요한 상품소개서를 입력하세요."/>
          </div>
        </div>
        <div>
          <div class="inquiry-input-title">
            <span>홈페이지 / SNS</span>
          </div>
          <div>
            <input type="text"
                   v-model="inquiryForm.companyName"
                   placeholder="홈페이지 또는 SNS 주소를 입력하세요."/>
          </div>
        </div>
        <div>
          <div class="inquiry-input-title">
            <span>문의내용</span>
          </div>
          <div>
            <input type="text"
                   v-model="inquiryForm.content"
                   placeholder="문의내용을 입력하세요."/>
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-between items-center">
        <div class="flex flex-col inquiry-checkbox-area text-left">
          <div class="mb-3">
            <label class="flex flex-row items-center font-bold">
              <input type="checkbox"
                     v-model="agreement"
                     class="inquiry-checkbox"
                     @change="changeAgreement"/>
              <span class="c-primary-500 pr-1">*</span>
              <span> 마케팅 수신 동의</span>
            </label>
          </div>
          <div class="ml-11">동의 시 자사의 서비스 안내 및 마케팅 정보 수신에 동의함을 의미합니다.</div>
        </div>
        <div class="text-right">
          <button type="submit"
                  :disabled="loadingRequest"
                  class="bg-primary-500 c-white inquiry-btn">
            <div v-if="loadingRequest"
                 class="loading-spinner"/>
            <span v-else>문의 신청하기</span>
          </button>
        </div>
      </div>
    </form>
  </div>
  <teleport to="body">
    <div v-show="visibleModal"
         class="modal-backdrop">
      <div class="modal">
        <div class="modal-title">{{ `신청 ${isSuccessfulRequest ? '성공' : '실패'}` }}</div>
        <div class="modal-content">
          <template v-if="isSuccessfulRequest">
            <div>문의가 신청 되었습니다.</div>
            <div>담당자가 확인 후 연락 드리겠습니다.</div>
          </template>
          <template v-else>
            <div>잠시 후 다시 시도해주세요.</div>
            <div>동일한 현상이 계속 발생하면 전화(<a href='tel:02-364-5400'>02-364-5400</a>)나 채널톡으로 문의 부탁드립니다.</div>
          </template>
        </div>
        <div class="modal-btn-area">
          <button type="button"
                  class="btn modal-btn"
                  @click="closeModal">확인</button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
@import '/src/styles/modal.css';

.inquiry-title {
  text-align: left;
  color: #152038;
  font-size: 30px;
  font-weight: 800;
  line-height: 48px;
  letter-spacing: -0.75px;
  margin-bottom: 70px;
}

.inquiry-content {
  padding: 90px 50px 70px 50px;
  border-radius: 30px;
  background-color: #f4fbff;
  box-shadow: -6.3px -7.8px 15px 0 rgba(255, 255, 255, 0.5), 5.4px 8.4px 20px 0 rgba(94, 116, 156, 0.2);
  color: #152038;
  font-size: 16px;
  line-height: 48px;
}

.inquiry-content .inquiry-input-area {
  flex-wrap: wrap;
  justify-content: space-between;
}

.inquiry-content .inquiry-input-area >div {
  width: calc(50% - 10px) !important;
  max-width: 620px;
  margin-bottom: 30px;
}

.inquiry-content .inquiry-input-area >div .inquiry-input-title {
  font-size: 21px;
  letter-spacing: -0.53px;
}

.inquiry-content input[type=text] {
  width: 100%;
  box-sizing: border-box;
  background-color: #e2e9f2;
  border-radius: 10px;
  padding: 11px 28px;
  font-size: 18px;
  letter-spacing: -0.45px;
}

.inquiry-content input[type=text]::placeholder {
  color: #a7b0bc;
}

.inquiry-checkbox-area {
  letter-spacing: -0.4px;
  line-height: 20px;
}

.inquiry-checkbox-area .inquiry-checkbox {
  margin-right: 14px;
  width: 20px;
  height: 20px;
  background-color: #e2e9f2 !important;
  outline: none;
  border-radius: 3px;
}

.inquiry-btn {
  border-radius: 10px;
  line-height: 16px;
  height: 70px;
  width: 300px;
  font-size: 16px;
  font-weight: normal;
}

.inquiry-btn:hover {
  opacity: 0.75;
}

.loading-spinner {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: transparent;
  display: inline-block;
  animation: spin 1s infinite linear;
  border: 0.3rem solid #FFFFFF;
  border-top: 0.3rem solid #dddddd;
}

@-webkit-keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@-ms-keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>