import iconoreact from "../assets/react.svg"
import iconovite from "..//assets/vite.svg"
import iconobootstrap from "../assets/bootstrap.svg"
import iconoreacrouterdom from "../assets/react-router-dom.svg"
import iconocomponets from "../assets/componets.svg"
import iconohooks from "../assets/hooks.svg"
import iconoapis from "../assets/apis.svg"
const Habilidades = () => {
  return (
    <div className="container">

      <h5 className="text-center py-4 lead fs-1">Etapa 1</h5>
      <div className="col-lg-7 mx-auto">
        <p className="lead text-center fs-5 fs-bold">Lanza tu carrera en el apasionante mundo del desarrollo web con React, la biblioteca JavaScript líder para crear interfaces dinámicas e interactivas. En la Etapa 1, te sumergirás en ejercicios prácticos que te permitirán adquirir habilidades esenciales y convertirte en un desarrollador web Full Stack.</p>
      </div>

      <div className="row">
        <h5 className="py-4 lead fs-4 text-center fst-italic text-decoration-underline">Habilidades que dominaras</h5>
        <div className="col-md-12 mx-auto text-center">
          <div className="my-3">
              <img src={iconoreact} alt="" />
              <img src={iconovite} alt="" />
          </div>
     
          <p className="mb-3"><b className="fs-5">Instalación y configuración:<br /></b>
            <small>Podrás instalar y configurar React con Vite, que son herramientas esenciales para el desarrollo de aplicaciones React</small><br />
            <small>Vite es una herramienta de compilación y tooling que tiene como objetivo proporcionar una experiencia de desarrollo más rápida y ágil para proyectos web modernos. Con Vite, puedes crear la estructura de un proyecto en React de manera rápida y sin necesidad de configuración adicional. Esto te permite comenzar a desarrollar de inmediato y aumentar tu productividad como desarrollador.</small><br />
            <small>Al utilizar Vite, se aprovechan los avances en el ecosistema web, como la disponibilidad de módulos ES nativos en el navegador y herramientas JavaScript escritas en lenguajes de compilación a nativo. Esto ayuda a mejorar el rendimiento y la eficiencia de tu aplicación React.</small><br />
            <small>Además, Vite es una alternativa interesante a otras herramientas de desarrollo de React, como create-react-app. A diferencia de create-react-app, Vite ofrece una experiencia de desarrollo más rápida y eficiente, lo que lo convierte en una opción popular entre los desarrolladores de React.</small>

          </p>
          <hr />
          <div className="my-3">
            <img src={iconobootstrap} alt="" width={40} />
          </div>
          <p className="mb-3"><b className="fs-5">Librerías CSS<br /></b>
            <small>Al aprender a implementar librerías CSS como Bootstrap o react-bootstrap, podrás diseñar interfaces atractivas y responsivas para tus aplicaciones. Estas librerías proporcionan una amplia variedad de componentes y estilos predefinidos que puedes utilizar en tus proyectos de React.</small>
            <small>Bootstrap es un framework de CSS desarrollado por Twitter que te permite diseñar rápidamente interfaces web responsivas y estilizadas. Proporciona una serie de estilos y componentes predefinidos que puedes utilizar en tus aplicaciones. Al utilizar Bootstrap en React, puedes aprovechar las ventajas de ambos. Bootstrap te proporciona una biblioteca de componentes y estilos predefinidos que te permite crear interfaces atractivas y responsivas de manera rápida y sencilla. Por otro lado, React te brinda la capacidad de crear componentes reutilizables y gestionar el estado de tu aplicación de forma eficiente.</small><br /><small>React-bootstrap, por otro lado, es una biblioteca de componentes de React que está diseñada específicamente para trabajar con Bootstrap. Proporciona componentes de React que están desarrollados desde cero como componentes nativos de React, sin necesidad de dependencias como jQuery. Esto permite una integración más fluida entre React y Bootstrap.</small><br />
            <small>Al utilizar estas librerías CSS en tus proyectos de React, podrás aprovechar los estilos y componentes predefinidos para crear interfaces atractivas y responsivas de manera más eficiente. Además, estas librerías tienen una amplia comunidad de usuarios y recursos disponibles en línea, lo que facilita el aprendizaje y la resolución de problemas.</small>
          </p>
          <hr />
          <div className="my-3">
            <img src={iconoreacrouterdom} alt="" width={70}  />
          </div>
          <p className="mb-3"><b className="fs-5">Rutas y Navegación (react-router-dom)<br /></b><small>Al crear y gestionar rutas de navegación con react-router-dom, podrás estructurar tu aplicación y facilitar la navegación entre diferentes secciones.</small>
            <small>React Router es una biblioteca popular que te permite manejar la navegación en una aplicación de React. Con react-router-dom, puedes definir rutas y enlaces en tu aplicación para que los usuarios puedan navegar entre diferentes componentes y vistas.</small><br />
            <small>Para comenzar a utilizar react-router-dom, primero debes importar los componentes necesarios, como BrowserRouter, Route y Link. BrowserRouter es el componente principal que envuelve tu aplicación y le permite interactuar con la URL del navegador. Route se utiliza para definir las rutas y los componentes asociados a cada ruta, mientras que Link se utiliza para crear enlaces que permiten a los usuarios navegar entre las diferentes rutas.</small>
          </p>
          <hr />
          <div className="my-3">
            <img src={iconocomponets} alt="" width={70}  />
          </div>
          <p><b className="fs-5">Componentes estáticos<br /></b><small>Al diseñar y desarrollar componentes estáticos como Header, Footer, Hero y Carrusel, podrás crear una base sólida para tu aplicación. Estos componentes estáticos son elementos visuales que se mantienen constantes en todas las páginas o secciones de tu aplicación.</small><br /><small><b>El Header</b> es una sección que generalmente se encuentra en la parte superior de la página y contiene elementos como el logo, el menú de navegación y otros elementos de navegación importantes. Proporciona una forma consistente de acceder a diferentes secciones de tu aplicación.</small><br />
          <small><b>El Footer</b> es una sección que se encuentra en la parte inferior de la página y suele contener información adicional, enlaces útiles, derechos de autor y otros elementos que deseas mostrar en todas las páginas de tu aplicación.</small><br/>
          <small><b>El Hero</b> es una sección destacada que se encuentra en la parte superior de una página y suele contener un mensaje principal, una imagen o un video de fondo. Es una forma efectiva de captar la atención de los usuarios y transmitir información importante o destacada.</small><br/>
          <small><b>El Carrusel</b> es un componente que te permite mostrar una serie de elementos, como imágenes o contenido destacado, en un formato deslizante. Puedes utilizar un carrusel para mostrar testimonios, productos destacados, noticias o cualquier otro tipo de contenido que desees resaltar de manera interactiva.</small>
          </p>
          <hr/>
          <div className="my-3">
            <img src={iconohooks} alt="" width={50}  />
          </div>
          <p><b className="fs-5">Hooks de React (useState y useEffect)<br /></b><small>Al dominar los hooks useState y useEffect en React, podrás manejar el estado y los efectos secundarios en tus componentes de manera eficiente, lo que te permitirá manejar datos externos en tiempo real.</small><br/>
          <small><b>El hook useState</b> te permite agregar y actualizar el estado en tus componentes funcionales. Puedes utilizarlo para almacenar y manipular datos en tu aplicación. Al llamar a useState con un valor inicial, obtendrás una variable de estado y una función para actualizar ese estado. Puedes utilizar la función para modificar el valor de la variable de estado y React se encargará de volver a renderizar el componente con el nuevo estado.</small><br/>
          <small>El hook useEffect te permite realizar efectos secundarios en tus componentes, como llamar a una API, suscribirte a eventos o manipular el DOM. Puedes utilizar useEffect para ejecutar código después de que el componente se haya renderizado o cuando ciertos valores cambien. También puedes utilizarlo para limpiar recursos o cancelar suscripciones cuando el componente se desmonte.</small><br/><small>Al dominar los hooks useState y useEffect, podrás manejar el estado y los efectos secundarios en tus componentes de manera eficiente, lo que te permitirá manejar datos externos en tiempo real de manera efectiva.</small>
          
          </p>
          <hr/>
          <div className="my-3">
            <img src={iconoapis} alt="" width={50}  />
          </div>
          <p><b className="fs-5">Consumo de APIs (fetch)<br /></b>
          <small>Al aprender a conectarte a APIs externas como <b>dummyjson.com, thecocktaildb.com, api.themoviedb.org y themealdb.com,</b> entre otras, podrás obtener datos y enriquecer tu aplicación.</small><br/>
          <small>Una API (Interfaz de Programación de Aplicaciones) es un conjunto de definiciones y protocolos que permiten a las aplicaciones comunicarse entre sí. Al utilizar APIs externas en tu aplicación, puedes acceder a datos y funcionalidades proporcionados por otros servicios o plataformas.
          </small><br/>
          <small>Al conectarte a estas APIs externas, puedes obtener una amplia variedad de datos para enriquecer tu aplicación.<br/> 
          Por ejemplo, <b>dummyjson.com</b> te permite generar datos ficticios para pruebas y desarrollo. <br/> 
          La API <b>thecocktaildb.com</b> te proporciona información sobre recetas de cócteles.<br/> 
          La API de <b>api.themoviedb.org</b> te ofrece datos sobre películas y series. <br/> 
          La API <b>themealdb.com,</b> por otro lado, te brinda información sobre recetas de comidas.</small><br/>
          <small>Al utilizar estas APIs en tu aplicación, puedes mostrar información actualizada, como recetas de cócteles, películas populares o datos ficticios para pruebas. Esto puede mejorar la experiencia de usuario y agregar funcionalidades interesantes a tu aplicación.</small><br/>
          <small>Es importante tener en cuenta que cada API tiene su propia documentación y forma de utilizarla. Debes familiarizarte con la documentación de cada API para comprender cómo realizar las solicitudes y procesar las respuestas.</small><br/>
          <small>Recuerda que al utilizar APIs externas, debes tener en cuenta aspectos como la seguridad, los límites de uso y la calidad de los datos proporcionados. Es recomendable leer la documentación de cada API y seguir las mejores prácticas para su integración en tu aplicación.</small>
          </p>
          <hr/>
          <div className="my-3">
            <img src={iconoreacrouterdom} alt="" width={70}  />
          </div>
          <p><b className="fs-5">Rutas dinámicas (useParams)<br /></b><small>El hook useParams de React Router es una característica poderosa que te permite acceder a los parámetros proporcionados en la URL de forma dinámica. Cuando creas rutas dinámicas en una aplicación React utilizando React Router, es posible que necesites pasar valores específicos a través de la URL, como identificadores únicos o cualquier otro tipo de información.
          </small><br />
            <small>Al utilizar el hook useParams, puedes extraer los valores de esos parámetros y utilizarlos en tu aplicación de manera eficiente. Este hook devuelve un objeto con las propiedades y los valores de los segmentos dinámicos de la URL. Por ejemplo, si tienes una ruta como /productos/:id, donde :id es un parámetro dinámico que representa el ID de un producto, puedes utilizar useParams para acceder al valor de id y utilizarlo en tu componente.</small>
          </p>





        </div>

      </div>

    </div>
  )
}

export default Habilidades