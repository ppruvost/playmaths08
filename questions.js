/* ============================================================
   ====================  LISTE DES QUESTIONS  ==================
   ============================================================ */

const questions = [
  {
    question: "D’après le graphique, combien de solutions a l’équation f(x) = 0 ?",
    options: ["Aucune solution", "Une solution", "Deux solutions", "Une infinité de solutions"],
    graphique: "parabole_au_dessus_axe.png",
    bonne_reponse: "Aucune solution",
    explication: "La courbe ne coupe pas l’axe des abscisses, donc f(x) = 0 n’a aucune solution."
  },
  {
    question: "Combien de solutions possède l’équation f(x) = 0 pour cette représentation graphique ?",
    options: ["0", "1", "2", "3"],
    graphique: "parabole_tangente_axe.png",
    bonne_reponse: "1",
    explication: "La parabole touche l’axe des abscisses en un seul point : il y a une solution."
  },
  {
    question: "D’après le graphique ci-dessous, combien de solutions a l’équation f(x) = 0 ?",
    options: ["Aucune", "Une", "Deux", "Impossible à savoir"],
    graphique: "parabole_coupe_deux_fois.png",
    bonne_reponse: "Deux",
    explication: "La courbe coupe l’axe des abscisses en deux points distincts."
  },
  {
    question: "Que peut-on dire du nombre de solutions de f(x) = 0 si la parabole est entièrement au-dessus de l’axe des abscisses ?",
    options: ["0 solution", "1 solution", "2 solutions", "Cela dépend du sommet"],
    graphique: "parabole_au_dessus.png",
    bonne_reponse: "0 solution",
    explication: "Si la courbe ne coupe pas l’axe des abscisses, l’équation f(x) = 0 n’a pas de solution."
  },
  {
    question: "Si la parabole coupe l’axe des abscisses en deux points, combien y a-t-il de solutions ?",
    options: ["Aucune", "Une", "Deux", "Trois"],
    graphique: "parabole_deux_intersections.png",
    bonne_reponse: "Deux",
    explication: "Chaque point d’intersection avec l’axe des abscisses correspond à une solution."
  },
  {
    question: "Sur ce graphique, la parabole touche l’axe des abscisses sans le couper. Combien y a-t-il de solutions ?",
    options: ["0", "1", "2", "Cela dépend de x"],
    graphique: "parabole_touche.png",
    bonne_reponse: "1",
    explication: "La parabole est tangente à l’axe des abscisses : il y a une solution double."
  },
  {
    question: "Que représentent les solutions de l’équation f(x) = 0 sur un graphique ?",
    options: [
      "Les points où la courbe coupe l’axe des abscisses",
      "Le sommet de la parabole",
      "Les points où f(x) est maximal",
      "Les intersections avec l’axe des ordonnées"
    ],
    graphique: "parabole_axes.png",
    bonne_reponse: "Les points où la courbe coupe l’axe des abscisses",
    explication: "Les solutions sont les abscisses des points où f(x) = 0."
  },
  {
    question: "Si le sommet de la parabole est situé sous l’axe des abscisses, combien de solutions peut-on avoir ?",
    options: ["0", "1", "2", "Impossible à déterminer"],
    graphique: "sommet_sous_axe.png",
    bonne_reponse: "2",
    explication: "Une parabole de degré 2 avec un sommet sous l’axe coupe l’axe des abscisses en deux points."
  },
  {
    question: "Si le sommet de la parabole est exactement sur l’axe des abscisses, combien y a-t-il de solutions ?",
    options: ["0", "1", "2", "Une infinité"],
    graphique: "sommet_sur_axe.png",
    bonne_reponse: "1",
    explication: "La parabole touche l’axe des abscisses en un seul point."
  },
  {
    question: "Dans un contexte professionnel, que représente graphiquement une solution de f(x) = 0 ?",
    options: [
      "Un seuil où le coût ou le bénéfice est nul",
      "Le maximum de production",
      "La variation de la fonction",
      "La pente de la courbe"
    ],
    graphique: "seuil_rentabilite.png",
    bonne_reponse: "Un seuil où le coût ou le bénéfice est nul",
    explication: "Graphiquement, f(x) = 0 correspond souvent à un seuil de rentabilité."
  }
];

/* ============================================================
   ====================  FIN DES QUESTIONS  ==================
   ============================================================ */
