<template> 
	<section>
		<p class="actors__title">Actors</p>
	 

		<Swiper
			:modules="[SwiperAutoplay, SwiperEffectCreative]"
			:slides-per-view="3"
			:loop="true"
			
			:autoplay="{
				delay: 8000,
				disableOnInteraction: true,
			}"
			:creative-effect="{
				prev: {
				shadow: false,
				translate: ['-20%', 0, -1],
				},
				next: {
				translate: ['100%', 0, 0],
				},
			}"
		>
		<SwiperSlide v-for="slide in 10" :key="slide">
			<div class="slider__item">
				<img width="130" height="130" src="https://cdn.britannica.com/17/215017-050-0E006005/American-actress-Zoe-Saldana-2018.jpg?w=400&h=300&c=crop" alt="employPic">
				<p class="slider__name">Gretta Cougres</p>
		 
			</div>
		
		</SwiperSlide>
	</Swiper>
	</section>

</template>

<style scoped>
	.slider__item {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.slider__name {
		font-size: 12px;
	}
	.slider__item img {
		object-fit: cover;
		margin-bottom: 15px;
		border-radius: 24px;
	}
	.actors__title {
		margin: 15px 0;
		font-weight: 500;
	}


</style>
 