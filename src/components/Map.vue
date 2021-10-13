<template>
  <div class="map">
    <vl-map
      :load-tiles-while-animating="true"
      :load-tiles-while-interacting="true"
      @click="getCoordinateFromPixel"
    >
      <vl-view
        :zoom.sync="zoomLocal"
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
                :id="`popover-${app.id}`"
                class="overlay-content red"
                :class="{
                  red: app.priority == 1,
                  orange: app.priority == 2,
                  blue: app.priority == 3,
                  white: app.priority == 4,
                }"
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
    x: {
      type: String,
      default: null,
    },
    y: {
      type: String,
      default: null,
    },
    zoom: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      zoomLocal: 12,
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
      this.editPoint = pixel.coordinate
      this.$emit('setCoords', pixel.coordinate)
    },
  },
  mounted() {
    if (this.zoom != undefined) {
      this.zoomLocal = Number(this.zoom)
    }
    if (this.x != undefined) {
      this.center[0] = this.x
    }
    if (this.y != undefined) {
      this.center[1] = this.y
    }
    if (
      (this.zoom == undefined || this.x == undefined || this.y == undefined) &&
      this.showPoints
    ) {
      this.$router.push({
        name: 'mapXYZ',
        params: {
          x: this.center[0].toString(),
          y: this.center[1].toString(),
          zoom: this.zoomLocal.toString(),
        },
      })
    }
  },
  watch: {
    zoomLocal: function(val) {
      if (Number(val) !== Number(this.zoom) && this.showPoints) {
        this.$router.push({
          name: 'mapXYZ',
          params: {
            x: this.center[0].toString(),
            y: this.center[1].toString(),
            zoom: this.zoomLocal.toString(),
          },
        })
      }
    },
    center: function(val) {
      if (
        (Number(val[0]) !== Number(this.x) ||
          Number(val[1] !== Number(this.y))) &&
        this.showPoints
      ) {
        this.$router.push({
          name: 'mapXYZ',
          params: {
            x: this.center[0].toString(),
            y: this.center[1].toString(),
            zoom: this.zoomLocal.toString(),
          },
        })
      }
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
