<script>
    export let imgSrc;
    export let favoriteItem;
    export let postPrice;
    export let postName;
    export let postDate;
    export let postGeo;
</script>

<div class="container">
    <div class="item_photo">
        <img src={imgSrc} alt="">
        <div class="favorite">{favoriteItem}</div>
    </div>

    <div class="item_data">
        <div class="item_name">{postName}</div>
        <div class="item_price">{postPrice}</div>
        <div class="item_geo">
            <span class="material-icons-two-tone">place</span>
            {postGeo}
        </div>
        <div class="item_postdate">{postDate}</div>
    </div>
</div>

<style lang=scss>
    .container {
        display: flex;
        align-items: center;
    }

    .item_photo {
        img {
            height: 200px;
            width: 300px;
            object-fit: cover;
        }
    }
</style>