import { defineStore } from "pinia";


export const usePageStore = defineStore('counter', {
	state: () => ({
		openSit: false,
		currentTime: 0,
		choseSit: 0,
		money: 0

 
	}),
	actions: {
		setMoney(isActive:boolean) {
			if(isActive) {
				// if(this.)
				this.money += 12

			} else {
				this.money -= 12
			}
		},
		setSit() {
			
			this.$state.openSit = !this.$state.openSit
		 
		},
		setTime(time: number) {
	 
			this.$state.currentTime = time
		 
		}
	}
})