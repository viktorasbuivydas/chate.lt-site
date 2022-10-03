<template>
  <header class="bg-white">
    <div class="container mx-auto">
      <div class="px-10 py-6 flex justify-between items-center">
        <Logo />
        <div class="flex space-x-4">
          <BaseButtonsTransparent>
            <Material icon="chat_bubble" />
          </BaseButtonsTransparent>
          <BaseButtonsTransparent>
            <Material icon="notifications" />
          </BaseButtonsTransparent>
          <button>
            <Avatar />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import Logo from "@/Logo.vue";
import Material from "@/Material.vue";
import BaseButtonsTransparent from "@/Base/Buttons/Transparent.vue";
import Avatar from "@/Avatar.vue";
</script>
