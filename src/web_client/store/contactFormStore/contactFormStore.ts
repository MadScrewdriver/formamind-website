import axios from 'axios';

const validateEmail = (email: string) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};

export const useContactFormStore = defineStore('contactForm', {
	state: () => ({
		email: '',
		fullName: '',
		message: '',
		sendEmailRequest: {
			status: null as null | 'pending' | 'resolved' | 'rejected',
		},
	}),
	getters: {},
	actions: {
		async sendEmail() {
			const runtimeConfig = useRuntimeConfig();

			if (!this.email || !this.fullName || !this.message) {
				throw new Error('Fields cannot be empty.');
			}

			if (!validateEmail(this.email)) {
				throw new Error('Invalid Email.');
			}

			const requestData = new FormData();
			requestData.set('email', this.email);
			requestData.set('name', this.fullName);
			requestData.set('content', this.message);
			this.sendEmailRequest.status = 'pending';
			await axios.post(runtimeConfig.public.apiBase + 'contact-form/', requestData, {
				withCredentials: true,
			});
		},
		clearStore() {
			this.email = '';
			this.fullName = '';
			this.message = '';
			this.sendEmailRequest = {
				status: null as null | 'pending' | 'resolved' | 'rejected',
			};
		},
	},
});
