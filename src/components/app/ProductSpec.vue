
<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    default: '',
    description: 'input icon img name("/image/icon/~")',
  },
});
</script>

<template>
  <div class="product-spec">
    <div class="product-spec-icon-area text-center flex justify-center">
      <div class="product-spec-icon inline-block flex justify-center items-center">
        <img :src="`/image/icon/${icon}`"
             alt="아이콘"/>
      </div>
    </div>
    <div class="product-spec-title text-center">
      <slot name="title">
      </slot>
    </div>
    <div class="product-spec-list">
      <ul>
        <slot name="list">
        </slot>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.product-spec {
  @apply pt-5 h-340px mb-2 max-w-275px md:mx-7 md:h-375px lg:mx-0 lg:h-450px lg:pt-13 lg:mb-7.5 lg:max-w-350px;
  display: inline-block;
  width: 100%;
  text-align: center;
  border-radius: 15px;
  background-color: #eff3f7;
  box-sizing: border-box;
  color: #000000;
}

.product-spec-icon-area {
  @apply lg:mb-7;
  text-align: center;
}

.product-spec-icon {
  @apply scale-75 lg:scale-100;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  text-align: center;
  border:1px solid transparent;
  box-shadow: 3px 3px 8px 1px #dadce0 inset;
}

.product-spec-title {
  @apply text-base mb-5 md:text-lg lg:text-xl lg:mb-7.5;
  font-weight: bold;
  line-height: 1.14;
  letter-spacing: -0.53px;
}

.product-spec-list {
  @apply text-sm lg:text-base;
  text-align: left;
  display: inline-block;
  letter-spacing: -0.4px;
  line-height: 1.75 !important;
}
</style>

<style>
.product-spec-list ul li {
  display: block;
  padding-left: 12px;
  position: relative;
}
.product-spec-list ul li::before {
  left: 0;
  display: inline-block;
  content: '·';
  position: absolute;
}
</style>