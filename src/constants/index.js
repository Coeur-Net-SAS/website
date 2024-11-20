import { 
  Benjamin,
  Joseph,
  Pat,
  people02, 
  people03, 
  facebook, 
  instagram, 
  linkedin, 
  airbnb, 
  binance, 
  coinbase, 
  dropbox, 
  send, 
  shield,
  coeur01, 
  star,
  auth_continue,
  souverain,
  bpifrance,
  lifo,
  insa_cvl,
  pepite,
  inpi,
  cvalo,
  cci_cher,
  vierzon,
  region,
  entreprendre,
  b3,
  devup,
} from "../assets";

import {
  Collapse,
  Dropdown,
  Carousel,
  initTWE,
} from "tw-elements";

initTWE({ Collapse, Dropdown, Carousel });

export const navLinks = [
  {
    id: "home",
    title: "Accueil",
  },
  {
    id: "auth",
    title: "Authentification continue",
  },
  {
    id: "sig",
    title: "Signatures électroniques",
  },
  {
    id: "services",
    title: "Nos services",
  },
  {
    id: "partners",
    title: "Partenaires",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: auth_continue,
    title: "Authentification continue",
    content:
      "Avec notre système, tant que vous portez votre bracelet, vous êtes authentifié",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Sécurité totale",
    content:
      "Profitez d'une sécurité renforcée en bénéficiant d'un produit à la pointes des recherches mondiales en matière d'authentification cardiaque continue",
  },
  {
    id: "feature-3",
    icon: souverain,
    title: "Système souverain et indépendant",
    content:
      "La totalité de notre code et de nos infrastructures sont développés en France",
  },
  {
    id: "feature-4",
    icon: star,
    title: "Ergonomie maximale",
    content:
      "L'utilisation du produit est d'une grande simplicité puisqu'il n'y a rien à faire d'autre que de le porter au poignet. ",
  },
];

export const feedback = [
  // {
  //   id: "Coeur-Net",
  //   content:
  //     "Authentification biométrique cardiaque, pour avoir l'esprit tranquille.",
  //   name: "Coeur-Net",
  //   title: "",
  //   img: coeur01,
  // },
  {
    id: "CEO",
    content:
      "",
    name: "Benjamin Vignau",
    title: "Fondateur & CEO",
    img: Benjamin,
  },
  {
    id: "CSO",
    content:
      "",
    name: "Patrice Clemente",
    title: "Fondateur & CSO",
    img: Pat,
  },
  {
    id: "CTO",
    content:
      "",
    name: "Joseph Kawalec",
    title: "CRO",
    img: Joseph,
  },
//  {
//    id: "Recrutement",
//    content:
//      "Rejoignez nous pour une aventure unique.",
//    name: "Recrutement",
//    title: "",
//    img: coeur01,
//  },
  // {
  //   id: "Recrutement-2",
  //   content:
  //     "Rejoignez nous pour une aventure unique.",
  //   name: "Recrutement",
  //   title: "",
  //   img: coeur01,
  // },
];

export const stats = [
  {
    id: "stats-1",
    title: "Mots de passes par personne",
    value: "120+",
  },
  {
    id: "stats-2",
    title: "Des cyberattaques s'appuient sur des mots de passes faibles",
    value: "83%",
  },
  {
    id: "stats-3",
    title: "Coût moyen d'une cyberattaque",
    value: "116M$",
  },
];

export const footerLinks = [
  {
    title: "Liens utiles",
    links: [
      {
        name: "Accueil",
        link: "https://www.coeur-net.fr/",
      },
      {
        name: "Fonctionnement",
        link: "https://www.coeur-net.fr/",
      },
      {
        name: "Conseils",
        link: "https://www.coeur-net.fr/",
      },
      {
        name: "Contactez-nous",
        link: "https://www.coeur-net.fr/",
      },
      {
        name: "Conditions d'utilisation",
        link: "https://www.coeur-net.fr/",
      },
    ],
  },
  {
    title: "Partenaires",
    links: [
      {
        name: "Nos Partenaires",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Devenir Patenaire",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
{
    id: "social-media-0",
    icon: linkedin,
    link: "https://www.linkedin.com/company/coeur-net/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: bpifrance,
  },
  {
    id: "client-2",
    logo: lifo,
  },
  {
    id: "client-3",
    logo: insa_cvl,
  },
  {
    id: "client-4",
    logo: pepite,
  },
  {
    id: "client-5",
    logo: inpi,
  },
  {
    id: "client-6",
    logo: cvalo,
  },
  {
    id: "client-7",
    logo: cci_cher,
  },
  {
    id: "client-8",
    logo: devup,
  },
  {
    id: "client-9",
    logo: vierzon,
  },
  {
    id: "client-10",
    logo: region,
  },
  {
    id: "client-11",
    logo: entreprendre,
  },
  {
    id: "client-12",
    logo: b3,
  },
];