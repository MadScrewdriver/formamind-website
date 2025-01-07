<script setup lang="ts">
const { link, icon } = defineProps({
	link: { type: String, required: true },
	icon: { type: Object as PropType<unknown>, required: true },
});

const monochromeSvg = ref(undefined);
const monochromeGroup = ref(undefined);
const isFilterApplied = ref(true);

const removeFilter = () => {
	isFilterApplied.value = false;
};

const applyFilter = () => {
	isFilterApplied.value = true;
};
</script>
<template>
	<a :href="link" class="h-full w-min" target="_blank" aria-label="website of technology">
		<svg
			:ref="monochromeSvg"
			class="monochrome-svg h-full w-min"
			xmlns="http://www.w3.org/2000/svg"
			@mouseover="removeFilter"
			@mouseout="applyFilter"
		>
			<defs>
				<filter id="blueMonochrome">
					<feColorMatrix
						type="matrix"
						values="0.11 0.11 0.11 0 0
						0.11 0.11 0.11 0 0
						0.11 0.11 0.11 0 1
						0 0 0 1 0"
					/>
				</filter>
			</defs>
			<g :ref="monochromeGroup" :filter="isFilterApplied ? 'url(#blueMonochrome)' : ''">
				<icon class="w-full h-full" />
			</g>
		</svg>
	</a>
</template>
