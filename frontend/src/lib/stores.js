import { writable } from 'svelte/store';
import { onMount, tick } from 'svelte';
import { goto } from '$app/navigation';

export const locale = 'olbia';

export const changePage = async (newPage) => {
	startTransition();
	await new Promise((resolve) => setTimeout(resolve, 500)); // Attendi 500ms per la transizione
	await goto(newPage);
};

export const showTransition = writable(false);
export const firstTimeTransition = writable(true);

// Transition

// Funzione per attivare la transizione
export const startTransition = async () => {
	showTransition.set(true);
	let firstTime;
	firstTimeTransition.subscribe((value) => {
		firstTime = value;
	});

	if (firstTime) {
		document.documentElement.querySelector('.audio-entrata').play();
		setTimeout(() => {
			document.querySelector('video').play();
		}, 750);
		await tick(); // Assicura che la transizione inizi
		setTimeout(() => {
			showTransition.set(false);
			setTimeout(() => {
				document.querySelector('video').currentTime = 0;
			}, 500);
			document.querySelector('video').pause();
			firstTimeTransition.set(false);
			document.documentElement.querySelector('.audio-uscita').play();
		}, 8000); // Tempo per cui l'animazione sarà visibile
	} else {
		document.documentElement.querySelector('.audio-entrata').play();
		setTimeout(() => {
			showTransition.set(false);
			document.documentElement.querySelector('.audio-uscita').play();
		}, 2750);
	}
};
