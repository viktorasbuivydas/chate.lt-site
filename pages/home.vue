<template>
  <Card>
    <div>content</div>
  </Card>
</template>

<script>
import { defineComponent, useStore } from "@nuxtjs/composition-api";
import Card from "@/Card.vue";

// export default defineComponent({
//   setup() {
//     const store = useStore("auth");
//     store.commit("user/add", { test: "test" });
//     const user = store.getters["user/user"];
//     console.log(user);
//   },
// });
export default {
  layout: "home",
  components: {
    Card,
  },
};
</script>
