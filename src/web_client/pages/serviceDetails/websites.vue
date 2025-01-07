<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
	title: t('Website Design and Development | Build and Optimize Your Site - Formamind'),
	ogTitle: t('Website Design and Development | Build and Optimize Your Site - Formamind'),
	description: t(
		'Formamind: Need a new website or redesign? We create custom websites that enhance your online presence. From responsive design to SEO optimization, we ensure your site engages visitors and drives conversions.'
	),
	ogDescription: t(
		'Formamind: Need a new website or redesign? We create custom websites that enhance your online presence. From responsive design to SEO optimization, we ensure your site engages visitors and drives conversions.'
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
				{{ t('Websites') }}
			</h1>
		</div>
		<div
			data-aos="fade-up"
			data-aos-offset="0"
			class="text-base py-[4rem] 2xs:px-[2rem] lg:px-[12rem] 2xl:px-[15vw]"
		>
			<ul class="flex flex-col w-full h-max gap-[6rem] list-inside">
				<li class="flex flex-col gap-[2rem]">
					<p class="2xs:text-sm lg:text-base text-secondary font-semibold">
						1. {{ t('Need a Website but Don’t Know Where to Start?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{ t('How can a professionally designed website boost your online presence?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('What features and design elements should be included to engage visitors?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Worried about mobile responsiveness and SEO optimization?') }}
						</p>
					</div>
				</li>
				<li class="flex flex-col gap-[2rem]">
					<p class="2xs:text-sm lg:text-base text-secondary font-semibold">
						2. {{ t('Struggling with Your Current Website’s Performance?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{ t('Is your website outdated and not converting visitors into customers?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('How do you improve site speed, user experience, and accessibility?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Concerned about managing content, updates, and security?') }}
						</p>
					</div>
				</li>
				<li class="flex flex-col gap-[2rem]">
					<p class="2xs:text-sm lg:text-base text-secondary font-semibold">
						3. {{ t('Looking for a Partner to Design or Redesign Your Website?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{ t('How do you create a website that aligns with your brand and business goals?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Who can handle both the design and technical development of your site?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Need ongoing support to keep your website updated and optimized?') }}
						</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
