<script>
    import posts from '../../moc/posts.json';

    export let favoriteItem = false;

    const handleFavorite = () => {
        favoriteItem = !favoriteItem;
    }
</script>

<ul class="posts_list">
    {#each posts as item, index (item.itemID)}
        <div class="container">
            <div class="item_photo">
                <img src={item.itemPhoto} alt="">
                <div class="favorite" class:active={favoriteItem} on:click={handleFavorite}>
                    <span class="material-icons">favorite</span>
                </div>
            </div>
        
            <div class="item_data">
                <div class="item_name">{item.itemName}</div>
                <div class="item_price">{item.itemPrice} &#8381;</div>
                <div class="item_geo">
                    <span class="material-icons-two-tone">place</span>
                    {item.itemGeo}
                </div>
                <div class="item_postdate">{item.itemPostDate}</div>
            </div>
        </div>
    {/each}
</ul>


<style lang=scss>
    .container {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    .item_photo {
        position: relative;
        
        img {
            height: 200px;
            width: 300px;
            object-fit: cover;
            position: relative;
            z-index: 1;
            border-radius: 6px;
        }
    }

    .favorite {
        z-index: 2;
        cursor: pointer;
        position: absolute;
        left: 30px;
        top: 30px;
        .material-icons {
            color: #fff;
            font-size: 22px;
            text-shadow: 0px 0px 1px #000;
        }
        
        &.active {
            .material-icons {
                color: red;
            }
        }
    }

    .item_data {
        margin-left: 40px;
    }

    .item_name {
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .item_price {
        color: #000;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .item_geo {
        display: flex;
        align-items: center;
        font-size: 18px;
        color: var(--text-color-light);
        margin-bottom: 10px;
        span {
            margin-right: 10px;
        }
    }

    .item_postdate {
        font-size: 12px;
    }
</style>