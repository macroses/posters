<script>
    import posts from '../../moc/posts.json';
    import PostList from '../posts/PostList.svelte';
    
    let allPosts = posts;
    

    function sortByPrice () {
        allPosts = allPosts.sort((a, b) => parseInt(a.itemPrice) > parseInt(b.itemPrice) ? 1 : -1);
    }

    function sortByViews () {
        allPosts = allPosts.sort((a, b) => parseInt(a.viewsCount) > parseInt(b.viewsCount) ? -1 : 1);
    }

    function sortByDate () {
        allPosts = allPosts.sort((a, b) => {
            let c = new Date(a.itemPostDate).getTime();
            let d = new Date(b.itemPostDate).getTime();
            return c > d ? 1 : -1;
        });
    }

</script>

<main>
    <div class="title">результаты</div>

    <div class="descr">Показать сначала:</div>
    <div class="content_nav">
        <div class="btn_group">
            <button on:click={sortByViews}  class="active">Популярные</button>
            <button on:click={sortByPrice}>Дешевые</button>
            <button on:click={sortByDate}>Новые</button>
        </div>
        <div class="favorite_btn">
            <button>
                <span class="material-icons">
                    favorite_border
                    </span>
                Показать избранные
            </button>
        </div>
    </div>
    
    <PostList allPostsArr={allPosts}></PostList>
</main>

<style lang=scss> 
    main {
		grid-area: main;
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

    .content_nav {
        margin-top: 10px;
        margin-bottom: 20px;
        display: flex;

        button {
            border: 1px solid lightgray;
            padding: 10px;
            background: rgba(0,0,0,.0);
            margin-left: -1px;
            display: flex;
            align-items: center;
            &.active {
                background: var(--bg-color);
                color: #fff;
            }

            &:first-child {
                border-radius: 6px 0 0 6px;
            }
            &:last-child {
                border-radius: 0px 6px 6px 0;
            }

            span {
                margin-right: 5px;
            }
        }
    }

    .btn_group {
        display: flex;
    }

    .favorite_btn {
        margin-left: auto;
    }

</style>