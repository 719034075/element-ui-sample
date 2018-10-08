<template>
    <section>
        <hr>
        <h2>基本用法</h2>
        <el-button
                plain
                @click="open">
            可自动关闭
        </el-button>
        <el-button
                plain
                @click="open2">
            不会自动关闭
        </el-button>
        <hr>
        <h2>带有倾向性</h2>
        <el-button
                plain
                @click="open3">
            成功
        </el-button>
        <el-button
                plain
                @click="open4">
            警告
        </el-button>
        <el-button
                plain
                @click="open5">
            消息
        </el-button>
        <el-button
                plain
                @click="open6">
            错误
        </el-button>

        <hr>
        <h2>自定义弹出位置</h2>
        <el-button
                plain
                @click="open7">
            右上角
        </el-button>
        <el-button
                plain
                @click="open8">
            右下角
        </el-button>
        <el-button
                plain
                @click="open9">
            左下角
        </el-button>
        <el-button
                plain
                @click="open10">
            左上角
        </el-button>

        <hr>
        <h2>带有偏移</h2>
        <el-button
                plain
                @click="open11">
            偏移的消息
        </el-button>

        <hr>
        <h2>使用 HTML 片段</h2>
        <el-button
                plain
                @click="open12">
            使用 HTML 片段
        </el-button>

        <hr>
        <h2>隐藏关闭按钮</h2>
        <el-button
                plain
                @click="open13">
            隐藏关闭按钮
        </el-button>

    </section>
</template>

<script>
    export default {
        name: "enotification",
        data: () => ({}),
        methods: {
            open() {
                const h = this.$createElement;

                this.$notify({
                    title: '标题名称',
                    message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
                });
            },

            open2() {
                this.$notify({
                    title: '提示',
                    message: '这是一条不会自动关闭的消息',
                    duration: 0
                });
            },
            open3() {
                this.$notify({
                    title: '成功',
                    message: '这是一条成功的提示消息',
                    type: 'success'
                });
            },

            open4() {
                this.$notify({
                    title: '警告',
                    message: '这是一条警告的提示消息',
                    type: 'warning'
                });
            },

            open5() {
                this.$notify.info({
                    title: '消息',
                    message: '这是一条消息的提示消息'
                });
            },

            open6() {
                this.$notify.error({
                    title: '错误',
                    message: '这是一条错误的提示消息'
                });
            },
            open7() {
                this.$notify({
                    title: '自定义位置',
                    message: '右上角弹出的消息'
                });
            },

            open8() {
                this.$notify({
                    title: '自定义位置',
                    message: '右下角弹出的消息',
                    position: 'bottom-right'
                });
            },

            open9() {
                this.$notify({
                    title: '自定义位置',
                    message: '左下角弹出的消息',
                    position: 'bottom-left'
                });
            },

            open10() {
                this.$notify({
                    title: '自定义位置',
                    message: '左上角弹出的消息',
                    position: 'top-left'
                });
            },
            open11() {
                this.$notify({
                    title: '偏移',
                    message: '这是一条带有偏移的提示消息',
                    offset: 100
                });
            },
            open12() {
                this.$notify({
                    title: 'HTML 片段',
                    dangerouslyUseHTMLString: true,
                    message: '<strong>这是 <i>HTML</i> 片段</strong>'
                });
            },
            open13() {
                this.$notify.success({
                    title: 'Info',
                    message: '这是一条没有关闭按钮的消息',
                    showClose: false
                });
            }
        }
    }
</script>

<style scoped lang='scss'>

</style>