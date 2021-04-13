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

</script>

<a href="/">назад</a>

<div class="date">{itemPostDate}</div>
<div class="name">{itemName}</div>
<div class="price">{itemPrice}</div>
<div class="photo">
    <img src="{itemPhoto}" alt="">
</div>
<div class="about">{itemAbout}</div>
<div class="geo">{itemGeo}</div>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2237.46002828215!2d37.52987801622137!3d55.889380680590065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b539d0a607b5b3%3A0xdbaf7cd6915a9d0d!2z0YPQuy4g0JvQvtCx0L3QtdC90YHQutCw0Y8sIDE5LCDQnNC-0YHQutCy0LAsIDEyNzQxMQ!5e0!3m2!1sru!2sru!4v1618323212274!5m2!1sru!2sru" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
