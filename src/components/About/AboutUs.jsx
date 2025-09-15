import Footer from "../Footer/Footer";
import HeroSection from "../Hero/HeroSection";
import SobreNosotrosContent from "./AboutUsContent";
import "../../../css/index.css";

const SobreNosotros = () => {
  return (
    <>
      <HeroSection />

      <main className="sobre-nosotros-main">
        <SobreNosotrosContent />
      </main>

      <Footer />
    </>
  );
};

export default SobreNosotros;


