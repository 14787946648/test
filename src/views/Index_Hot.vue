<!--热门推荐-->
<template>
    <div class="jumbotron">
        <div class="container">
            <em>美食鉴赏</em>
            <hr/>
            <div class="row">
                <div class="card" v-for="(item,index) in this.$store.state.group1" :key="index">
                    <img :src="require('@/assets/group1/'+item.no+'.jpg')" class="card-img-top">
                    <p class="card-text" id="price">{{ item.price }}</p>
                    {{ item.disc }}
                </div>
            </div>
            <div class="row">
                <div class="card" v-for="(item,index) in this.$store.state.group2" :key="index">
                    <img :src="require('@/assets/group2/'+item.no+'.png')" class="card-img-top">
                    <p class="card-text" id="price2">{{ item.price }}</p>
                    {{ item.disc }}
                </div>
            </div>
        </div>
        <hr/>
        <div class="container" id="d1">
            <div class="row">
                <div class="col-lg-2" v-for="(item,index) in this.$store.state.statement" :key="index">
                    <strong>{{item.title}}</strong>
                    <div v-for="(t,i) in item.contexts" :key="i" id="d2">
                        <p>{{t}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Group1"
    }
</script>

<!--样式-->
<style scoped>
    .jumbotron {
        height: auto;
    }
    #d2{
        font-size: 10px;
    }
    #d1{
        text-align: start;
    }
    .card {
        width: 24%;
        margin: auto;
        background-color: transparent;
        border: 0px;
    }

    #price, #price2 {
        color: #f30a6f;
    }

    em {
        color: red;
        font-size: 20px;
    }

    .container {
        text-align: center;
    }
</style>