<script lang="ts">

import { Actors } from '~/.nuxt/components';

import {usePageStore} from '~/stores/index'
export default {
	computed: {
			store() {
				return usePageStore()
			}
		},	
		methods: {
			setTime(time: number) {
				this.store.setTime(time)
			}
		
		}
}
</script>

<template> 
	<section :class="store.openSit && 'show'">
		<div class="wrapper__sits">
				<div class="screen">
					<svg width="1029" height="60" viewBox="0 0 1029 60" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M506.444 33.0919H728.153H885.77C903.255 33.0919 920.712 34.4742 937.979 37.226L947.332 38.7165C958.067 40.4273 968.653 42.9691 978.994 46.3191L1007.28 55.4815C1008.34 55.8253 1009.34 56.325 1010.26 56.9642V56.9642C1020.57 64.1742 1033.13 51.597 1025.91 41.2949L1023.18 37.3958C1022.08 35.8213 1020.61 34.5329 1018.91 33.6374L995.921 21.5375C987.669 17.1941 978.936 13.8325 969.901 11.5213L940.5 4L912.038 0H809.196H706.355H513.526H294.988H192.146H93.1561C82.107 0 71.1089 1.49881 60.4628 4.45544L60.1164 4.55163C53.0541 6.51297 46.1893 9.12632 39.6105 12.358L33.3529 15.4319C25.1799 19.4467 17.7674 24.8523 11.4467 31.4071L8.02915 34.9513C7.67684 35.3166 7.35142 35.707 7.05541 36.1192L1.82937 43.3984C-3.48961 50.807 4.96114 60.2717 12.9226 55.8227V55.8227C13.307 55.6079 13.7074 55.4232 14.1203 55.2702L30.55 49.1823C44.7229 43.9308 59.3702 40.0615 74.2877 37.6285L79.2228 36.8235C94.4511 34.3398 109.855 33.0919 125.285 33.0919H279.949H506.444Z" fill="url(#paint0_linear_511_486)" fill-opacity="0.384314"/>
					<defs>
					<linearGradient id="paint0_linear_511_486" x1="521" y1="-67.5" x2="521" y2="36.5" gradientUnits="userSpaceOnUse">
					<stop stop-color="white"/>
					<stop offset="1" stop-color="#626262" stop-opacity="0"/>
					</linearGradient>
					</defs>
					</svg>

		</div>
		<div class="sit">
			<div class="wrapper__left">
				<div>
					<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
				 
				</div>
				<div class="sit__left">
					<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
			</div>
			</div>	
			<div class="sit__wrapper">
				<div>
			 
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
				</div>
				<div class="sit__center">
					
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>	
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
					<Sit/>
		 

			</div>
			</div>
			
			<div class="wrapper__right">
				 
					<div class="sit__right">
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
				
			</div>
				<div>
					<Sit/>
						<Sit/>
						<Sit/>
						<Sit/>
				 
				</div>

			</div>
		
	 

		</div>
		
			<div class="points">
				<div class="wrapper__point">
					<div class="point val"></div>
					<p>Available</p>

				</div>
				<div class="wrapper__point">
					<div class="point tak"></div>
					<p>Taken</p>

				</div>
				<div class="wrapper__point">
					<div class="point sel"></div>
					<p>Selected</p>

				</div>
				
			</div>
			<div class="select">
				<div class='select__date'>
					<p>May 12 <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M7 10L12 15L17 10" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg></p>

				</div>
				<div id="select__time" >
					<p :onClick="() => setTime(0)" :class="store.currentTime === 0 && 'active' ">12:30</p>
					<p :onClick="() => setTime(1)" :class="store.currentTime === 1 && 'active' ">15:30</p>
					<p :onClick="() => setTime(2)" :class="store.currentTime === 2 && 'active' ">18:30</p>
					<p :onClick="() => setTime(3)"  :class="store.currentTime === 3 && 'active' ">20:30</p>

				</div>
			</div>
			<button id="button__buy" :class="store.money && 'buy' "> <p>Buy ${{store.money}}</p></button>

		</div>	
 

	</section>

</template>


<style scoped>
	.buy {
		border: none;
		margin-top: 1px;
		background: linear-gradient(269deg, #036724 28%, rgb(0, 162, 143) 100.18%);
		color: #fff !important;
	}
	#button__buy {
		width: 70%;
			font-weight: 500;
	 
			margin-top: 60px;
		 
			height: 52px;
			z-index: 1;
		border-radius: 10px;
		color: #333333;
		border: 1px solid #333333;
		background-color: transparent;
		transition: .6s ease all;
	}
	#select__time {
		display: flex;
		width: 300px;
		justify-content: space-between;
	}
	#select__time p{
		color: #fff;
		font-size: 12px;
		padding: 5px 17px;
		border-radius: 6px;
		transition: .5s ease all;
		margin: 0 3px;
	}
	.active {
		background-color: #007606;
	}
	.select {
		width: 60%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 60px;
	}
	.select__date p:first-child {
		color: #fff;
		display: flex;
		align-items: center;
		font-size: 14px;
	}
	.select__date p:first-child svg {
		margin-left: 10px;
	}
	.wrapper__point {
		display: flex;
		align-items: center;

	}
	.wrapper__point p {
		font-size: 13px;
	}
	.tak {
		background-color: #1f1f1f;
	}
	.val {
		background-color: #626262;
	}
	.sel {
		background-color: #007606;
	}
	.point {
		margin-right: 10px;
		height: 15px;
		width: 15px;
		border-radius: 50%;
 
	}
	.points {
		width: 60%;
		display: flex;
		justify-content: space-between;
		margin-top: 50px;
	}
	.points p {
		color: #fff;
	}
	.wrapper__sits {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}
	.sit__wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.screen {
		margin-bottom: 100px;
	}
	.sit__wrapper > div:first-child {
		display: flex;
		justify-content: space-between;
		width: 228px;
		margin-bottom: 5px;
	}
