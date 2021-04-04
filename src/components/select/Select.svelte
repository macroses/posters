<script>
    export let allCategories;
</script>

<select>
    <option value="Все">Все</option>
    {#each allCategories as item}
        <option value={item.category}>{item.category}</option>
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