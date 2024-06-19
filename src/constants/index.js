import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HOME_CONTENT = `Estudiante de la tecnicatura en ciencia de datos en el instituto Teclab, cuento con experiencia en el armado de reportes interactivos en Power Bi y Excel. Actualmente me desempeño como Especialista de operaciones en Siscard SA, con la tarea de coordinar las rutas de proveedores de forma eficiente además de relevar el stock para asegurar el cumplimiento del servicio en el tiempo que demanda el cliente. 
Adicionalmente he desarrollado paneles de control en Power Bi que ayudaron a la empresa a simplificar las tareas diarias y a tomar decisiones basadas en datos.`;

export const ABOUT_TEXT = `Entre 2018 y 2021 cursé de manera regular, 3 años de la Licenciatura en Psicologia en la Universidad Nacional de Córdoba, sin embargo, por diferentes motivos comencé a interesarme mucho más por el análisis de datos en las empresas, realicé diferentes cursos sobre Data Analitycs, Excel, Power BI y finalmente me decidí por comenzar a desarrolar mi carrera profesional en el ambito de los datos.
Una vez finalizada la tecnicatura en Data Science, mi deseo es continuar mi formacion con la licenciatura en ciencia de datos en la Universidad Siglo XXI.`;

export const EXPERIENCES = [
  {
    year: "Abr. 2022 - Actualidad",
    ubication: "Cordoba, Argentina",
    role: "Especialista en Operaciones",
    company: "SISCARD S.A",
    description: `En 2023, surgio la posibilidad de comenzar a desempempeñarme en el area de operaciones, con el objetivo de coordinar las asistencias de los tecnicos de campo. En este caso, la tarea consiste en planificar las rutas de los proovedores tecnicos, tanto dentro de las ciudades principales como a localidades interurbanas, controlar el stock de los proovedores de forma eficiente para asegurar el cumplimiento del servicio, analizar y detectar oportunidades de mejoras a traves de herramientas de visualizacion de datos como power Bi.`,
    technologies: [
      "Análisis de datos",
      "Logística",
      "Power Bi",
      "Excel",
      "Comunicación",
    ],
  },
  {
    year: "Mar. 2022 - Mar. 2023",
    ubication: "Córdoba, Argentina",
    role: "Tecnico de Atencion Telefónica",
    company: "SISCARD S.A.",
    description: `En 2022 me incorpore a Siscard, en el puesto de operador telefonico, con el objetivo de dar soporte tecnico a clientes de la empresa Payway que utilizan terminales de pago en sus comercios. Mi tarea principal fue responder consultas sobre el funcionamiento de los equipos, ayudar a los clientes con inconvenientes tecnicos o generar asistencias de campo en caso que no se posible brindar una solucion en linea..`,
    technologies: [
      "Atenc. telefónica",
      "Resolucion de conflictos",
      "Soporte tecnico",
    ],
  },
  {
    year: "Dic. 2018 - Jul. 2020",
    ubication: "Córdoba, Argentina",
    role: "Atencion al Cliente",
    company: "Grido - Helacor S.A.",
    description: `Mi primera experiencia laboral de manera formal, me desempeñe como colaborador y cajero en diferentes sucursales del centro de cordoba, esto me ayudo a incorporar habilidades blandas como el trabajo en equipo y el trato con el cliente. Tambien me desempeñe como encargado de caja, realizando pedidos semanales para tener un stock controlado acorde a la demanda.`,
    technologies: [
      "Control de stock",
      "Control de caja",
      "Atencion al cliente",
    ],
  },
];
export const EDUCATION = [
  {
    year: "Oct. 2023 - Actualidad",
    ubication: "Cordoba, Argentina",
    role: "Tecnico superior en Data Science",
    company: "Instituto Tecnico Superior Teclab",
    certificate: "https://www.coderhouse.com/ar/",
  },
  {
    year: "May. 2024 - Ago 2024",
    ubication: "Córdoba, Argentina",
    role: "SQL",
    company: "CoderHouse",
    certificate: "https://www.teclabs.com.ar/",
  },
  {
    year: "Jun. 2023 - Sep. 2023",
    ubication: "Córdoba, Argentina",
    role: "Power BI - Analisis de datos y Business Intelligence",
    company: "Dat Data",
    certificate: "https://www.teclabs.com.ar/",
  },
  {
    year: "May. 2023 - Jul. 2023",
    ubication: "Córdoba, Argentina",
    role: "Excel Avanzado",
    company: "ECA capacitaciones",
    certificate: "https://www.teclabs.com.ar/",
  },
  {
    year: "Ago. 2022 - Nov. 2022",
    ubication: "Córdoba, Argentina",
    role: "Data Analitycs",
    company: "CoderHouse",
    certificate: "https://www.teclabs.com.ar/",
  },
];

