<template>
  <div id="bg-about">

    <div class="container">
      <div class="aos" data-aos="fade-up" data-aos-duration="1200">
        <h2 class="text-center rubrik mb-4">UTVECKLAS MED OSS </h2>
        <!-- <h2 class="text-center mb-5">&#60;h1&#62; <span class="h1">Hej</span> &#60;/h1&#62;</h2> -->
        <!-- <h1 class="text-center mb-5">[ Hej ]</h1> -->
        <p class="text-center col-11 col-lg-8 m-auto mb-5">
          Vi är två blivande Frontend-utvecklare som just nu söker praktik (LIA). <br>
          Vår ambition med praktiken är att få en kompetent mentor som är delaktig i projekt och uppgifter.
          Det är viktigt för att skapa en god utvecklingskurva då vi båda har en stark drivkraft mot att ständigt bli bättre. <br>
          Vi ser oss själva som potentiella framtida anställda hos er och kommer lägga ribban därefter.

        </p>
      </div>

      <div class="border-orange mb-4"></div>

      <div class="col-11 col-lg-10 m-auto about-grid row row-cols-1 row-cols-lg-3 g-4" >
        <div class="mb-5 col center aos" data-aos="fade-up" data-aos-duration="1200">
          <div class="col-12 col-lg-11 card h-100 pt-3 about-section ps-3 ps-lg-4" >
            <div class="card-body">
            <!-- <div class="card-body m-auto"> -->
              <img class="mb-4 about-icon" src="@/assets/images/about/pink-pen.svg" alt="">

              <h5 class="mb-4 card-title">UTBILDNING</h5>
              <h6 class="card-text">Frontend-utvecklare</h6>
              <p class="card-text fs-6 pb-3">EC Utbildning <br>
                Västerås
              </p>
            </div>
          </div>
        </div>
        <div class="mb-5 col center aos" data-aos="fade-up" data-aos-duration="1200">
          <div class="col-12 col-lg-11 card h-100 pt-3 about-section ps-3 ps-lg-4 ">
            <div class="card-body">
            <!-- <div class="card-body m-auto"> -->
              <img class="mb-4 about-icon" src="@/assets/images/about/pink-book.svg" alt="">

              <h5 class="mb-4 card-title">KURSER</h5>
              <div class="card-text fs-6 pb-3">
                <div class="d-flex align-items-center"><i class="fas fa-circle fa-xs me-2"></i><p class="mb-0 fs-6">Agila projektmetoder</p></div>
                <div class="d-flex align-items-center"><i class="fas fa-circle fa-xs me-2"></i><p class="mb-0 fs-6">UX/ grafisk-design</p></div>
                <div class="d-flex align-items-center"><i class="fas fa-circle fa-xs me-2"></i><p class="mb-0 fs-6">HTML och CSS</p></div>
                <div class="d-flex align-items-center"><i class="fas fa-circle fa-xs me-2"></i><p class="mb-0 fs-6">JavaScript 1,2,3</p></div>
                <div class="d-flex align-items-center"><i class="fas fa-circle fa-xs me-2"></i><p class="mb-0 fs-6">Backend för frontend 1, 2</p></div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-5 center col aos" data-aos="fade-up" data-aos-duration="1200">
          <div class="col-12 col-lg-11 h-100 pt-3 card about-section ps-3 ps-lg-4">
            <div class="card-body">
            <!-- <div class="card-body m-auto"> -->
              <img class="mb-4 about-icon" src="@/assets/images/about/pink-computer.svg" alt="">
              <div class="card-text">
                <h5 class="mb-4">PRAKTIK</h5>
                <h6 class="mb-1">Period 1</h6>
                <p class="mb-4 fs-6">22/11-21 - 28/1-22 </p>
                <h6 class="mb-1">Period 2</h6>
                <p class="fs-6">31/1-22 - 22/4-22  </p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="border-orange mb-5"></div>
      <div class="text-center col-12 col-lg-8 m-auto mb-5 aos" data-aos="fade-up" data-aos-duration="1200">
        <p>
        Det vi kommer att bidra med är nyfikenhet och passion för webutveckling. <br>
        Passionen för webutveckling är inte bara att skriva kod utan även det som hör till, 
        så som problemlösningar och att alltid ligga i framkant för framtidensutveckling.</p>
      </div>
      <div data-aos="fade-up" data-aos-duration="1200">
        <div class="my-4 text-center aos" >
          <h6>Låter detta intressant?</h6>
          <p>Vi ser gärna att vi bokar in ett möte för att prata mer om vilka möjligheter som finns.</p>
        </div>
        <div class="mb-5 col-xl-4 m-auto d-flex justify-content-evenly">
          <button class="btn btn-prime"><a href="mailto:anna.ssateri@gmail.com" rel="noopener noreferrer" target="_blank">Maila Anna <i class="ms-2 far fa-envelope "></i></a></button>
          <button class="btn btn-prime"><a href="mailto:sanne.sidell@gmail.com" rel="noopener noreferrer" target="_blank">Maila Sanne <i class="ms-2 far fa-envelope "></i></a></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  #bg-about {
    /* background-color: #3D3E47; */
    /* background-image: url("../../assets/images/bg/stars_large2.svg"); */
    /* background-position: center;
    background-repeat: repeat;
    background-size: 30rem;
    min-height: 100vh; */
    /* margin-top: -5vh; */
    font-family: 'Roboto', sans-serif;
  }
  #wave {
    margin-top: -10vh;
    width: 101vw;
  }
  h3 {
    font-weight: 600;
    letter-spacing: 0.12rem;
    font-family: 'Raleway', 'Roboto', sans-serif;
  }
  h2 {
    font-weight: 600;
    /* color: #FFA97B; */
    color: #F3B8C9;
    letter-spacing: 0.12rem;
    font-family: 'Raleway', 'Roboto', sans-serif;
  }
  h5 {
    font-weight: 600;
    letter-spacing: 0.12rem;
    font-family: 'Raleway', 'Roboto', sans-serif;
  }
  h6 {
    font-weight: 600;
    /* color: #FFA97B; */
    color: #F3B8C9;
    letter-spacing: 0.12rem;
    font-family: 'Raleway', 'Roboto', sans-serif;
  }
  a {
    color: #eee;
  }
  .about-grid p {
    font-size: 1.2rem;
  }
  .fa-circle {
    /* color: #FFA97B; */
    color: #F3B8C9;
  }
  .about-icon {
    height: 6rem;
  }
  .about-section {
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center; */
    /* align-items: center; */
    background-color: #393A41;
    border-radius: 10px;
    /* 
    width: 16vw; */
  }
  .center {
    display: flex;
    justify-content: center;
  }
  .border-orange {
    border-bottom: 1px solid #ffa97bad;
    border-bottom: 1px solid #f3b8c9bb;
    margin: auto;
    width: 85%;
  }
  .fa-circle {
    font-size: 0.2rem;
  }
  .rubrik {
    letter-spacing: 0.12rem;
    font-family: 'Raleway', 'Roboto', sans-serif;
    /* font-family: 'Montserrat', sans-serif; */
  }

  
/* @media (min-width: 1024px) {
    #bg-about {
    background-color: #3D3E47;
    background-image: url("../../assets/images/bg/stars_large2.svg");
    background-position: center;
    margin-top: -5vh;
    background-repeat: repeat;
    background-size: 100vh;
    min-height: 100vh;
  }
} */
</style>