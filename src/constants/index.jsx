import dish1 from "../assets/dishes/dish1.jpeg";
import dish6 from "../assets/dishes/dish6.jpeg";
import dish11 from "../assets/dishes/dish11.jpg";
import dish16 from "../assets/dishes/dish16.jpg";
import dish21 from "../assets/dishes/dish21.jpg";
import italian from "../assets/italian.jpeg";
import japanese from "../assets/japanese.jpeg";
import indian from "../assets/indian.jpeg";

import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa6";

export const DISHES = [
  { image: dish1, 
    title: "Sopas", 
    description: "Calientes y deliciosas.", 
    category: "Sopas" },

  { image: dish6, 
    title: "Pastas", 
    description: "Pastas italianas.", 
    category: "Pastas" },

  { image: dish11, 
    title: "Ensaladas", 
    description: "Frescas y naturales.", 
    category: "Ensaladas" },

  { image: dish16, 
    title: "Postres", 
    description: "Dulces irresistibles.", 
    category: "Postres" },

  { image: dish21, 
    title: "Pescados", 
    description: "Pescados frescos.", 
    category: "Pescados" },
];

export const LINKS = [
  { text: "Platos", targetId: "dishes" },
  { text: "Acerca De", targetId: "about" },
  { text: "Misión", targetId: "mission" },
  { text: "Especialidad", targetId: "expertise" },
  { text: "Críticas", targetId: "review" },
  { text: "Contacto", targetId: "contact" },
];

export const ABOUT = {
  header: "Amámos cocinar!",
  content:
    "En Restaura creemos que la buena comida va más allá del sabor; cuenta una historia de dedicación y creatividad. Desde las creaciones exclusivas de nuestro chef hasta nuestro atento servicio, cada detalle está cuidado para garantizar que su visita sea nada menos que excepcional. Ya sea que esté saboreando nuestro famoso Tikka Kebab o explorando nuestro variado menú inspirado en sabores globales, cada plato es una celebración del sabor y la innovación. Únase a nosotros en un viaje culinario donde cada bocado deja una impresión duradera. Experimente Restaura, donde cada comida es una obra maestra.",
};

export const MISSION =
  "En nuestro restaurante, nuestra misión es crear experiencias gastronómicas deliciosas y memorables.";

export const CUSINES = [
  {
    number: "01.",
    image: italian,
    title: "Italia",
    description:
      "Experimente los sabores de Italia con nuestra exquisita cocina italiana, que ofrece recetas tradicionales y platos contemporáneos.",
  },
  {
    number: "02.",
    image: japanese,
    title: "Japón",
    description:
      "Deléitese con el arte de la excelencia culinaria japonesa, que ofrece una fusión de sabores clásicos y modernos.",
  },
  {
    number: "03.",
    image: indian,
    title: "India",
    description:
      "Deléitese con los ricos y diversos sabores de la India con un menú que celebra la herencia culinaria del país.",
  },
];

export const REVIEWS = [
  {
    name: "Xaviour Fernando",
    profession: "Crítico Gastronómico",
    content:
      "“Como crítico gastronómico experimentado, mis expectativas siempre son altas cuando entro en un nuevo establecimiento de comida. Restaura, con su exterior sencillo y su interior elegantemente diseñado, prometió una experiencia culinaria única desde el momento en que entré. Y debo decir que superó mis expectativas.”",
  },
  {
    name: "Gonzalez Ramiro",
    profession: "Crítico Gastronómico",
    content:
      "“Desde el primer bocado, queda claro que este restaurante entiende la esencia de la buena cocina: combinar técnica impecable con ingredientes frescos y un toque de alma. Probé el risotto de hongos silvestres y trufa negra, y puedo decir que fue como saborear el otoño en su máxima expresión. La textura era cremosa, con cada grano perfectamente al dente, mientras los aromas terrosos de la trufa transformaban el plato en un verdadero deleite sensorial. Este es un lugar donde los platos no solo alimentan el cuerpo, sino que despiertan recuerdos y emociones.”",
  },
  {
    name: "Zalazar Carlos",
    profession: "Crítico Gastronómico",
    content:
      "“Este restaurante logra lo que pocos consiguen: tomar recetas clásicas y darles un giro innovador sin perder su esencia. Su cordero en cocción lenta, servido sobre un puré de batatas especiadas, es un ejemplo perfecto de esta filosofía. La carne, jugosa y deshaciéndose al contacto del tenedor, estaba acompañada por un puré de textura aterciopelada y un sutil toque de canela que añadía calidez al plato. Cada detalle, desde el emplatado hasta la explosión de sabores, demuestra un nivel de pasión y dedicación que merece ser aplaudido.”",
  },
];

export const CONTACT = [
  { key: "address", value: "Dirección: Calle San Martín 123, La Rioja, Argentina" },
  { key: "phone", value: "Teléfono: +54 380 422 1663 " },
  { key: "email", value: "Email: contacto@restaura.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/profile.php?id=61550067862468&mibextid=ZbWKwL",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://www.instagram.com/lu.carradore?igsh=eDYwbThvbHozMTky",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://wa.me/3804221663",
    icon: <FaWhatsapp fontSize={30} className="hover:opacity-80" />,
  },
];
