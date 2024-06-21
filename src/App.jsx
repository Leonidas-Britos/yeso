import { useState } from 'react'
import './css/home.css'
import './css/reset.css'


function App() {

  return (
    <>
      <div className='contenedorPrincipal'>

        <body className='bodyClass'>
          <header className='headerClass'>
            <img className='imagenMineria1' src="./public/img_minera_1.jpg" />
            <div className='logoYNavbar'>
              <img className='logoEmpresa' src="./public/logo.png" alt="" />
              <ul className='navBar'>
                <li className='botonNavBar'>PORTADA</li>
                <li className='botonNavBar'>QUIENES SOMOS</li>
                <li className='botonNavBar'>PRODUCTOS</li>
                <li className='botonNavBar'>SERVICIOS</li>
                <li className='botonNavBar'>CONTACTOS</li>
              </ul>
            </div>
          </header>
          <main className='mainClass'>
            <div className='contenedorArticulos'>
              <div className='quienesSomos'>
                  <h3 className='H3QuienesSomos'>Yacimiento AGRO-INDUSTRIAL SULFACAL</h3> 
                  <p className='pQuieneSomos'>Es una empresa dedicada a la producción de minerales para la
                  industria y el agro.
                  En la provincia de San Luís explota la Cantera El Portezuelo, yacimiento de “Yeso de alta ley”, ubicado en el paraje de Naranjo Esquino, próximo a la Localidad de Las Caleras y a 70 Km de la Ciudad de San Luís.
                  Este yacimiento posee cinco niveles de yeso en forma estratificada, de rumbo medio norte - Sur e inclinación de 5 a 7º al este. De estos niveles se encuentran mapeados tres de ellos, denominados, de oeste a este 1, 2 y 4.
                  La continuidad en superficie de estos niveles se puede verificar por más de tres mil metros
                  Las Reservas de este yacimiento medidas al presente son las sector Norte, que ascienden a dos millones cien mil toneladas.
                  Los niveles continúan al Sur, donde existen recursos por más de cuatro millones de toneladas adicionales.
                </p>
              </div>
              <div className='muestraMineral'>
                <div className='contenedorMuestraMineralImagen'>
                  <h3 className='h3MuestraMineral'>Muestra de Mineral:</h3>
                  <img className='muestraMineralImagen' src="./public/img_minera_2.jpg"alt="" />
                </div>
                  
              </div>
            </div>
          </main>
          <footer className='footerClass'> <p className='CopyrightP'> Copyright© 2024 - Leonidas Developer</p></footer>
        </body>
      </div>
    </>
  )
}

export default App
