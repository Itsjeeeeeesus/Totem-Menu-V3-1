<script>
    let {type, text, onclick, classes} = $props();

</script>

{#if type === 'primary'}
<button class="rounded-full text-white font-black bg-primary transition {classes} hover:bg-primary_dark" onclick={onclick}>{text}</button>
{:else if type === 'secondary'}
ciao
{/if}

<style>
    button{
        border: 7px solid transparent;

    }
    .active {
        background-color: transparent!important;
        border-color: #bb1c21;
        color: #bb1c21;
    }
</style>