import dixmude1 from './Images/dixmude/4.jpg';
import dixmude2 from './Images/dixmude/2.jpg';
import dixmude3 from './Images/dixmude/3.jpg';
import dixmude4 from './Images/dixmude/1.jpg';
import dixmude5 from './Images/dixmude/5.jpg';
import kador1 from './Images/kador/1.jpg';
import kador2 from './Images/kador/2.jpg';
import kador3 from './Images/kador/3.jpg';
import kador4 from './Images/kador/4.jpg';
import kador5 from './Images/kador/5.jpg';
import kador6 from './Images/kador/6.jpg';
import kador7 from './Images/kador/7.jpg';
import cabestan1 from './Images/cabestan/3.jpg';
import cabestan2 from './Images/cabestan/2.jpg';
import cabestan3 from './Images/cabestan/1.jpg';
import cabestan4 from './Images/cabestan/4.jpg';
import cabestan5 from './Images/cabestan/5.jpg';
import cabestan6 from './Images/cabestan/6.jpg';
import cabestan7 from './Images/cabestan/7.jpg';
import cabestan8 from './Images/cabestan/8.jpg';
import cabestan9 from './Images/cabestan/9.jpg';
import cabestan10 from './Images/cabestan/10.jpg';
import portzic1 from './Images/portzic/4.jpg';
import portzic2 from './Images/portzic/2.jpg';
import portzic3 from './Images/portzic/3.jpg';
import portzic4 from './Images/portzic/1.jpg';
import portzic5 from './Images/portzic/5.jpg';
import portzic6 from './Images/portzic/6.jpg';
import portzic7 from './Images/portzic/7.jpg';
import portzic8 from './Images/portzic/8.jpg';
import portzic9 from './Images/portzic/9.jpg';
import portzic10 from './Images/portzic/10.jpg';
import portzic11 from './Images/portzic/11.jpg';
import soleil1 from './Images/soleil/1.jpg';
import soleil2 from './Images/soleil/2.jpg';
import soleil3 from './Images/soleil/3.jpg';
import soleil4 from './Images/soleil/4.jpg';
import soleil5 from './Images/soleil/5.jpg';
import soleil6 from './Images/soleil/6.jpg';
import soleil7 from './Images/soleil/7.jpg';
import soleil8 from './Images/soleil/8.jpg';
import DVM1 from './Images/DVM/1.jpg';
import DVM2 from './Images/DVM/2.jpg';
import DVM3 from './Images/DVM/3.jpg';
import DVM4 from './Images/DVM/4.jpg';
import DVM5 from './Images/DVM/5.jpg';
import DVM6 from './Images/DVM/6.jpg';
import DVM7 from './Images/DVM/7.jpg';
import DVM8 from './Images/DVM/8.jpg';
import DVC1 from './Images/DVC/2.jpg';
import DVC2 from './Images/DVC/1.jpg';
import DVC3 from './Images/DVC/3.jpg';
import DVC4 from './Images/DVC/4.jpg';
import eco1 from './Images/eco/1.jpg';
import eco2 from './Images/eco/2.jpg';
import eco3 from './Images/eco/3.jpg';
import gitedouble1 from './Images/gitedouble/4.jpg';
import gitedouble2 from './Images/gitedouble/2.jpg';
import gitedouble3 from './Images/gitedouble/3.jpg';
import gitedouble4 from './Images/gitedouble/1.jpg';
import gitedouble5 from './Images/gitedouble/5.jpg';
import gitetwin1 from './Images/gitetwin/1.jpg';
import gitetwin2 from './Images/gitetwin/2.jpg';
import gitetwin3 from './Images/gitetwin/3.jpg';
import gitetwin4 from './Images/gitetwin/4.jpg';
import GSD1 from './Images/GSD/1.jpg';
import GSD2 from './Images/GSD/2.jpg';
import GSD3 from './Images/GSD/3.jpg';
import GST1 from './Images/GST/1.jpg';
import GST2 from './Images/GST/2.jpg';
import GST3 from './Images/GST/3.jpg';
import GST4 from './Images/GST/4.jpg';
import studio1 from './Images/studio/2.jpg';
import studio2 from './Images/studio/1.jpg';
import studio3 from './Images/studio/3.jpg';
import studio4 from './Images/studio/4.jpg';
import TVM1 from './Images/TVM/3.jpg';
import TVM2 from './Images/TVM/2.jpg';
import TVM3 from './Images/TVM/1.jpg';
import TVM4 from './Images/TVM/4.jpg';

