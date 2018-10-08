<template>
    <section>
        <hr>
        <h2>基础用法</h2>
        <div class="block">
            <span class="demonstration">默认</span>
            <el-slider v-model="value1"></el-slider>
        </div>
        <div class="block">
            <span class="demonstration">自定义初始值</span>
            <el-slider v-model="value2"></el-slider>
        </div>
        <div class="block">
            <span class="demonstration">隐藏 Tooltip</span>
            <el-slider v-model="value3" :show-tooltip="false"></el-slider>
        </div>
        <div class="block">
            <span class="demonstration">格式化 Tooltip</span>
            <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
        </div>
        <div class="block">
            <span class="demonstration">禁用</span>
            <el-slider v-model="value5" disabled></el-slider>
        </div>

        <hr>
        <h2>离散值</h2>
        <div class="block">
            <span class="demonstration">不显示间断点</span>
            <el-slider
                    v-model="value6"
                    :step="10">
            </el-slider>
        </div>
        <div class="block">
            <span class="demonstration">显示间断点</span>
            <el-slider
                    v-model="value7"
                    :step="10"
                    show-stops>
            </el-slider>
        </div>

        <hr>
        <h2>带有输入框</h2>
        <div class="block">
            <el-slider
                    v-model="value8"
                    show-input>
            </el-slider>
        </div>

        <hr>
        <h2>范围选择</h2>
        <div class="block">
            <el-slider
                    v-model="value9"
                    range
                    show-stops
                    :max="10">
            </el-slider>
        </div>

        <hr>
        <h2>竖向模式</h2>
        <div class="block">
            <el-slider
                    v-model="value10"
                    vertical
                    height="200px">
            </el-slider>
        </div>

    </section>
</template>

<script>
    export default {
        name: "eslider",
        data: () => ({
            value1: 0,
            value2: 50,
            value3: 36,
            value4: 48,
            value5: 42,
            value6: 0,
            value7: 0,
            value8: 0,
            value9: [4, 8],
            value10: 0
        }),
        methods: {
            formatTooltip(val) {
                return val / 100;
            }
        }
    }
</script>

<style scoped>

</style>