<template>
    <section>
        <el-button @click="visible = true">按钮</el-button>
        <el-dialog :visible.sync="visible" title="Hello world">
            <p>欢迎使用 Element</p>
        </el-dialog>
    </section>
</template>
<script>
    export default {
        name: "helloworld",
        data: () => ({
            visible: false
        })
    }
</script>

<style scoped>

</style>