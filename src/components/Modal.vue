<template>
  <b-modal v-model="modalShow" size="lg" title="Add">
    <template class="modal-header" #modal-header="{cancel}">
      <h5>Add</h5>
      <button type="button" aria-label="close" class="close" @click="cancel()">
        <router-link to="/statement">×</router-link>
      </button>
    </template>
    <b-form-input
      v-model="app.address"
      placeholder="Адрес"
      required
    ></b-form-input>
    <p>Укажите местоположение</p>
    <div class="map">
      <Map :showPoints="false" />
    </div>
    <b-form-select v-model="app.type" :options="types" required></b-form-select>
    <b-form-select
      v-model="app.priority"
      :options="prior"
      required
    ></b-form-select>
    <b-form-input
      v-model="app.name"
      placeholder="Заявитель"
      required
    ></b-form-input>
    <b-form-input
      v-model="app.phone"
      placeholder="Телефон"
      required
    ></b-form-input>

    <template #modal-footer="{ ok, cancel}" class="modal-footer">
      <b-button size="sm" variant="dark" @click="cancel()">
        <router-link to="/statement">Назад</router-link>
      </b-button>
      <div v-if="validForm">
        <b-button size="sm" variant="success" @click="ok(), pushApp(app)">
          <router-link to="/statement">Ок</router-link>
        </b-button>
      </div>
    </template>
  </b-modal>
</template>
<script>
import Map from './Map.vue'
export default {
  name: 'Modal',
  components: {
    Map,
  },
  props: {
    addMode: {
      type: Boolean,
      default() {
        return false
      },
    },
    id: {
      type: String,
      default() {
        return null
      },
    },
  },
  data() {
    return {
      modalShow: true,
      completeForm: false,
      app: {
        address: null,
        location: [],
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
  created() {
    if (!this.addMode) {
      this.app = this.$store.getters.getApp.find((el) => el.id == this.id)
    }
  },
  computed: {
    validForm() {
      for (let key in this.app) {
        if (this.app[key] == null) {
          return false
        }
      }
      return true
    },
  },
  methods: {
    pushApp(app) {
      this.app.location = this.$store.getters.getPoint
      if (this.addMode) {
        let cloneApp = Object.assign({}, app)
        cloneApp.id = this.$store.getters.getApp.length + 1
        this.$store.dispatch('addApp', cloneApp)
        for (let key in this.app) {
          app[key] = null
        }
      } else {
        this.$store.dispatch('editApp', app)
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

<style lang="sass" scoped>
.modal-content
  width: 80%
  input, select,p ,.map
    margin-top: 15px
  button
  a
    color: black
    text-decoration: none
    &:hover
    text-decoration: none
    color: black
.map
  max-width: 900px
  max-height: 380px
.modal-footer
  button
  a
    color: white
    text-decoration: none
    &:hover
    text-decoration: none
    color: white
</style>
