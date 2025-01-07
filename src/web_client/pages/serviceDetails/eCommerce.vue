<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
	title: t('E-commerce Development | Build and Optimize Your Online Store - Formamind'),
	ogTitle: t('E-commerce Development | Build and Optimize Your Online Store - Formamind'),
	description: t(
		'Formamind: Planning to start an online store or improve an existing one? We build and optimize e-commerce sites to increase sales and ensure secure, seamless transactions.'
	),
	ogDescription: t(
		'Formamind: Planning to start an online store or improve an existing one? We build and optimize e-commerce sites to increase sales and ensure secure, seamless transactions.'
	),
	ogImage: 'https://i.ibb.co/4tGvK1f/card.png',
	twitterCard: 'summary_large_image',
});
</script>
<template>
	<div class="pt-[5rem] flex flex-col h-max">
		<div class="2xs:px-[2rem] lg:px-[12rem] 2xl:px-[15vw] w-full">
			<h1
				data-aos="fade-up"
				data-aos-offset="0"
				class="2xs:text-base lg:text-lg w-full break-words text-balance font-semibold relative z-20 before:bg-logoOutline before:bg-no-repeat before:bg-contain 2xs:before:[background-position-x:40%] 2xl:before:[background-position-x:50rem] before:absolute before:w-full before:h-full before:left-0 before:-z-10"
			>
				{{ t('E-commerce') }}
			</h1>
		</div>
		<div
			data-aos="fade-up"
			data-aos-offset="0"
			class="text-base py-[4rem] 2xs:px-[2rem] 2xl:px-[15vw] lg:px-[12rem]"
		>
			<ul class="flex flex-col w-full h-max gap-[6rem] list-inside">
				<li class="flex flex-col gap-[2rem]">
					<p class="2xs:text-sm lg:text-base text-secondary font-semibold">
						1. {{ t('Planning to Launch an E-commerce Store but Not Sure Where to Start?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{ t('How can an online store help you reach more customers and increase sales?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('What platform and features are best suited for your e-commerce needs?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Worried about payment gateways, security, and compliance?') }}
						</p>
					</div>
				</li>
				<li class="flex flex-col gap-[2rem]">
					<p class="2xs:text-sm lg:text-base text-secondary font-semibold">
						2. {{ t('Struggling with Your Existing E-commerce Platform?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{ t('Is your e-commerce site failing to convert visitors into buyers?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{
								t('How do you optimize product listings, checkout processes, and user experience?')
							}}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{
								t(
									'Concerned about integrating with inventory management, shipping, and CRM systems?'
								)
							}}
						</p>
					</div>
				</li>
				<li class="flex flex-col gap-[2rem]">
					<p class="2xs:text-sm lg:text-base text-secondary font-semibold">
						3. {{ t('Looking for a Reliable Partner to Build or Enhance Your E-commerce Site?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{ t('How do you create a seamless shopping experience that drives sales?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{
								t('Who can manage the design, development, and ongoing optimization of your store?')
							}}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{
								t('Need support with marketing, SEO, and analytics to grow your online business?')
							}}
						</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