export const RoomsData = [
  {
    id: 'doublevuemer',
    stock: 4,
    name: 'Chambre double standard vue mer',
    prix: 90,
    category: 'Hotel',
    address: '46, boulevard de la plage',
    travelers: 2,
    breakfast: '15€',
    bathroom: 'shower',
    bed: 1,
    bedroom: 1,
    bedType: 'double',
    seaView: true,
    images: [DVM1, DVM2, DVM3, DVM4, DVM5, DVM6, DVM7, DVM8],
  },
  {
    id: 'doublevuecour',
    stock: 4,
    name: 'Chambre double standard vue cour',
    prix: 80,
    category: 'Hotel',
    address: '46, boulevard de la plage',
    travelers: 2,
    breakfast: '15€',
    bathroom: 'shower',
    bed: 1,
    bedroom: 1,
    bedType: 'double',
    seaView: false,
    images: [DVC1, DVC2, DVC3, DVC4],
  },

  {
    id: 'twinvuemer',
    stock: 2,
    name: 'Chambre twin standard vue mer',
    prix: 90,
    category: 'Hotel',
    address: '46, boulevard de la plage',
    travelers: 2,
    breakfast: '15€',
    bathroom: 'shower',
    bed: 2,
    bedroom: 1,
    bedType: 'twin',
    seaView: true,
    images: [TVM1, TVM2, TVM3, TVM4],
  },
  {
    id: 'studio',
    stock: 2,
    name: 'Studio double vue mer',
    prix: 110,
    category: 'Hotel',
    address: '46, boulevard de la plage',
    travelers: 2,
    breakfast: '15€',
    bathroom: 'shower',
    bed: 1,
    bedroom: 1,
    bedType: 'double',
    seaView: true,
    kitchen: true,
    images: [studio1, studio2, studio3, studio4],
  },
  {
    id: 'economique',
    stock: 2,
    name: 'Chambre double economique vue mer (12m²)',
    prix: 85,
    category: 'Hotel',
    address: '46, boulevard de la plage',
    travelers: 2,
    breakfast: '15€',
    bathroom: 'shower',
    bed: 1,
    bedroom: 1,
    bedType: 'double',
    seaView: true,
    images: [eco1, eco2, eco3],
  },
  {
    id: 'grandstudiodouble',
    stock: 2,
    name: 'Grand studio double vue mer',
    prix: 150,
    category: 'Hotel',
    address: '46, boulevard de la plage',
    travelers: 4,
    breakfast: '15€',
    bathroom: 'shower',
    bed: 1,
    bedroom: 1,
    sofa: 2,
    bedType: 'double',
    seaView: true,
    kitchen: true,
    livingRoom: true,
    images: [GSD1, GSD2, GSD3],
  },
  {
    id: 'grandstudiotwin',
    stock: 2,
    name: 'Grand studio twin vue mer',
    prix: 150,
    category: 'Hotel',
    address: '46, boulevard de la plage',
    travelers: 4,
    breakfast: '15€',
    bathroom: 'shower',
    bed: 2,
    bedroom: 1,
    sofa: 1,
    bedType: 'twin',
    seaView: true,
    kitchen: true,
    livingRoom: true,
    images: [GST1, GST2, GST3, GST4],
  },
  {
    id: 'gitedouble',
    stock: 2,
    name: 'Chambre double au gîte',
    prix: 70,
    category: 'Gîte',
    address: '13 Rue Garn An Aod',
    travelers: 2,
    breakfast: '15€',
    bathroom: 'shower',
    bed: 1,
    bedroom: 1,
    bedType: 'double',
    kitchen: 'En Commun',
    images: [gitedouble1, gitedouble2, gitedouble3, gitedouble4, gitedouble5],
  },
  {
    id: 'gitetwin',
    stock: 5,
    name: 'Chambre twin au gîte',
    prix: 70,
    category: 'Gîte',
    address: '13 Rue Garn An Aod',
    travelers: 2,
    breakfast: '15€',
    bathroom: 'shower',
    bed: 2,
    bedroom: 1,
    bedType: 'twin',
    kitchen: 'En Commun',
    images: [
      gitetwin1,
      gitetwin2,
      gitetwin3,
      gitetwin4,
      gitedouble2,
      gitedouble3,
      gitedouble2,
      gitedouble1,
    ],
  },
  {
    id: 'dixmude',
    stock: 1,
    name: 'Appartement Le Dixmude',
    prix: 150,
    category: 'Appartement',
    address: '2 Rue Dixmude',
    travelers: 4,
    breakfast: '15€',
    bathroom: 'shower',
    bed: 1,
    bedroom: 1,
    bedType: 'double',
    kitchen: true,
    sofa: 1,
    livingRoom: true,
    images: [dixmude1, dixmude2, dixmude3, dixmude4, dixmude5],
    parking: true,
  },
  {
    id: 'kador',
    stock: 1,
    name: 'Appartement Le Kador',
    prix: 150,
    category: 'Appartement',
    address: '40, boulevard de la plage',
    travelers: 4,
    breakfast: '15€',
    bathroom: 'shower',
    bed: 1,
    bedroom: 1,
    bedType: 'double',
    kitchen: true,
    sofa: 1,
    livingRoom: true,
    images: [kador1, kador2, kador3, kador4, kador5, kador6, kador7],
    parking: true,
  },
  {
    id: 'portzic',
    stock: 1,
    name: 'Appartement Le Portzic',
    prix: 150,
    category: 'Appartement',
    address: `1 Rue de l'Atlantique`,
    travelers: 5,
    breakfast: '15€',
    bathroom: 'shower',
    bed: 1,
    bedroom: 1,
    bedType: 'double',
    kitchen: true,
    sofa: 1,
    livingRoom: true,
    images: [
      portzic1,
      portzic2,
      portzic3,
      portzic4,
      portzic5,
      portzic6,
      portzic7,

      portzic8,

      portzic9,

      portzic10,

      portzic11,
    ],
    parking: true,
  },
  {
    id: 'cabestan',
    stock: 1,
    name: 'Appartement Le Cabestan',
    prix: 170,
    category: 'Appartement',
    address: `1 Rue de l'Atlantique`,
    travelers: 6,
    breakfast: '15€',
    bathroom: 'shower',
    bed: 2,
    bedroom: 2,
    bedType: 'double',
    kitchen: true,
    sofa: 1,
    livingRoom: true,
    images: [
      cabestan1,
      cabestan2,
      cabestan3,
      cabestan4,
      cabestan5,
      cabestan6,
      cabestan7,
      cabestan8,
      cabestan9,
      cabestan10,
    ],
    parking: true,
  },
  {
    id: 'soleil',
    stock: 1,
    name: 'Appartement Le Soleil des Flots',
    prix: 170,
    category: 'Appartement',
    address: `4 Place d'Ys`,
    travelers: 2,
    breakfast: '15€',
    bathroom: 'shower',
    bed: 1,
    bedroom: 1,
    bedType: 'double',
    kitchen: true,
    livingRoom: true,
    seaView: true,
    images: [
      soleil1,
      soleil2,
      soleil3,
      soleil4,
      soleil5,
      soleil6,
      soleil7,
      soleil8,
    ],
  },
];

