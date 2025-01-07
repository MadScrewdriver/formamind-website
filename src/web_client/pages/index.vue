<script setup lang="ts">
import Topline from '@/assets/icons/top-line2.svg';
import BackgroundFigure from '@/assets/icons/bg_figure_4.svg';
import ArrowInCircleIcon from '@/assets/icons/arrowincircle.svg';
import JourneyIllustration_1 from '@/assets/icons/journey_illustration_1.svg';
import JourneyIllustration_2 from '@/assets/icons/journey_illustration_2.svg';
import JourneyIllustration_3 from '@/assets/icons/journey_illustration_3.svg';
import JourneyPath_1 from '@/assets/icons/journey_path_1.svg';
import JourneyPath_2 from '@/assets/icons/journey_path_2.svg';
import ServicesList from '@/components/ServicesList.vue';
import ContactForm from '@/components/ContactForm.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import LineUnderHeader from '@/components/LineUnderHeader.vue';

const { locale, t } = useI18n();

const isCyrillic = computed(() => ['uk', 'ru'].includes(locale.value));

useSeoMeta({
	title: t('Formamind | Software development services'),
	ogTitle: t('Formamind | Software development services'),
	description: t(
		"At Formamind, we create custom software solutions designed to boost your business's performance. Whether it's SaaS platforms, AI-driven innovations, or ERP systems, we're here to bring your ideas to life and help your business thrive."
	),
	ogDescription: t(
		"At Formamind, we create custom software solutions designed to boost your business's performance. Whether it's SaaS platforms, AI-driven innovations, or ERP systems, we're here to bring your ideas to life and help your business thrive."
	),
	ogImage: 'https://i.ibb.co/4tGvK1f/card.png',
	twitterCard: 'summary_large_image',
});

