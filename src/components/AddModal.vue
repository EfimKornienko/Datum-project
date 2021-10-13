<template>
  <div>
    <Modal :addMode="true" />
  </div>
</template>
<script>
import Modal from './Modal.vue'
export default {
  name: 'AddModal',
  components: {
    Modal,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="sass" scoped></style>
