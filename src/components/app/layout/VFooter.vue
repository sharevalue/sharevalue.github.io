<script setup lang="ts">
import useEventsBus from '~/composables/core/eventBus';

const { emit } = useEventsBus()
</script>
<template>
    <!-- footer component -->

    <footer
        :class="`md:pl-20 md:rtl:pr-20 pr-2 pl-2 transition-padding duration-700 w-full right-0 items-center justify-center md:justify-between  px-4 py-2 space-y-2 shadow-md  md:py-0 md:space-y-none md:h-16 md:flex-row bg-slate-100`">
        <div class="footer-company">
            <div class="relative">
              zzzz
            </div>
        </div>
        <div class='footer-record flex items-center space-x-4 rtl:space-x-reverse text-slate-600'>
          <button
                class="text-xl cursor-pointer i-carbon-notification hover:bg-slate-500 text-slate-600" />

            <div class="flex items-center cursor-pointer">
                <img class="w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="" />

            </div>
        </div>

    </footer>

</template>
<style scoped>
.footer-company {
  background-color: #00264b;
}

.footer-record {
  background-color: #ffffff;
}
</style>