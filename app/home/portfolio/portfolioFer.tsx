import React from "react";

function PortfolioPersonal() {
  return (
    <>
      {/* Seccion inicio */}
      {/* Seccion inicio */}
      {/* Seccion inicio */}
      {/* Seccion inicio */}
      <section
        id="inicio"
        className="h-screen bg-cover bg-center bg-black bg-opacity-100  "
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-vector/abstract-background-random-digital-binary-number-programming_35887-375.jpg)",
        }}
      >
        {/* <img
          src="//public/porfoliodis.png"
          alt="portfolio"
          className=""
        /> */}
        <div className=" flex items-center justify-center w-full ">
          <header className="fixed w-full z-50 top-0 bg-opacity-80 bg-black    ">
            <div className="flex justify-between  items-center py-4 bg-center ">
              <h1 className="text-3xl text-purple-600 hover:text-purple-300 font-semibold  ">
                /Fer/
              </h1>

              <nav id="nav" className="">
                <ul id="links" className="flex ">
                  <li>
                    <a
                      href="#inicio"
                      className="text-purple-700 mr-4  hover:text-purple-300 font-semibold "
                      // onClick={() => seleccionar(this)}
                    >
                      INICIO
                    </a>
                  </li>
                  <li>
                    <a
                      href="#sobreMi"
                      className="text-purple-700 mr-4 hover:text-purple-300 font-semibold"
                      // onClick={() => seleccionar(this)}
                    >
                      SOBRE MI
                    </a>
                  </li>
                  <li>
                    <a
                      href="#servicios"
                      className="text-purple-700 mr-4 hover:text-purple-300 font-semibold"
                      // onClick={() => seleccionar(this)}
                    >
                      SERVICIOS
                    </a>
                  </li>
                  <li>
                    <a
                      href="#portfolio"
                      className="text-purple-700 mr-4 hover:text-purple-300 font-semibold"
                      // onClick={() => seleccionar(this)}
                    >
                      PORTFOLIO
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contacto"
                      className="text-purple-700 mr-4 hover:text-purple-300 font-semibold"
                      // onClick={() => seleccionar(this)}
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
              {/* redes */}
              <div className="text-gray-800 no-underline inline-block ml-4 transition duration-200 ">
                <a href="#" className="hover:text-purple-900">
                  <i className="fa-brands fa-linkedin" />
                </a>
                <a href="#">
                  <i className="fab fa-github-square" />
                </a>
              </div>
            </div>
          </header>

          <div className="flex flex-col justify-center items-center h-screen">
            <p className="text-3xl mb-4 uppercase tracking-widest text-gray-800 font-mono">
              Bienvenidos
            </p>
            <h2 className="text-purple-400 text-5xl font-medium ">
              Hola soy
              <span className="text-indigo-800 text-4xl font-normal ml-5">
                Fernanda
              </span>
              , Desarrolladora Web
            </h2>
            {/* AQUI COMPLETAR MI VERDADERA DESCRIPCION */}
            <p className="max-w-lg text-center text-slate-900 mt-4">
              Desarrolladora web junior con ocho años de experiencia en
              logística nacional e internacional. Destaco por mi enfoque en el
              desarrollo web, colaboración efectiva y comunicación con clientes.
              Busco nuevos desafíos y proyectos tecnológicos de alto impacto.
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
      {/* seccion sobre mi */}
      {/* seccion sobre mi */}
      {/* seccion sobre mi */}
      <section id="sobreMi" className="py-20">
        <div className="mx-auto flex items-center">
          <img
            className="rounded-lg"
            // src="../Portafolio/assets/img/Me.jpg"
            alt=""
          />
        </div>

        {/* sobreMi */}
        {/* sobreMi */}
        {/* sobreMi */}
        {/* sobreMi */}

        <div className=" mx- max-w-screen-lg px-4  ">
          <p className="text-2xl uppercase mb-4">Sobre Mi</p>
          <h2 className="text-4xl font-bold mb-2 ">
            Hola, soy <span className="text-indigo-950">Fernada</span>
          </h2>
          <h3 className="text-xl font-semibold mb-4">Desarrolladora Web</h3>

          <p className="text-gray-500 mb-4 text-r">
            Mi inmersión en el alucinante universo de la tecnología se inició
            como una diminuta chispa de curiosidad ✨ para transformarse en una
            apasionada llama 🔥. Desde el primer día, mi ímpetu ha sido una
            insaciable sed de conocimiento 📚 y la incesante búsqueda de
            desafíos innovadores 🌍.
          </p>
          <p className="text-gray-500 mb-4">
            En calidad de Desarrollador Full Stack, he conquistado un extenso
            panorama de tecnologías, abordando con mucha destreza:
            <p>🚀 Backend🚀:</p>
            <ul>
              <li>JavaScript / Node.js</li>
              <li>Bases de datos: PostgreSQL, MySQL, SQLite</li>
            </ul>
            <p>🎨Frontend🎨:</p>
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>Tailwind</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </p>
          <p className="text-gray-500 mb-4">
            Si estás en la búsqueda de un apasionado de la tecnología, me
            encuentro aquí para elevar tus proyectos a una esfera superior.
            ¡Unámonos para forjar juntos un legado tecnológico extraordinario!💪
          </p>
          <a
            href="#"
            className="btn-enviar inline-block px-8 py-3 bg-gray-200 text-gray-800 rounded-full uppercase font-bold transition duration-300 hover:bg-purple-400 hover:text-white"
          >
            Descargar CV
          </a>
        </div>
      </section>

      {/* seccion de servicios */}
      {/* seccion de servicios */}
      {/* seccion de servicios */}
      {/* seccion de servicios */}
      <section
        id="servicios"
        className="py-20 bg-purple-100"
        style={{
          backgroundImage:
            "url(https://online.york.ac.uk/wp-content/uploads/2023/05/software.jpg)",
        }}
      >
        <h3 className="titulo-seccion text-2xl uppercase mb-12">
          MIS SERVICIOS
        </h3>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="servicio bg-white p-6 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
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
          <div className=" bg-white p-6 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
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
          <div className="s bg-white p-6 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
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

      {/* seccion de portafolio */}
      {/* seccion de portafolio */}
      {/* seccion de portafolio */}
      {/* seccion de portafolio */}
      <section id="portfolio" className="px-4 py-20">
        {/* titulo-seccion */}
        {/* titulo-seccion */}
        {/* titulo-seccion */}
        {/* titulo-seccion */}
        <h3 className="titulo-seccion text-2xl uppercase mb-12 text-center">
          MIS PROYECTOS
        </h3>
        {/* fila */}
        {/* fila */}
        {/* fila */}
        {/* fila */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* proyecto */}
          {/* proyecto */}
          {/* proyecto */}
          {/* proyecto */}
          <div className=" relative overflow-hidden">
            <div className=" bg-black bg-opacity-75 absolute inset-0" />
            {/* aqui poner imagen de proyecto */}
            {/* <img src="../../assets/img/captura.png" alt="" className="w-full" /> */}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 text-white p-4 opacity-0 transition duration-300 ease-in-out">
              <h4>Descripcion del Proyecto</h4>
              <p>Diseño Web</p>
            </div>
          </div>
          {/* proyecto */}
          {/* proyecto */}
          {/* proyecto */}
          {/* proyecto */}
          <div className="relative overflow-hidden">
            {/* overlay */}
            <div className="bg-black bg-opacity-75 absolute inset-0" />
            {/* aqui poner imagen de proyecto */}
            <img src="./assets/img/captura.png" alt="" className="w-full" />
            {/* info */}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 text-white p-4 opacity-0 transition duration-300 ease-in-out">
              <h4>Descripcion del Proyecto</h4>
              <p>Diseño Web</p>
            </div>
          </div>
          {/* proyecto */}
          {/* proyecto */}
          {/* proyecto */}
          {/* proyecto */}
          <div className="relative overflow-hidden">
            {/* overlay */}
            <div className=" bg-black bg-opacity-75 absolute inset-0" />
            {/* aqui poner imagen de proyecto */}
            <img src="./assets/img/captura.png" alt="" className="w-full" />
            <div className=" absolute bottom-0 left-0 w-full bg-black bg-opacity-75 text-white p-4 opacity-0 transition duration-300 ease-in-out">
              <h4>Descripcion del Proyecto</h4>
              <p>Diseño Web</p>
            </div>
          </div>
        </div>
        {/* si exite varios proyectos aqui abajo incluirlos */}
      </section>

      {/* seccion contacto */}
      {/* seccion contacto */}
      {/* seccion contacto */}
      {/* seccion contacto */}
      <section id="contacto" className="px-4 py-20">
        {/* titulo-seccion */}
        <h3 className="titulo-seccion text-2xl uppercase mb-8 text-center ">
          Contactame ahora
        </h3>
        {/* contenedor-form  */}
        <div className="contenedor-form max-w-4xl mx-auto">
          <form action="">
            {/* fila mitad */}
            <div className="fila">
              <input
                type="text"
                placeholder="Nombre Completo"
                // input-mitad
                className="w-1/2 py-4 px-6 rounded-lg border border-gray-300"
              />
              <input
                type="text"
                placeholder="Direccion de Email"
                // input-mitad
                className="w-1/2 py-4 px-6 rounded-lg border border-gray-300"
              />
            </div>
            {/* fila */}
            <div className="fila">
              {/* input-full */}
              <input
                type="text"
                placeholder="Tema..."
                className="w-full py-4 px-6 rounded-lg border border-gray-300"
              />
            </div>
            {/* fila */}
            <div className="fila">
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                placeholder="Tu mensaje aquí..."
                input-full="true" // O input-full={true.toString()}
                className=" w-full py-4 px-6 rounded-lg border border-gray-300"
                defaultValue={""}
              />
            </div>
            <input
              type="submit"
              defaultValue="Enviar Mensaje"
              // btn-enviar
              className="btn-enviar block mx-auto my-8 py-4 px-8 bg-gray-200 text-gray-800 rounded-full uppercase font-bold transition duration-500 ease-in-out transform hover:scale-105"
            />
          </form>
        </div>
      </section>

      {/* seccion footer */}
      {/* seccion footer */}
      {/* seccion footer */}
      {/* seccion footer */}
      <footer className="bg-black text-white text-center py-8">
        <p className="mb-4">Todos los derechos reservados - 2023</p>
        {/* redes */}
        <div className="flex justify-center">
          <a href="#" className="text-xl mx-2">
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
