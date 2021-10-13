<template>
  <div id="app">
    <b-container id="nav">
      <div>
        <b-navbar toggleable="lg" type="light">
          <b-navbar-brand href="#"> <h2>Datum-project</h2></b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="nav-content ml-auto">
              <b-nav-form>
                <b-button variant="light"
                  ><router-link to="/statement" class="router-link-active"
                    >Journal</router-link
                  ></b-button
                >
                <b-button variant="light"
                  ><router-link to="/map">Map</router-link></b-button
                >
              </b-nav-form>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </b-container>
    <router-view />
  </div>
</template>

<style lang="sass" scoped>
.nav-content
  button
    margin: 0px 5px 0px 5px
button
  a
    color: black
    text-decoration: none
    &:hover
      text-decoration: none
      color: black
</style>
