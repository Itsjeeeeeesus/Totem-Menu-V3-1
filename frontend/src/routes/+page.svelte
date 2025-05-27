<script>
	import { changePage } from '$lib/stores';
	import Button from '../components/Button.svelte';
	import { page } from '$app/stores';
</script>

<main class="flex h-screen w-screen items-center justify-center">
	<div class="text-center">
		<h1 class="mb-40 text-8xl font-extrabold text-white">
			La vita è troppo<br />breve per mangiare<br />e bere male
		</h1>
		<Button
			type="primary"
			text="Scopri il nostro menù!"
			classes="text-5xl py-10 px-14"
			onclick={() => {
				changePage('/menu', $page.url.pathname);
			}}
		/>
	</div>
</main>

<style>
	main {
		/* background-image: url('/src/static/img/sfondo-1.jpg');
		background-size: cover;
		background-position: center; */
		background: linear-gradient( 0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.55) ), url('../static/img/sfondo-1.jpg') no-repeat center center;
		background-size: cover;

	}
	/* .text-10xl {
        font-size: 10rem;
        line-height: 1;
    } */
</style>
