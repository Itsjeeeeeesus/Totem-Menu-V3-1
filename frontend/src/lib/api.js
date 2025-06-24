import { writable } from 'svelte/store';

export const products = writable([]);

export async function getProducts(endpoint) {
	if (true) {
		const req = await fetch(`http://127.0.0.1:5000/api`, {
			method: 'GET'
			// headers: {
			//   'Content-Type': 'application/json',
			//   // Puoi aggiungere altre intestazioni se necessario, come per l'autenticazione
			// },
		});

		//   if (!req.ok) {
		//     throw new Error('Errore nella risposta dalla API');
		//   }

		const data = await req.json();
		products.update(() => data);
		// console.log(data);
		products.subscribe((value) => {
			console.log('Prodotti:', value);
		});

		return data;
	}
	// catch (error) {
	//   console.error('Errore nella chiamata API:', error);
	//   throw error;
	// }
}
