<script setup lang="ts">
import ExampleDialog from '@/components/ExampleDialog.vue'
import { AppButton, useDialog } from 'lilasia-ui'

const { showDialog } = useDialog()

const showExampleDialog = () => {
  showDialog(ExampleDialog)
}
</script>

<template>
  <main>
    <AppButton color="blue" text="Show Example Dialog" @click="showExampleDialog" />
  </main>
</template>
