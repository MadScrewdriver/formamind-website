<script setup lang="ts">
import { useGlobalStore } from '~/store/globalStore';
import LoadingIndicator from '@/components/LoadingIndicator.vue';
import MobileMenu from '~/components/MobileMenu.vue';
import Toast from 'primevue/toast';
const { waitForPendingLocaleChange, t, locale } = useI18n();


useHead({
	meta: [
		{charset: 'utf-8'},
		{name: "viewport", content:"width=device-width, initial-scale=1"},
		{name: "author", content:"Formamind Sp. z o.o."},
		{name: "keywords", content: t('keywords')},
	],
	htmlAttrs:{
		lang: locale
	}
		
})


const globalStore = useGlobalStore();

onBeforeMount(async () => {
	globalStore.setLoadingProcess('localization');
	await waitForPendingLocaleChange();
	globalStore.removeLoadingProcess('localization');
});

const viewport = useViewport();
watch(viewport.breakpoint, (value) => {
	if (value == 'desktop') {
		if (globalStore.isMenuVisible)
			document.getElementsByTagName('body')[0].style.overflowY = 'unset';
		document.documentElement.style.background = '#E3F2FF';
		globalStore.setMenuVisibility(false);
	}
});
</script>
<template>
	<div>
		<Toast />
		<CookieModal/>
		<LoadingIndicator v-if="globalStore.isLoading" />
		<MobileMenu />
		<NuxtPage />
	</div>
</template>
