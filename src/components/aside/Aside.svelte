<script>
    import { categoryStore } from '../store';
    import { pricesRangeStore } from '../pricesValueStore';

    import posts from '../../moc/posts.json';
    import categories from '../../moc/categories.json';
    import types from '../../moc/types.json';

    import Select from '../select/Select.svelte';
    import InputCheckbox from '../inputs/InputCheckbox.svelte';

    const allCategories = categories;
    const allPosts = posts;

    let sortedPrices = [];

    // мин/макс цена
    allPosts.forEach((item) => {
        sortedPrices = [...sortedPrices, item.itemPrice].sort((a, b) => a - b);
    })

    const minPrice = sortedPrices[0];
    const maxPrice = sortedPrices[sortedPrices.length - 1];

    let selected;
    // устанавливаем для стора значение value из селекта
    function updateCategory () {
        categoryStore.set(selected);
    }

    $: curentTypes = [...types.filter(el => el.categoryID == $categoryStore)];

    // следим за чекбоксами
    let checkCurrentType = false;
</script>

<aside>
    <div class="title">фильтры</div>
    <label for="categories" class="descr">Категория товаров</label>
    <Select
        allCategories={allCategories}
        bind:chosenID={selected}
        onChangeVal={updateCategory}
        ></Select>

    <div class="descr">Цена, &#8381;</div>
    <div class="range_form">
        <div class="range_form_item">
            <span>от {minPrice}</span>
            <input type="text" bind:value={$pricesRangeStore.min}>
        </div>
        <div class="range_form_item">
            <span>до {maxPrice}</span>
            <input type="text" bind:value={$pricesRangeStore.max}>
        </div>
    </div>

    

    {#if $categoryStore == 1}
        <div class="descr">Минимальная площадь, м<sup>2</sup></div>
        <input type="text">
        <div class="descr">Количество комнат</div>
        <div class="btn_group">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
        </div>

        <div class="types_list">
            {#each curentTypes as item (item.typeID)}
                <InputCheckbox bind:checkedVal={checkCurrentType}>
                    {item.typeValue} {item.typeID}
                    {checkCurrentType}
                </InputCheckbox>
            {/each}
        </div>
    <!-- {:else if  $categoryStore == 2}
        <div class="descr">Коробка передач</div>
    {:else if $categoryStore == 3} 
        <div class="descr">Минимальный объем оперативной памяти</div> -->
    {/if}

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
    }

    .descr {
        font-weight: 600;
        font-size: 14px;
        color: var(--text-color-light);
        margin-bottom: 10px;
    }

    .range_form {
        display: flex;
        gap: 10px;
    }

    .range_form_item {
        width: 100px;
        margin: 0 0 20px;
        flex: 1;
        span {
            font-size: 12px;
            margin-bottom: 3px;
            display: inline-block;
        }

        &:last-child {
            text-align: right;
        }
    }

    input {
        width: 100%;
        padding: 10px;
        border-radius: 6px;
        border: 1px solid var(--text-color);
        color: var(--text-color);
    }

    .types_list {
        display: flex;
        flex-direction: column;
        margin: 10px 0 20px;
    }

</style>