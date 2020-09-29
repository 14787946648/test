<!--模板-->
<template>
    <div>
        <Index_Nav></Index_Nav>
        <Index_Heard></Index_Heard>
        <Index_Carousel></Index_Carousel>
        <Index_Hot></Index_Hot>
        <Index_Foot></Index_Foot>
    </div>
</template>

<script>
    import Index_Nav from "@/views/Index_Nav";
    import Index_Heard from "@/views/Index_Heard";
    import Index_Carousel from "@/views/Index_Carousel";
    import Index_Hot from "@/views/Index_Hot";
    import Index_Foot from "@/views/Index_Foot";

    export default {
        components: {
            Index_Nav,
            Index_Heard,
            Index_Carousel,
            Index_Hot,
            Index_Foot
        },
    };
</script>

<!--样式-->
<style scoped>

</style>