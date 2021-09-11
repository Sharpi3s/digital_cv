<template>
  <div class="height sanne-bg">
    <div class="d-flex justify-content-center pt-3 pt-lg-5">
      <div >
        <button v-on:click="changeTrue" class="btn btn-toggle" :class="{'is-active-link': toggle}">CV</button>
        <button v-on:click="changeFalse" class="btn btn-toggle" :class="{'is-active-link': !toggle}">Personligt Brev</button>
      </div>
    </div>
    
    <cv-sanne v-if="toggle"/>
    <pb-sanne v-if="!toggle" />
  </div>
</template>

<script>
import CvSanne from '../components/sanne/CvSanne.vue'
import PbSanne from '../components/sanne/PbSanne.vue'
export default {
  data() {
    return {
       toggle: true
    }
  },
  components: {
    CvSanne,
    PbSanne
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
  .sanne-bg {
    background: #2e2f35;
    /* background-color: rgb(41, 43, 53); */
  }
</style>