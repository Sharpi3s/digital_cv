<template>
  <div class="mt-3 d-lg-flex align-items-center container gap-5 pb-5">
    <div class="profile">
        <img class="profile-img" src="@/assets/images/profilbild-anna.png" alt="">
        <p class="text-center mt-3">Kolla in mina projekt på GitHub
        <br>
        <a href="https://github.com/annasateri" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a></p>
    </div>
    <div class="mt-5">
    <div class="row">
      <div class="col-md">
        <h5>PERSONLIG PROFIL</h5>
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
      <div class="col-md">
        <h5>ARBETSLIVSERFARENHET</h5>
        <p><b>Butikssäljare Hunkemöller</b><br>
            <i>HUNKEMÖLLER DETALJHANDEL</i><br>
            03-2018 / 04-2019<br></p>
            <p><b>Personlig Assistent</b><br>
            <i>ASSISTICUM AB</i><br>
            12-2014 / 08-2017
        </p>
      </div>
    </div>
    <div class="row">
        <div class="col-md">
            <h5>FRÄMSTA MERITER</h5>
            <p><b>Kodspråk</b><br>
                JavaScript, HTML & CSS</p>
                <p><b>Ramverk/Program</b><br>
                Vue, React, Angular, Bootstrap,<br>
                Visual Studio, Adobe XD
            </p>
        </div>
        <div class="col-md">
            <h5>UTBILDNING</h5>
            <p><b>EC Utbildning</b><br>
                <i>FRONTEND-UTVECKLARE 2020-2022</i></p>
                <p><b>Västerås Idrottsgymnasium</b><br>
                <i>GYMNASIEEXAMEN AVGÅNGSÅR 2012</i>
            </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md">
            <h5>MINA REFERENSER</h5>
            <p>Sophie Eriksson<br>
                Administrativ Samordnare<br>
                070-878 48 73<br>
                sophieriksson@live.com
            </p>
        </div>
        <div class="col-md">
            <h5>KONTAKTUPPGIFTER</h5>
            <p>070-491 98 84<br>
            <a class="text-white text-decoration-underline" href="mailto:anna.ssateri@gmail.com" rel="noopener noreferrer" target="_blank">anna.ssateri@gmail.com</a>
            <br>
            Sigfrid Edströms gata 29B,<br>
            724 66 Västerås
            </p>
        </div>
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
.drawing {
  height: 10rem;
}
 .profile-img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    /* width: 250px; */
    width: 70%;
    border: 1px solid #fff;
    border-radius: 4px;
    padding: 5px;
    
}
h5 {
    color: #d8a04c;
    letter-spacing: 1px;
}

.fab {
    font-size: 1.5rem;
    margin-top: 0.5rem;
    color: #fff;
}
.fab:hover {
    color: #975366;
}
.profile p {
    font-weight: 600;
}
.profile {
    margin-top: 50px;
}

@media (min-width: 1200px) {
    .profile {
        margin-top: 50px;
    }
}
</style>