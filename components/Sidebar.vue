<template>
  <div class="hidden flex-col sm:flex flex-col space-y-2">
    <SidebarMenuLink
      v-for="(item, index) in items"
      :key="index"
      :url="item.route_url"
    >
      <Material :icon="item.icon" />
      <span>{{ item.name }}</span>
    </SidebarMenuLink>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SidebarMenuLink from "@/Sidebar/MenuLink.vue";
import Material from "@/Material.vue";
import { computed } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
const route = useRoute();
console.log("current name", route.path);

const isMobileSidebarOpened = ref(false);

const activeItem = computed(() => {
  return {
    name: "test",
    icon: "icon",
  };
});
</script>
