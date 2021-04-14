<script>
    export let itemPhoto;
    export let itemFavorite;
    export let itemName;
    export let itemPrice;
    export let itemGeo;
    export let itemPostDate;
    export let viewsCount;
    export let itemID;

    // создаем элементы, в каждом из которых получаем индекс картинки на которую навели. 
    // передаем индекс в img src, отрисовываем.

    let currentIndex = 0;

    const getIndex = (i) => {
        currentIndex = i;
    }
</script>


<div class="container">
    <div class="item_photo">
        <img src={itemPhoto[currentIndex]} alt="">
        <div class="photo_collection">
            {#each itemPhoto as imgItem, index}
                <a href="." class="img_item" on:mouseenter={() => getIndex(index)}>{index}</a>
            {/each}
        </div>
        
        
        <div class="favorite {itemFavorite ? 'active' : ''}"  
            on:click={() => itemFavorite = !itemFavorite}
            title="добавить в избранное">
            <span class="material-icons">favorite</span>
        </div>
    </div>

    <div class="item_data">
        <div class="item_name">{itemName}</div>
        <div class="item_price">{itemPrice} &#8381;</div>
        <div class="item_geo">
            <span class="material-icons-two-tone">place</span>
            {itemGeo}
        </div>
        <div class="item_postdate">{itemPostDate}</div>
        <div class="item_views" title="количество просмотров">
            <span class="material-icons">
                visibility
            </span>
            {viewsCount}
        </div>

        <a href="pages/{itemID}">подробнее</a>
    </div>
</div>

<style lang=scss>
    .photo_collection {
        position: absolute;
        width: 98%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        bottom: 0;
        left: 1%;
        z-index: 1;
        a {
            color: #fff;
            display: block;
            height: 100%;
            position: relative;
            &:before {
                content: '';
                position: absolute;

            }
        }
    }

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
        margin-bottom: 10px;
    }

    .item_views {
        font-size: 12px;
        color: var(--text-color-light);
        display: flex;
        align-items: center;
        span {
            margin-right: 5px;
        }
    }
</style>