<script>
export default {
    props: {
        item_data:{
            type: Object,
            default (){
                return {}
            }
        }
    }
}
</script>

<template>
    <div class="item" id="item">
        <div class="imgItem" :style="{background: 'url('+item_data.image+')'}"></div>
        <div class="nameItem">
            {{item_data.name}}
        </div>
        <div class="price" v-if="item_data.price > 0">{{ item_data.price }} ₽</div>
        <div class="noitem price" v-else>Нет в наличии</div>
    </div>
</template>

<style>

.item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-right: 16px;
    margin-bottom: 16px;
    gap: 20px;

    position: relative;
    width: 269px;
    height: 296px;

    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(175, 175, 175, 0.12);
    border-radius: 8px;
 }

.imgItem {
    width: 238px;
    height: 152px;
    background-size: contain !important;
    background-repeat: no-repeat !important;
 }


 .nameItem {
    width: 244px;
    height: 49px;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    margin-left: 16px;
 }

 .price {
    width: 100%;
    height: 23px;font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    margin-left: 16px;
 }

 .noitem.price {
    color: rgba(0, 0, 0, 0.34);
 }
</style>