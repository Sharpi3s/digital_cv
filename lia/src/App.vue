<template>
  <div id="app">
    <navbar />
    <router-view class="view" />
    <app-footer />
  </div>
</template>
<script>
  import Navbar from './components/navigation/Navbar'
  import appFooter from './components/navigation/Footer'
  export default {
    components: {
      Navbar,
      appFooter
    },

  }
</script>
<style>
  /* font-family: 'Montserrat', sans-serif;
  font-family: 'Roboto', sans-serif; */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scrollbar-width: thin;
  scrollbar-color: #373841ee #292a30ee;
  font-family: 'Roboto', sans-serif;
  /* font-family: 'Raleway', 'Roboto', sans-serif; */
  letter-spacing: 1px;

}
html, body {
  /* background: rgb(36, 34, 37); */
  
  /* background: #2e2f35; */
  background: #2e2f35;
  /* background: #333138; */
  /* background: linear-gradient(180deg, #34333b 0%, #2e2f35 100%); */
  /* background: linear-gradient(50deg, rgba(61,57,63,1) 0%, rgb(41, 43, 53) 100%); */
  color: #eee;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
  z-index: -2;
}
/* Track */
::-webkit-scrollbar-track {
  z-index: -2;
  background: #292a30ee;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #373841ee;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #272936;
}
.view {
  padding-top: 56px;
}
/* .is-active-link {

  background-color: #ffffff;
  color: #2c2e3a;
} */
.pointer {
  cursor: pointer;
}
/* .height {
  min-height: calc(100vh - 56px);
} */
.btn-prime {
  background-color: transparent;
  color: #ffffff;
  box-shadow: -3px 5px 10px rgba(51, 51, 51, 0.357), inset 0 0 0 2px #ffffff;
  border-radius: 3px;
  transition: 0.3s transform ease;
  will-change: transform;
  position: relative;
  z-index: 0;
  overflow: hidden;
}

.btn-prime:after {
  background-color: #ffffff;
  content: '';
  display: block;
  height: 100%;
  width: 180%;
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-120%, 0) skew(45deg);
  transform-origin: top left;
  transition: 0.3s transform linear;
  will-change: transform;
  z-index: -1;
}
/* .riplled-surface {
  box-shadow: 0 0 0 2px #03DAC6;
} */

.btn-prime:hover::after {
  transform: translate(-30%, 0) skew(45deg);
} 
.btn-prime:focus {
  box-shadow: -3px 5px 10px rgba(51, 51, 51, 0.357), inset 0 0 0 2px #ffffff;
} 
.btn-prime:hover {
  box-shadow: -3px 5px 10px rgba(51, 51, 51, 0.357), inset 0 0 0 2px #ffffff;
  color: #414455;
  font-weight: 700;
  will-change: transform;
}
.btn-prime a:hover {
  color: #414455;
}
</style>
