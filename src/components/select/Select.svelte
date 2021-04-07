<script>
    export let allCategories;
    export let chosenID;
    export let onChangeVal;
</script>

<select bind:value={chosenID} on:change="{onChangeVal}">
    <option value="0">Все</option>
    {#each allCategories as item (item.categoryID)}
        <option value={item.categoryID}>{item.category}</option>
    {/each}
</select>

<style>
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
</style>