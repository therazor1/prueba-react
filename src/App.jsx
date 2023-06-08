import { useEffect, useState } from "react"
import Logo from "./assets/img/logo.jpg"
import Cart from "./assets/img/cart.png"
import Estrellas from "./assets/img/estrellas.png"
import Curso1 from "./assets/img/curso1.jpg"
import Curso2 from "./assets/img/curso2.jpg"
import Curso3 from "./assets/img/curso3.jpg"
import Curso4 from "./assets/img/curso4.jpg"
import Curso5 from "./assets/img/curso5.jpg"
const App = () => {

    

    return (
        <>
            <header id="header" className="header contenedor">
                <div className="logo">
                    <img src={Logo} id="logo" />
                </div>
                <div className="carrito-compras" id="carrito">
                    <img src={Cart} className="img-carrito" />
                    <div className="contenido-oculto">
                        <table id="lista-carrito" className="">
                            <thead>
                                <tr>
                                    <th>Imagen</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                     {/* <tr>
                                        <td>
                                            <img src={Curso1} />
                                        </td>
                                        <td>CSS Grid y Flexbox Construye + 10 Proyectos</td>
                                        <td>$15</td>
                                        <td>4</td>
                                        <td className="cerrar">X</td>
                                    </tr> */}
                            </tbody>
                        </table>
                        <a href="#" className="boton" id="vaciar-carrito">Vaciar Carrito</a>
                    </div>
                </div>
            </header>

          <section className="hero">
              <div className="contenido-hero contenedor">
                      <h2>Aprende algo nuevo</h2>
                      <p>Todos los cursos a $15</p>
                      <form action="#" id="busqueda" method="post" className="formulario">
                          <input className="" type="text" placeholder="¿Que te gustaría Aprender?" id="buscador" />
                          <input type="submit" id="submit-buscador" className="submit-buscador" />
                      </form>
              </div>
          </section>

    <section className="barra">
        <div className="iconos contenedor">
                <div className="icono icono1">
                    <p>20,000 Cursos en línea <br />
                    Explora  los temas más recientes</p>
                </div>
                <div className="icono icono2">
                    <p>Instructores Expertos <br />
                    Aprende con distintos estilos</p>
                </div>
                <div className="icono icono3">
                    <p>Acceso de por vida <br />
                    Aprende a tu ritmo</p>
                </div>
        </div>
    </section>

    <h1 className="encabezado centrado">Cursos En Línea</h1>

    <section className="cursos contenedor" id="lista-cursos">
        <div className="curso">
            <img className="imagen-curso" src={Curso1} />
            <div className="info-curso">
                <h4>HTML5, CSS3, JavaScript para Principiantes</h4>
                <p>Juan Pedro</p>
                <img src={Estrellas} />
                <div className="precio">
                    <p className="regular">$200</p>
                    <p className="oferta">$15</p>
                </div>
                <a href="#" className="boton agregar-carrito" data-id="1">Agregar Al Carrito</a>
            </div>
        </div> 
        <div className="curso">
            <img className="imagen-curso" src={Curso2} />
            <div className="info-curso">
                <h4>Curso de Comida Vegetariana</h4>
                <p>Juan Pedro</p>
                <img src={Estrellas} />
                <div className="precio">
                    <p className="regular">$200</p>
                    <p className="oferta">$15</p>
                </div>
                <a href="#" className="boton agregar-carrito" data-id="2"  >Agregar Al Carrito</a>
            </div>
        </div>
        <div className="curso">
            <img className="imagen-curso" src={Curso3} />
            <div className="info-curso">
                <h4>Guitarra para Principiantes</h4>
                <p>Juan Pedro</p>
                <img src={Estrellas} />
                <div className="precio">
                    <p className="regular">$200</p>
                    <p className="oferta">$15</p>
                </div>
                <a href="#" className="boton agregar-carrito" data-id="3"  >Agregar Al Carrito</a>
            </div>
        </div> 
        <div className="curso">
            <img className="imagen-curso" src={Curso4} />
            <div className="info-curso">
                <h4>Huerto en tu casa</h4>
                <p>Juan Pedro</p>
                <img src={Estrellas} />
                <div className="precio">
                    <p className="regular">$200</p>
                    <p className="oferta">$15</p>
                </div>
                <a href="#" className="boton agregar-carrito" data-id="4"  >Agregar Al Carrito</a>
            </div>
        </div> 
        <div className="curso">
            <img className="imagen-curso" src={Curso5} />
            <div className="info-curso">
                <h4>Decoración con productos de tu hogar</h4>
                <p>Juan Pedro</p>
                <img src={Estrellas} />
                <div className="precio">
                    <p className="regular">$200</p>
                    <p className="oferta">$15</p>
                </div>
                <a href="#" className="boton agregar-carrito" data-id="5"  >Agregar Al Carrito</a>
            </div>
        </div> 
        <div className="curso">
            <img className="imagen-curso" src={Curso1} />
            <div className="info-curso">
                <h4>Diseño Web para Principiantes</h4>
                <p>Juan Pedro</p>
                <img src={Estrellas} />
                <div className="precio">
                    <p className="regular">$200</p>
                    <p className="oferta">$15</p>
                </div>
                <a href="#" className="boton agregar-carrito" data-id="6"  >Agregar Al Carrito</a>
            </div>
        </div>
        <div className="curso">
            <img className="imagen-curso" src={Curso2} />
            <div className="info-curso">
                <h4>Comida Mexicana para principiantes</h4>
                <p>Juan Pedro</p>
                <img src={Estrellas} />
                <div className="precio">
                    <p className="regular">$200</p>
                    <p className="oferta">$15</p>
                </div>
                <a href="#" className="boton agregar-carrito" data-id="7"  >Agregar Al Carrito</a>
            </div>
        </div> 
        <div className="curso">
            <img className="imagen-curso" src={Curso3} />
            <div className="info-curso">
                <h4>Estudio Musical en tu casa</h4>
                <p>Juan Pedro</p>
                <img src={Estrellas} />
                <div className="precio">
                    <p className="regular">$200</p>
                    <p className="oferta">$15</p>
                </div>
                <a href="#" className="boton agregar-carrito" data-id="8"  >Agregar Al Carrito</a>
            </div>
        </div> 
        <div className="curso">
            <img className="imagen-curso" src={Curso4} />
            <div className="info-curso">
                <h4>Cosecha tus propias frutas y verduras</h4>
                <p>Juan Pedro</p>
                <img src={Estrellas} />
                <div className="precio">
                    <p className="regular">$200</p>
                    <p className="oferta">$15</p>
                </div>
                <a href="#" className="boton agregar-carrito" data-id="9"  >Agregar Al Carrito</a>
            </div>
        </div> 
        <div className="curso">
            <img className="imagen-curso" src={Curso5} />
            <div className="info-curso">
                <h4>Prepara galletas caseras</h4>
                <p>Juan Pedro</p>
                <img src={Estrellas} />
                <div className="precio">
                    <p className="regular">$200</p>
                    <p className="oferta">$15</p>
                </div>
                <a href="#" className="boton agregar-carrito" data-id="10"  >Agregar Al Carrito</a>
            </div>
        </div> 
        <div className="curso">
            <img className="imagen-curso" src={Curso1} />
            <div className="info-curso">
                <h4>JavaScript Moderno con ES6</h4>
                <p>Juan Pedro</p>
                <img src={Estrellas} />
                <div className="precio">
                    <p className="regular">$200</p>
                    <p className="oferta">$15</p>
                </div>
                <a href="#" className="boton agregar-carrito" data-id="11"  >Agregar Al Carrito</a>
            </div>
        </div> 
        <div className="curso">
            <img className="imagen-curso" src={Curso2} />
            <div className="info-curso">
                <h4>100 Recetas de Comida Natural</h4>
                <p>Juan Pedro</p>
                <img src={Estrellas} />
                <div className="precio">
                    <p className="regular">$200</p>
                    <p className="oferta">$15</p>
                </div>
                <a href="#" className="boton agregar-carrito" data-id="12" >Agregar Al Carrito</a>
            </div>
        </div> 
    </section>  

    <footer id="footer" className="footer">
        <div className="contenedor">
            <div className="contenedor-footer">
                    <nav id="principal" className="navegacion">
                        <a className="enlace" href="#">Para tu Negocio</a>
                        <a className="enlace" href="#">Conviertete en Instructor</a>
                        <a className="enlace" href="#">Aplicaciones Móviles</a>
                        <a className="enlace" href="#">Soporte</a>
                        <a className="enlace" href="#">Temas</a>
                    </nav>
                    <nav id="secundaria" className="navegacion">
                        <a className="enlace" href="#">¿Quienes Somos?</a>
                        <a className="enlace" href="#">Empleo</a>
                        <a className="enlace" href="#">Blog</a>
                    </nav>
            </div>
        </div>
    </footer>
        </>
    )
}

export default App