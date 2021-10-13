<template>
  <div class="map">
    <vl-map
      :load-tiles-while-animating="true"
      :load-tiles-while-interacting="true"
      @click="getCoordinateFromPixel"
    >
      <vl-view
        :zoom.sync="zoom"
        :center.sync="center"
        :rotation.sync="rotation"
      ></vl-view>

      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>
      <div v-if="showPoints">
        <div v-for="app in apps" :key="app.id">
          <vl-overlay :position="app.location">
            <template>
              <div
                v-if="app.priority == 1"
                :id="`popover-${app.id}`"
                class="overlay-content red"
              ></div>
              <div
                v-if="app.priority == 2"
                :id="`popover-${app.id}`"
                class="overlay-content orange"
              ></div>
              <div
                v-if="app.priority == 3"
                :id="`popover-${app.id}`"
                class="overlay-content blue"
              ></div>
              <div
                v-if="app.priority == 4"
                :id="`popover-${app.id}`"
                class="overlay-content white"
              ></div>
              <b-popover
                :target="`popover-${app.id}`"
                title="Info"
                triggers="hover focus"
                :content="
                  `Адрес: ${app.address}, Тип: ${app.type}, Заявитель: ${app.name}, Телефон: ${app.phone}`
                "
              ></b-popover>
            </template>
          </vl-overlay>
          <vl-feature>
            <vl-geom-point :coordinates="app.location"></vl-geom-point>
          </vl-feature>
        </div>
      </div>
      <div v-else>
        <vl-feature v-if="editPoint != null">
          <vl-geom-point :coordinates="editPoint"></vl-geom-point>
        </vl-feature>
      </div>
    </vl-map>
  </div>
</template>

<script>
export default {
  props: {
    showPoints: {
      type: Boolean,
      default() {
        return true
      },
    },
  },
  data() {
    return {
      zoom: 12,
      center: [4418277.6114082355, 5980677.411448954],
      rotation: 0,
      editPoint: null,
      apps: [],
    }
  },
  created() {
    this.apps = this.$store.getters.getApp
  },
  methods: {
    getCoordinateFromPixel(pixel) {
      this.$store.dispatch('setPoint', pixel.coordinate)
      this.editPoint = pixel.coordinate
    },
  },
}
</script>

<style lang="sass" scoped>
.map
  display: flex
  justify-content: center
  align-items: center
  height: 80vh
  .vl-map
    width: 80%
.overlay-content
  width: 20px
  height: 20px
.red
  background-color: red
.orange
  background-color: orange
.blue
  background-color: blue
.white
  background-color: #fff
</style>
