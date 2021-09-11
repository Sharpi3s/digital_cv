<template>
<div>

  <div class="container d-lg-flex mt-3">
    <div class="col-lg-1 col-xl-2"></div>
    <div class="col-12 col-lg-3">
      <div class="text-center profile col-7 col-lg-9" data-aos="fade-up" data-aos-duration="1200">
          <img class="profile-img img-fluid" src="@/assets/images/profilbild-anna2.png" alt="">
      </div>
      <div class="col-md space line-height contact" data-aos="fade-up" data-aos-duration="1200">
        <h3 class="title">ANNA SÄTERI</h3>
        <p>Blivande Frontend-utvecklare</p>

        <div class="line-b"></div>

        <div class="anna-contact">
          <div class="d-flex"><i class="far fa-circle me-3"></i><p> 070-491 98 84</p></div>
          <div class="d-flex"><i class="far fa-circle me-3"></i><p><a class="text-decoration-underline" href="mailto:anna.ssateri@gmail.com" rel="noopener noreferrer" target="_blank">anna.ssateri@gmail.com</a></p></div>
          <div class="d-flex"><i class="far fa-circle me-3"></i><p> Sigfrid Edströms gata 29B,<br>
            <span>724 66 Västerås</span></p></div>
          <div class="d-flex align-items-end"><a class="text-decoration-underline ms-1" href="https://drive.google.com/file/d/17TbPtcviR1blsc8FCVUlVz_MdoLv_try/view?usp=sharing" rel="noopener noreferrer" target="_blank"><button class="btn download-btn" data-mdb-ripple-color="dark">Ladda ner mitt CV<img class="download-icon ms-3 mb-1" src="@/assets/images/download-icon.svg"></button></a></div>
          <!-- <div class="d-flex align-items-end"><p class="download">Ladda ner mitt CV</p><a class="text-decoration-underline ms-1" href="https://drive.google.com/file/d/17TbPtcviR1blsc8FCVUlVz_MdoLv_try/view?usp=sharing" rel="noopener noreferrer" target="_blank"><button class="btn download-btn" data-mdb-ripple-color="dark"><img class="download-icon" src="@/assets/images/download-icon.svg"></button></a></div> -->
        </div>
      </div>
      <div class="col-md space" data-aos="fade-up" data-aos-duration="1200">
        <h3>PERSONLIG PROFIL</h3>
        <div class="line-b"></div>
        <p>Jag studerar på EC Utbildning till
            Frontend-utvecklare. Med min utbildning
            lär jag mig dom hetaste trenderna inom
            Frontend, med spetskompetens
            JavaScript. Jag har även god förståelse för
            design, användarvänlighet och Backend.
            Jag brinner för att fortsätta lära mig och
            utvecklas.
        </p>
      </div>
      <div class="col-md mt-4 space" data-aos="fade-up" data-aos-duration="1200">
        <h3>FRÄMSTA MERITER</h3>
        <div class="line-b"></div>
        <p><b class="ur">Kodspråk</b><br>
            JavaScript, HTML & CSS</p>
            <p><b class="ur">Ramverk/Program</b><br>
            Vue, React, Angular, Bootstrap,<br>
            Visual Studio, Adobe XD
        </p>
      </div>
    </div>

    <div class="col-lg-1 light-border ms-4 me-4">
      <div class="line"></div>
    </div>

    <div class="col-lg-5 col-xl-4 mt-lg-5" data-aos="fade-up" data-aos-duration="1200">
      <div class="col-md space">
        <h3>ARBETSLIVSERFARENHET</h3>
        <div class="line-b"></div>
        <p><b class="ur">Butikssäljare Hunkemöller</b><br>
            <i>HUNKEMÖLLER DETALJHANDEL</i><br>
            03-2018 / 04-2019<br></p>
            <p><b class="ur">Personlig Assistent</b><br>
            <i>ASSISTICUM AB</i><br>
            12-2014 / 08-2017
        </p>
      </div>
      <div class="col-md space" data-aos="fade-up" data-aos-duration="1200">
        <h3>UTBILDNING</h3>
        <div class="line-b"></div>
        <p><b class="ur">EC Utbildning</b><br>
            <i>FRONTEND-UTVECKLARE 2020-2022</i></p>
            <p><b class="ur">Västerås Idrottsgymnasium</b><br>
            <i>GYMNASIEEXAMEN AVGÅNGSÅR 2012</i>
        </p>
      </div>

      <div class="col-md space" data-aos="fade-up" data-aos-duration="1200" >
        <h3>MINA INTRESSEN</h3>
        <div class="line-b"></div>
        <div class="col-12 d-flex align items center">
          <img class="anna-icon" src="@/assets/images/anna-icon/anna-icons.png" alt="">
        </div>
      </div>
      <div class="col-md space" data-aos="fade-up" data-aos-duration="1200">
        <h3>MINA REFERENSER</h3>
        <div class="line-b"></div>
        <p>Sophie Eriksson<br>
            Administrativ Samordnare<br>
            070-878 48 73<br>
            sophieriksson@live.com
        </p>
      </div>
      <div class="col-md" data-aos="fade-up" data-aos-duration="1200">
        <img class="col-12 drawing" src="@/assets/images/anna-drawing.png" alt="">
      </div>
      <div class="col-xl-1"></div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>
