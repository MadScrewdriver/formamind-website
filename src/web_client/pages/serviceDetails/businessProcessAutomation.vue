<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
	title: t('Formamind | Business Process Automation'),
	ogTitle: t('Formamind | Business Process Automation'),
	description: t(
		'How can I automate my business processes? Formamind helps businesses save time and money by automating everyday tasks and making sure everything works smoothly with your current systems. Get help with the right tools and easy setup.'
	),
	ogDescription: t(
		'How can I automate my business processes? Formamind helps businesses save time and money by automating everyday tasks and making sure everything works smoothly with your current systems. Get help with the right tools and easy setup.'
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
				{{ t('Business Process Automation') }}
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
						1. {{ t('Considering Business Process Automation but Unsure Where to Start?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{ t('How can automation streamline your operations and reduce costs?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Which processes in your business are prime candidates for automation?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Worried about the impact of automation on your workforce?') }}
						</p>
					</div>
				</li>
				<li class="flex flex-col gap-[2rem]">
					<p class="2xs:text-sm lg:text-base text-secondary font-semibold">
						2. {{ t('Facing Challenges in Implementing Business Process Automation?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{
								t('Which tools and technologies are best for automating your specific processes?')
							}}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('How do you ensure a smooth transition from manual to automated workflows?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Concerned about integrating automation with your existing software systems?') }}
						</p>
					</div>
				</li>
				<li class="flex flex-col gap-[2rem]">
					<p class="2xs:text-sm lg:text-base text-secondary font-semibold">
						3. {{ t('Looking for an Experienced Partner to Automate Your Business Processes?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{
								t('How do you identify and prioritize automation opportunities in your business?')
							}}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{
								t(
									'Who can guide you through the design, implementation, and optimization of automated systems?'
								)
							}}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Need ongoing support to keep your automated processes running efficiently?') }}
						</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
