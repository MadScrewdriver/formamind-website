<script setup lang="ts">
const { serviceName, link } = defineProps({
	serviceName: { type: String, required: true },
	link: { type: String, required: true },
});
const { locale } = useI18n();
</script>
<template>
	<nuxt-link
		:to="{ path: locale + '/serviceDetails/' + link }"
		data-aos="flip-up"
		data-aos-offset="-100"
		class="group 2xs:w-full md:w-max 2xs:h-max lg:h-[8rem] rounded-2xl bg-bg 2xs:p-[2rem] lg:p-[4rem] 2xs:text-sm lg:text-base text-secondary font-medium flex justify-center items-center text-center relative before:absolute before:w-full before:h-full before:border-primary before:border-4 before:-z-[2] before:rounded-2xl before:box-border before:origin-top-right before:transition-all lg:before:flex 2xs:before:hidden"
	>
		<div class="absolute inset-0 bg-bg rounded-2xl z-[-1]" />
		<p>{{ serviceName }}</p>
	</nuxt-link>
</template>
<style scoped>
.group:hover::before {
	transform: rotate(-3deg);
}
</style>
