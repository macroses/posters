<script context="module">
    export async function load (ctx) {
        let posts_id = ctx.page.params.posts_id;
        return { props: { posts_id } }
    }
</script>
<script>
    import posts from '../../moc/posts.json';

    export let posts_id;

    let currentPost = posts.filter(item => item.itemID == posts_id)[0];

    let { itemPostDate, itemName, itemPrice, itemPhoto, itemAbout, itemGeo} = currentPost;

    let currentIndex = 0;

    const getIndex = (i) => {
        currentIndex = i;
    }

</script>

<a href="/" class="back_link">назад</a>

<div class="date">{itemPostDate}</div>
<div class="name">{itemName}</div>
<div class="price">{itemPrice}</div>
<img src={itemPhoto[currentIndex]} alt="" class="main_img">
<div class="photo">
    {#each itemPhoto as imgItem, index}
        <img src="{imgItem}" alt="" on:click={() => getIndex(index)}>
    {/each}
</div>

<div class="about">
    <div class="descr">Описание:</div>
    {itemAbout}
</div>
<div class="geo">{itemGeo}</div>




<style lang="scss">
    .main_img {
        max-width: 500px;
        height: 400px;
    }

    .photo {
        max-width: 500px;
        margin-bottom: 25px;
        display: flex;

        img {
            width: 100%;
            max-width: 100px;    
            cursor: pointer;
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
        margin-top: 20px;
    }

    .about {
        font-weight: bold;
        color: #000;
        line-height: 1.1;
    }

    .date {
        color: var(--text-color-light);
        margin-bottom: 20px;
    }
    
    .name {
        font-size: 35px;
        font-weight: bold;
    }
</style>