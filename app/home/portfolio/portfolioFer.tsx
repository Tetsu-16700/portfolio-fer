import React from "react";

function PortfolioPersonal() {
  return (
    <>
      {/* Seccion inicio */}
      <section
        id="inicio"
        className="h-screen bg-cover bg-center bg-opacity-70"
      >
        <div className=" mx-auto">
          <header className="fixed w-full z-50 top-0 bg-opacity-80 bg-black">
            <div className="flex justify-between items-center py-4">
              <h1 className="text-3xl text-purple-600">/Fer/</h1>
              <nav id="nav" className="">
                <ul id="links" className="flex">
                  <li>
                    <a
                      //   href="#inicio"
                      className="text-white mr-4"
                      //   onclick="seleccionar(this)"
                    >
                      INICIO
                    </a>
                  </li>
                  <li>
                    <a
                      //   href="#sobreMi"
                      className="text-white mr-4"
                      //   onclick="seleccionar(this)"
                    >
                      SOBRE MI
                    </a>
                  </li>
                  <li>
                    <a
                      //   href="#servicios"
                      className="text-white mr-4"
                      //   onclick="seleccionar(this)"
                    >
                      SERVICIOS
                    </a>
                  </li>
                  <li>
                    <a
                      //   href="#portfolio"
                      className="text-white mr-4"
                      //   onclick="seleccionar(this)"
                    >
                      PORTFOLIO
                    </a>
                  </li>
                  <li>
                    <a
                      //   href="#contacto"
                      className="text-white mr-4"
                      //   onclick="seleccionar(this)"
                    >
                      CONTACTO
                    </a>
                  </li>
                </ul>
              </nav>
              {/* icono del menu responsive */}
              <div>
                {/* id="icono-nav" onclick="responsiveMenu()" */}
                <i className="fa-solid fa-bars" />
              </div>
              {/* iconos de redes */}
              <div className="redes">
                <a href="#">
                  <i className="fa-brands fa-linkedin" />
                </a>
                <a href="#">
                  <i className="fab fa-github-square" />
                </a>
              </div>
            </div>
          </header>
          <div className="flex flex-col justify-center items-center h-screen">
            <p className="text-xl mb-4 uppercase">Bienvenidos</p>
            <h2>
              Hola soy <span className="text-purple-600">Fernanda</span>,
              Desarrolladora Web
            </h2>
            {/* AQUI COMPLETAR MI VERDADERA DESCRIPCION */}
            <p className="max-w-lg text-center text-gray-500 mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
              beatae suscipit corporis quam alias voluptas possimus. Eius
              officiis ullam consectetur? Sit accusamus recusandae nemo magnam!
              Fuga tempora enim dolores veniam.
            </p>
            <a
              href="#portfolio"
              className="btn-enviar mt-8 px-8 py-3 bg-gray-200 text-gray-800 rounded-full uppercase font-bold"
            >
              Ir a Portafolio
            </a>
          </div>
        </div>
      </section>
      {/* seccion sobre mi */}
      <section id="sobreMi" className="bg-white py-20">
        <div className="mx-auto flex items-center">
          <img
            className="rounded-lg"
            src="../Portafolio/assets/img/Me.jpg"
            alt=""
          />
        </div>
        <div className="sobreMi">
          <p className="text-2xl uppercase mb-4">Sobre Mi</p>
          <h2 className="text-4xl font-bold mb-2">
            Hola, soy <span className="text-purple-600">Fernanda</span>
          </h2>
          <h3 className="text-xl font-semibold mb-4">Desarrolladora Web</h3>
          {/* AQUI COLOCAR MI VERDADERA DESCRIPCION */}
          <p className="text-gray-500 mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur ut veniam at nisi possimus velit incidunt consequatur
            obcaecati
          </p>
          {/* AQUI COLOCAR MI VERDADERA DESCRIPCION */}
          <p className="text-gray-500 mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <a
            href="#"
            className="btn-enviar inline-block px-8 py-3 bg-gray-200 text-gray-800 rounded-full uppercase font-bold"
          >
            Descargar CV
          </a>
        </div>
      </section>
      {/* seccion de servicios */}
      <section id="servicios" className="py-20 bg-purple-100">
        <h3 className="titulo-seccion text-2xl uppercase mb-12">
          MIS SERVICIOS
        </h3>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 servicio bg-white p-6 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <span className="flex justify-center items-center w-16 h-16 mx-auto bg-purple-600 rounded-full text-white mb-4">
              <i className="fas fa-code text-3xl" />
            </span>
            <h4 className="text-2xl font-bold mb-2">Diseño de Sitio Web</h4>
            <hr className="border-b-2 border-purple-600 w-1/3 mx-auto mb-4" />
            <ul className="servicios-tag flex justify-center mb-4">
              <li className="mr-2">Web</li>
              <li className="mr-2">Graphic</li>
              <li className="mr-2">SEO</li>
            </ul>
            {/* AQUI COLOCAR MI VERDADERA DESCRIPCION */}
            <p className="text-gray-500 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus reiciendis earum praesentium, sed
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 servicio bg-white p-6 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <span className="flex justify-center items-center w-16 h-16 mx-auto bg-purple-600 rounded-full text-white mb-4">
              <i className="fas fa-code text-3xl" />
            </span>
            <h4 className="text-2xl font-bold mb-2">Diseño de Sitio Web</h4>
            <hr className="border-b-2 border-purple-600 w-1/3 mx-auto mb-4" />
            <ul className="servicios-tag flex justify-center mb-4">
              <li className="mr-2">Web</li>
              <li className="mr-2">Graphic</li>
              <li className="mr-2">SEO</li>
            </ul>
            {/* AQUI COLOCAR MI VERDADERA DESCRIPCION */}
            <p className="text-gray-500 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus reiciendis earum praesentium, sed
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 servicio bg-white p-6 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <span className="flex justify-center items-center w-16 h-16 mx-auto bg-purple-600 rounded-full text-white mb-4">
              <i className="fas fa-code text-3xl" />
            </span>
            <h4 className="text-2xl font-bold mb-2">Diseño de Sitio Web</h4>
            <hr className="border-b-2 border-purple-600 w-1/3 mx-auto mb-4" />
            <ul className="servicios-tag flex justify-center mb-4">
              <li className="mr-2">Web</li>
              <li className="mr-2">Graphic</li>
              <li className="mr-2">SEO</li>
            </ul>
            {/* AQUI COLOCAR MI VERDADERA DESCRIPCION */}
            <p className="text-gray-500 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus reiciendis earum praesentium, sed
            </p>
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 servicio bg-white p-6 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <span className="flex justify-center items-center w-16 h-16 mx-auto bg-purple-600 rounded-full text-white mb-4">
              <i className="fas fa-code text-3xl" />
            </span>
            <h4 className="text-2xl font-bold mb-2">Diseño de Sitio Web</h4>
            <hr className="border-b-2 border-purple-600 w-1/3 mx-auto mb-4" />
            <ul className="servicios-tag flex justify-center mb-4">
              <li className="mr-2">Web</li>
              <li className="mr-2">Graphic</li>
              <li className="mr-2">SEO</li>
            </ul>
            {/* AQUI COLOCAR MI VERDADERA DESCRIPCION */}
            <p className="text-gray-500 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus reiciendis earum praesentium, sed
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 servicio bg-white p-6 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <span className="flex justify-center items-center w-16 h-16 mx-auto bg-purple-600 rounded-full text-white mb-4">
              <i className="fas fa-code text-3xl" />
            </span>
            <h4 className="text-2xl font-bold mb-2">Diseño de Sitio Web</h4>
            <hr className="border-b-2 border-purple-600 w-1/3 mx-auto mb-4" />
            <ul className="servicios-tag flex justify-center mb-4">
              <li className="mr-2">Web</li>
              <li className="mr-2">Graphic</li>
              <li className="mr-2">SEO</li>
            </ul>
            {/* AQUI COLOCAR MI VERDADERA DESCRIPCION */}
            <p className="text-gray-500 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus reiciendis earum praesentium, sed
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 servicio bg-white p-6 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <span className="flex justify-center items-center w-16 h-16 mx-auto bg-purple-600 rounded-full text-white mb-4">
              <i className="fas fa-code text-3xl" />
            </span>
            <h4 className="text-2xl font-bold mb-2">Diseño de Sitio Web</h4>
            <hr className="border-b-2 border-purple-600 w-1/3 mx-auto mb-4" />
            <ul className="servicios-tag flex justify-center mb-4">
              <li className="mr-2">Web</li>
              <li className="mr-2">Graphic</li>
              <li className="mr-2">SEO</li>
            </ul>
            {/* AQUI COLOCAR MI VERDADERA DESCRIPCION */}
            <p className="text-gray-500 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus reiciendis earum praesentium, sed
            </p>
          </div>
        </div>
      </section>

      {/* seccion habilidades */}
      <div className="contenedor-skills" id="skills">
        <h3>HABILIDADES</h3>
        <div className="skills">
          <div className="info">
            <p>
              <span className="listas" />
              Html
            </p>
            <span className="porcentaje">95%</span>
          </div>
          <div className="barra">
            <div id="html" className="" />
          </div>
        </div>
        <div className="skills">
          <div className="info">
            <p>
              <span className="listas" />
              Css
            </p>
            <span className="porcentaje">95%</span>
          </div>
          <div className="barra">
            <div id="css" className="" />
          </div>
        </div>
        <div className="skills">
          <div className="info">
            <p>
              <span className="listas" />
              Javascript
            </p>
            <span className="porcentaje">90%</span>
          </div>
          <div className="barra">
            <div id="js" className="" />
          </div>
        </div>
        <div className="skills">
          <div className="info">
            <p>
              <span className="listas" />
              Base de Datos
            </p>
            <span className="porcentaje">90%</span>
          </div>
          <div className="barra">
            <div id="bd" className="" />
          </div>
        </div>
        {/* AQUI COLOCAR LOS LENGUAJES QUE MANEJO Y CONOZCO */}
        <div className="skills">
          <div className="info">
            <p>
              <span className="listas" />
              Otro
            </p>
            <span className="porcentaje">85%</span>
          </div>
          <div className="barra">
            <div id="ooo" className="" />
          </div>
        </div>
      </div>
      {/* seccion de portafolio */}
      <section id="portfolio">
        <h3 className="titulo-seccion">MIS PROYECTOS</h3>
        <div className="fila">
          <div className="proyecto">
            <div className="overlay" />
            {/* aqui poner imagen de proyecto */}
            <img src="./assets/img/captura.png" alt="" className="img" />
            <div className="info">
              <h4>Descripcion del Proyecto</h4>
              <p>Diseño Web</p>
            </div>
          </div>
          <div className="proyecto">
            <div className="overlay" />
            {/* aqui poner imagen de proyecto */}
            <img src="./assets/img/captura.png" alt="" />
            <div className="info">
              <h4>Descripcion del Proyecto</h4>
              <p>Diseño Web</p>
            </div>
          </div>
          <div className="proyecto">
            <div className="overlay" />
            {/* aqui poner imagen de proyecto */}
            <img src="./assets/img/captura.png" alt="" />
            <div className="info">
              <h4>Descripcion del Proyecto</h4>
              <p>Diseño Web</p>
            </div>
          </div>
        </div>
        {/* si exite varios proyectos aqui abajo incluirlos */}
        <div className="fila">
          <div className="proyecto">
            <div className="overlay" />
            {/* aqui poner imagen de proyecto */}
            <img src="./assets/img/captura.png" alt="" />
            <div className="info">
              <h4>Descripcion del Proyecto</h4>
              <p>Diseño Web</p>
            </div>
          </div>
          <div className="proyecto">
            <div className="overlay" />
            {/* aqui poner imagen de proyecto */}
            <img src="./assets/img/captura.png" alt="" />
            <div className="info">
              <h4>Descripcion del Proyecto</h4>
              <p>Diseño Web</p>
            </div>
          </div>
          <div className="proyecto">
            <div className="overlay" />
            {/* aqui poner imagen de proyecto */}
            <img src="./assets/img/captura.png" alt="" />
            <div className="info">
              <h4>Descripcion del Proyecto</h4>
              <p>Diseño Web</p>
            </div>
          </div>
        </div>
      </section>
      {/* seccion contacto */}
      <section id="contacto">
        <h3 className="titulo-seccion">Contactame ahora</h3>
        <div className="contenedor-form">
          <form action="">
            <div className="fila mitad">
              <input
                type="text"
                placeholder="Nombre Completo"
                className="input-mitad"
              />
              <input
                type="text"
                placeholder="Direccion de Email"
                className="input-mitad"
              />
            </div>
            <div className="fila">
              <input type="text" placeholder="Tema..." className="input-full" />
            </div>
            <div className="fila">
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                placeholder="Tu mensaje aqui..."
                className="input-full"
                defaultValue={""}
              />
            </div>
            <input
              type="submit"
              defaultValue="Enviar Mensaje"
              className="btn-enviar"
            />
          </form>
        </div>
      </section>
      {/* seccion footer */}
      <footer>
        <p>Todos los derechos reservados - 2023</p>
        <div className="redes">
          <a href="#">
            <i className="fa-brands fa-linkedin" />
          </a>
          <a href="#">
            <i className="fa-brands fa-square-github" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default PortfolioPersonal;
