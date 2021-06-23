import React from 'react';
import './App.css';
import bruno from "./images/bruno.png"
import Ufrgs from "./images/Ufrgs.png"
import Ufsm from "./images/Ufsm.png"
import Uespi from "./images/Uespi.png"
import dsa from "./images/dsa.png"
import codecademy from "./images/codecademy.jpeg"
import linkedin from "./images/linkedin.png"
import piaui from "./images/piaui.jpeg"
import rs from "./images/rs.png"

function Home() {
    return (

  <main>
    <div class="home">
      <div class="firstpagecontainer"> 
        <img src={bruno} alt="Myself" />
        <h1>This website was made as a training project for the fullstack course at codecademy. 
          <span>It is a work in progress.</span> </h1>
          


    </div>

      <div class="secondpagecontainer"> 
        {/* <img src={bruno} alt="Myself" /> */}
        <div class="containereduc"> 
        <a id="edu"></a><h1>Education:</h1>


          <h2>Universidade Estadual do Piauí</h2>
          <div class="ufrgsflexcontainer">
            <img src={Uespi} alt="logoUespi" class="logoufrgs"/>
            <div class="textodaufrgs"> 
            <h3>Degree in Law</h3>
            <h3>2017-2022 (current)</h3>
          </div>
          </div>


          <h2>Universidade Federal do Rio Grande do Sul</h2>
          <div class="ufrgsflexcontainer">
            <img src={Ufrgs} alt="logoUfrgs" class="logoufrgs"/>
            <div class="textodaufrgs"> 
              <h3>Msc. in Business</h3>
              <h3>2009-2010</h3>
          </div>
          </div>

          <h2>Universidade Federal de Santa Maria</h2>
          <div class="ufrgsflexcontainer">
          <img src={Ufsm} alt="logoUfrgs" class="logoufrgs"/>
          <div class="textodaufrgs">  
            <h3>Degree in Business</h3>
            <h3>2004-2008</h3>
            </div>
          </div>
          </div>

          <div class="blococinza">
            </div>   

          <div class="containereducdireita"> 
          <h3 class="titleright">Data Science Academy</h3>

          <div class="rightflexcontainer">
            <img src={dsa} alt="logoDsa" class="logoufrgs"/>
              <div class="textodaufrgs">  
                <h3>Big Data Analytics  com Python e Spark</h3>
                </div>
            </div>

            <div class="rightflexcontainer">
            <img src={dsa} alt="logoDsa" class="logoufrgs"/>
              <div class="textodaufrgs">  
                <h3>Big Data Analytics  com R (43% completed)</h3>
                </div>
            </div>

            <h3>Codecademy</h3>
            <div class="rightflexcontainer">
            <img src={codecademy} alt="logoCodecademy" class="logoufrgs"/>
              <div class="textodaufrgs">  
                <h3>Full Stack Engineer (66% completed)</h3>
                </div>
            </div>
          </div>
    </div>

    <div class="professionalpage">
      <div class="professionalcontainer">
        <a id="prof"> <h1>Professional:</h1></a>
        <div class="sefazcontainer">
            <img src={piaui} alt="logopiaui" class="logoufrgs"/>
            <div class="textodasefaz"> 
        <h3>Secretaria da Fazenda</h3>
        <h3>2016-today</h3>
        </div>
        </div>


        <div class="sefazcontainer">
            <img src={rs} alt="logors" class="logoufrgs"/>
            <div class="textodasefaz"> 

        <h3>Tribunal de Justiça</h3>
        <h3>2013-2016</h3>
        </div>
        </div>

      </div>


    </div>



    <div class="thirdpage">
      <div class="thirdtextcontainer"> 
    <a id="proj"><h1>Projects:</h1></a>
    <h2>So far, this website</h2>
    </div>
    </div>

    <div class="fourthpage">
      <div class="fourthpagecontainer"> 
    <a id="cont"><h1>Contact:</h1> </a>
    <div class="containerlinkedin">
    <img src={linkedin} alt="logoLinkedin" class="logolinkedin"/>
              <div class="textodaufrgs">  
                <a href="https://www.linkedin.com/in/bruno-comassetto-96850746/"> <h3>Bruno</h3></a>
                </div>
    </div>
    
    </div>
    </div>


    </div>
    
</main>
    );
  }
  
  export default Home;
  