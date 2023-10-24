<template>
	<div class="wrapper__white"> 

	</div>
	<section class="wrapper__slides">
		<Swiper
		 
			:slides-per-view="1.4"
			:loop="true"
			:centeredSlides="true"
			:breakpoints="{ 1260:{ slidesPerView:1.7, }, 925: {slidesPerView: 2.2}, 760: {slidesPerView: 1.8}, 460: {slidesPerView: 1.5} }"
 
			:autoplay="{
				delay: 8000,
				disableOnInteraction: true,
			}"
			 
		>
		<SwiperSlide v-for="slide in 10" :key="slide">
			<div class="main__welcome">
				<div class="main__card">
					<img src="https://rukminim2.flixcart.com/image/850/1000/k9loccw0/poster/4/v/v/large-joker-face-wall-posters-for-bedroom-living-room-office-pr-original-imafrczqbrnzabkz.jpeg?q=90" alt="img-film">
					<h6>Joker</h6>
				
					<div class="card__genres">
						<Button>Action</Button>
						<Button>Drama</Button>
						<Button>History</Button>
					</div>
					<div class="card__score">
						<p>9.0</p>
							<div class="main__stars">
							<svg height="16px" width="16px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
								viewBox="0 0 47.94 47.94" xml:space="preserve">
							<path style="fill:#ED8A19;" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
								c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
								c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
								c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
								c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
								C22.602,0.567,25.338,0.567,26.285,2.486z"/>
							</svg>
							<svg height="16px" width="16px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
								viewBox="0 0 47.94 47.94" xml:space="preserve">
							<path style="fill:#ED8A19;" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
								c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
								c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
								c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
								c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
								C22.602,0.567,25.338,0.567,26.285,2.486z"/>
							</svg>
							<svg height="16px" width="16px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
								viewBox="0 0 47.94 47.94" xml:space="preserve">
							<path style="fill:#ED8A19;" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
								c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
								c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
								c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
								c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
								C22.602,0.567,25.338,0.567,26.285,2.486z"/>
							</svg>
							<svg height="16px" width="16px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
								viewBox="0 0 47.94 47.94" xml:space="preserve">
							<path style="fill:#ED8A19;" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
								c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
								c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
								c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
								c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
								C22.602,0.567,25.338,0.567,26.285,2.486z"/>
							</svg>
							<svg height="16px" width="16px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
								viewBox="0 0 47.94 47.94" xml:space="preserve">
							<path style="fill:#dddddd;" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
								c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
								c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
								c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
								c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
								C22.602,0.567,25.338,0.567,26.285,2.486z"/>
							</svg>
						</div>
					</div>
					<p class="card__director">Director / Nicolas Meownic</p>
					<div class="card__more">
						<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M18 12H18.01M12 12H12.01M6 12H6.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12ZM7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12Z" stroke="#4e4e4e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>

					</div>
					<button class="main__buy" :onClick="setOpen">BUY TICKET</button>
				</div>
				<div class="main__wrapper">
					<div class="main__description">
						<h6>Joker</h6>
						<p class="main__intro">Introduction</p>
						<p class="main__desc-target">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus architecto illum incidunt asperiores! Nulla cumque, illo maxime laborum soluta veritatis, quisquam deleniti optio hic, asperiores provident fugiat corrupti id? Dolorum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque voluptatibus non architecto officia, laudantium, quaerat in temporibus numquam soluta hic est et assumenda mollitia nihil, ullam vel esse voluptatum ab obcaecati? Pariatur possimus suscipit ex similique eveniet doloremque perferendis enim!
						</p>
						<p class="main__desc-target">	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae cum distinctio, ipsam ipsa aut eius corporis
							libero ut vero expedita deleniti reiciendis dicta ratione veritatis, voluptate repudiandae harum! Voluptas modi itaque nostrum. Impedit dolorum libero amet nemo modi deserunt ipsa.
						</p>
					
						<!-- <Actors/> -->
						<!-- <Actors/> -->
			
		



						
					</div>
					<button :onClick="setOpen">BUY TICKET</button>
				</div>
				
		
			</div>
		
		</SwiperSlide>
	</Swiper>



		 

	</section>

</template>

