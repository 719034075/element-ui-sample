<template>
  <el-row class="portalFooter" type="flex" justify="center">
    <template v-for="(item, index) in footer_crumbs_items">
      <router-link :to="item.to">{{item.name}}</router-link>
      <span v-if="index!==footer_crumbs_items.length-1">|</span>
    </template>
  </el-row>
</template>

<script>
  export default {
    name: "footer-crumbs",
    props: ['footer_crumbs_items'],
    data: () => ({}),
  }
</script>

<style scoped lang='scss'>
  $pad: 15px;
  $textcolor: #666666;

  .portalFooter {
    height: 60px;
    background-color: #dddddd;
    span {
      color: $textcolor;
      padding: $pad 5px;
    }
    a {
      text-decoration: none;
      padding-top: $pad;
      padding-bottom: $pad;
      color: $textcolor;
      &:hover {
        color: #1260b3;
      }
    }
  }
</style>
