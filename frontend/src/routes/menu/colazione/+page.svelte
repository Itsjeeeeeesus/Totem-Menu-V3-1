<script>
    import Menu from "../../../components/Menu.svelte";
    let menu_categories = [
		'caffetteria - cafeteria',
		'pasticceria - bakery',
		// 'colazione internazionale - international breakfast',
		'gluten free e vegan - gluten free and vegan',
		// 'pancakes - pancakes',
		'yogurt - yogurt',
		'frutta, spremute e succhi - fruit and juices',
		"nel nostro banco trovate inoltre - you'll also find"
	];
</script>

<Menu nome="Colazione" menu_type='colazione' {menu_categories}/>