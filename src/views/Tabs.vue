<template>
  <el-tabs
    v-model="editableTabsValue"
    type="card"
    closable
    @tab-remove="removeTab"
    @tab-click="handleClickTab($event.name)"
  >
    <el-tab-pane
      :key="item.name"
      v-for="item in editableTabs"
      :label="item.title"
      :name="item.name"
    ></el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: "navMain",
  data() {
    return {
      editableTabsValue: "首页",
      editableTabs: [
        {
          title: "首页",
          name: "首页"
        }
      ],
      tabIndex: 1,
      openedTab: ["首页"]
    };
  },
  methods: {
    handleClickTab(route) {
      this.$store.commit("changeTab", route);
      if (route == "首页") {
        this.$router.push("/");
      } else if (route == "关于") {
        this.$router.push("/about");
      } else if (route == "系统") {
        this.$router.push("/system");
      } else if (route == "新闻") {
        this.$router.push("/news");
      }
    },
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      this.$store.commit("deductTab", targetName);
      let deductIndex = this.openedTab.indexOf(targetName);
      this.openedTab.splice(deductIndex, 1);
      if (activeName == "首页") {
        this.$router.push("/");
      } else if (activeName == "关于") {
        this.$router.push("/about");
      } else if (activeName == "系统") {
        this.$router.push("/system");
      } else if (activeName == "新闻") {
        this.$router.push("/news");
      }
      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      if (this.openedTab.length === 0) {
        this.$store.commit("addTab", "首页");
        this.$router.push("/");
      }
    }
  },
  computed: {
    getOpenedTab() {
      return this.$store.state.openedTab;
    },
    changeTab() {
      return this.$store.state.activeTab;
    }
  },
  watch: {
    getOpenedTab(val) {
      if (val.length > this.openedTab.length) {
        // 添加了新的tab页
        // 导致$store.state中的openedTab长度
        // 大于
        // 标签页中的openedTab长度
        // 因此需要新增标签页
        let newTab = val[val.length - 1]; // 新增的肯定在数组最后一个
        ++this.tabIndex;
        this.editableTabs.push({
          title: newTab,
          name: newTab,
          content: ""
        });
        this.editableTabsValue = newTab;
        this.openedTab.push(newTab);
      }
    },
    changeTab(val) {
      // 监听activetab以实现点击左侧栏时激活已存在的标签
      if (val !== this.editableTabsValue) {
        this.editableTabsValue = val;
      }
    }
  },
  created() {
    // 刷新页面时（F11)
    // 因为<router-view>的<keep-alive>，会保留刷新时所在的router
    // 但是tab标签页因为刷新而被重构了，tab没有了
    // 因此需要将router回到index
    this.$router.push("/");
  }
};
</script>

<style scoped>
</style>