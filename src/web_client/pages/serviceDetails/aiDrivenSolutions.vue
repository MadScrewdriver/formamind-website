<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
	title: t('Formamind | AI Solutions for Businesses'),
	ogTitle: t('Formamind | AI Solutions for Businesses'),
	description: t(
		'How can AI help my business? Formamind develops custom AI solutions to automate tasks, improve efficiency, and drive business growth. Specializing in Machine Learning, Deep Learning, and NLP, we create AI that works for you.'
	),
	ogDescription: t(
		'How can AI help my business? Formamind develops custom AI solutions to automate tasks, improve efficiency, and drive business growth. Specializing in Machine Learning, Deep Learning, and NLP, we create AI that works for you.'
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
				{{ t('AI-Driven Solutions') }}
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
						1. {{ t('Exploring AI Solutions but Don’t Know Where to Start?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{ t('How can AI enhance your business processes?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{
								t(
									'What type of AI models are best suited for your needs: Machine Learning, Deep Learning, NLP?'
								)
							}}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Unsure how to integrate AI with your existing systems?') }}
						</p>
					</div>
				</li>
				<li class="flex flex-col gap-[2rem]">
					<p class="2xs:text-sm lg:text-base text-secondary font-semibold">
						2. {{ t('Struggling with AI Development Challenges?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{ t('Which AI tools and frameworks should you use for development?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('How can you ensure your AI models are accurate and unbiased?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Worried about data security, privacy, and ethical concerns?') }}
						</p>
					</div>
				</li>
				<li class="flex flex-col gap-[2rem]">
					<p class="2xs:text-sm lg:text-base text-secondary font-semibold">
						3. {{ t('Looking for an Expert Partner to Implement AI in Your Business?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{ t('How do you translate your AI ideas into practical, scalable solutions?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Who can help with both the development and deployment of AI models?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Need ongoing support to keep your AI systems up to date and optimized?') }}
						</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
