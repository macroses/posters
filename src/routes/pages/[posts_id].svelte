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

</script>

<p>{currentPost.itemName}</p>