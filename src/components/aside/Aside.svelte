<script>
    import data from '../../moc/data.json';

    const allItems = data;
    const allResults = 'Все';

    let sortedPrices = [];

    for(let i = 0; i < allItems.length; i++) {
        sortedPrices = [...sortedPrices, allItems[i].price].sort((a,b) => a - b);
    }

    const minPrice = sortedPrices[0];
    const maxPrice = sortedPrices[sortedPrices.length - 1];

</script>

<aside>
    <div class="title">фильтры</div>
    <label for="categories" class="descr">Категория товаров</label>
    <select>
        <option value={allResults}>{allResults}</option>
        {#each allItems as item}
            <option value={item.category}>{item.category}</option>
        {/each}
    </select>

    <div class="descr">Цена, &#8381;</div>
    <div class="range_form">
        <div class="range_form_item">
            <span>от {minPrice}</span>
            <input type="text">
        </div>
        <div class="range_form_item">
            <span>до {maxPrice}</span>
            <input type="text">
        </div>
    </div>

</aside>

<style lang=scss>
    aside {
		grid-area: aside;
        padding: 20px;
	}

    .title {
        font-size: 18px;
        text-transform: uppercase;
        font-weight: 700;
        margin-bottom: 20px;
        color: var(--text-color);
    }

    select {
        width: 100%;
        padding: 10px;
        border-radius: 6px;
        border: 1px solid var(--text-color);
        margin: 10px 0 20px;
        color: var(--text-color);

        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }

    .descr {
        font-weight: 600;
        font-size: 14px;
        color: var(--text-color-light);
    }

    .range_form {
        display: flex;
        gap: 10px;
    }

    .range_form_item {
        width: 100px;
        margin: 10px 0 20px;
        flex: 1;
        span {
            font-size: 12px;
        }
    }

    input {
        width: 100%;
        padding: 10px;
        border-radius: 6px;
        border: 1px solid var(--text-color);
        color: var(--text-color);
    }

</style>