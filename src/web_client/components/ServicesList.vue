<script setup lang="ts">
//const servicesList = [
//	{name: 'Web applications', link: "webApplications" },
//	{name: 'AI-driven solutions', link: "aiDrivenSolutions" },
//	{name: 'Business process automatization', link: "businessProcessAutomation" },
//	{name: 'Legacy systems modernization', link: "legacySystems" },
//	{name: 'Mobile apps', link: "mobileApps" },
//	{name: 'Desktop applications', link: "desktopApps" },
//	{name: 'Custom software solutions', link: "customSoftwareSolutions" },
//	{name: 'ERP systems', link: "ERPSystems" },
//	{name: "E-commerce", link: "eCommerce"},
//	{name: "Web Scraping", link: "webScraping"},
//	{name: "CRM Systems", link: "CRMSystems"},
//	{name: "Websites", link: "websites"},
//	{name: "Workshops", link: "workshops"},
//];
</script>
<template>
	<div class="flex justify-center flex-row flex-wrap 2xs:gap-8 md:gap-16">
		<ServiceItem :service-name="$t('Web applications')" link="webApplications" />
		<ServiceItem :service-name="$t('AI-driven solutions')" link="aiDrivenSolutions" />
		<ServiceItem
			:service-name="$t('Business Process Automation')"
			link="businessProcessAutomation"
		/>
		<ServiceItem :service-name="$t('Mobile apps')" link="mobileApps" />
		<ServiceItem :service-name="$t('Desktop applications')" link="desktopApps" />
		<ServiceItem :service-name="$t('Custom software solutions')" link="customSoftwareSolutions" />
		<ServiceItem :service-name="$t('ERP systems')" link="ERPSystems" />
		<ServiceItem :service-name="$t('E-commerce')" link="eCommerce" />
		<ServiceItem :service-name="$t('Legacy systems modernization')" link="legacySystems" />
		<ServiceItem :service-name="$t('Web Scraping')" link="webScraping" />
		<ServiceItem :service-name="$t('Websites')" link="websites" />
		<ServiceItem :service-name="$t('CRM Systems')" link="CRMSystems" />
		<ServiceItem :service-name="$t('Workshops')" link="workshops" />
	</div>
</template>
