<script>
	let { nome, prezzo, allergeni, foto } = $props();
	import Button from './Button.svelte';
</script>

<div class="product mt-4">
	<!-- <img src="../static/img/colazione.png" alt="" /> -->

	<div class="flex items-center justify-between font-adam text-3xl">
		<h3 class="max-w-2xl">{nome}</h3>
		<p>{prezzo}</p>
	</div>
	<div class="flex items-center mt-2">
		{#each allergeni.split(' ') as allergene}
			<img class="w-10 mr-2" src={"/src/static/img/allergeni/"+allergene+".png"} alt="">
		{/each}
	</div>
	
</div>
