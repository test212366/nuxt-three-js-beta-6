<script lang="ts">

import { Actors } from '~/.nuxt/components';

import {usePageStore} from '~/stores/index'
export default {
	data() {
		return {
			isActive: false
		}
	},
	computed: {
			store() {
				return usePageStore()
			}
		},	
		methods: {
			setActive() {
				this.isActive = !this.isActive
				this.store.setMoney(this.isActive)
			}
		
		}
}
</script>

<template>

		<svg id="sit" :class="isActive && 'activeSit'" :onClick="setActive" width="34" height="28" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C10.4772 0 6 4.47717 6 10V20C6 25.5228 10.4772 30 16 30H26C31.5228 30 36 25.5228 36 20V10C36 4.47717 31.5228 0 26 0H16ZM27.6672 32H20.5H12.3719C11.4633 32 10.5605 31.8535 9.69849 31.5662L9.34021 31.4468C6.65979 30.5532 4.6709 28.2817 4.1394 25.5067L4.07764 25.1838C4.026 24.9144 4 24.6406 4 24.3663V15.5311C4 13.4802 1.28101 12.7582 0.26355 14.5388C0.0908203 14.8411 0 15.1831 0 15.5311V25.3944C0 27.7455 0.695923 30.0438 2 32L2.26526 32.3979C3.38147 34.0723 5.08167 35.2704 7.03394 35.7584C7.67554 35.9189 8.33447 36 8.99585 36H12H20.5H28H30.7313C31.574 36 32.4133 35.8966 33.2308 35.6923C35.0428 35.2393 36.6976 34.3024 38.0184 32.9816L39 32C40.9209 30.0791 42 27.4739 42 24.7573V15.5311C42 15.1831 41.9092 14.8411 41.7365 14.5388C40.719 12.7582 38 13.4802 38 15.5311V24.3663C38 24.6406 37.974 24.9144 37.9224 25.1838L37.8706 25.4543C37.3397 28.2263 35.2479 30.438 32.5099 31.1226L30.293 31.6768C29.4342 31.8915 28.5524 32 27.6672 32Z" fill="#626262"/>
		</svg>
</template>


<style> 
	#sit path{
		transition: .5s ease all;
	}

	.activeSit path {
		fill: #007606;
	}


</style>