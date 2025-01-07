export const useGlobalStore = defineStore('global', {
	state: () => ({
		processes: { loading: { isLoading: true } } as { [key: string]: { isLoading: boolean } },
		isMenuVisible: false as boolean,
	}),
	getters: {
		isLoading(state) {
			if (Object.keys(state.processes).length) return true;
			return false;
		},
	},
	actions: {
		setLoadingProcess(name: string) {
			this.processes[name] = { isLoading: true };
			if ('loading' in this.processes) delete this.processes['loading'];
		},
		removeLoadingProcess(name: string) {
			// eslint-disable-next-line @typescript-eslint/no-dynamic-delete
			delete this.processes[name];
		},
		setMenuVisibility(visibility: boolean) {
			this.isMenuVisible = visibility;
		},
	},
});
