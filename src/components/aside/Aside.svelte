<script>
    import { categoryStore } from '../store';
    import posts from '../../moc/posts.json';
    import categories from '../../moc/categories.json';

    import Button from '../buttons/Button.svelte';
    import Select from '../select/Select.svelte';

    const allCategories = categories;
    const allPosts = posts;

    let sortedPrices = [];
    
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
            <input type="text">
        </div>
        <div class="range_form_item">
            <span>до {maxPrice}</span>
            <input type="text">
        </div>
    </div>

    <Button on:click>показать</Button>
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

</style>