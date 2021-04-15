<script context="module">
    export async function load (ctx) {
        let posts_id = ctx.page.params.posts_id;
        return { props: { posts_id } }
    }
</script>
<script>
    import posts from '../../moc/posts.json';
    import categories from '../../moc/categories.json';

    export let posts_id;

    let currentPost = posts.filter(item => item.itemID == posts_id)[0];
    let allCategories = categories;

    let { itemPostDate, itemName, itemPrice, itemPhoto, itemAbout, itemGeo} = currentPost;

    let showModal = false;

</script>

<a href="/" class="back_link">назад</a>

<div class="date">{itemPostDate}</div>
<div class="name">{itemName}</div>
<div class="price">{itemPrice}</div>
<div class="photo">
    {#each itemPhoto as imgItem}
        <img src="{imgItem}" alt="">
    {/each}
</div>

<div class="about">
    <div class="descr">Описание:</div>
    {itemAbout}
</div>
<div class="geo">{itemGeo}</div>

<button on:click="{() => showModal = true}">modal</button>



<style lang="scss">
    .photo {
        max-width: 500px;
        margin-bottom: 25px;
        img {
            width: 100%;
            
        }
    }

    .descr {
        font-weight: 600;
        font-size: 14px;
        color: var(--text-color-light);
        margin-bottom: 10px;
    }

    .back_link {
        color: var(--bg-color);
        margin-bottom: 20px;
        display: inline-block;
    }

    .about {
        font-weight: bold;
        color: #000;
        line-height: 1.1;
    }


</style>