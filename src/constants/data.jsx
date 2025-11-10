import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { distinction_1,distinction_2,distinction_3,distinction_4,distinction_5 } from '../../assets/img/distinctions';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: 'mailto:contact@coeur-net.fr',
    text: 'contact',
  },
  {
    id: 5,
    url: '/profile',
    text: 'profile',
  },
];



export const distinctions = [
  {
    id: "dist1",
    title: "Les entrepreneuriales INSA Édition 2025",
    description:
      "Lauréat du Prix du Groupe INSA pour l’entrepreneuriat à impact, Coeur-Net a été distinguée pour son innovation en biométrie cardiaque, récompensant un projet technologique alliant sécurité, éthique et impact sociétal.",
    images: [
      distinction_1,
      distinction_5,
    ],
  },

  {
    id: "dist2",
    title: "Les prix pépite 2021, 2022, 2023 Centre-Val de Loire. Lauréat Régional",
    description:
      "Son CEO, Benjamin Vignau, a été distingué à trois reprises au concours Pépite Centre-Val de Loire dès les débuts du projet Coeur-Net, saluant sa vision et sa persévérance. Cette reconnaissance renforce la crédibilité de Coeur-Net et confirme le potentiel de sa technologie d’authentification biométrique.",
    images: [
      distinction_2,
      distinction_3,
      distinction_4,
    ],
  }
];