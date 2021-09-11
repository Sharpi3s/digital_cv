<template>
    <div>
        <div class="about container">
            <h3 class="mb-4">Personligt Brev</h3>
            <div class="line-b mb-4"></div>
            <p>Jag söker praktik hos er för jag är säker på att ni kan få mig att utvecklas. Jag
            brinner för att bygga digitala upplevelser för användaren och ta fram responsiva
            lösningar som är anpassade för alla plattformar.</p>
            <br>
            <p>I sommar 2022 tar jag examen från EC Utbildning där jag har fått färdigheter i
            avancerad JavaScript, HTML & CSS. Vi har arbetat med olika ramverk som Vue,
            React och Angular. Vi har även läst Backend och UX design för att få god
            förståelse för ytterligare viktiga element i rollen som webbutvecklare.</p>
            <br>
            <p>I mina tidigare yrken som assistent och butikssäljare har jag lärt mig att vara
            lyhörd, sätta kunden i fokus och vara detaljorienterad. Jag har arbetat i många
            år i team och skulle säga att jag är den trygga punkten i teamet. Jag är lugn och
            metodisk i mitt arbete.</p>
            <br>
            <p>Jag skulle med glädje tillämpa mina kunskaper hos er och se mig själv växa i ert
            företag och arbeta framåt mot nya spännande mål och utmaningar.
            i övrigt ser jag och andra i min omgivning mig som en trevlig och jordnära tjej
            som alltid vill visa framfötterna.</p>
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
.about, .container {
    width: 95%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 2rem;
    /* background: rgba(0, 0, 0, 0.185); */
    background: #26272c8e;
    border-radius: 0.5rem;
}
h3 {
    color: #F8F7F8;
    font-size: 35pt;
    font-family: 'Sacramento', cursive;
}
p {
    line-height: 2rem;
    color: #DCDADC;
}
.line-b {
  margin-top: -25px;
  content: ""; 
  display: block; 
  width: 60%; 
  padding-top: 10px; 
  /* border-top: 5px solid #FF6AB8;  */
  border-top: 3px solid #AC77FF; 
}
@media (min-width: 1024px) {
    .about, .container {
        width: 80%;
        margin-top: 3rem;
        margin-bottom: 3rem;
        padding: 2rem;
        background: rgba(0, 0, 0, 0.185);
    }
    .line-b {
        width: 16%; 
        border-top: 5px solid #AC77FF; 
    }
}
@media (min-width: 1200px) {
    .about, .container {
        width: 60%;
        margin-top: 3rem;
        padding: 2rem;
        background: rgba(0, 0, 0, 0.185);
    }
}
</style>