export const PROJECTS = [
  {
    title: "Tablero de ventas - Peluqueria de cejas",
    url: "https://app.powerbi.com/view?r=eyJrIjoiODI2MjYwNzYtZDI4NS00YzM4LWEwZTYtZDc3ODZlYTQ2NzljIiwidCI6ImViZTFkZTRkLWIyM2EtNDMxNC1hNGM4LTk3OTRiZGVlNDY5OSIsImMiOjR9",
    image: project1,
    description:
      "Un tablero de ventas sencillo realizado para un centro de estetica de Cordoba Capital. En el mismo se pueden visualizar KPI con indicadores de gastos e ingresos del mes actual, grafico de lineas y de barras para poder identificar de forma practica la facturacion mes a mes, asi como un tabla con los servicios brindados, con su valor, cliente y fecha. Esta diseñado para mostrar la informacion relevante del negocio de una manera practica y rapida con el desafio de consevar la identidad de marca y crear una navegacion intuitiva para los usuarios.",
    technologies: ["Excel", "Power BI"],
  },
  {
    title: "Analisis de mercado - Industria Petrolera",
    url: "https://app.powerbi.com/view?r=eyJrIjoiMGZjMTBmNWYtM2I0OS00NzU1LWFlOGItYWMxMTBlYmVhZTNjIiwidCI6ImViZTFkZTRkLWIyM2EtNDMxNC1hNGM4LTk3OTRiZGVlNDY5OSIsImMiOjR9",
    image: project2,
    description:
      "Para la creacion de este proyecto ivente una demanda a partir de un data set que contiene datos de empresas pretroleras registradas en argentina y otro que contiene datos de un negocio de turismo, el cual, al momento de la solicitud, contaba con 2 sucursales. A partir de la baja facturacion originada por la pandemia, es neceario identificar cual de las 2 sucursales tiene el menor desempeño ya que el cliente esta interesado en vender uno de sus fondos de comercio para invertir en uan empresa petrolera. Para el resultado final, se hizo mucho enfasis en el diseño, incorporando diferentes objetos visuales que ayuden a poder leer los KPI y los graficos de una manera mas sencilla.",
    technologies: ["Excel", "Power BI"],
  },
  {
    title: "Reporte de Recursos Humanos",
    url: "https://app.powerbi.com/view?r=eyJrIjoiZWY5M2Y1OWItMGQ1Zi00NTkxLWFiZjUtZGI3NWFiMzBlMDZkIiwidCI6ImViZTFkZTRkLWIyM2EtNDMxNC1hNGM4LTk3OTRiZGVlNDY5OSIsImMiOjR9",
    image: project3,
    description:
      "Reporte de recursos humanos realizado con una base de datos ficticia donde se busca visualizar indicadores de colaboradores, sueldos y desempeño. El proyecto final cuenta con diferentes medidas DAX de conteo, promedios, como asi tambien diferentes tecnicas de visualizacion por columnas, graficos de mapa y dispersion. ",
    technologies: ["Excel", "My SQL", "Power BI"],
  },
  {
    title: "Tablero de ventas - Issa Funstore",
    url: "https://app.powerbi.com/view?r=eyJrIjoiN2QyMDYxNWQtNDYyNy00MWM1LWI4ZjgtNTdmMmJhNTllNjY5IiwidCI6ImViZTFkZTRkLWIyM2EtNDMxNC1hNGM4LTk3OTRiZGVlNDY5OSIsImMiOjR9",
    image: project4,
    description:
      "Reporte de ventas con mismo diseño y formato para peluqueria de cejas ya que la necesidad del cliente era la misma en ambos casos. El reporte indentifica el total de ventas y las ganancias del mes medianta indicadores, ademas de la informacion sobre las ventas mensuales y una tabla con el registro de cada una.",
    technologies: ["Excel", "Power BI"],
  },
];

export const CONTACT = {
  address: "Diagonal Ica 311, General Bustos - Córdoba, Argentina",
  phoneNo: "+56 9 0351 15 7579062",
  email: "patriciolarriaga10@gmail.com",
};
