<template>
  <div>test</div>
</template>

<script>
import { defineComponent, useStore } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const store = useStore("article");
    store.commit("article/addNews", { test: "test" });
    const article = store.getters["article/article"];
  },
});
</script>
