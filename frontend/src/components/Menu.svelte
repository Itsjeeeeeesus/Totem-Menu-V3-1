<script>
	let { nome, menu_type, menu_categories } = $props();
	import { onMount } from 'svelte';
	import { products, getProducts } from '$lib/api';
	import Button from './Button.svelte';
	import Prodotto from './Prodotto.svelte';
	import Linee from './Linee.svelte';
	import { locale } from '$lib/stores';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import { writable } from 'svelte/store';
	let prezzo_locale = locale+"_price";
	let active_category = $state(menu_categories[0].split(' - ')[0].toLowerCase().replaceAll(' ', "-"));
// Embla
let emblaApi;
let options = { loop: false, draggable: true};
function onInit(event){
	emblaApi = event.detail
}
</script>


<main class="pt-48 px-32">
	<!-- <h1 class="text-center text-7xl font-black">{nome}</h1> -->
	<!-- <div class="swiper">
			{#each menu_categories as category}
			{#if category.split(' - ')[0] != 'nel nostro banco trovate inoltre'}
				<Button
					text={category.split(' - ')[0].charAt(0).toUpperCase() +
						category.split(' - ')[0].slice(1)}
					type="primary"
					classes="text-2xl py-4 px-8"
				/>
			{/if}
		{/each}
	</div> -->
	<div class="embla" use:emblaCarouselSvelte="{{ options }}" onemblaInit="{onInit}">
			<div class="embla__container">
				{#each menu_categories as category}
					{#if category.split(' - ')[0] != 'nel nostro banco trovate inoltre'}
						<div class="embla__slide">
							<Button
								text={category.split(' - ')[0].charAt(0).toUpperCase() +
									category.split(' - ')[0].slice(1)}
								type="primary"
								classes="text-2xl py-4 px-8 {active_category == category.split(' - ')[0].toLowerCase().replaceAll(' ', "-") ? 'active' : ''}"
								onclick={() => {
									let categoryClass = category.split(' - ')[0].toLowerCase().replaceAll(' ', "-");
									active_category = categoryClass;
									console.log(document.querySelector('.category.' + categoryClass));
									window.scrollTo({
										top: document.querySelector('.category.' + categoryClass).offsetTop - document.querySelector('header').clientHeight - 75,
										behavior: 'smooth'
									});
								}}
							/>
						</div>
					{/if}
				{/each}
			</div>

	</div>

	
	<div class="products">
		{#each menu_categories as category }
		<div class="category mt-10 {category.split(' - ')[0].toLowerCase().replaceAll(' ', "-")}">
			{#if category.split(' - ')[0] != "baby menu'"}
				{#if category.split(' - ')[0] != 'nel nostro banco trovate inoltre'}
				<header class="mb-5">
					<h2 class="text-7xl font-bold mt-10 text-center pb-4">{category.split(' - ')[0].charAt(0).toUpperCase() + category.split(' - ')[0].slice(1)}</h2>
					<Linee />
				</header>
				{/if}
				{#each $products as product}
				<!-- {product} -->
					{#if product.menu_type.includes(menu_type) && product.menu_section.includes(category)}
						<Prodotto nome={product.name} prezzo={product[`${locale}_price`]} allergeni={product.allergens} foto={product.pic} />
					{/if}
				{/each}
				{:else}
				<!-- BABY MENU -->
				<div class="baby-menu w-100 relative rounded-3xl px-5">
					<img class="w-8/12 m-auto scritta" src="/src/static/img/kids-menu.png" alt="">
					<img src="/src/static/img/bg-kids-dec.png" alt="">
					<div class="bg-white w-8/12 absolute right-20 rounded-3xl text-4xl text-right py-5 pr-10 font-adam" style="color: #EB5E15;">
							<p>Pasta al sugo</p>
							<p>Cotoletta di pollo</p>
							<p>Patate fritte</p>
							<p>Acqua 0,5lt</p>
							<div class="flex justify-between mt-4">
								<div class="ml-28 pt-2">
									<p class="font-poppins font-semibold text-lg">Allergeni:</p>
									<div class="flex justify-center items-center mt-2">
										<img class="w-8 mx-2" src="/src/static/img/allergeni/glutine.png" alt="">
										<img class="w-8 mx-2" src="/src/static/img/allergeni/uova.png" alt="">
									</div>
								</div>
								<p>12<br>euro</p>
							</div>
							<div class="ml-auto text-center w-fit mt-3 text-3xl">
							</div>
					</div>
				</div>

			{/if}
		</div>
		{/each}
	</div>


	<div class="allergeni mb-32">
		<h2 class="text-7xl text-center font-bold mb-5 mt-12">Allergeni</h2>
		<div class="flex flex-wrap justify-center text-center">
			{#each ['arachidi', 'frutta a guscio', 'latte', 'molluschi', 'pesce', 'sesamo', 'soia', 'crostacei', 'glutine', 'lupini', 'senape', 'sedano', 'solfiti', 'uova'] as allergene}
			<div class="allergene m-4 flex flex-col items-center">
				<img class="w-12" src="/src/static/img/allergeni/{allergene.replaceAll(' ', "_")}.png" alt="{allergene}">
				<br><p class="font-adam">{allergene}</p>
			</div>
			{/each}
		</div>
	</div>

</main>

<style>

	.baby-menu{
		background: url('/src/static/img/bg-kids.png');
		background-size: cover;
		z-index: -1;
	}
	.baby-menu img{
		transform: translateY(-15%);
	}
	.baby-menu .bg-white{
		z-index: -1;
		bottom: 7%;
	}

	/* Embla */

	.embla {
		overflow: hidden;
	}
	.embla__container {
		display: flex;
	}
	.embla__slide {
		flex: 0 0 auto;
		min-width: 0;
		margin-right: 2rem;
	}
</style>