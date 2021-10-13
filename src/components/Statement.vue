<template>
  <b-container>
    <div class="statement-control">
      <b-button variant="dark"
        ><router-link to="/statement/add">Добавить</router-link>
      </b-button>
      <div>
        <b-form-input
          size="sm"
          class="mr-sm-2"
          placeholder="Search"
          v-model="search"
        ></b-form-input>
        <b-button size="sm" type="submit" @click="sortItems(this.search)"
          ><b-icon icon="search"></b-icon
        ></b-button>
      </div>
    </div>
    <div class="journal-table overflow-auto">
      <b-table
        v-if="!searchMode"
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
      <b-table
        v-else
        id="my-table"
        :items="sortedItems"
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
import { mapState } from 'vuex'
export default {
  name: 'Statement',
  data() {
    return {
      //items: [],
      sortedItems: [],
      search: '',
      searchMode: false,
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
    ...mapState({
      items: (state) => state.application,
    }),
  },
  created() {
    //this.items = this.$store.getters.getApp
  },
  methods: {
    onRowSelected(items) {
      console.log('Select', items[0])
      let item = items[0]
      let itemId = item.id
      this.$router.push({
        path: `/statement/${itemId}`,
      })
    },
    sortItems(value) {
      if (value != '') {
        this.searchMode = true
        this.sortedItems = this.items.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase()),
        )
      } else {
        this.searchMode = false
        this.sortedItems = []
      }
    },
  },
  watch: {
    search: function() {
      this.sortItems(this.search)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.container
  padding-top: 5%

.statement-control
  display: flex
  justify-content: space-between
  div
    display: flex
    align-items: center
  .form
    display: flex
  input
    width: 200px
.journal-table
  margin-top: 25px
button
  a
    color: white
    text-decoration: none
    &:hover
      text-decoration: none
      color: white
</style>
