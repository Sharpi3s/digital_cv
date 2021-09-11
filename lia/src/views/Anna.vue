<template>
  <div class="anna-bg">
    <div class="height">
      <div class="d-flex justify-content-center pt-3 pt-lg-5">
        <div >
          <button v-on:click="changeTrue" class="btn btn-toggle" :class="{'is-active-link': toggle}">CV</button>
          <button v-on:click="changeFalse" class="btn btn-toggle" :class="{'is-active-link': !toggle}">Personligt Brev</button>
        </div>
      </div>
      <div class="pb-5">
            
        <!-- <cv-anna v-if="toggle" data-aos="fade-up" data-aos-duration="3000" /> -->
        <anna-cv v-if="toggle" />
        <pb-anna v-if="!toggle" data-aos="fade-up" data-aos-duration="1200"/>
      </div>
    </div>
  </div>
</template>

<script>
import AnnaCv from '../components/anna/AnnaCv.vue'

// import CvAnna from '../components/anna/CvAnna.vue'
import PbAnna from '../components/anna/PbAnna.vue'
export default {
  data() {
    return {
       toggle: true
    }
  },
  components: {
    // CvAnna,
    
    PbAnna,
    AnnaCv
  },
  methods: {
    changeTrue() {
      this.toggle = true
    },
    changeFalse() {
      this.toggle = false
    }

  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style>
  .anna-bg {
    background-color: #2e2f35;
    /* background-color: #302f35; */
    /* background-color: #343234; */
  }

  .btn-toggle {
  width: 175px;
  background-color: transparent;
  color: #ffffff;
  /* box-shadow: -3px 5px 10px rgba(51, 51, 51, 0.357), inset 0 0 0 2px #ffffff; */
  border-radius: 0px;
  transition: 0.3s transform ease;
  will-change: transform;
  position: relative;
  z-index: 0;
  overflow: hidden;
}

.btn-toggle:after {
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
   box-shadow: -3px 5px 10px rgba(51, 51, 51, 0.357), inset 0 0 0 2px #ffffff;
}
/* .riplled-surface {
  box-shadow: 0 0 0 2px #03DAC6;
} */

.btn-toggle:hover::after {
  transform: translate(-30%, 0) skew(45deg);
   /* box-shadow: -3px 5px 10px rgba(51, 51, 51, 0.357), inset 0 0 0 2px #ffffff; */
} 
.btn-toggle:focus {
  box-shadow: -3px 5px 10px rgba(51, 51, 51, 0.357), inset 0 0 0 2px #ffffff;
} 
.btn-toggle:hover {
  box-shadow: -3px 5px 10px rgba(51, 51, 51, 0.357), inset 0 0 0 2px #ffffff;
  color: #414455;
  font-weight: 700;
  will-change: transform;
}
.btn-toggle::after {
  box-shadow: -3px 5px 10px rgba(51, 51, 51, 0.357), inset 0 0 0 2px #ffffff;
}
.is-active-link {
  box-shadow: -3px 5px 10px rgba(51, 51, 51, 0.357), inset 0 0 0 2px #ffffff;
 
}

</style>