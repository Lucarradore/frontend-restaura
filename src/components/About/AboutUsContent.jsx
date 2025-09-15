import { motion } from "framer-motion";
import aboutImage from "../../assets/about.jpeg";
import aboutImageUno from "../../assets/about1.jpg";
import aboutImageDos from "../../assets/about2.jpg";
import "../../../css/about.css";

const SectionTitle = ({ title }) => (
  <>
    <motion.h2
      className="section-title"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {title}
    </motion.h2>
    <motion.div
      className="section-title-line"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    ></motion.div>
  </>
);

const SectionParagraph = ({ children }) => (
  <motion.p
    className="section-paragraph"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.6 }}
  >
    {children}
  </motion.p>
);

const SobreNosotrosContent = () => {
  return (
    <section className="about-us-section" id="sobre-nosotros">
      <h2 className="about-us-title">Sobre Nosotros</h2>
      <div className="about-us-content">
        <div className="about-us-text">
          <SectionTitle title="La Historia de Restaura: Donde los Sabores Cuentan Historias" />
          <SectionParagraph>
          En un rincón tranquilo de un pueblo costero, donde las olas susurraban secretos y el aire olía a mar, nació Restaura, un restaurante cuyo nombre evocaba tanto la restauración del cuerpo como la del alma. Pero Restaura no siempre fue el exitoso destino gastronómico que conocemos hoy; su historia está tejida con hilos de pasión, sacrificio y un toque de magia.
          </SectionParagraph>

          <SectionTitle title="Los Inicios" />
          <SectionParagraph>
          Todo comenzó hace 30 años, cuando Mateo Mariani, un chef con sueños grandes y bolsillos vacíos, llegó al pueblo buscando un nuevo comienzo. Había pasado años en la gran ciudad, trabajando en cocinas de renombre, pero la presión y la frialdad del entorno lo habían agotado. Mateo soñaba con un lugar donde cocinar no fuera solo un trabajo, sino un arte.

          Encontró una vieja casona abandonada, con ventanas rotas y paredes cubiertas de enredaderas, que parecía más un fantasma del pasado que un restaurante en potencia. Pero Mateo vio algo más: un lienzo en blanco para su sueño. Con sus ahorros y la ayuda de los vecinos, comenzó a transformar la casona. Limpiaron, pintaron y repararon cada rincón, mientras Mateo perfeccionaba recetas que combinaban los sabores tradicionales con un toque innovador.
          </SectionParagraph>

          <SectionTitle title="El Primer Plato" />
          <SectionParagraph>
          El día de la inauguración, Restaura abrió sus puertas con un menú limitado pero especial. La estrella era el "Risotto del Mar", un plato que Mateo había creado inspirado en los pescadores locales y sus historias de madrugada. El arroz cremoso, cargado de mariscos frescos, se convirtió en un éxito instantáneo, y los habitantes del pueblo comenzaron a hablar de aquel lugar donde el mar se servía en cada plato.

          Sin embargo, el camino no fue fácil. Hubo días en los que apenas llegaban clientes y noches en las que Mateo se preguntaba si había cometido un error al dejar la ciudad. Pero cada vez que se sentía derrotado, un cliente agradecido o una sonrisa sincera le recordaban por qué había comenzado.
          </SectionParagraph>

          <SectionTitle title="La Magia de Restaura" />
          <SectionParagraph>
          Lo que hizo a Restaura especial no fueron solo sus platos, sino la experiencia que ofrecía. Mateo tenía una regla: cada plato debía contar una historia. Por eso, en lugar de un menú tradicional, los clientes recibían un pequeño libro con descripciones de los platos acompañadas de las anécdotas que los inspiraron.

          Por ejemplo, el "Estofado de Abuela Clara" hablaba de los inviernos en la casa de la abuela de Mateo, donde el aroma del estofado llenaba la sala mientras la familia jugaba cartas junto al fuego. Y el "Postre Aurora Boreal" narraba una noche mágica en el norte de Italia, cuando Mateo vio por primera vez las luces del norte mientras compartía un pastel con sus amigos.
          </SectionParagraph>

          <SectionTitle title="El Renacimiento" />
          <SectionParagraph>
          Con el tiempo, Restaura se convirtió en un destino turístico. Los críticos de gastronomía lo llamaban "un rincón donde se come con el corazón", y pronto llegó la oportunidad de expandirse. Sin embargo, Mateo decidió mantenerse fiel a sus raíces. No abrió sucursales, pero sí comenzó a capacitar a jóvenes chefs locales, enseñándoles no solo a cocinar, sino a encontrar la pasión detrás de cada plato.
          </SectionParagraph>

          <SectionTitle title="El Legado" />
          <SectionParagraph>
          Hoy, Restaura sigue siendo un lugar mágico. Mateo, ahora con el cabello canoso, aún recibe a los clientes con una sonrisa y una historia. El restaurante es más que un lugar para comer; es un refugio donde los sabores y las memorias se entrelazan. Cada plato es un recordatorio de que la comida no solo nutre el cuerpo, sino también el alma.

          Restaura no es solo un restaurante. Es una prueba de que, con pasión y un poco de imaginación, se pueden crear lugares donde el tiempo se detiene y los sabores cuentan historias.
          </SectionParagraph>
        </div>

        <div className="about-us-images">
          <motion.img
            src={aboutImage}
            alt="Sobre Nosotros"
            className="about-us-image"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.img
            src={aboutImageUno}
            alt="Sobre Nosotros"
            className="about-us-image mt-16"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.img
            src={aboutImageDos}
            alt="Sobre Nosotros"
            className="about-us-image mt-16"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>
      </div>
    </section>
  );
};

export default SobreNosotrosContent;


