<template>
    <section>
        <hr>
        <h2>fade 淡入淡出</h2>
        <div>
            <el-button @click="show = !show">Click Me</el-button>
            <div style="display: flex; margin-top: 20px; height: 100px;">
                <transition name="el-fade-in-linear">
                    <div v-show="show" class="transition-box">.el-fade-in-linear，渐变速度是线性的</div>
                </transition>
                <transition name="el-fade-in">
                    <div v-show="show" class="transition-box">.el-fade-in，渐变速度是非线性的</div>
                </transition>
            </div>
        </div>
        <hr>
        <h2>zoom 缩放</h2>
        <div>
            <el-button @click="show2 = !show2">Click Me</el-button>

            <div style="display: flex; margin-top: 20px; height: 100px;">
                <transition name="el-zoom-in-center">
                    <div v-show="show2" class="transition-box">.el-zoom-in-center</div>
                </transition>

                <transition name="el-zoom-in-top">
                    <div v-show="show2" class="transition-box">.el-zoom-in-top</div>
                </transition>

                <transition name="el-zoom-in-bottom">
                    <div v-show="show2" class="transition-box">.el-zoom-in-bottom</div>
                </transition>
            </div>
        </div>
        <hr>
        <h2>collapse 展开折叠</h2>
        <div>
            <el-button @click="show3 = !show3">Click Me</el-button>

            <div style="margin-top: 20px; height: 200px;">
                <el-collapse-transition>
                    <div v-show="show3">
                        <div class="transition-box">el-collapse-transition</div>
                        <div class="transition-box">el-collapse-transition</div>
                    </div>
                </el-collapse-transition>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "transitions",
        data: () => ({
            show: true,
            show2: true,
            show3: true,
        })
    }
</script>

<style scoped lang="scss">
    .transition-box {
        margin-bottom: 10px;
        width: 200px;
        height: 100px;
        border-radius: 4px;
        background-color: #409EFF;
        text-align: center;
        color: #fff;
        padding: 40px 20px;
        box-sizing: border-box;
        margin-right: 20px;
    }
</style>