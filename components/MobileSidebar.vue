<template>
  <div>
    <div></div>
    <div class="flex flex-col sm:hidden space-y-2">
      <SidebarMenuLink
        v-for="(item, index) in items"
        :key="index"
        :url="item.route_url"
      >
        <Material :icon="item.icon" />
        <span>{{ item.name }}</span>
      </SidebarMenuLink>
    </div>
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
