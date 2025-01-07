<script setup lang="ts">
import Header from '~/components/Header.vue';
import LineUnderHeader from '~/components/LineUnderHeader.vue';
import Footer from '~/components/Footer.vue';
import Topline from '@/assets/icons/top-line2.svg';
//import BackgroundFigure from '@/assets/icons/bg-figure2.svg';

const { locale, t } = useI18n();
const localePath = useLocalePath();

const isCyrillic = computed(() => ['uk', 'ru'].includes(locale.value));
</script>
<template>
	<div
		class="flex flex-col w-full h-max min-h-full bg-bg"
		:class="{ 'font-onest': isCyrillic, 'font-outfit': !isCyrillic }"
	>
		<!--<div class="absolute top-[20rem] right-0 overflow-hidden">
			<BackgroundFigure
				class="relative w-[60vw] min-w-[30rem] h-[50vw] min-h-[30rem] right-[-10rem] z-0"
			/>
		</div>-->
		<Topline class="w-full h-[3px] sticky top-0 z-20" />
		<Header
			class="sticky top-[3px] z-20 w-full h-[9rem] 2xs:px-[2rem] lg:px-[12rem] 2xl:px-[15vw] backdrop-blur-lg bg-[rgba(255,250,245,0.7)]"
		/>
		<LineUnderHeader />
		<main class="z-10">
			<NuxtPage />
			<div
				class="w-full h-max text-black 2xs:px-[2rem] lg:px-[12rem] flex flex-col items-center pb-[10rem] pt-[5rem] 2xs:gap[4rem] lg:gap-[8rem]"
			>
				<h2 class="2xs:text-base lg:text-lg text-primary text-center font-semibold">
					{{ t('You are in good hands!') }}
				</h2>
				<div class="py-[2rem] flex flex-col">
					<nuxt-link
						data-aos="fade-up"
						data-aos-offset="-20"
						:to="{ path: localePath('/'), hash: '#contact' }"
						class="2xs:h-[20rem] 2xs:w-[30rem] lg:h-[10rem] lg:w-[30rem] flex items-center justify-center 2xs:text-base lg:text-base text-white bg-orangeBtnBg bg-contain bg-no-repeat bg-center 2xs:px-[2rem] lg:px-[3rem] font-semibold"
						aria-label="get in touch"					
					>
						{{ $t('Get in touch') }}
					</nuxt-link>
				</div>
			</div>
		</main>
		<Footer
			class="2xs:p-[2rem] lg:px-[12rem] 2xl:px-[15vw] w-full bg-secondary"
			:top-separator="false"
		/>
	</div>
</template>
