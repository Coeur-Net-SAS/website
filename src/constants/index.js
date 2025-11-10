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
import {
  article_1,
  article_2,
  article_3,
  article_4,
  article_5,
} from "../../assets/img/presse";

export const presseArticles = [
  {
    id: "article1",
    link: "https://www.challenges.fr/entreprise/start-up/coeur-net-le-battement-du-coeur-pour-sidentifier_601121",
    logo: article_1,
    title: "Cœur Net : le battement du cœur pour s’identifier"
  },
  {
    id: "article2",
    link: "https://www.lesechos.fr/pme-regions/innovateurs/coeur-net-reinvente-lidentification-biometrique-avec-le-signal-cardiaque-2159504",
    logo: article_2,
    title: "Coeur-Net réinvente l'identification biométrique avec le signal cardiaque"
  },
  {
    id: "article3",
    link: "https://www.leparisien.fr/high-tech/vivatech-demain-votre-coeur-ou-votre-cerveau-suffiront-a-deverrouiller-votre-telephone-12-06-2025-5O3IXMV7QVFTXJHEY3U2OPPZZM.php",
    logo: article_3,
    title: "VivaTech : demain, votre cœur ou votre cerveau suffiront à déverrouiller votre téléphone"
  },
  {
    id: "article4",
    link: "https://www.leberry.fr/vierzon-18100/actualites/cur-net-start-up-basee-a-vierzon-voudrait-quon-utilise-nos-ondes-cardiaques-pour-nous-identifier_14574822/",
    logo: article_4,
    title: "Cœur net, start-up basée à Vierzon, voudrait qu’on utilise nos ondes cardiaques pour nous identifier"
  },
  {
    id: "article5",
    link: "https://www.leberry.fr/vierzon-18100/actualites/a-vierzon-la-start-up-cur-net-developpe-un-projet-de-reconnaissance-de-personnes-a-l-aide-du-rythme-cardiaque_14429871/",
    logo: article_5,
    title: "À Vierzon, la start-up Cœur-Net développe un projet de reconnaissance de personnes à l'aide du rythme cardiaque"
  },
];

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