import Footer from "../Footer/Footer"; 
import HeroSection from "../Hero/HeroSection";
import Contact from "./Contact"; 
import "../../../css/index.css"; 

const SobreNosotros = () => {
  return (
    <>
      <HeroSection />

      <main className="sobre-nosotros-main">
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default SobreNosotros;
