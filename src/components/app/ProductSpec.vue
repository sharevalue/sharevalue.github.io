
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
  display: inline-block;
  width: 350px;
  height: 450px;
  text-align: center;
  border-radius: 15px;
  background-color: #eff3f7;
  box-sizing: border-box;
  padding: 50px 60px 0 60px;
  margin-bottom: 30px;
  color: #000000;
}

.product-spec-icon-area {
  text-align: center;
  margin-bottom: 27.5px;
}

.product-spec-icon {
  width: 120px;
  height: 120px;
  border-radius: 60px;
  text-align: center;
  border:1px solid transparent;
  box-shadow: 3px 3px 8px 1px #dadce0 inset;
}

.product-spec-title {
  font-weight: bold;
  font-size: 21px;
  line-height: 24px;
  letter-spacing: -0.53px;
  margin-bottom: 30.5px;
}

.product-spec-list {
  text-align: left;
  display: inline-block;
  letter-spacing: -0.4px;
  line-height: 28px;
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