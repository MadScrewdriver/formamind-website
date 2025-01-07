<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
	title: t('Web Scraping Software Development | Custom Data Collection Tools - Formamind'),
	ogTitle: t('Web Scraping Software Development | Custom Data Collection Tools - Formamind'),
	description: t(
		'Formamind: Need custom software for web scraping and data collection? We develop powerful tools for automated web data extraction, tailored to your specific needs. Efficiently gather and manage data from websites with our custom solutions.'
	),
	ogDescription: t(
		'Formamind: Need custom software for web scraping and data collection? We develop powerful tools for automated web data extraction, tailored to your specific needs. Efficiently gather and manage data from websites with our custom solutions.'
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
				{{ t('Web Scraping') }}
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
						1. {{ t('Interested in Web Scraping but Not Sure Where to Start?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{ t('How can web scraping help you gather valuable data from the web?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('What legal considerations should you be aware of before scraping websites?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Unsure how to handle large volumes of data efficiently?') }}
						</p>
					</div>
				</li>
				<li class="flex flex-col gap-[2rem]">
					<p class="2xs:text-sm lg:text-base text-secondary font-semibold">
						2. {{ t('Facing Technical Challenges with Web Scraping?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{ t('Which tools and libraries are best for your web scraping project?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('How do you deal with website restrictions like CAPTCHAs and rate limits?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Worried about maintaining accuracy and consistency in your scraped data?') }}
						</p>
					</div>
				</li>
				<li class="flex flex-col gap-[2rem]">
					<p class="2xs:text-sm lg:text-base text-secondary font-semibold">
						3. {{ t('Looking for an Expert to Handle Your Web Scraping Needs?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{ t('How do you build a robust, scalable web scraping solution?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Who can ensure your web scraping process is compliant and secure?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Need ongoing support to adapt your scraping to changing website structures?') }}
						</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
