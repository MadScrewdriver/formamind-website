<script setup lang="ts">
import { useContactFormStore } from '~/store/contactFormStore/contactFormStore';
const contactFormStore = useContactFormStore();

const toast = useToast();

const handleSubmit = async () => {
	contactFormStore
		.sendEmail()
		.then(() => {
			toast.add({
				severity: 'success',
				summary: 'Message sent',
				detail: "The message was successfully sent, we'll reach out to you as soon as possible",
				life: 5000,
			});
			contactFormStore.sendEmailRequest.status = 'resolved';
			contactFormStore.clearStore();
		})
		.catch((err) => {
			if (err.message == 'Fields cannot be empty.') {
				toast.add({
					severity: 'error',
					summary: 'Error',
					detail: 'Please fill all the fields before sending the message.',
					life: 5000,
				});
			} else if (err.message == 'Invalid Email.') {
				toast.add({
					severity: 'error',
					summary: 'Error',
					detail: 'Please provide a valid email address.',
					life: 5000,
				});
			} else {
        console.log(err);
				toast.add({
					severity: 'error',
					summary: 'Error occured',
					detail: 'Could not send the message, try later.',
					life: 5000,
				});
				contactFormStore.sendEmailRequest.status = 'rejected';
			}
		});
};

onUnmounted(() => {
	contactFormStore.clearStore();
});

const requestStatus = computed(() => contactFormStore.sendEmailRequest.status);
</script>
<template>
	<form class="flex flex-col justify-center items-center gap-[2rem]" @submit.prevent="handleSubmit">
		<input
			v-model="contactFormStore.email"
			:placeholder="$t('What is your email?')"
			type="text"
			class="w-full p-[1rem] h-max text-sm text-black bg-bg rounded-xl"
		/>
		<input
			v-model="contactFormStore.fullName"
			:placeholder="$t('What can we call you?')"
			type="text"
			class="w-full p-[1rem] h-max text-sm text-black bg-bg rounded-xl"
		/>
		<textarea
			v-model="contactFormStore.message"
			:placeholder="$t('What would you like to talk about?')"
			class="w-full p-[1rem] h-[20rem] text-sm resize-none text-black bg-bg rounded-xl"
		/>
		<div class="w-full h-max flex flex-row justify-end">
			<button
				type="submit"
				class="bg-orangeBtnBg w-[16rem] h-[6rem] bg-contain bg-no-repeat bg-center text-sm text-white"
			>
				{{ requestStatus === 'pending' ? $t('Sending...') : $t('Send') }}
			</button>
		</div>
	</form>
</template>