export const Event = [
  {
    id: 1,
    month: 'Jan',
    event: [`Pas d'évenement`],
  },
  {
    id: 2,
    month: 'Feb',
    event: ['Braderie du livre (Bibliothèque Henri-Queffélec)'],
  },
  {
    id: 3,
    month: 'Mar',
    event: ['Le Printemps des poètes (Bibliothèque Henri-Queffélec)'],
  },
  {
    id: 4,
    month: 'Apr',
    event: [`Pas d'évenement`],
  },
  {
    id: 5,
    month: 'May',
    event: [
      `Week-end de l’Ascension : Grand Prix de l’école navale (rond C dans l’anse de Morgat en partenariat logistique avec le Centre nautique de Crozon-Morgat) et Pen ar Bed Paddle Race (Presqu’île Sport Côtiers)`,
      'Course pédestre, la Presqu’îlienne (Presqu’île de Crozon Jogging Club).',
    ],
  },
  {
    id: 6,
    month: 'Jun',
    event: [
      `Généralement le 1er samedi du mois : opération « plages propres » (mairie de Crozon)`,
      'Le vendredi le plus proche du 21 juin : Fête de la musique à Morgat (et animations musicales à Crozon centre-ville le samedi matin) (associations culturelles et mairie de Crozon).',
    ],
  },
  {
    id: 7,
    month: 'Jul',
    event: [
      `Les Mardis de Morgat, soirées festives et musicales avec déambulations (fanfares, arts de la rue), concerts et marché artisanal nocturne`,
      'Les festivités du 14 juillet à Morgat (défilé au lampion, feu d’artifice et fest-noz) sans oublier le thon grillé sur le Port (USCM)',
      `La Fête de la mer au Fret (ASPMF) - Presqu'île de Crozon`,
      `Les mercredis d’initiation à la danse bretonne sur le port de Morgat`,
      `Exposition Peintures et sculpture en presqu’île (Alisées)`,
      `Caravan’ Fest (Birvidik)`,
      `Les 30 Miles de Morgat (SHYC)`,
      `Festival Les vendredis de musiqueS à Crozon (juillet et août) sur la Presqu'île de Crozon`,
    ],
  },
  {
    id: 8,
    month: 'Aug',
    event: [
      `1er WE (vendredi, samedi et dimanche) : Festival du bout du monde`,
      `Les Mardis de Morgat, soirées festives et musicales avec déambulations (fanfares, arts de la rue), concerts et 
marché artisanal nocturne - Une soirée spéciale « arts de la rue »`,
      `Exposition Peintures et sculpture en presqu’île (Alisées)`,
      `Les mercredis d’initiation à la danse bretonne sur le port de Morgat`,
      `Moules frites sur le port de Morgat (Association pour le don du sang)`,
      `15 août : vide-grenier au Fret (ASPMF) et thon grillé à Morgat (USCM)`,
      `Le Labour est dans le pré (ARPMP)`,
    ],
  },
  {
    id: 9,
    month: 'Sep',
    event: [`Pas d'évenement`],
  },
  {
    id: 10,
    month: 'Oct',
    event: [
      `Presqu’île Paddle Race (Presqu’île Sports Côtiers)`,
      `Semaine bleue (CCAS)`,
      `Bourse auto-moto (Les Deuches du bout du monde)`,
      `Vacances de la Toussaint : fest-noz (Startijenn)`,
    ],
  },
  {
    id: 11,
    month: 'Nov',
    event: [`Téléthon (Presqu’iléthon)`, `Repas des seniors (CCAS)`],
  },
  {
    id: 12,
    month: 'Dec',
    event: [
      `Marché de Noël`,
      `Repas des seniors (CCAS)`,
      `Hibiscus Party, compétition de wind-surf, surf et paddle (CNCM)`,
    ],
  },
];
