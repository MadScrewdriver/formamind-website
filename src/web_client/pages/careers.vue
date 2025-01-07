<script setup lang="ts">
import Header from '@/components/Header.vue';
import Topline from '@/assets/icons/top-line2.svg';
import Footer from '@/components/Footer.vue';
import Paginator from 'primevue/paginator';
import LineUnderHeader from '@/components/LineUnderHeader.vue';

const openPositions: unknown[] = [];

const current = ref(0);

const { locale, t } = useI18n();

const isCyrillic = computed(() => ['uk', 'ru'].includes(locale.value));

useSeoMeta({
	title: t('Formamind | Software development careers'),
	ogTitle: t('Formamind | Software development careers'),
	description: t(
		"Join Formamind in Warsaw! We're a dynamic software development company specializing in SaaS, AI solutions, ERP systems, and more. Explore career opportunities and be part of our innovative team. Apply now!"
	),
	ogDescription: t(
		"Join Formamind in Warsaw! We're a dynamic software development company specializing in SaaS, AI solutions, ERP systems, and more. Explore career opportunities and be part of our innovative team. Apply now!"
	),
	ogImage: 'https://i.ibb.co/4tGvK1f/card.png',
	twitterCard: 'summary_large_image',
});
</script>
<template>
	<div
		class="flex flex-col w-full h-max min-h-full bg-bg"
		:class="{ 'font-onest': isCyrillic, 'font-outfit': !isCyrillic }"
	>
		<Topline class="w-full h-[3px] sticky top-0 z-20" />
		<Header
			class="sticky top-[3px] z-20 w-full h-[9rem] lg:px-[12rem] 2xl:px-[15vw] 2xs:px-[2rem] backdrop-blur-lg bg-[rgba(255,250,245,0.7)]"
		/>
		<LineUnderHeader />
		<main class="2xs:p-[2rem] lg:px-[12rem] 2xl:px-[15vw] py-[5rem] z-0">
			<h1 class="2xs:text-base lg:text-lg text-secondary">{{ $t('Careers at Formamind') }}</h1>
			<div class="bg-white rounded-2xl p-[3rem]">
				<div class="flex flex-col gap-[2rem]">
					<p class="text-sm text-black">{{ $t('Search open positions') }}:</p>
					<input
						type="text"
						:placeholder="$t('filter by keywords') + '...'"
						class="w-full p-[1rem] h-max text-sm text-black bg-white rounded-xl border-2 border-black"
					/>
				</div>
				<div class="flex h-max max-h-[40rem] flex-col justify-center items-center">
					<ul v-if="openPositions.length">
						<li v-for="(item, index) in openPositions.slice(current, current + 10)" :key="index" />
					</ul>
					<div
						v-else
						class="flex flex-col justify-center items-center text-sm text-small py-[5rem]"
					>
						<p>{{ $t('No open positions at this moment.') }}</p>
						<p>{{ $t('But in case of elevated enthusiasm fell free to contact us.') }}</p>
					</div>

					<!--eslint-disable-next-line vue/attribute-hyphenation-->
					<Paginator
						v-model="current"
						:rows="10"
						:totalRecords="openPositions.length || 1"
						template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
						class="text-sm"
					/>
				</div>
			</div>
		</main>
		<Footer
			class="2xs:p-[2rem] lg:px-[12rem] 2xl:px-[15vw] py-[4rem] w-full bg-secondary"
			:top-separator="false"
		/>
	</div>
</template>
