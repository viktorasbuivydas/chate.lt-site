<template>
  <div>test</div>
</template>

<script>
import { defineComponent, useStore } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const store = useStore("auth");
    store.commit("user/add", { test: "test" });
    const user = store.getters["user/user"];
    console.log(user);
  },
});
</script>
