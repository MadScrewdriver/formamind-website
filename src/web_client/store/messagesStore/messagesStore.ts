export const useMessagesStore = defineStore('messages', {
	state: () => ({
		errors: [] as { message: string }[],
		successMessages: [] as { message: string }[],
		warnings: [] as { message: string }[],
	}),
	getters: {},
	actions: {
		addError(error: { message: string }) {
			this.errors.push(error);
		},
		popError() {
			this.errors.shift();
		},
		addSuccessMessage(successMessage: { message: string }) {
			this.successMessages.push(successMessage);
		},
		popSuccessMessage() {
			this.successMessages.shift();
		},
	},
});
