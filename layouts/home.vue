<template>
  <div>
    <Header />
    <div
      class="container mx-auto flex flex-col lg:flex-row mt-6 lg:space-x-6 space-y-6 lg:space-y-0"
    >
      <LeftSidebar />
      <div class="flex lg:flex-grow">
        <Nuxt />
      </div>
      <!--
       <RightSidebar />
      -->
    </div>
  </div>
</template>
<script>
import Header from "@/Header.vue";
import LeftSidebar from "@/LeftSidebar.vue";
import RightSidebar from "@/RightSidebar.vue";
export default {
  components: {
    Header,
    LeftSidebar,
    RightSidebar,
  },
};
</script>
