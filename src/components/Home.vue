<template>
    <el-container>
        <el-header>
            <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" router unique-opened>
                <template v-for="(item,index) in $router.options.routes">
                    <el-submenu v-if="!item.hidden"
                                :index="'item-'+index"
                                :key="'item-'+index">
                        <template slot="title"><i :class="item.iconCls"></i><span>{{item.name}}</span></template>
                        <template v-for="(child,itemIndex) in item.children">
                            <el-menu-item v-if="!child.hidden"
                                          :index="child.path"
                                          :key="'child-'+itemIndex">{{child.name}}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
            </el-menu>
        </el-header>
        <el-main>
            <transition name="el-fade-in-linear" mode="out-in">
                <router-view></router-view>
            </transition>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        data() {
            return {};
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }

</script>

<style scoped lang="scss">

</style>