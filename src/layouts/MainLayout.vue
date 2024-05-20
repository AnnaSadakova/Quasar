<template>
  <q-layout view="hHr LpR fFr">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="/icons/kosmoLogo.png" />
          </q-avatar>
          ToDoList
        </q-toolbar-title>
        <div class="text-subtitle q-px-lg">{{ todaysDate }}</div>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/Page" label="Page" />
      </q-tabs>
      <q-img
        class="header-image absolute-top"
        src="/public/icons/fon_header.webp"
      ></q-img>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="600"
    >
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding class="menu-list">
          <q-item to="/ToDo" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="summarize" />
            </q-item-section>

            <q-item-section> ToDo </q-item-section>
          </q-item>

          <q-item to="/Help" exact active clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="help_outline" />
            </q-item-section>

            <q-item-section> Help </q-item-section>
          </q-item>

          <q-item to="/AboutUs" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="lightbulb" />
            </q-item-section>

            <q-item-section> About us </q-item-section>
          </q-item>

          <q-item to="/Contacts" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="contacts" />
            </q-item-section>

            <q-item-section> Contacts </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img class="image-H absolute-top" src="/public/icons/fon_header.webp">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="/icons/avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">ANNA SADAKOVA</div>
          <div>AS@mail.ru</div>
        </div>
      </q-img>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" elevated>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="/icons/kosmoLogo.png" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { date } from "quasar";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
  computed: {
    todaysDate() {
      const timeStamp = Date.now();
      return date.formatDate(timeStamp, "DD-MM-YYYY HH:mm:ss");
    },
  },
};
</script>

<style lang="scss">
.header-image {
  height: 100%;
  z-index: -1;
  filter: grey;
  opacity: 0.5;
}
.image-H {
  height: 150px;
}
</style>
