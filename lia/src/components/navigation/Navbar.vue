<template>

  <div id="nav-bar">
    <nav id="nav" class=" d-flex justify-content-between align-items-center">
      <router-link to="/">
        <img class="nav-img" src="@/assets/sa-light.svg" alt="">
      </router-link>


      <div>
        <div class="hamburger" id="hamburger"  @click="change" :class="{'is-active': toggle}">
          <div class="box-1">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </div>
          <div class="box-2">
            <span class="line2"></span>
            <span class="line2"></span>
          </div>

        </div>

      </div>

    </nav>

    <!-- <div id="dropdown"> -->
      <div id="drop-content" :class="{'is-active': toggle}">
        <div class="navbar-nav mb-2 mb-lg-0 text-uppercase">
          <div @click="closeHome"  class="nav-item px-4 py-3 fs-6 pointer">
            <p class="nav-link mb-0 text-white">Hem</p>
          </div>
          <div @click="closeAnna" class="nav-item px-4 py-3 fs-6 pointer">
            <p class="nav-link mb-0 text-white">Anna Säteri</p>
          </div>
          <div @click="closeSanne" class="nav-item px-4 py-3 fs-6 pointer">
            <p class="nav-link mb-0 text-white">Sanne Sidell</p>
          </div>

        </div>
      </div>
    <!-- </div> -->
  </div>

</template>

<script>

export default {
  data() {
    return {
      toggle: false
    }
  },
  methods: {
    change() {
      if(this.toggle) {
        this.toggle = false
      }
      else {
        this.toggle = true
      }
    },
    closeHome() {
      const path = '/'
      if(this.$route.path !== path) {
        this.$router.push({ name: 'Home'});
        this.toggle = false
      }
      else {
        this.toggle = false
      }
    },
    closeAnna() {
      const path = '/anna'
      if(this.$route.path !== path) {
        this.$router.push({ name: 'Anna'});
        this.toggle = false
      }
      else {
        this.toggle = false
      }
    },
    closeSanne() {
      const path = '/sanne'
      if(this.$route.path !== path) {
        this.$router.push({ name: 'Sanne'});
        this.toggle = false
      }
      else {
        this.toggle = false
      }
    },

  },
}
    // <router-link to="/">Home</router-link> 
    // <router-link to="/about">About</router-link>
</script>

<style>
#nav-bar {
  position: fixed;
  width: 100%;
  height: 49.59px;
  z-index: 5;
}

#nav {
  position: relative;
  background-color: #292a30ee;
  /* background-color: #34333bcb; */
  padding: 0.3rem 0.7rem;
  overflow: hidden;
  z-index: 4;
}
.nav-img {
  height: 1.5rem;
}

#drop-content {
  height: inherit;
  max-width: 100vw;
  overflow: hidden;
  position: fixed;
  top: 60;
  left: 0;
  z-index: 3;
  width: 100vw;
  height: calc(100vh - 49.59px);
  background-color: #292a30ee;
  /* background-color: #34333be5; */
  -webkit-transform: translate(100%, 0);
  -moz-transform: translate(100%, 0);
  -ms-transform: translate(100%, 0);
  -o-transform: translate(100%, 0);
  transform: translate(100%, 0);
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}
#drop-content.is-active {
  /* -webkit-transform: translate(0%, 0);
  -moz-transform: translate(0%, 0);
  -ms-transform: translate(0%, 0);
  -o-transform: translate(0%, 0); */
  transform: translate(0%, 0);
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}
.navbar-nav {
  height: inherit;
  width: inherit;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  /* justify-content: center; */
  align-items: flex-end;
}

