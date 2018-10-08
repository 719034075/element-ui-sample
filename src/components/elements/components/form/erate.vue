<template>
    <section>
        <hr>
        <h2>基础用法</h2>
        <div class="block">
            <span class="demonstration">默认不区分颜色</span>
            <el-rate v-model="value1"></el-rate>
        </div>
        <div class="block">
            <span class="demonstration">区分颜色</span>
            <el-rate
                    v-model="value2"
                    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
            </el-rate>
        </div>
        <hr>
        <h2>辅助文字</h2>
        <el-rate
                v-model="value3"
                show-text>
        </el-rate>
        <hr>
        <h2>其它 icon</h2>
        <el-rate
                v-model="value4"
                :icon-classes="['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']"
                void-icon-class="icon-rate-face-off"
                :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
        </el-rate>
        <hr>
        <h2>只读</h2>
        <el-rate
                v-model="value5"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}">
        </el-rate>
        <hr>
        <h2></h2>
    </section>
</template>

<script>
    export default {
        name: "erate",
        data: () => ({
            value1: null,
            value2: null,
            value3: null,
            value4: null,
            value5: 3.7
        }),
    }
</script>

<style scoped lang='scss'>

</style>