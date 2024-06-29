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
              <div className='cuadroQuienesSomos'>
                <img className='iconQuienesSomos' src="./public/icons/mineria.png" alt="" />
                <h3 className='H3CuadroQuienesSomos'>Minera Sierra de las Quijadas S.A.U</h3>
                <p className='pCuadroQuieneSomos'>¿Quiénes Somos?
                  Es una empresa dedicada a la extracción, producción y molienda de minerales para la industria y el agro.
                </p>
              </div>
              <div className='cuadroUbicacion'>
                <img className='iconUbicacion' src="./public/icons/ubicacion3.png" alt="" />
                <h3 className='H3Ubicacion'>Ubicación</h3>
                <p className='pUbicacion'>Ubicada en la Provincia de San Luis, en el paraje de Naranjo Esquino, a 70 Km de la Ciudad de San Luis.
                </p>
              </div>
              <div className='cuadroDestacamos'>
                <img className='iconDestacamos' src="./public/icons/destacamos3.png" alt="" />
                <h3 className='H3Destacamos'>Destacamos</h3>
                <p className='pDestacamos'>En la alta calidad y pureza del Sulfato de Calcio extraído, sumado a la posibilidad de cubrir las altas demandas del cliente de dicho mineral.
                </p>
              </div>
              <div className='cuadroProductos'>
                <img className='iconProductos' src="./public/icons/mineral2.png" alt="" />
                <h3 className='H3Productos'>Productos</h3>
                <p className='pProductos'>El Sulfato de Calcio es extraído, triturado y seleccionado logrando generar un producto final en diferentes granulometrías: "cabeza de caballo", 5 4  - 50 mm;  5 - 10 mm;  2 - 4 mm y polvo entre otras.
                </p>
              </div>
            </div>
            <div className='contenedorSintensis'>
              <h3 className='H3sintesis'>Síntesis</h3>
              <p className='pSintesis'>
                Las características de volumen y yacencia del yacimiento "Cantera El Portezuelo" hacen de éste, el depósito de yeso más importante del centro de Argentina. <br/>

                La extensión, altura e inclinación de los niveles de "Cantera El Portezuelo" permiten la explotación simultánea y extracción de importantes volúmenes de yeso.<br/>

                La explotación se realiza a cielo abierto, realizándose primero tareas de destape, que varían desde 0 m (flor de tierra) hasta los 0,65 m. de destape, luego se procede a la perforación en profundidad, dependiendo de la potencia del manto, que varía desde los dos metros (2,00 m) hasta tres metros y medio (3,50 m).<br/>

                El material es extraído, triturado y seleccionado logrando generar un producto final en diferentes granulometrías: "cabeza de caballo", 5 4  - 50 mm;  5 - 10 mm;  2 - 4 mm y polvo entre otras.<br/>

                Los análisis realizados mediante la FRX (Fluorescencia de Rayos X) garantiza la calidad del material no sólo en los frentes de explotación sino en toda su granulometría; los procesos de selección permiten manejar calidades de material según los requerimientos de cada cliente.<br/>

              </p>
              <div className='containerViñetasFotosSintesis'>
                <div className='viñetaFotoSintesis1'>
                  <img className='imagenViñetaFotosintesis' src="./public/img/photo1_sintesis.png" />
                  <p className='pSintesisz'>Piso del nivel 1, sector Oeste del yacimiento, en vista al Sur. Se destaca la magnitud del horzonte de yeso</p>
                </div>

                <div className='viñetaFotoSintesis2'>
                  <img className='imagenViñetaFotosintesis' src="./public/img/photo2_sintesis.png" />
                  <p className='pSintesisz'>Detalle del frente de explotacion en nivel</p>
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
