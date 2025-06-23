<script>
	import Header from '../components/Header.svelte';
	import { page } from '$app/stores';
	import '../app.css';
	let currentUrl = $page.url.pathname; // Current full URL
	let { children } = $props();
	import { showTransition, changePage, firstTimeTransition } from '$lib/stores';
	import Button from '../components/Button.svelte';
	import { onMount } from 'svelte';
	import { getProducts } from '$lib/api';

	let timeoutId;
	const idleTimeout = 90000; // 1 minuto

	function resetScreen() {
		console.log("Torno alla schermata iniziale");
		changePage('/');
	}

	function resetTimer() {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
		resetScreen();
		}, idleTimeout);
	}

	onMount(() => {
		getProducts();
		document.addEventListener('contextmenu', function (event) {
			event.preventDefault();
		});

		document.addEventListener('selectstart', function (event) {
			event.preventDefault();
		});

		document.addEventListener('dragstart', function (event) {
			event.preventDefault();
		});

		window.addEventListener('touchstart', resetTimer);
		window.addEventListener('click', resetTimer);
		window.addEventListener('keydown', resetTimer);
		window.addEventListener('mousemove', resetTimer);

	});
	let isMuted = !firstTimeTransition;
</script>

{@render children()}

<Header />

<div class="transition-screen {$showTransition ? 'active' : ''}">
	<video class={$firstTimeTransition ? '' : 'hidden'} bind:muted={isMuted}>
		<source src="/src/static/img/video.mp4" type="video/mp4" />
	</video>
	<img class={$firstTimeTransition ? 'hidden' : ''} src="/src/static/img/video-frame.jpg" alt="" />
</div>

<audio class="audio-entrata" src="/src/static/audio/audio-entrata.mp3"></audio>
<audio class="audio-uscita" src="/src/static/audio/audio-uscita.mp3"></audio>
<audio class="audio-movimento" src="/src/static/audio/audio-movimento.mp3"></audio>
{#if $page.url.pathname.includes('ingredienti') == false && ($page.url.pathname == '/menu') == false && ($page.url.pathname == '/eng/menu') == false}
	<div class="fixed bottom-5 right-5 text-white">
		<Button
			type="primary"
			text={$page.url.pathname.includes('eng') ? "Ingredients' book" : 'Libro ingredienti'}
			classes="text-2xl py-4 px-8"
			onclick={() => {
				if ($page.url.pathname.includes('eng')) {
					changePage('/eng/ingredienti');
				} else {
					changePage('/ingredienti');
				}
			}}
		/>
	</div>
{/if}

<style>
	.transition-screen {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: white;
		transform: translateX(100%);
		transition: all 0.35s ease-in-out;
		pointer-events: none;
		z-index: 99;
	}
	.transition-screen.active {
		transform: translateX(0);
		pointer-events: auto;
	}
</style>
