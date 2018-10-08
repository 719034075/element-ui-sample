<template>
    <section>
        <hr>
        <h2>选择日</h2>
        <div class="block">
            <span class="demonstration">默认</span>
            <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期">
            </el-date-picker>
        </div>
        <div class="block">
            <span class="demonstration">带快捷选项</span>
            <el-date-picker
                    v-model="value2"
                    align="right"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="pickerOptions1">
            </el-date-picker>
        </div>

        <hr>
        <h2>其他日期单位</h2>
        <div class="block">
            <span class="demonstration">周</span>
            <el-date-picker
                    v-model="value3"
                    type="week"
                    format="yyyy 第 WW 周"
                    placeholder="选择周">
            </el-date-picker>
        </div>
        <div class="block">
            <span class="demonstration">月</span>
            <el-date-picker
                    v-model="value4"
                    type="month"
                    placeholder="选择月">
            </el-date-picker>
        </div>
        <div class="block">
            <span class="demonstration">年</span>
            <el-date-picker
                    v-model="value5"
                    align="right"
                    type="year"
                    placeholder="选择年">
            </el-date-picker>
        </div>

        <hr>
        <h2>选择日期范围</h2>
        <div class="block">
            <span class="demonstration">默认</span>
            <el-date-picker
                    v-model="value6"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
            </el-date-picker>
        </div>
        <div class="block">
            <span class="demonstration">带快捷选项</span>
            <el-date-picker
                    v-model="value7"
                    type="daterange"
                    align="right"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :picker-options="pickerOptions2">
            </el-date-picker>
        </div>

        <hr>
        <h2>默认显示日期</h2>
        <div class="block">
            <span class="demonstration">date</span>
            <el-date-picker
                    v-model="value8"
                    type="date"
                    placeholder="选择日期"
                    default-value="2010-10-01">
            </el-date-picker>
        </div>
        <div class="block">
            <span class="demonstration">daterange</span>
            <el-date-picker
                    v-model="value9"
                    type="daterange"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    default-value="2010-10-01">
            </el-date-picker>
        </div>

        <hr>
        <h2>*返回值格式（测试阶段，2018-01-25）</h2>
        <div class="block">
            <span class="demonstration">默认为 Date 对象</span>
            <div class="demonstration">组件值：{{ value10 }}</div>
            <el-date-picker
                    v-model="value10"
                    type="date"
                    placeholder="选择日期"
                    format="yyyy 年 MM 月 dd 日">
            </el-date-picker>
        </div>
        <div class="block">
            <span class="demonstration">使用 value-format 进行格式化</span>
            <div class="demonstration">组件值：{{ value11 }}</div>
            <el-date-picker
                    v-model="value11"
                    type="date"
                    placeholder="选择日期"
                    format="yyyy 年 MM 月 dd 日"
                    value-format="yyyy-MM-dd">
            </el-date-picker>
        </div>
    </section>
</template>

<script>
    export default {
        name: "edatepicker",
        data: () => ({
            pickerOptions1: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                        picker.$emit('pick', new Date());
                    }
                }, {
                    text: '昨天',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                    }
                }, {
                    text: '一周前',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', date);
                    }
                }]
            },
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            pickerOptions2: {
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
            value6: '',
            value7: '',
            value8: '',
            value9: '',
            value10: '',
            value11: '',
        })
    }
</script>

<style scoped>

</style>