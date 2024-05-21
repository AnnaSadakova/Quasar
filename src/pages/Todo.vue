<template>
  <q-page class="bg-blue-1 column">
    <div class="row q-pa-sm bg-grey shadow-9">
      <q-input
        @keyup.enter="addTask"
        filled
        class="col"
        square
        v-model="newTask"
        placeholder="ass task"
        dense
      >
        <template v-slot:append>
          <q-btn @click="addTask" round dense flat icon="add"></q-btn>
        </template>
      </q-input>
    </div>
    <q-list separator bordered>
      <q-item
        @click="task.done = !task.done"
        clickable
        :class="{ 'done bg-green-1': task.done }"
        v-for="(task, index) in tasks"
        :key="task.title"
        v-ripple
      >
        <q-item-section avatar top>
          <q-checkbox
            class="no-pointer-events"
            v-model="task.done"
            val="cyan"
            color="cyan"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
        <q-item-section v-if="task.done" side>
          <q-btn
            @click.stop="deleteTask(index)"
            dense
            flat
            round
            color="primary"
            icon="delete"
          />
        </q-item-section>
      </q-item>
    </q-list>
    <div v-if="!tasks.length" class="no-task absolute-center">
      <q-icon name="check" size="150px" color="primary"> </q-icon>
      <div class="text-h4 text-primary text-center">No Task!</div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
      tasks: [
        // {
        //   title: "hello",
        //   done: false,
        // },
        // {
        //   title: "hello1",
        //   done: false,
        // },
        // {
        //   title: "hello2",
        //   done: false,
        // },
      ],
    };
  },
  methods: {
    deleteTask(index) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Delete?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.tasks.splice(index, 1);
          this.$q.notify("Task delete");
        });
      t;
    },
    addTask() {
      this.tasks.push({
        title: this.newTask,
        done: false,
      });
      this.newTask = "";
    },
  },
};
</script>

<style lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: rgb(0, 0, 0);
  }
}
</style>
