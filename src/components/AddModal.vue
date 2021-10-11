<template>
  <div>
    <b-modal v-model="modalShow" title="Add">
      <template class="modal-header" #modal-header="{cancel}">
        <h5>Add</h5>
        <button type="button" aria-label="close" class="close" @click="cancel">
          <router-link to="/statement">×</router-link>
        </button>
      </template>
      <div>
        <p class="mt-2">Оформление заявки</p>
        <b-form-input v-model="app.address" placeholder="Адрес"></b-form-input>
        <b-form-input
          v-model="app.location"
          placeholder="Местоположение"
        ></b-form-input>
        <b-form-select v-model="app.type" :options="types"></b-form-select>
        <b-form-select v-model="app.priority" :options="prior"></b-form-select>
        <b-form-input v-model="app.name" placeholder="Заявитель"></b-form-input>
        <b-form-input v-model="app.phone" placeholder="Телефон"></b-form-input>
      </div>

      <template #modal-footer="{ ok, cancel}">
        <b-button size="sm" variant="dark" @click="cancel()">
          <router-link to="/statement">Назад</router-link>
        </b-button>
        <b-button size="sm" variant="success" @click="ok(), add(app)">
          <router-link to="/statement">Ок</router-link>
        </b-button>
      </template>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: 'AddModal',
  data() {
    return {
      modalShow: true,
      app: {
        address: null,
        location: null,
        type: null,
        priority: null,
        name: null,
        phone: null,
      },
      types: [
        { text: 'Тип', value: null },
        { text: 'Порыв', value: 'Порыв' },
        { text: 'Утечка', value: 'Утечка' },
        { text: 'Колонка уличная', value: 'Колонка уличная' },
        { text: 'Некачественная вода', value: 'Некачественная вода' },
        { text: 'Закупорка', value: 'Закупорка' },
        { text: 'Другое', value: 'Другое' },
      ],
      prior: [
        { text: 'Приоритет', value: null },
        { text: '1 - Незамедлительно', value: 1 },
        { text: '2- Высокий', value: 2 },
        { text: '3 - Средний', value: 3 },
        { text: '4 - Низкий', value: 4 },
      ],
    }
  },
  methods: {
    add(app) {
      let cloneApp = Object.assign({}, app)
      cloneApp.id = this.$store.getters.getApp.length + 1
      this.$store.dispatch('addApp', cloneApp)
      for (let key in this.app) {
        app[key] = null
      }
    },
  },
  watch: {
    modalShow: function() {
      this.$router.push({ path: `/statement` })
    },
  },
}
</script>

<style lang="sass">
.modal-content
  max-width: 500px
  min-width: 250px
  min-height: 500px
  input, select
    margin-top: 20px
  p
    padding: 0.3rem 0.3rem
  // .modal-header
  //   display: flex
</style>
