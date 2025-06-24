<script>
	let { nome, prezzo, allergeni, foto } = $props();
	import Button from './Button.svelte';
</script>

<div class="product mt-8">
	{#if foto}
	<div class="flex w-full justify-center">
		<div class="flex h-full">
			<div class="h-full w-5 bg-dark"></div>
			<div class="h-full w-5 bg-white"></div>
			<div class="h-full w-5 bg-primary"></div>
		</div>
		<img class="w-9/12 object-cover" src={'/src/static/img/foto-menu/'+foto+'.jpg'} alt={nome} />
		<div class="flex h-full">
			<div class="h-full w-5 bg-dark"></div>
			<div class="h-full w-5 bg-white"></div>
			<div class="h-full w-5 bg-primary"></div>
		</div>
	</div>
	{/if}

	<div class="flex items-center justify-between font-adam text-3xl mt-8">
		<h3 class="max-w-2xl">{nome}</h3>
		<p>{prezzo}</p>
	</div>
	<div class="flex items-center mt-2">
		{#each allergeni.split(' ') as allergene}
			<img class="w-10 mr-2" src={"/src/static/img/allergeni/"+allergene+".png"} alt="">
		{/each}
	</div>
	
</div>

<style>
	.h-full.w-5{
		height: 618px!important;
	}
</style>