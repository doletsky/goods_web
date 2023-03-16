<script>
import GoodsItem from './GoodsItem.vue'
export default {
    data() {
        return {
            items: []
        }
    },
    components: {
        GoodsItem
    },
    mounted() {
        var credentials = "Bearer 3IB2hUhWaI8NnyDzpoOj00_fdYczB";
        var auth = { "Authorization" : `${credentials}` , 'Content-Type': 'application/json'};
        (async() => {
                let response = await fetch("https://goods.not-fun.ru/api/v1/goods", { headers : auth });
                let goodsData = await response.json();
                this.items=goodsData.data
            }
        )();
        
    }
}

</script>

<template>
    <div class="catalog" id="catalog" v-if="items.length > 0">
        <h1>Каталог</h1>
        <div class="list">
            <GoodsItem 
                v-for="item in items"
                :key="item.article"
                :item_data="item"
            />
        </div>
    </div>
    <div class="catalog" id="catalog" v-else>
        <h1>Каталог пуст</h1>
    </div>
</template>

<style>
.catalog {
    padding: 40px;
 }
 .catalog h1 {
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    margin-top: 0;
    margin-bottom: 20px;
 }

 .list {
    flex-wrap: wrap;
    display: flex;
 }

</style>