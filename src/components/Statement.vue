<template>
  <b-container>
    <b-button variant="dark"
      ><router-link to="/statement/add">Добавить</router-link>
    </b-button>
    <div class="journal-table overflow-auto">
      <b-table
        id="my-table"
        :items="items"
        :fields="fields"
        selectable
        :select-mode="selectMode"
        ref="selectableTable"
        @row-selected="onRowSelected"
        :per-page="perPage"
        :current-page="currentPage"
      ></b-table>
      <b-pagination
        v-model="currentPage"
        :total-rows="items.length"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
      <router-view></router-view>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'Statement',
  data() {
    return {
      items: [],
      perPage: 8,
      currentPage: 1,
      selectMode: 'single',
      fields: [
        { key: 'address', label: 'Адрес' },
        { key: 'location', label: 'Местоположение' },
        { key: 'type', label: 'Тип аварии' },
        { key: 'priority', label: 'Приоритет' },
        { key: 'name', label: 'Заявитель' },
        { key: 'phone', label: 'Номер телефона' },
      ],
    }
  },
  computed: {
    // rows() {
    //   return this.items.length
    // },
    // perPage() {
    //   if (this.items.length < 5) {
    //     return this.this.items.length
    //   }
    //   return 5
    // },
    // storeItems(){
    //   return this.$store.getters.getApp
    // }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.items = this.$store.getters.getApp
    },
    onRowSelected(items) {
      console.log('Select', items[0])
      let item = items[0]
      let itemId = item.id
      this.$router.push({
        path: `/statement/${itemId}`,
      })
      // this.$refs.selectableTable.clearSelected()
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.container
  padding-top: 5%

.journal-table
  margin-top: 25px
</style>
