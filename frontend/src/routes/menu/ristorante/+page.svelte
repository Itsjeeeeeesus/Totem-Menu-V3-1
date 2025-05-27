<script>
    import Menu from "../../../components/Menu.svelte";
    let menu_categories = ['antipasti - starters', 'primi piatti - first courses', 'la carne - meat dishes', 'il mare - seafood', 'le insalate - salads', 'desserts - desserts', "baby menu' - baby menu"];
</script>

<Menu nome="Ristorante" menu_type='pranzo/cena' {menu_categories}/>