<style scoped>
		.wrapper__slides {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
		 
		}
		.wrapper__white {
			display: none;
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			height: 300px;
			backdrop-filter: blur(3px);
			background-color: #00000034;
			z-index: -1;
		}

	 	.main__wrapper {
			width: 67%;
			position: relative;
		}
		.main__buy {
			width: 100%;
			font-weight: 500;
			transform: translateY(15px);
			color: #fff;
			display: none;
			height: 52px;
			z-index: 1;
			border-radius: 5px;
			border: none;
			background: linear-gradient(269deg, #036724 28%, rgb(0, 162, 143) 100.18%);
		}
		.main__wrapper button {
 
			width: 94.5%;
			font-weight: 600;
			color: #fff;
			position: absolute;
			bottom: -14px;
			right: 15px;
			height: 52px;
			z-index: 1;
			border-radius: 5px;
			border: none;
			background: linear-gradient(269deg, #036724 28%, rgb(0, 162, 143) 100.18%);
		}
		.main__description {
			height:100%;
			overflow-y: auto;
			padding: 0 20px;
			padding-bottom: 80px;

		}
		.main__description h6 {
			font-size: 21px;
			margin-bottom: 40px;
			text-align: center;
			font-weight: 600;
		}

		.main__card h6 {
			display: none;
			font-size: 21px;
			margin:	10px 0;
			text-align: center;
			font-weight: 600;
		}
		.main__intro {
			font-weight: 500;
			font-size: 16px;
			margin-bottom: 5px;
		}
		.main__desc-target {
			margin-top: 20px;
			font-size: 15px;
			line-height: 22px;
		}
	.main__welcome {
		background-color: #fff;
		padding: 30px;
		max-width: 1000px;
		transition: .6s ease all;
		/* transform: scale(.9) translateY(36px); */
		/* height: 630px; */
		/* width: 100%; */
		 
		/* position: absolute; */
		/* left: 50%; */
		/* bottom: 0; */
		/* transform: translateX(-50%); */
		border-radius: 35px 35px 0 0;

		display: flex;

 
	}
	.card__more {
		display: flex;
		/* align-items: center; */
		justify-content: center;
		margin-top: 20px;
	}
	.card__director {
		text-align: center;
		margin-top: 10px;
		font-size: 12px;
	 
	}
	.card__score p {
		margin-right: 10px;
		font-size: 16px;
		font-weight: 500;
	}
	.card__score {
		margin-top: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.card__genres {
		/* margin-top: 100; */
		margin-top: 5px;
		display: flex;
		justify-content: center;
	}
	.card__genres button {
		padding: 8px 15px;
		margin: 4px;
		border-radius: 20px;
		border: 1px solid #bbbbbb;
		color: #000;
		font-size: 11px;
		background-color: transparent;
	}
	.main__stars {
 
		display: flex;
		justify-content: center;
	}
	.main__welcome img {
		 width: 300px;
		 border-radius: 35px;
		
	}

	@media screen and (max-width: 1740px) {
		
		.main__welcome {
			max-width: 800px;
		}
	}
	@media screen and (max-width: 1414px) {
		.main__welcome {
			max-width: 700px;
		}
	 
		.main__desc-target {
			font-size: 12px;
		}
	}
	@media screen and (max-width: 1260px) {
		
		.main__wrapper {
			display: none;
		}
		
		.main__card h6 {
			display: block;
		}
		.card__director {
			display: none;
		}
		.main__buy {
			display: block;
		}
	}
	@media screen and (max-width: 760px) {
		.main__buy {
			font-size: 11px;
		}
		.wrapper__white  {
			display: block;
		}
		.main__welcome {
			padding: 25px;
		}
	}
	@media screen and (max-width: 640px) {
		.main__card img {
			width: 250px;
		}
	}
	@media screen and (max-width: 540px) {
		.main__card img {
			width: 235px;
		}
		.main__card h6 {
			font-size: 18px;
		}


		.card__genres button {
			padding: 5px 10px;
		}
		.main__buy {
			height: 40px;
		}
		.main__stars svg {
			height: 13px;
			width: 13px;
		}

	}


</style>


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
			setOpen() {
				this.store.setSit()
			},
	 
		
		}
}

</script>
