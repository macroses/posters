<script>
    import posts from '../../moc/posts.json';
    import PostList from '../posts/PostList.svelte';
    
    let allPosts = posts;
    let activeButton = 1;
    let visibleFavorite = false;
    

    function sortByPrice () {
        allPosts = allPosts.sort((a, b) => parseInt(a.itemPrice) > parseInt(b.itemPrice) ? 1 : -1);
        activeButton = 2;
    }

    function sortByViews () {
        allPosts = allPosts.sort((a, b) => parseInt(a.viewsCount) > parseInt(b.viewsCount) ? -1 : 1);
        activeButton = 1;
    }

    function sortByDate () {
        allPosts = allPosts.sort((a, b) => {
            let c = new Date(a.itemPostDate).getTime();
            let d = new Date(b.itemPostDate).getTime();
            return c > d ? -1 : 1;
        });
        activeButton = 3;
    }

    function sortByFavorite () {
        visibleFavorite = !visibleFavorite;

        if (visibleFavorite) {
            allPosts = allPosts.filter((item) => {
                return item.itemFavorite == true;
            })
            
            if (allPosts.length == 0) {
                alert("добавьте что-нибудь в избранное")
                visibleFavorite = false;
                return allPosts = posts;
            }
        } else {
            allPosts = posts;
        }
    }

</script>

<main>
    <div class="title">результаты</div>

    <div class="descr">Показать сначала:</div>
    <div class="content_nav">
        <div class="btn_group">
            <button on:click={sortByViews} class:active={activeButton === 1}>Популярные</button>
            <button on:click={sortByPrice} class:active={activeButton === 2}>Дешевые</button>
            <button on:click={sortByDate} class:active={activeButton === 3}>Новые</button>
        </div>
        <div class="favorite_btn">
            <button on:click={sortByFavorite} class:active={visibleFavorite}>
                <span class="material-icons">
                    favorite_border
                    </span>
                Показать избранные
            </button>
        </div>
    </div>
    {#await allPosts then value}
        <PostList allPostsArr={value}></PostList>

        
    {/await}
    
    
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

        
    }

    .btn_group {
        display: flex;
        button {
            border: 1px solid lightgray;
            padding: 10px;
            background: rgba(0,0,0,.0);
            margin-left: -2px;
            display: flex;
            align-items: center;
            &.active {
                background: var(--bg-color);
                border: 1px solid var(--bg-color);
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

    .favorite_btn {
        margin-left: auto;

        button {
            border: 1px solid lightgray;
            padding: 10px;
            background: rgba(0,0,0,.0);
            display: flex;
            align-items: center;
            border-radius: 6px;
            span {
                margin-right: 5px;
            }
            &.active {
                background: var(--bg-color);
                border: 1px solid var(--bg-color);
                color: #fff;
            }
        }
    }

</style>