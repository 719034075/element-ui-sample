<template>
    <section>
        <hr>
        <h2>基础用法</h2>
        <el-badge :value="12" class="item">
            <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="3" class="item">
            <el-button size="small">回复</el-button>
        </el-badge>

        <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item class="clearfix">
                    评论
                    <el-badge class="mark" :value="12" />
                </el-dropdown-item>
                <el-dropdown-item class="clearfix">
                    回复
                    <el-badge class="mark" :value="3" />
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <hr>
        <h2>最大值</h2>
        <el-badge :value="200" :max="99" class="item">
            <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="100" :max="10" class="item">
            <el-button size="small">回复</el-button>
        </el-badge>

        <hr>
        <h2>自定义内容</h2>
        <el-badge value="new" class="item">
            <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge value="hot" class="item">
            <el-button size="small">回复</el-button>
        </el-badge>

        <hr>
        <h2>小红点</h2>
        <el-badge is-dot class="item">数据查询</el-badge>
        <el-badge is-dot class="item">
            <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
        </el-badge>

    </section>
</template>

<script>
    export default {
        name: "ebadge",
        data: () => ({}),
    }
</script>

<style scoped lang='scss'>
    .item {
        margin-top: 10px;
        margin-right: 40px;
    }
</style>