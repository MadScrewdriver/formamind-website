<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
	title: t('Custom CRM Development | Build a CRM System for Your Business - Formamind'),
	ogTitle: t('Custom CRM Development | Build a CRM System for Your Business - Formamind'),
	description: t(
		'Formamind: Looking to build a custom CRM system? We specialize in CRM software development tailored to your business needs, helping you manage customer relationships effectively.'
	),
	ogDescription: t(
		'Formamind: Looking to build a custom CRM system? We specialize in CRM software development tailored to your business needs, helping you manage customer relationships effectively.'
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
				{{ t('CRM Systems') }}
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
						1. {{ t('Considering a CRM System but Not Sure Where to Begin?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{
								t('How can a CRM system enhance your customer relationships and sales processes?')
							}}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('What features should you look for in a CRM solution?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Worried about the cost and time involved in implementing a CRM system?') }}
						</p>
					</div>
				</li>
				<li class="flex flex-col gap-[2rem]">
					<p class="2xs:text-sm lg:text-base text-secondary font-semibold">
						2. {{ t('Facing Issues with Your Existing CRM System?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{ t('Is your current CRM system outdated or not meeting your business needs?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('How do you integrate your CRM with other marketing and sales tools?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Concerned about data migration, customization, and user training?') }}
						</p>
					</div>
				</li>
				<li class="flex flex-col gap-[2rem]">
					<p class="2xs:text-sm lg:text-base text-secondary font-semibold">
						3. {{ t('Looking for a Partner to Implement or Upgrade Your CRM System?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{
								t('How do you choose the right CRM platform for your industry and business size?')
							}}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Who can provide both implementation expertise and ongoing support?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{
								t('Need help in customizing your CRM to match your specific workflows and goals?')
							}}
						</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