.nav-link {
  border-bottom: 1px solid transparent;
  font-size: 2rem;
  font-weight: 700;
}
.nav-link:hover {
  /* filter: brightness(1.75); */
  border-bottom: 1px solid #ecf0f1;
}
.hamburger .line{
  width: 30px;
  height: 3px;
  border-radius: 50px;
  background-color: #ecf0f1;
  display: block;
  margin: 5px auto;
}
.hamburger .line:nth-child(1){
  -webkit-transition:transform .2s ease-in-out;
  -moz-transition: transform .2s ease-in-out;
  -o-transition: transform .2s ease-in-out;
  transition: transform .2s ease-in-out;
}
.hamburger .line:nth-child(2){
  -webkit-transition:transform .2s ease-in-out .1s;
  -moz-transition: transform .2s ease-in-out .1s;
  -o-transition: transform .2s ease-in-out .1s;
  transition: transform .2s ease-in-out .1s;
}
.hamburger .line:nth-child(3){
  -webkit-transition:transform .2s ease-in-out .2s;
  -moz-transition: transform .2s ease-in-out .2s;
  -o-transition: transform .2s ease-in-out .2s;
  transition: transform .2s ease-in-out .2s;
}
.box-1, .box-2 {
  position: absolute;
}

.hamburger .line2:nth-child(1){
  width: 30px;
  height: 3px;
  background-color: #ecf0f1;
  display: block;
  /* margin: 5px auto; */
  border-radius: 50px;
  -webkit-transition: transform 0.2s ease-in-out;
  -moz-transition: transform .2s ease-in-out;
  -o-transition: transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out;
  -webkit-transform: rotate(45deg) translate3d(-40px, 0, 0);
  -ms-transform: rotate(45deg) translate3d(-40px, 0, 0);
  -o-transform: rotate(45deg) translate3d(-40px, 0, 0);
  transform: rotate(45deg) translate3d(-45px, 0, 0);
}
.hamburger .line2:nth-child(2){
  width: 30px;
  height: 3px;
  background-color: #ecf0f1;
  display: block;
  /* margin: 5px auto; */
  border-radius: 50px;
  -webkit-transition: transform 0.3s ease-in-out;
  -moz-transition: transform 0.3s ease-in-out;
  -o-transition: transform 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;
  -webkit-transform: rotate(-45deg) translate3d(45px, 0, 0);
  -ms-transform: rotate(-45deg) translate3d(45px, 0, 0);
  -o-transform: rotate(-45deg) translate3d(45px, 0, 0);
  transform: rotate(-45deg) translate3d(45px, 0, 0);
}
.hamburger.is-active .line2:nth-child(1){
  width: 30px;
  height: 3px;
  background-color: #ecf0f1;
  display: block;
  -webkit-transition: transform 0.4s ease-in-out;
  -moz-transition: transform .4s ease-in-out;
  -o-transition: transform 0.4s ease-in-out;
  transition: transform 0.4s ease-in-out;
  -webkit-transform: translateY(0px) rotate(45deg);
  -ms-transform: translateY(0px) rotate(45deg);
  -o-transform: translateY(0px) rotate(45deg);
  transform: translateY(0px) rotate(45deg);
}
.hamburger.is-active .line2:nth-child(2){
  width: 30px;
  height: 3px;
  background-color: #ecf0f1;
  display: block;
  -webkit-transition: transform 0.3s ease-in-out;
  -moz-transition: transform .3s ease-in-out;
  -o-transition: transform 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;
  -webkit-transform: translateY(-3px) rotate(-45deg);
  -ms-transform: translateY(-3px) rotate(-45deg);
  -o-transform: translateY(-3px) rotate(-45deg);
  transform: translateY(-3px) rotate(-45deg);
}

.hamburger:hover{
  cursor: pointer;
}

#hamburger{
  position: relative;
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

#hamburger.is-active .line{
  width: 35px;
}

#hamburger.is-active .line:nth-child(1), #hamburger.is-active .line:nth-child(2), #hamburger.is-active .line:nth-child(3){
  -webkit-transform: translate(80px, 0px);
  -ms-transform: translate(80px, 0px);
  -o-transform: translate(80px, 0px);
  transform: translate(80px, 0px);
}


@media (min-width: 1024px) {
  .navbar-nav {
    padding-top: 0px;
    justify-content: center;
    align-items: center;
  }
  .nav-link {
    font-size: 3rem;
  }
}
@media (min-width: 1200px) {
  .navbar-nav {
    padding-top: 0px;
    justify-content: center;
    align-items: center;
  }
  .nav-link {
    font-size: 3rem;
  }
  #nav {
  position: relative;
  background-color: #292a30ee;
  /* background-color: #34333bcb; */
  padding: 0.3rem 2.5rem;
  overflow: hidden;
  z-index: 4;
  }
}

</style>
