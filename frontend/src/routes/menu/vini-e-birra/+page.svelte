<script>
    import Menu from "../../../components/Menu.svelte";
    let menu_categories = [
		'vini bianchi - white wines',
		'vini rossi - red wines',
		'bollicine - sparkling wines',
		'vini rosati - rosé wines',
	];
</script>

<Menu nome="Vini & birra" menu_type='carta_vini' {menu_categories}/>