<script>
	import { products } from "$lib/api";
</script>
{#each $products as product}
    <div class="w-100 h-100 bg-primary">
        {product.name_en}
    </div>
    
{/each}