<template>
    <section>
        <hr>
        <h2>基本用法</h2>
        <el-switch
                v-model="value1">
        </el-switch>
        <el-switch
                v-model="value2"
                active-color="#13ce66"
                inactive-color="#ff4949">
        </el-switch>

        <hr>
        <h2>文字描述</h2>
        <el-switch
                v-model="value3"
                active-text="按月付费"
                inactive-text="按年付费">
        </el-switch>
        <el-switch
                style="display: block"
                v-model="value4"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="按月付费"
                inactive-text="按年付费">
        </el-switch>

        <hr>
        <h2>扩展的value类型</h2>
        <el-tooltip :content="'Switch value: ' + value5" placement="top">
            <el-switch
                    v-model="value5"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    active-value="100"
                    inactive-value="0">
            </el-switch>
        </el-tooltip>

        <hr>
        <h2>禁用状态</h2>
        <el-switch
                v-model="value6"
                disabled>
        </el-switch>
        <el-switch
                v-model="value7"
                disabled>
        </el-switch>

    </section>
</template>

<script>
    export default {
        name: "eswitch",
        data: () => ({
            value1: true,
            value2: true,
            value3: true,
            value4: true,
            value5: '100',
            value6: true,
            value7: false
        })
    }
</script>

<style scoped>

</style>