const localePath = useLocalePath();
</script>
<template>
	<div
		class="flex flex-col w-full h-max min-h-full bg-bg"
		:class="{ 'font-onest': isCyrillic, 'font-outfit': !isCyrillic }"
	>
		<div class="absolute top-[20rem] right-0 overflow-hidden">
			<BackgroundFigure
				class="relative w-[80vw] lg:w-[60vw] md:w-[80vw] h-[100vw] md:h-[80vw] lg:h-[50vw] md:right-[-20vw] lg:right-[-10rem] min-w-[30rem] min-h-[30rem] right-[-10rem] z-0"
			/>
		</div>

		<Topline class="w-full h-[3px] fixed top-0 z-20" />
		<Header
			class="sticky top-[3px] z-20 w-full h-[9rem] 2xs:px-[2rem] lg:px-[12rem] 2xl:px-[15vw] backdrop-blur-lg bg-[rgba(255,250,245,0.7)]"
		/>
		<LineUnderHeader />

		<main class="z-10">
			<section
				id="title"
				class="relative w-full min-h-[60rem] h-[calc(90vh-9rem)] lg:h-[calc(100vh-9rem)] 2xs:flex 2xs:flex-col 2xs:justify-center lg:grid lg:grid-cols-12 lg:grid-rows-1 gap-[2rem] lg:py-[2rem] 2xl:min-h-[50rem] 2xs:px-[2rem] lg:px-[12rem] 2xl:px-[15vw]"
			>
				<nuxt-link
					:to="{ path: localePath('/'), hash: '#journey' }"
					class="absolute 2xs:w-[4rem] 2xs:h-[4rem] 2xl:w-[6rem] 2xl:h-[6rem] left-[calc(50vw_-_2rem)] bottom-[5rem]"
					aria-label="your software development journey"
				>
					<ArrowInCircleIcon class="w-full h-full" />
				</nuxt-link>
				<div
					id="title-text"
					class="col-start-1 lg:col-span-8 flex flex-col items-start justify-center gap-[1rem] w-full"
				>
					<h1
						data-aos="fade-up"
						data-aos-offset="0"
						class="2xs:text-base md:text-lg 2xl:text-xl 2xs:leading-snug 2xs:font-semibold lg:font-bold lg:leading-[13rem] whitespace-pre-line"
					>
						<span v-for="(item, index) in $t('index-h1-pre').split('\n')" :key="index"
							><br v-if="index !== 0" />{{ item }}</span
						>
						<span class="text-secondary">{{ $t('index-h1-span') }}</span>
						<span v-for="(item, index) in $t('index-h1-post').split('\n')" :key="index"
							><br v-if="index !== 0" />{{ item }}</span
						>
					</h1>
					<p class="text-base font-medium lg:flex 2xs:hidden pl-[0.5rem]">{{ $t('made in Europe') }}</p>
				</div>
				<div
					class="lg:col-start-9 lg:col-span-4 flex justify-start 2xs:items-center lg:items-end 2xs:py-4 lg:py-[10rem] 2xs:lg-max lg:h-auto"
				>

					<!-- pre dev widget -->
					<!-- <iframe data-aos="fade-left" class="2xs:hidden xl:flex" height="590px" width="420px" src="https://pre.dev/iframe/enterprise/chat/1e9f46f6-5a95-4b4c-a6e8-b886dd703d63"/> -->


					<nuxt-link
						data-aos="fade-up"
						data-aos-offset="0"
						:to="{ path: localePath('/'), hash: '#contact' }"
						class="2xs:h-[6rem] md:h-[8rem] 2xl:h-[20rem] 2xl:w-[40rem] 2xs:w-[18rem] md:w-[30rem] 2xs:flex lg:hidden xl:flex xl:mb-[5vh] items-center justify-center 2xs:text-sm md:text-base 2xl:text-[6rem] text-white bg-blueBtnBg bg-contain bg-no-repeat bg-center 2xs:px-[2rem] lg:px-[3rem]"
						aria-label="contact"
					>
						{{ $t('Get in touch') }}
					</nuxt-link>
				</div>
				<p class="2xs:text-sm lg:text-base font-medium 2xs:flex lg:hidden">
					{{ $t('made in Europe') }}
				</p>
			</section>
			<div class="w-full 2xs:px-[2rem] lg:px-[12rem] 2xl:px-[15vw]">
				<div class="h-[1px] w-full bg-[#9C9C9C] rounded" />
			</div>
			<section
				id="journey"
				class="flex flex-col items-center gap-[5rem] 2xs:px-[2rem] lg:px-[12rem] 2xl:px-[15vw] pt-[10rem] 2xs:pb-[2rem] lg:pb-[10rem]"
			>
				<h2 data-aos="fade-up" class="2xs:text-base lg:text-lg text-black text-center">
					{{ t('Your') }} <span class="text-secondary">{{ t('Software Development') }}</span>
					{{ t('Journey') }}
				</h2>
				<div
					class="grid w-full grid-cols-2 2xs:grid-rows-[15rem_15rem_15rem] lg:grid-rows-[30rem_30rem_30rem] 2xl:grid-rows-[40rem_40rem_40rem] relative"
				>
					<div
						class="absolute -z-10 w-full 2xs:h-[15rem] lg:h-[30rem] 2xl:h-[40rem] flex justify-center 2xs:top-[10.5rem] lg:top-[23rem] 2xl:top-[28rem]"
					>
						<JourneyPath_1 class="w-[50%] h-full" />
					</div>
					<div
						class="absolute -z-10 w-full 2xs:h-[15rem] lg:h-[30rem] 2xl:h-[40rem] flex justify-center 2xs:top-[25.5rem] lg:top-[53rem] 2xl:top-[68rem]"
					>
						<JourneyPath_2 class="w-[50%] h-full" />
					</div>

					<div data-aos="fade-up" class="flex flex-col justify-center items-center">
						<JourneyIllustration_1 class="h-full max-w-full" />
					</div>
					<div
						class="flex flex-col justify-center items-center 2xs:py-[3rem] lg:py-[3rem] 2xl:py-[8rem]"
					>
						<p
							data-aos="fade-up"
							class="flex-1 2xs:text-sm lg:text-medium text-secondary font-semibold flex justify-center items-center"
						>
							{{ t('Your Idea') }}
						</p>
						<p
							data-aos="fade-up"
							class="flex-1 2xs:text-xs lg:text-base flex justify-center items-center"
						>
							{{ t('our commitment') }}
						</p>
						<div class="flex-1 w-full flex justify-center items-center">
							<div
								class="2xs:w-[2rem] 2xs:h-[2rem] lg:w-[4rem] lg:h-[4rem] bg-primary rounded-full"
							/>
						</div>
					</div>

					<div
						class="flex flex-col justify-center items-center 2xs:py-[3rem] lg:py-[3rem] 2xl:py-[8rem]"
					>
						<p
							data-aos="fade-up"
							class="flex-1 2xs:text-sm lg:text-medium text-secondary font-semibold flex justify-center items-center"
						>
							{{ t('Your Goals') }}
						</p>
						<p
							data-aos="fade-up"
							class="flex-1 2xs:text-xs lg:text-base flex justify-center items-center"
						>
							{{ t('our motivation') }}
						</p>
						<div class="flex-1 w-full flex justify-center items-center">
							<div
								class="2xs:w-[2rem] 2xs:h-[2rem] lg:w-[4rem] lg:h-[4rem] bg-primary rounded-full"
							/>
						</div>
					</div>
					<div data-aos="fade-up" class="flex flex-col justify-center items-center">
						<JourneyIllustration_2 class="h-full max-w-full" />
					</div>

					<div data-aos="fade-up" class="flex flex-col justify-center items-center">
						<JourneyIllustration_3 class="2xs:h-[80%] 2xl:h-[75%] max-w-full" />
					</div>
					<div
						class="flex flex-col justify-center items-center 2xs:py-[3rem] lg:py-[3rem] 2xl:py-[8rem]"
					>
						<p
							data-aos="fade-up"
							class="flex-1 2xs:text-sm lg:text-medium text-secondary font-semibold flex justify-center items-center"
						>
							{{ t('Your Growth') }}
						</p>
						<p
							data-aos="fade-up"
							class="flex-1 2xs:text-xs lg:text-base flex justify-center items-center"
						>
							{{ t('our solutions') }}
						</p>
						<div class="flex-1 w-full flex justify-center items-center">
							<div
								class="2xs:w-[2rem] 2xs:h-[2rem] lg:w-[4rem] lg:h-[4rem] bg-primary rounded-full"
							/>
						</div>
					</div>
				</div>
			</section>
			<section
				id="company"
				class="relative w-full h-max flex flex-col items-center gap-[10rem] pt-[8rem] pb-[5rem] 2xs:px-[2rem] lg:px-[12rem] 2xl:px-[15vw]"
			>
				<div class="flex flex-col items-center gap-[2rem] pb-[10rem]">
					<h2 data-aos="fade-up" class="2xs:text-base lg:text-lg text-secondary font-medium">
						{{ $t('Who are we?') }}
					</h2>
					<p data-aos="fade-up" class="2xs:text-sm lg:text-base font-medium text-black text-center">
						{{ $t('Who are we?-text') }}
					</p>
				</div>
				<!--<div class="flex flex-col items-center gap-[2rem]">
			<h2 data-aos="fade-up" class="2xs:text-base lg:text-lg text-secondary font-medium">{{ $t('Our values') }}</h2>
			<div data-aos="fade-up" class="flex flex-row 2xs:flex-wrap xl:flex-nowrap justify-center gap-[2rem] 2xs:py-[3rem] lg:p-0">
			  <div
				class="relative flex flex-col 2xs:w-[37rem] 2xs:h-[33rem] rounded-[30px] bg-secondary overflow-hidden px-12 py-8"
			  >
				<h3 class="text-base text-bg font-semibold leading-tight">{{ $t('modern approach').toUpperCase() }}</h3>
				<p class="2xs:text-sm text-bg text-medium leading-tight z-10">{{ $t('modern-approach-text') }}</p>
				<span
				  class="absolute right-[2rem] bottom-[-1.5rem] text-[#465DFF] text-xl leading-none z-0 font-bold"
				  >#01</span
				>
			  </div>
  
			  <div
				class="relative flex flex-col w-[37rem] h-[33rem] rounded-[30px] bg-secondary overflow-hidden px-12 py-8"
			  >
				<h3 class="text-base text-bg font-semibold leading-tight">{{ $t('client-driven design').toUpperCase() }}</h3>
				<p class="text-sm text-bg text-medium leading-tight z-10">{{ $t('cient-driven-design-text') }}</p>
				<span
				  class="absolute right-[2rem] bottom-[-1.5rem] text-[#465DFF] text-xl leading-none z-0 font-bold"
				  >#02</span
				>
			  </div>
  
			  <div
				class="relative flex flex-col w-[37rem] h-[33rem] rounded-[30px] bg-secondary overflow-hidden px-12 py-8"
			  >
				<h3 class="text-base text-bg font-semibold leading-tight">{{ $t('attention to details').toUpperCase() }}</h3>
				<p class="text-sm text-bg text-medium leading-tight z-10">{{ $t('attention-to-details-text') }}</p>
				<span
				  class="absolute right-[2rem] bottom-[-1.5rem] text-[#465DFF] text-xl leading-none z-0 font-bold"
				  >#03</span
				>
			  </div>
			</div>
		  </div>-->
			</section>
			<section class="w-full h-max flex flex-col items-center gap-[10rem] py-[3rem]">
				<div class="flex flex-col items-center gap-[5rem] w-full">
					<h2
						class="2xs:text-base 2xs:w-full 2xs:px-[2rem] lg:px-[12rem] 2xl:px-[15vw] text-center lg:text-lg text-secondary font-medium"
					>
						{{ $t('Technologies we work with') }}
					</h2>
					<TechCarousel class="w-full h-[12rem]" />
					<p class="text-base text-black">{{ $t('and more') }}</p>
				</div>
			</section>
			<section
				id="services"
				class="w-full h-max flex flex-col items-center gap-[10rem] pt-[8rem] pb-[5rem] 2xs:px-[2rem] lg:px-[12rem] 2xl:px-[15vw] bg-secondary"
			>
				<h2 class="2xs:text-base lg:text-lg text-center text-bg font-semibold">
					{{ $t('Services we provide') }}
				</h2>
				<ServicesList class="w-full h-max" />
			</section>
			<section class="w-full h-max 2xs:flex justify-center items-center gap-[10rem] pt-[10rem] pb-[4rem] 2xs:px-[2rem] lg:px-[12rem] 2xl:px-[15vw] bg-secondary">
				<!-- pre dev widget -->
