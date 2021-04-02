<script>
    const categories = [
        "Все",
        "Недвижимость",
        "Ноутбуки",
        "Фотоаппараты",
        "Автомобили"
    ]
</script>

<aside>
    <div class="title">фильтры</div>
    <select name="" id="">
        {#each categories as item}
            <option value={item}>{item}</option>
        {/each}
    </select>
</aside>

<style>
    aside {
		grid-area: aside;
        padding: 20px;
	}

    .title {
        font-size: 18px;
        text-transform: uppercase;
        font-weight: 700;
        margin-bottom: 20px;
    }

    select {
        width: 100%;
        padding: 10px;
        border-radius: 6px;
        border: 1px solid lightgray;
    }
</style>