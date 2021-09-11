<template>
  <div class="home ">
    <div class="d-xl-flex align-items-center height container-fluid">
      <div class="col-xl-1"></div>
      <div 
        class="col-12 col-xl-5 ms-lg-3 d-flex " 
        id="anna" 
        data-aos="fade-right"
        data-aos-duration="3000"
      >

        <div class="col-12 col-xl-5 d-flex flex-column align-items-center ">
          <img class="col-8 col-md-8 col-lg-6 col-xl-12 anna-logo" src="@/assets/images/logo-anna-new.png" alt="">
          <!-- <img src="@/assets/images/frontpage-logo.svg" alt=""> -->
          <div class="icon mt-3">
            <a class="me-5 github" href="https://github.com/annasateri" target="_blank" rel="noopener noreferrer"><img src="@/assets/images/github-icon.svg" alt=""></a>
            <a class="in" href="https://se.linkedin.com/in/anna-s%C3%A4teri-89150a147" target="_blank" rel="noopener noreferrer"><img src="@/assets/images/in-icon.svg" alt=""></a>
          </div>
          <router-link to="/anna" class="btn btn-prime" :class="{ shake1: hover1 }">Visa mer</router-link>
        </div>
        <div class="img-anna ">
          <img @mouseover="hover1 = true" @mouseleave="hover1 = false" src="@/assets/images/anna.svg" alt="">
        </div>
      </div>
      <div 
        class="col-12 col-xl-5 d-flex justify-content-between pe-xl-5" 
        id="sanne" 
        data-aos="fade-left"
        data-aos-duration="3000"
      >

        <div class="img-sanne">
          <img @mouseover="hover2 = true" @mouseleave="hover2 = false" src="@/assets/images/sanne.svg" alt="">
        </div>
        <div class="col-12 col-xl-5 mt-4 mt-lg-5 d-flex flex-column align-items-center ">
          <img class="col-8 col-md-8  col-lg-6 col-xl-12 sanne-logo" src="@/assets/images/logo-sanne.svg" alt="">
          <!-- <img class="mt-4 mb-5" src="@/assets/images/frontpage-logo-sanne.svg" alt=""> -->
          <div class="icon">
            <a class="me-5 github" href="https://github.com/Sharpi3s" target="_blank" rel="noopener noreferrer"><img src="@/assets/images/github-icon.svg" alt=""></a>
            <a class="in" href="https://se.linkedin.com/in/sanne-sidell" target="_blank" rel="noopener noreferrer"><img src="@/assets/images/in-icon.svg" alt=""></a>
            
          </div>
          <router-link to="/sanne" class="btn btn-prime mb-5" :class="{ shake2: hover2 }">Visa mer</router-link>
        </div>
      </div>
    </div>
    <div>
      <img class="read-more" src="@/assets/images/about/readmore.png" alt="">
    </div>

    <about-us />

  </div>
</template>

<script>
import AboutUs from '../components/about/AboutUs.vue'

