<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
	title: t('Custom Software Development | Build Software for Business Needs - Formamind'),
	ogTitle: t('Custom Software Development | Build Software for Business Needs - Formamind'),
	description: t(
		'Formamind: Get custom software development that fits your business. We develop software to meet your specific requirements, ensuring easy integration with existing systems.'
	),
	ogDescription: t(
		'Formamind: Get custom software development that fits your business. We develop software to meet your specific requirements, ensuring easy integration with existing systems.'
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
				{{ t('Custom Software Solutions') }}
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
						1. {{ t('Need Custom Software but Don’t Know Where to Begin?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{ t('How do you determine the right features for your business needs?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('What technology stack is best suited for your custom solution?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Worried about integration with your existing systems?') }}
						</p>
					</div>
				</li>
				<li class="flex flex-col gap-[2rem]">
					<p class="2xs:text-sm lg:text-base text-secondary font-semibold">
						2. {{ t('Facing Challenges in Custom Software Development?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{ t('Which development approach should you take: Agile, Waterfall, or Hybrid?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('How can you ensure your software is scalable and future-proof?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Concerned about managing costs and timelines effectively?') }}
						</p>
					</div>
				</li>
				<li class="flex flex-col gap-[2rem]">
					<p class="2xs:text-sm lg:text-base text-secondary font-semibold">
						3. {{ t('Looking for a Trusted Partner to Build Your Custom Software?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{ t('How do you bring your unique business ideas to life through software?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Who can provide both development expertise and strategic guidance?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Need long-term support to maintain and update your custom solution?') }}
						</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
