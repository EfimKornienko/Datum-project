<template>
  <div>
    <Modal :id="this.$attrs.id" />
  </div>
</template>
<script>
import Modal from './Modal.vue'
export default {
  name: 'EditModal',
  components: {
    Modal,
  },
  data() {
    return {
      app: {},
    }
  },
  created() {
    console.log(this.$attrs.id)
  },
  methods: {
    edit(app) {
      this.app = app
      this.$store.dispatch('editApp', app)
    },
  },
}
</script>

<style lang="sass"></style>
