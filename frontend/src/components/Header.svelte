<script>
	import { page } from '$app/stores';
    import { startTransition } from '$lib/stores';
	import { changePage } from "$lib/stores";
    import Linee from './Linee.svelte';
    let onclick = async () => {
        startTransition();
        await new Promise(resolve => setTimeout(resolve, 500));  // Attendi 500ms per la transizione
        window.history.back();
    }
</script>

<header class="py-6 fixed top-0 left-0 z-20 w-screen {$page.url.pathname != 'home' &&
	$page.url.pathname != '/'
		? 'bg-white'
		: ''}">
    <div class="flex items-center justify-around w-100">
        {#if $page.url.pathname === 'home' || $page.url.pathname === '/'}
        <div class="w-3/5 mt-48">
            <img src="/src/static/img/logo_verticale_bianco.png" alt="">
        </div>
        {:else}
        {#if $page.url.pathname != 'home' && $page.url.pathname != '/' && $page.url.pathname != '/menu'}
        <div class="flex items-center" onclick={changePage("/menu")}>
            <img class="w-10" src="/src/static/img/arrow-left.png" alt="">
            <button class="whitespace-nowrap text-2xl font-semibold text-dark"><span>Tutti i menù</span></button>
        </div>
        {/if}
        <div class="h-20">
            <img class="h-full" src="/src/static/img/logo_orizzontale.png" alt="">
        </div>
        <div class="flex items-center justify-center">
            <button onclick={ () => {
                if($page.url.pathname.includes('/eng'))
                {
                    changePage($page.url.pathname.replace('eng/', ''));
                } else {
                    changePage($page.url.pathname);
                }
            }}>
                <img class="mr-6 w-12" src="/src/static/img/italy.png" alt="">
            </button>

            <button onclick={ () => {
                if($page.url.pathname.includes('eng')){
                    changePage($page.url.pathname);
                } else {
                    changePage("/eng"+$page.url.pathname);
                }
            }}>
                <img class="w-12" src="/src/static/img/uk.png" alt="">
            </button>
        </div>
        {/if}
    </div>
    {#if $page.url.pathname != 'home' && $page.url.pathname != '/'}
    <div class="mt-5">
        <Linee/>
    </div>
    {/if}
</header>

<style>

</style>