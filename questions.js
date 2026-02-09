/* ============================================================
   ====================  LISTE DES QUESTIONS  ==================
   ============================================================ */

const questions = [
    {
      question: "Quel symbole représente une lampe dans un schéma électrique ?",
      options: ["Un cercle avec une croix", "Un rectangle avec un trait", "Un rond avec un L", "Un trait en zigzag"],
      graphique: "symbole_lampe.png",
      bonne_reponse: "Un cercle avec une croix",
      explication: "Dans les schémas électriques normalisés, une lampe est représentée par un cercle avec une croix à l’intérieur."
    },
    {
      question: "Que représente ce symbole dans un schéma électrique ?",
      options: ["Un interrupteur", "Un moteur", "Une prise de courant", "Une pile"],
      graphique: "symbole_interrupteur.png",
      bonne_reponse: "Un interrupteur",
      explication: "Ce symbole, un trait avec un petit rond ou une ligne brisée, correspond à un interrupteur qui permet d’ouvrir ou de fermer un circuit."
    },
    {
      question: "Quel symbole correspond à une pile dans un schéma électrique ?",
      options: ["Un trait horizontal", "Un rectangle", "Un long trait et un court trait parallèles", "Un cercle"],
      graphique: "symbole_pile.png",
      bonne_reponse: "Un long trait et un court trait parallèles",
      explication: "La pile est représentée par deux traits parallèles de longueurs différentes, le plus long étant la borne positive."
    },
    {
      question: "Quel outil utilise-t-on pour dénuder un fil électrique avant de le brancher ?",
      options: ["Un tournevis", "Une pince à dénuder", "Un marteau", "Une clé à molette"],
      graphique: "pince_denuder.png",
      bonne_reponse: "Une pince à dénuder",
      explication: "La pince à dénuder permet d’enlever l’isolant autour du fil sans abîmer le conducteur en cuivre."
    },
    {
      question: "Dans quel ordre doit-on brancher les éléments d’un circuit série : lampe, interrupteur, pile ?",
      options: [
        "Pile → lampe → interrupteur",
        "Interrupteur → pile → lampe",
        "Pile → interrupteur → lampe",
        "L’ordre n’a pas d’importance"
      ],
      graphique: "circuit_serie.png",
      bonne_reponse: "L’ordre n’a pas d’importance",
      explication: "Dans un circuit série, l’ordre des dipôles n’influence pas le fonctionnement, tant que le circuit est fermé."
    },
    {
      question: "Quel est le rôle d’un fusible dans un circuit électrique ?",
      options: [
        "Protéger contre les surcharges et les courts-circuits",
        "Augmenter la tension du circuit",
        "Réguler l’intensité du courant",
        "Allumer automatiquement les lampes"
      ],
      graphique: "fusible.png",
      bonne_reponse: "Protéger contre les surcharges et les courts-circuits",
      explication: "Le fusible fond et coupe le circuit en cas de surintensité, protégeant ainsi les appareils et les fils."
    },
    {
      question: "Quel dispositif protège les personnes contre les risques d’électrocution en détectant les fuites de courant ?",
      options: [
        "Un fusible",
        "Un disjoncteur différentiel",
        "Un coupe-circuit",
        "Un disjoncteur divisionnaire"
      ],
      graphique: "disjoncteur_differentiel.png",
      bonne_reponse: "Un disjoncteur différentiel",
      explication: "Le disjoncteur différentiel coupe automatiquement le courant s’il détecte une différence d’intensité entre la phase et le neutre, signe d’une fuite vers la terre."
    },
    {
      question: "À quoi sert la mise à la terre dans une installation électrique ?",
      options: [
        "À améliorer la qualité du courant",
        "À protéger les appareils en cas de surintensité",
        "À évacuer les courants de défaut vers le sol",
        "À augmenter la puissance disponible"
      ],
      graphique: "mise_a_la_terre.png",
      bonne_reponse: "À évacuer les courants de défaut vers le sol",
      explication: "La mise à la terre permet d’évacuer vers le sol les courants de défaut, protégeant ainsi les personnes et les matériels."
    },
    {
      question: "Quel est le rôle d’un disjoncteur divisionnaire ?",
      options: [
        "Protéger un circuit spécifique contre les surcharges",
        "Mesurer la consommation électrique",
        "Remplacer un fusible",
        "Augmenter la tension du circuit"
      ],
      graphique: "disjoncteur_divisionnaire.png",
      bonne_reponse: "Protéger un circuit spécifique contre les surcharges",
      explication: "Le disjoncteur divisionnaire protège un circuit électrique en coupant le courant en cas de surcharge ou de court-circuit."
    },
    {
      question: "Pourquoi utilise-t-on un coupe-circuit dans une installation électrique ?",
      options: [
        "Pour économiser de l’énergie",
        "Pour couper manuellement le courant en cas d’urgence",
        "Pour augmenter la puissance du circuit",
        "Pour mesurer la tension"
      ],
      graphique: "coupe_circuit.png",
      bonne_reponse: "Pour couper manuellement le courant en cas d’urgence",
      explication: "Le coupe-circuit permet d’interrompre manuellement l’alimentation électrique d’un circuit en cas de danger ou de maintenance."
    }
];

/* ============================================================
   ====================  FIN DES QUESTIONS  ==================
   ============================================================ */
