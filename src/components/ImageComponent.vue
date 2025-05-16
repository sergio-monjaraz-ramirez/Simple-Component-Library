<script setup lang="ts">
withDefaults(
    defineProps<{
        image: string;
    }>(),
    {
        image: 'https://help.wnpower.com/hc/article_attachments/24443330766477',
    },
);
</script>
<template>
    <div>
        <img :src="image" alt="source img" />
    </div>
</template>