.wrapper__left {
		display: flex;
		/* flex-direction: column; */
	}
	.wrapper__right {
		display: flex;

	}
	.wrapper__left > div:first-child {
		display: flex;
		flex-direction: column;
		max-height: 145px;
		margin-right: 4px;
		justify-content: space-between;
		/* height: 10px; */
	}
	.wrapper__right > div:nth-child(2) {
		display: flex;
		flex-direction: column;
		max-height: 145px;
		margin-left: 4px;
		justify-content: space-between;
		/* height: 10px; */
	}
	.sit__left {
		max-width: 150px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-right: 80px;
	}
	.sit__right {
		max-width: 150px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-left: 80px;
	}
	.sit {
		display: flex;

	}
	.sit__center {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		height: 310px;
		max-width: 305px;
	}
	section {
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		opacity: 0;
		transition: .5s ease all;
		z-index: -2;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: #000000;
	}

	@media screen and (max-width: 1160px) {
		.screen svg {
			width: 800px;
			height: 50px;
		}
		.sit svg {
			height: 20px;
			width: 26px;
		}
		.sit__center {
			max-width: 250px;
		}
		.sit__wrapper > div:first-child {
			width: 193px;
			margin-bottom: 10px;
		}
		.sit__right {
			width: 120px;
			margin-left: 50px;
		}
		.sit__left {
			width: 120px;
			margin-right: 50px;
		}
		.wrapper__point p {
			font-size: 11px;
		}	


	}
	
	@media screen and (max-width: 770px) {
		.screen svg {
			width: 400px;
			height: 30px;
			
		}
		.screen {
			margin-bottom: 40px;
		}
		.sit svg {
			height: 16px;
			width: 22px;
		}
		.sit__center {
			width: 190px;
			height: 200px;
		}
		.sit__wrapper > div:first-child {
			width: 142px;
			margin-bottom: 10px;
		}
		.sit__right {
			width: 100px;
			height: 210px;
			margin-left: 20px;
		}
		.sit__left {
			width: 100px;
			height: 210px;
			margin-right: 20px;
		}
		.wrapper__point p {
			font-size: 11px;
		}	
		.wrapper__left > div:first-child {
 
			max-height: 95px;
 
		}
		.wrapper__right > div:nth-child(2) {
			max-height: 95px;
			/* height: 10px; */
		}
		#button__buy {
			width: 100%;
		}
		.select {
			width: 100%;
		}
		.select__date p:first-child {
	 
			font-size: 12px;
		}

	}

	@media screen and (max-width: 540px) {
		 .sit {
			transform: scale(0.7);
		 }
		 .select {
			width: 70%;
			margin-top: 30px;
		}
		.points {
			width: 70%;
			margin-top: 0;
		}
		#select__time {
			width: unset;
		}
		#select__time p {
			font-size: 9px;

		}
		.select__date p:first-child svg {
			width: 14px;
			height: 14px;
		}
		.select__date p:first-child {
			
			font-size: 11px;
		}
		#button__buy {
			width: 70%;

		}
	}

</style>