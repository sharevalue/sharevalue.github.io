
<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref, reactive, computed } from 'vue'
import {IFAQ} from "~/types";

const faqResponse = reactive({
  faqList: [] as Array<IFAQ>,
  totalCount: 0,
});

let page = ref(1);
const pageSize = 6;

function updatePage(val: number) {
  page.value = val;
  search();
}

async function search() {
  console.log('CALL!!! FAQ');

  await axios.get(`https://api-dev.smartbookingplus.com/faq/list?page=${(page.value - 1)}&pageSize=${pageSize}&query=&siteId=43`).then((res) => {
    const {
      statusCode,
      data
    } = res.data;

    if (statusCode !== 200) {
      throw new Error();
    }

    console.log('data : ', data);

    Object.assign(faqResponse, data);
  }).catch((e) => {
    Object.assign(faqResponse, {
      faqList: [],
      totalCount: 0,
    });
  });
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString();
}

const faqs = computed(() => faqResponse.faqList);

onMounted(() => {
  search();
});
</script>

<template>
  <div class="support-header"></div>
  <div class="mb-12.5">
    <div v-for="(faq, index) in faqs"
         :key="`faq_${index}`">
      <details>
        <summary class="faq-title-area flex flex-row">
          <div class="faq-title">{{ faq.title }}</div>
        </summary>
        <div class="faq-content"
             v-html="faq.content"/>
      </details>
    </div>
  </div>
  <Pagination :total-count="faqResponse.totalCount"
              :page="page"
              :page-size="pageSize"
              @update="updatePage"/>
</template>

<style scoped>
details {
  border-bottom: 1px solid #c4d2dd;
  text-align: left;
}

details[open] .faq-title-area .faq-title {
  @apply  c-primary-500;
}

.faq-title-area {
  padding: 20px 20px 20px 28px;
  font-size: 14px;
  line-height: 30px;
  letter-spacing: -0.35px;
  color: #2e2d33;
  position: relative;
}

.faq-title-area:after {
  position: absolute;
  content: '';
  width: 0;
  height: 0;
  border: solid #666;
  display: inline-block;
  padding: 6px;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  right: 20px;
  cursor: pointer;
}

details[open] .faq-title-area:after {
  top: 25px;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);

}

.faq-title-area .faq-title {
  flex: 1;
  font-size: 18px;
  letter-spacing: -0.45px;
  font-weight: bold;
  cursor: pointer;
}

.faq-content {
  background-color: #f8f9fb;
  padding: 28px 28px 40px 28px;
  line-height: 30px;
  letter-spacing: -0.45px;
}
</style>