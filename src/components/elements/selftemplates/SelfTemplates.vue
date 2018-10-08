<template>
    <section>
        <h2>底部面包屑</h2>
        <footer-crumbs :footer_crumbs_items="footer_crumbs_items"></footer-crumbs>
    </section>
</template>

<script>
    import FooterCrumbs from "./FooterCrumbs.vue";
    export default {
        components: {FooterCrumbs},
        name: "self-templates",
        data: () => ({
            footer_crumbs_items: [
                {to: "/portal/about_us", name: "关于本站"},
                {to: "/portal/web_statement", name: "网站声明"},
                {to: "/portal/web_map", name: "网站地图"},
                {to: "/portal/contact_us", name: "联系我们"},
            ],
        }),
    }
</script>

<style scoped lang='scss'>

</style>