<!--				<iframe class="rounded-xl" height="590px" width="420px" src="https://pre.dev/iframe/enterprise/chat/1e9f46f6-5a95-4b4c-a6e8-b886dd703d63"/>-->
			</section>
			<section
				id="contact"
				class="w-full h-max flex flex-col items-start gap-[10rem] pt-[10rem] pb-[4rem] 2xs:px-[2rem] lg:px-[12rem] 2xl:px-[15vw] bg-secondary"
			>
				<h2 class="2xs:text-base lg:text-lg text-bg font-semibold">{{ $t('Contact us') }}</h2>
				<div
					class="w-full h-max 2xs:flex 2xs:flex-col 2xs:gap-8 lg:grid lg:grid-cols-12 lg:grid-rows-1"
				>
					<div class="col-start-1 col-span-5 flex flex-col">
						<ContactForm class="w-full h-full" />
						<p class="text-center text-bg text-sm py-[2rem]">
							{{ $t('By sending a message you agree to our') }}
							<nuxt-link :to="localePath('/privacyPolicy')" class="text-primary underline" aria-label="privacy policy">{{
								$t('msg privacy policy')
							}}</nuxt-link
							>.
						</p>
					</div>
					<div
						class="col-start-7 col-span-5 2xs:text-sm 2xl:text-base text-bg flex flex-col 2xs:items-center md:items-start justify-start gap-[4rem] font-medium md:w-[80%]"
					>
						<div
							class="2xs:text-sm 2xl:text-base 2xs:flex 2xs:justify-center md:justify-start 2xs:w-full"
						>
							<p class="2xs:text-center md:text-left">{{ $t('contact-text') }}</p>
						</div>
						<div class="flex flex-col gap-4 2xs:justify-center md:justify-start">
							<p class="2xs:text-sm 2xl:text-base 2xs:text-center md:text-left">
								{{ $t("WE'RE HERE FOR YOU") }}
							</p>
							<div class="2xs:text-center md:text-left">
								<p><a href="mailto:contact@formamind.com">contact@formamind.com</a></p>
								<p><a href="tel:+48515518949">+48 515 518 949</a></p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
		<Footer class="2xs:p-[2rem] lg:px-[12rem] 2xl:px-[15vw] w-full bg-secondary" />
	</div>
</template>
