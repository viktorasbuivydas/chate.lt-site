<template>
  <div>
    <div class="flex flex-col lg:flex-grow-0 w-full lg:w-57.5 space-y-6">
      <Card class="w-full">
        <div
          class="hidden sm:flex items-center border-b border-card-border pb-4"
        >
          <div>
            <Avatar />
          </div>
          <div class="flex flex-col ml-2">
            <div class="font-medium">Merkurijus</div>
            <div class="text-gray-300">chat.us.lt</div>
          </div>
        </div>
        <!-- mobile menu -->
        <MobileSidebar :items="menuItems" />

        <!-- pc menu -->
        <Sidebar :items="menuItems" />
      </Card>

      <Card class="hidden sm:flex">
        <div class="flex-col space-y-2">
          <div class="text-gray-300">Naujausi failai</div>
          <div>websaitas.lt</div>
          <div>websaitas.lt</div>
          <div>websaitas.lt</div>
          <div class="flex items-center space-x-2">
            <Material icon="more_horiz" />
            <span>Rodyti daugiau</span>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Card from "@/Card.vue";
import Avatar from "@/Avatar.vue";
import SidebarMenuLink from "@/Sidebar/MenuLink.vue";
import Material from "@/Material.vue";
import MobileSidebar from "@/MobileSidebar.vue";
import Sidebar from "@/Sidebar.vue";

const menuItems = ref([
  {
    name: "Valdymas",
    icon: "admin_panel_settings",
    route_url: "/control",
  },
  {
    name: "Pokalbiai",
    icon: "chat",
    route_url: "/chat",
  },
  {
    name: "Forumas",
    icon: "forum",
    route_url: "/forum",
  },
  {
    name: "Failai",
    icon: "folder",
    route_url: "/files",
  },
  {
    name: "Statistika",
    icon: "signal_cellular_alt",
    route_url: "/statistic",
  },
  {
    name: "Nustatymai",
    icon: "settings",
    route_url: "/settings",
  },
]);
</script>
