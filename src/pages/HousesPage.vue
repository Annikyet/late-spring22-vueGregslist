<template>
  <div class="component">Houses Page</div>
  <Modal id="house-form">
    <template #header> House stuff</template>
  </Modal>
</template>


<script>

import { AppState } from "../AppState";
import { computed, reactive, onMounted } from "vue";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { housesService } from "../services/HousesService";

export default {
  setup() {
    onMounted(async () => {
      try {
        await housesService.getAll()
      } catch (error) {
        Pop.toast(error.message)
        logger.error(error)
      }
    })
    return {};
  },
};
</script>


<style lang="scss" scoped>
</style>
