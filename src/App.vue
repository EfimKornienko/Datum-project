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
                <b-form-input
                  size="sm"
                  class="mr-sm-2"
                  placeholder="Search"
                ></b-form-input>
                <b-button class="my-2  my-sm-0" size="sm" type="submit"
                  ><b-icon icon="search"></b-icon
                ></b-button>
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
      <!-- <h3>Datum-project</h3>
      <b-nav>
        <div class="form">
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Search"
          ></b-form-input>
          <b-button class="my-2 my-sm-0" type="submit">Search</b-button>
        </div>
        <b-button variant="light"
          ><router-link to="/Journal">Journal</router-link></b-button
        >
        <b-button variant="light"
          ><router-link to="/Journal">Journal</router-link></b-button
        >
      </b-nav> -->
    </b-container>
    <router-view />
  </div>
</template>

<style lang="sass" scoped>
// #nav
//   padding-top: 5vh
//   display: flex
//   flex-wrap: wrap
//   justify-content: space-between
.nav-content
  button
    margin: 0px 5px 0px 5px


.form
  display: flex
  input
    width: 200px

button
  a
    color: black
    text-decoration: none
    &:hover
      text-decoration: none
      color: black
</style>
