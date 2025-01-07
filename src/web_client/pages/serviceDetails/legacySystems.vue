<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
	title: t('Legacy System Modernization | Upgrade and Modernize Your Software - Formamind'),
	ogTitle: t('Legacy System Modernization | Upgrade and Modernize Your Software - Formamind'),
	description: t(
		'Formamind: Looking to modernize your legacy systems? We help businesses upgrade outdated software and integrate modern technologies smoothly and efficiently.'
	),
	ogDescription: t(
		'Formamind: Looking to modernize your legacy systems? We help businesses upgrade outdated software and integrate modern technologies smoothly and efficiently.'
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
				{{ t('Legacy Systems Modernization') }}
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
						1. {{ t('Dealing with Outdated Systems but Don’t Know How to Modernize?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{ t('How can you upgrade your legacy systems without disrupting your business?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('What are the risks and benefits of moving to modern technologies?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Concerned about data migration and compatibility issues?') }}
						</p>
					</div>
				</li>
				<li class="flex flex-col gap-[2rem]">
					<p class="2xs:text-sm lg:text-base text-secondary font-semibold">
						2. {{ t('Facing Challenges in Modernizing Legacy Systems?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{
								t(
									'Which modernization approach is right for you: rehosting, replatforming, or refactoring?'
								)
							}}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('How do you ensure minimal downtime during the transition?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{
								t('Worried about maintaining data integrity and security throughout the process?')
							}}
						</p>
					</div>
				</li>
				<li class="flex flex-col gap-[2rem]">
					<p class="2xs:text-sm lg:text-base text-secondary font-semibold">
						3. {{ t('Looking for a Skilled Partner to Modernize Your Legacy Systems?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{
								t('How do you transform your legacy systems into scalable, future-proof solutions?')
							}}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Who can handle both the technical and strategic aspects of modernization?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Need continuous support to ensure your new systems stay updated and secure?') }}
						</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
