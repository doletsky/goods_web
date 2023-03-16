<script>


export default {
    data(){
        return{
            item_name: '',
            item_img: '',
            item_price: '',
            item_note: '',
            item_data: [],
            err_data: [],
            err_val:[],
            form_disabled: 0
        }
    },
    methods: {
        createItem(event){
            this.form_disabled=1
            this.item_data = {
                name: this.item_name,
                price: Number(this.item_price),
                description: this.item_note,
                image: this.item_img
            }

            console.log(JSON.stringify(this.item_data) )
            var credentials = "Bearer 3IB2hUhWaI8NnyDzpoOj00_fdYczB";
            var auth = { "Authorization" : `${credentials}` , 'Content-Type': 'application/json'};
            (async() => {
                    let response = await fetch("https://goods.not-fun.ru/api/v1/goods", 
                    {
                        method: 'post', 
                        headers : auth,
                        body: JSON.stringify(this.item_data) 
                    });
                    let goodsData = await response.json();
                    if('message' in goodsData) {
                        this.$toast.error(goodsData.message);
                        goodsData.errors.forEach(element=> {
                            this.err_data[element.field]=element.message
                            this.err_val[element.field]='errVal'
                        });
                    }else {
                        this.$toast.success(`Новый товар успешно создан`);
                        this.item_name=''
                        this.item_img=''
                        this.item_price=''
                        this.item_note=''
                        this.err_val=[]
                    }
                    this.form_disabled=0
                }
            )();
        }
    },
    watch: {
        item_name(a) {
            this.item_name=a
            this.err_data={}
        },
        item_img(a) {
            this.item_img=a
            this.err_data={}
        },
        item_price(a) {
            this.item_price=a
            this.err_data={}
        },
        item_note(a) {
            this.item_note=a
            this.err_data={}
        }
    }
}
</script>
<template>
    <div class="newItem">
        <h1>Новый товар</h1>
        <div class="form">
                <div>
                    <input id="name" type="text" name="itemName" placeholder="Название товара" title="Название товара" 
                        v-model="item_name" 
                        :disabled="form_disabled == 1"
                        :class="'name' in this.err_data ? this.err_val.name : ''"
                    />
                    <span class="err" v-if="'name' in this.err_data">{{this.err_data.name}}</span> 
                </div>
                <div>
                    <input id="image" type="url" name="itemImg" placeholder="Ссылка на изображение" 
                        v-model="item_img "
                        :disabled="form_disabled == 1"
                        :class="'image' in this.err_data ? this.err_val.image : ''"
                    />
                    <span class="err" v-if="'image' in this.err_data">{{this.err_data.image}}</span>
                </div>
                <div>
                    <input id="price" type="text" name="itemPrice" placeholder="Цена" 
                    v-model="item_price" 
                    :disabled="form_disabled == 1"
                    :class="'price' in this.err_data ? this.err_val.price : ''"
                />
                    <span class="err" v-if="'price' in this.err_data">{{this.err_data.price}}</span>
                </div>
                <div>
                    <textarea id="description" name="itemNote" placeholder="Описание товара" 
                        v-model="item_note"
                        :disabled="form_disabled == 1"
                        :class="'description' in this.err_data ? this.err_val.description : ''"
                    ></textarea>
                    <span class="err" v-if="'description' in this.err_data">{{this.err_data.description}}</span>
                </div>
                <button name="createItem" title="Создать товар" 
                    @click.stop.prevent="createItem"
                    :disabled="form_disabled == 1"
                >Создать товар</button>
        </div>
    </div> 
</template>

<style>
.newItem {
    margin: 40px;
    padding: 40px;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(175, 175, 175, 0.12);
    border-radius: 8px;
 }
 .newItem h1 {
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    margin-top: 0;
 }
 .newItem input, .newItem textarea {
    background: #F5F5F5;
    border-radius: 8px;
    height: 54px;
    margin: 20px 0;
    width: 40%;
    border-width: 0;

    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #A5AAAB;
    padding-left: 16px;
 }
 .newItem textarea {
    height: 260px;
    padding-top: 16px;
    font-family: 'Roboto';
    font-style: normal;
 }
 .newItem input:focus, .newItem textarea:focus {
    outline: 0;
 }
 .newItem button {
    position: relative;
    width: 176px;
    height: 54px;
    background: #30A2C6;
    border-radius: 8px;
    text-align: center;
    color: #FFFFFF;
    font-weight: 500;
    font-size: 18px;
    border-width: 0;
 }
 .err {
    display: flex;
    position: relative;
    margin-top: -20px;
    color: red;
    padding-left: 17px;
    margin-bottom: -4px;
 }
 .errVal {
    color: red !important;
    font-weight: bold !important;
 }
</style>