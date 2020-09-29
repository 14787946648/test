<!--导航栏-->
<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
            <em class="lead">Welcome</em>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="/">主页<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">预约查询</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">商家入口</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">我要点餐</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        服务中心
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">联系商家</a>
                        <a class="dropdown-item" href="#">联系骑手</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">评价</a>
                    </div>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="查询订单" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">查询</button>
            </form>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Index_Nav"
    }
</script>

<!--样式-->
<style scoped>
    /**标题样式控制*/
    .lead {
        text-align: center;
        background-image: -webkit-linear-gradient(left, blue, #66ffff 10%, #cc00ff 20%, #CC00CC 30%, #CCCCFF 40%, #00FFFF 50%, #CCCCFF 60%, #CC00CC 70%, #CC00FF 80%, #66FFFF 90%, blue 100%);
        -webkit-text-fill-color: transparent; /* 将字体设置成透明色 */
        -webkit-background-clip: text; /* 裁剪背景图，使文字作为裁剪区域向外裁剪 */
        -webkit-background-size: 200% 100%;
        -webkit-animation: masked-animation 4s linear infinite;
        font-size: 18px;
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