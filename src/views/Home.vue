<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        default-active
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        unique-opened
        router
        active-text-color="#fff"
      >
        <el-menu-item index="/" @click="clickMenu('首页')">
          <i class="el-icon-star-on"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/about" @click="clickMenu('关于')">
          <i class="el-icon-star-on"></i>
          <span slot="title">关于</span>
        </el-menu-item>
        <el-menu-item index="/system" @click="clickMenu('系统')">
          <i class="el-icon-star-on"></i>
          <span slot="title">系统</span>
        </el-menu-item>
        <el-menu-item index="/news" @click="clickMenu('新闻')">
          <i class="el-icon-star-on"></i>
          <span slot="title">新闻</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "navMenu",
  methods: {
    clickMenu(componentName) {
      this.openedTab = this.$store.state.openedTab;
      // tabNum 为当前点击的列表项在openedTab中的index，若不存在则为-1
      let tabNum = this.openedTab.indexOf(componentName);
      if (tabNum === -1) {
        // 该标签当前没有打开
        // 将componentName加入到已打开标签页state.openedTab数组中
        this.$store.commit("addTab", componentName);
      } else {
        // 该标签是已经打开过的，需要激活此标签页
        this.$store.commit("changeTab", componentName);
      }
    }
  },
  data() {
    return {
      openedTab: []
    };
  }
};
</script>

<style lang="less" scoped>
.over-hide {
  overflow-x: hidden;
}
.el-submenu__title {
  border-bottom: 1px solid #8d98a2;
}
</style>