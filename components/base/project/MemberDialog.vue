<template>
  <v-dialog
    :model-value="modelValue"
    max-width="1200"
    @update:model-value="onDialogVisibleChange($event)"
  >
    <v-card>
      <v-card-title>
        Title
      </v-card-title>

      <v-divider />

      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              clearable
              variant="outlined"
              hide-details
              density="compact"
              prepend-inner-icon="mdi-magnify"
            />
          </v-col>
        </v-row>
      </v-container>

      <v-tabs
        v-model="selectedTab"
        grow
        color="primary"
      >
        <v-tab v-for="tab in visibleTabs" :key="tab.key" :value="tab.key">{{ tab.title }}</v-tab>
      </v-tabs>

      <v-window v-model="selectedTab">
        <v-window-item value="tab1">
          Tab 1
        </v-window-item>
        <v-window-item value="tab2">
          Tab 2
        </v-window-item>
        <v-window-item value="tab3">
          Tab 3
        </v-window-item>
      </v-window>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">

// eslint-disable-next-line func-call-spacing
const emit = defineEmits<{
  (e: "update:modelValue", visible: boolean): void
}>();

const props = defineProps<{
  modelValue: boolean;
}>();


function onDialogVisibleChange(visible: boolean) {
  emit("update:modelValue", visible);
}

const hasExternalUsers = true;
const hasGroups = false;

const visibleTabs = computed(() => {
  const result = [
    {
      title: "tab1",
      key: "tab1"
    }
  ];

  if (hasExternalUsers) {
    result.push({
      title: "tab2",
      key: "tab2"
    });
  }
  if (hasGroups) {
    result.push({
      title: "tab3", 
      key: "tab3"
    });
  }

  return result;
});

const selectedTab = ref("tab1");


</script>
