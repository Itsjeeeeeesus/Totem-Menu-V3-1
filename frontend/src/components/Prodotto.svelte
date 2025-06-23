<script>
	let { nome, prezzo, allergeni, foto } = $props();
	import Button from './Button.svelte';
	if (foto){
		foto = foto.toLowerCase().replaceAll(' ', '-');
	}
</script>

<div class="product mt-4">
	{#if foto}
		<img class="w-full object-cover rounded-lg" src={'/src/static/img/foto-menu/'+foto+'.jpg'} alt={nome} />
	{/if}

	<div class="flex items-center justify-between font-adam text-3xl mt-4">
		<h3 class="max-w-2xl">{nome}</h3>
		<p>{prezzo}</p>
	</div>
	<div class="flex items-center mt-2">
		{#each allergeni.split(' ') as allergene}
			<img class="w-10 mr-2" src={"/src/static/img/allergeni/"+allergene+".png"} alt="">
		{/each}
	</div>
	
</div>
