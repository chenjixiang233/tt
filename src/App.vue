<template>
  <div id="app">
    <el-container>
      <el-container>
        <el-aside width="200px">
          <navMenu></navMenu>
        </el-aside>
        <el-main>
          <navMain></navMain>
          <keep-alive>
            <router-view />
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import navMenu from "./views/Home";
import navMain from "./views/Tabs";

export default {
  name: "App",
  components: {
    navMenu,
    navMain
  }
};
</script>

<style lang="less">
html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
