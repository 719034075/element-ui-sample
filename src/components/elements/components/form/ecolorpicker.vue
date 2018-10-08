<template>
    <section>
        <hr>
        <h2>基础用法</h2>
        <div class="block">
            <span class="demonstration">有默认值</span>
            <el-color-picker v-model="color1"></el-color-picker>
        </div>
        <div class="block">
            <span class="demonstration">无默认值</span>
            <el-color-picker v-model="color2"></el-color-picker>
        </div>
        <hr>
        <h2>选择透明度</h2>
        <el-color-picker v-model="color3" show-alpha></el-color-picker>
        <hr>
        <h2>不同尺寸</h2>
        <el-color-picker v-model="color4"></el-color-picker>
        <el-color-picker v-model="color4" size="medium"></el-color-picker>
        <el-color-picker v-model="color4" size="small"></el-color-picker>
        <el-color-picker v-model="color4" size="mini"></el-color-picker>
    </section>
</template>

<script>
    export default {
        name: "ecolorpicker",
        data: () => ({
            color1: '#409EFF',
            color2: null,
            color3: 'rgba(19, 206, 102, 0.8)',
            color4: '#409EFF'
        }),
    }
</script>

<style scoped lang='scss'>

</style>