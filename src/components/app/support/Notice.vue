
<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref, reactive, computed } from 'vue'
import {INotice} from "~/types";

const noticeResponse = reactive({
  noticeList: [] as Array<INotice>,
  totalCount: 0,
});

let page = ref(1);
const pageSize = 6;

function updatePage(val: number) {
  page.value = val;
  search();
}

async function search() {
  await axios.get(`https://api.smartbookingplus.com/notice/list?page=${(page.value - 1)}&pageSize=${pageSize}&siteId=129`).then((res) => {
    const {
      statusCode,
      data
    } = res.data;

    if (statusCode !== 200) {
      throw new Error();
    }

    Object.assign(noticeResponse, data);
  }).catch((e) => {
    Object.assign(noticeResponse, {
      noticeList: [],
      totalCount: 0,
    });
  });

}

function formatDate(dateText: string) {
  const date = new Date(dateText);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formatDigit = (text: number) => {
    if (text < 10) {
      return `0${text}`;
    }

    return String(text);
  };

  return `${year}-${formatDigit(month)}-${formatDigit(day)}`;
}

const notices = computed(() => noticeResponse.noticeList);

onMounted(() => {
  search();
});
</script>

<template>
  <div class="support-header"></div>
  <div class="mb-8 md:mb-12.5">
    <div v-for="(notice, index) in notices"
         :key="`notice_${index}`">
      <details>
        <summary class="notice-title-area flex flex-col md:flex-row ">
          <div class="flex flex-row justify-between w-full">
            <div class="mr-12.5">공지사항</div>
            <div class="hidden md:block notice-title">{{ notice.title }}</div>
            <div>{{ formatDate(notice.createdDateTime) }}</div>
          </div>
          <div class="block md:hidden">
            <div class="notice-title">{{ notice.title }}</div>
          </div>
        </summary>
        <div class="notice-content"
             v-html="notice.content"/>
      </details>
    </div>
  </div>
  <Pagination :total-count="noticeResponse.totalCount"
              :page="page"
              :page-size="pageSize"
              @update="updatePage"/>
</template>

<style scoped>
details {
  border-bottom: 1px solid #c4d2dd;
  text-align: left;
}

.notice-title-area {
  padding: 20px 20px 20px 28px;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: -0.35px;
  color: #2e2d33;
}

.notice-title-area .notice-title {
  flex: 1;
  font-size: 18px;
  letter-spacing: -0.45px;
  font-weight: normal;
  cursor: pointer;
}

.notice-content {
  @apply py-8 px-5 md:pt-7 md:pb-10 md:px-7;

  background-color: #f8f9fb;
  line-height: 30px;
  letter-spacing: -0.45px;
}
</style>