<script>
	import Linee from '../../components/Linee.svelte';
	import { changePage } from '$lib/stores';
</script>

<div class="h-screen w-full pt-48 text-center">
	<h1 class="text-dark text-6xl font-bold">Cosa ti stuzzica<br />di più oggi?</h1>
	<div class="contenitore-linee mt-20 w-4/5">
		<Linee />
	</div>
	<div class="mx-auto mt-10 flex w-4/5 flex-col items-center justify-around">
		{#each ['Colazione', 'Ristorante', 'Aperitivi', 'Vini & birra'] as nome_menu}
			<button
				onclick={changePage(
					'/menu/' + nome_menu.replaceAll(' & ', ' e ').replaceAll(' ', '-').toLowerCase()
				)}
				class="align-center relative mb-6 flex h-72 w-full justify-center rounded"
				style="background: linear-gradient( 0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) ), url(/src/static/img/{nome_menu.replaceAll(' & ', ' e ').replaceAll(' ', '-').toLowerCase()}.png) no-repeat center center;
background-size: cover;"
			>
				<h2
					class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-6xl font-black text-white"
				>
					{nome_menu}
				</h2>
			</button>
		{/each}
	</div>
</div>

<style>
	.contenitore-linee {
		margin: 2rem auto 0 auto;
	}
	.rounded {
		border-radius: 5rem;
	}
</style>
