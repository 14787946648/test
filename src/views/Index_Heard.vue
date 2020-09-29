<!--头部组件-->
<template>
    <!--        标题-->
    <div class="lead mt-2">
       <em>
           {{this.$store.state.slogan}}
       </em>
    </div>
</template>

<script>
    export default {
        name: "Index_Heard"
    }
</script>

<!--样式-->
<style scoped>
    em{
        color: #535353;
        font-family: "Great Vibes",cursive;
        font-size: 28px;
        margin-bottom: 2px;
        text-transform: capitalize;
    }

    /**标题样式控制*/
    .lead {
        text-align: center;
        background-image: -webkit-linear-gradient(left, #f30a6f, #66ffff 10%, #ff8c00 20%, #25cc00 30%, #CCCCFF 40%, #00FFFF 50%, #CCCCFF 60%, #CC00CC 70%, #CC00FF 80%, #66FFFF 90%, blue 100%);
        -webkit-text-fill-color: transparent; /* 将字体设置成透明色 */
        -webkit-background-clip: text; /* 裁剪背景图，使文字作为裁剪区域向外裁剪 */
        -webkit-background-size: 200% 100%;
        -webkit-animation: masked-animation 4s linear infinite;
        font-size: 15px;

    }

    @keyframes masked-animation {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: -100% 0;
        }
    }
</style>