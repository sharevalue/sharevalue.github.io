
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  totalCount: {
    type: Number,
    default: 0,
  },
  page: {
    type: Number,
    default: 1,
  },
  pageSize: {
    type: Number,
    default: 10,
  }
});

const emit = defineEmits(['update'])

function prev() {
  if (!isFirstPage.value) {
    update(props.page - 1);
  }
}

function next() {
  if (!isLastPage.value) {
    update(props.page + 1);
  }
}

function update(pageOption: number) {
  emit('update', (pageOption));
}

const lastPage = computed(() => Math.ceil(props.totalCount / props.pageSize));
const isFirstPage = computed(() => props.page === 1);
const isLastPage = computed(() => props.page === lastPage.value);
const pageOptions = computed(() => {
  let from = 1;
  const slicedNumber = String(props.page).slice(0, -1);

  if (slicedNumber.length > 0) {
    from = parseInt(`${slicedNumber}1`);
  }

  return [...Array(10).keys()].reduce((acc: number[], val, index) => {
    const page = (from + index);

    if (page <= lastPage.value) {
      acc.push(page);
    }

    return acc;
  }, []);
});
</script>

<template>
  <button :disabled="isFirstPage"
          class="mr-7.5"
          @click="prev">&lt;</button>
  <button v-for="(pageOption, index) in pageOptions"
          :key="`page_option_${index}`"
          :class="['mx-1', pageOption === page ? 'c-primary-500' : '']"
          @click="update(pageOption)">
    {{ pageOption }}
  </button>
  <button :disabled="isLastPage"
          class="ml-7.5"
          @click="next">&gt;</button>
</template>

<style scoped>
button {
  padding: 0.5em;
  font-size: 14px;
}
button:not(:disabled):hover {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>