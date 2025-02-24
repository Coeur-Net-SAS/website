import { 
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
  ovh,
  reseau_initiative,
  UE
} from "../../assets/img/partners";

import {
  Collapse,
  Dropdown,
  Carousel,
  initTWE,
} from "tw-elements";

initTWE({ Collapse, Dropdown, Carousel });

export const navLinks = [
  {
    id: "#/home",
    title: "Accueil",
  },
  {
    id: "#/auth",
    title: "Authentification continue",
  },
  {
    id: "#/sig",
    title: "Signatures électroniques",
  },
  {
    id: "#/services",
    title: "Nos services",
  },
  {
    id: "#/partners",
    title: "Partenaires",
  },
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
  {
    id: "client-13",
    logo: ovh,
  },
  {
    id: "client-14",
    logo: reseau_initiative
  },
  {
    id: "client-15",
    logo: UE
  }
];