.profile {
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
}
.title {
  font-family: 'Raleway', 'Roboto', sans-serif;
  letter-spacing: 3px;
  word-spacing: 3px;
  font-size: 1.5rem;
}
.profile-img {

  display: block;
  border: 1px solid #DEE0ED;
  border-radius: 4px;
  padding: 5px;
  margin-bottom: -1rem;
  margin-top: 2rem;
}

.line-b {
  margin-top: 10px;
  content: ""; 
  display: block; 
  width: 25%; 
  margin-bottom: 0.5rem;
  padding-top: 10px; 
  border-top: 2px solid #AC77FF; 
}
.space {
  margin-bottom: 2.5rem;
}
p {
  color: #BDBFCB;
  line-height: 1.7;
  font-size: 0.85rem;
}
a {
  color: #BDBFCB;
}
h3 {
  color: #fff;
  /* color: #F8F7F8; */
  font-family: 'Raleway', 'Roboto', sans-serif;
  letter-spacing: 3px;
  word-spacing: 3px;
  margin-top: 3rem;
  font-size: 1.1rem;
}
ul {
  list-style: none;
}
.fa-circle {
  color: #AC77FF;
  opacity: 0.6;
  font-size: 0.5rem;
  margin-top: 0.6rem;
}
.ur{
  color: #DCDADC;
  font-size: 0.95rem;
}
.icon {
  color: #AC77FF;
  margin-bottom: 0rem;
}
.profile p {
    font-weight: 600;
}

.anna-icon {
  width: 100%;
}
.download-icon {
  height: 1rem;
  
}
.download-btn {
  padding: 0.4rem 0.4rem 0.15rem 0.4rem;
  color: #BDBFCB;
  border: 1px solid #dcdadc9c;
  margin-top: 1.5rem;
}
.download-btn:hover {
  color: #bdbfcbc2;;
}
.download-btn:hover .download-icon {
  opacity: 0.7;
}
.download {
  line-height: 0;
  margin-bottom: 0.5rem;
}

.anna-contact p {
  font-size: 0.9rem;
  margin-bottom: 2px;
}
.contact {
  margin-bottom: 4.5rem;
}

@media (min-width: 1024px) {
  .title {
    font-size: 1.9rem;
  }
    h3 {
        font-size: 1.2rem;
    }
    .ur{
      color: #DCDADC;
      font-size: 1.1rem;
    }
    .profile {
        margin-top: 50px;
        margin-left: unset;
        margin-right: unset;
    }
    .profile-img {
      display: block;
      border: 1px solid #DEE0ED;
      border-radius: 4px;
      padding: 5px;
      margin-top: 6.5rem;
      margin-bottom: 2rem;
    }

    .light-border {
      max-height: 130vw;
      position: relative;
    }
    .line-b {
      margin-top: 10px;
      content: ""; 
      display: block; 
      width: 20%; 
      padding-top: 10px; 
      border-top: 3px solid #AC77FF; 
    }

    .line {
      height: 90%;
      width: 40%;
      position: absolute;
      border-left: 0.2px solid #AC77FF;
      opacity: 0.6;
      top: 7.5%;
      bottom: 7.5%;
    }
    .download {
      line-height: 0;
      margin-bottom: 0.5rem;
    }
    .anna-icon {
      height: 8rem;
      width: unset;
    }
    .anna-contact p {
      font-size: 1rem;
      margin-bottom: 5px;
    }
    .contact {
      margin-bottom: 1.5rem;
    }

}
@media (min-width: 1200px) {
    .profile {
        margin-top: 50px;
    }
    p {
      color: #BDBFCB;
      line-height: 1.7;
      font-size: 1rem;
    }

}
</style>