export default {
  components: { 
    AboutUs 
  },
  name: 'Home',
  data() {
    return {
      hover1: false,
      hover2: false
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style>
.home {
  overflow: hidden;
}
.icon {
  margin-bottom: 25px;
}
.in img {
  opacity: 0.8;
  width: 30px;
}
.in img:hover {
  opacity: 1;
}
.github img {
  opacity: 0.8;
  width: 30px;
}
.github img:hover {
  opacity: 1;
}
.img-anna {
  display: none;
  margin-top: 100px;
}
.img-sanne {
  display: none;
  margin-top: 140px;
  margin-left: 50px;
}
.anna-logo {
  margin-top: 10px;
  margin-bottom: -15px;
}
.sanne-logo {
  margin-bottom: 20px;
}
.read-more {
  display: none;
}
.height {
  min-height: calc(100vh - 50px);
}

@media (min-width: 1024px) {
  .anna-logo {
    margin-top: 80px;
  }
  .in img {
    opacity: 0.8;
    width: 50px;
  }
  .github img {
    opacity: 0.8;
    width: 50px;
  }
  .height {
    min-height: calc(80vh - 50px);
  }

}
@media (min-width: 1200px) {
  .height {
    min-height: calc(100vh - 50px);
  }
  .anna-logo {
    margin-top: 10px;
    margin-bottom: -20px;
  }
  .sanne-logo {
    margin-bottom: 20px;
  }
  .icon {
    margin-bottom: 50px;
  }
  .in img{
    opacity: 0.8;
    width: unset;
  }
  .in:hover {
    opacity: 1;
  }
  .github img{
    opacity: 0.8;
    width: unset;
  }
  .github:hover {
    opacity: 1;
  }
  .img-anna {
    margin-top: 20px;
    margin-left: -40px;
    display: block;
  }
  .img-sanne {
    margin-top: 100px;
    margin-left: 50px;
    display: block;
  }
  .img-anna img {
    height: 380px;
  }
  .img-sanne img {
    height: 380px;
  }
  .shake1 {
    animation: shake1 0.6s linear;
  }
  .shake2 {
    animation: shake2 0.6s linear;
  }
  .read-more {
    display: unset;
    margin-top: -15vh;
    margin-left: 2vw;
    height: 4rem;
  }
  @keyframes shake1 {
    0%    { transform: translate(1px, 1px) rotate(0deg);    }
    10%   { transform: translate(-1px, -2px) rotate(-1deg); }
    20%   { transform: translate(-3px, 0px) rotate(1deg);   }
    30%   { transform: translate(3px, 2px) rotate(0deg);    }
    40%   { transform: translate(1px, -1px) rotate(1deg);   }
    50%   { transform: translate(-1px, 2px) rotate(-1deg);  }
    60%   { transform: translate(-3px, 1px) rotate(0deg);   }
    70%   { transform: translate(3px, 1px) rotate(-1deg);   }
    80%   { transform: translate(-1px, -1px) rotate(1deg);  }
    90%   { transform: translate(1px, 2px) rotate(0deg);    }
    100%  { transform: translate(1px, -2px) rotate(-1deg);  }
  }
  @keyframes shake2 {
    0%    { transform: translate(1px, 1px) rotate(0deg);    }
    10%   { transform: translate(-1px, -2px) rotate(-1deg); }
    20%   { transform: translate(-3px, 0px) rotate(1deg);   }
    30%   { transform: translate(3px, 2px) rotate(0deg);    }
    40%   { transform: translate(1px, -1px) rotate(1deg);   }
    50%   { transform: translate(-1px, 2px) rotate(-1deg);  }
    60%   { transform: translate(-3px, 1px) rotate(0deg);   }
    70%   { transform: translate(3px, 1px) rotate(-1deg);   }
    80%   { transform: translate(-1px, -1px) rotate(1deg);  }
    90%   { transform: translate(1px, 2px) rotate(0deg);    }
    100%  { transform: translate(1px, -2px) rotate(-1deg);  }
  }
}
@media (min-width: 1400px) {
  .anna-logo {
    margin-top: 0px;
    margin-bottom: -25px;
  }
  .sanne-logo {
    margin-bottom: 20px;
  }
  .icon {
    margin-bottom: 50px;
  }
  .in img{
    opacity: 0.8;
    width: unset;
  }
  .in:hover {
    opacity: 1;
  }
  .github img{
    opacity: 0.8;
    width: unset;
  }
  .github:hover {
    opacity: 1;
  }
  .img-anna {
    margin-top: -50px;
    margin-left: -35px;
    display: block;
  }
  .img-sanne {
    margin-top: 0px;
    margin-left: 60px;
    display: block;
  }
  .img-anna img {
  height: 500px;
  }
  .img-sanne img {
    margin-top: 40px;
    height: 520px;
  }


}
</style>