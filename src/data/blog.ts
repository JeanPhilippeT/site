// Blog posts data for JPT Fashion Website
// This will be replaced with WordPress integration later

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "L'Art de la Broderie Artisanale",
    slug: "art-broderie-artisanale",
    date: "15 Janvier 2025",
    image: "/images/galleries/couture/reflet-dor/caftan-couture-gold-silk-handmaid-embroidery-1.webp",
    excerpt: "Découvrez les techniques ancestrales de broderie qui donnent vie à nos créations COUTURE. Un savoir-faire transmis de génération en génération.",
    author: "Jean Philippe Tourigny",
    category: "Artisanat",
    tags: ["broderie", "artisanat", "couture", "tradition"],
    content: `
      <h2>L'Excellence de la Broderie Traditionnelle</h2>
      
      <p>Dans notre atelier parisien, chaque pièce de la collection COUTURE naît d'un dialogue entre tradition et innovation. La broderie artisanale, héritage millénaire du savoir-faire marocain, constitue l'âme de nos créations les plus précieuses.</p>
      
      <h3>Des Techniques Ancestrales</h3>
      
      <p>Nos artisans maîtrisent des techniques de broderie transmises de génération en génération. Chaque point, minutieusement exécuté à la main, raconte une histoire d'excellence et de patience. Le travail du fil d'or, notamment, requiert une expertise particulière que seuls quelques maîtres artisans possèdent encore.</p>
      
      <h3>L'Innovation au Service de la Tradition</h3>
      
      <p>Tout en respectant les codes ancestraux, nous n'hésitons pas à innover dans le choix des matières et des motifs. Nos broderies contemporaines allient soies précieuses, cristaux Swarovski et fils métalliques pour créer des pièces uniques qui transcendent les époques.</p>
      
      <h3>Un Investissement en Temps</h3>
      
      <p>Une pièce de notre collection "Reflet d'Or" nécessite entre 80 et 120 heures de travail artisanal. Cette durée, loin d'être excessive, témoigne de notre engagement envers l'excellence et la qualité irréprochable de nos créations.</p>
      
      <p>Chaque caftan brodé à la main devient ainsi une œuvre d'art portable, un témoignage vivant de l'excellence artisanale française associée à l'héritage marocain.</p>
    `
  },
  {
    id: 2,
    title: "DIFFUSION vs COUTURE : Comprendre nos Galeries",
    slug: "diffusion-vs-couture-galeries",
    date: "10 Janvier 2025",
    image: "/images/galleries/diffusion/black-swan/caftan-couture-sequins-black-swan-1.webp",
    excerpt: "Explorez les différences entre nos deux univers créatifs : l'accessibilité élégante de DIFFUSION et l'excellence sur mesure de COUTURE.",
    author: "Jean Philippe Tourigny",
    category: "Collections",
    tags: ["diffusion", "couture", "collections", "mode"],
    content: `
      <h2>Deux Univers, Une Même Excellence</h2>
      
      <p>Chez Jean Philippe Tourigny, nous avons développé deux lignes distinctes pour répondre aux attentes variées de notre clientèle internationale. Découvrez les spécificités de chaque galerie et trouvez celle qui correspond à vos aspirations.</p>
      
      <h3>DIFFUSION Gallery : L'Élégance Accessible</h3>
      
      <p>Notre galerie DIFFUSION démocratise l'excellence JPT en proposant des pièces raffinées à un public plus large. Sans compromis sur la qualité, cette ligne offre :</p>
      
      <ul>
        <li><strong>Des créations prêt-à-porter</strong> dans des tailles standards</li>
        <li><strong>Des prix accessibles</strong> tout en maintenant notre niveau d'exigence</li>
        <li><strong>Des collections renouvelées</strong> régulièrement selon les tendances</li>
        <li><strong>Une production en série limitée</strong> pour préserver l'exclusivité</li>
      </ul>
      
      <h3>COUTURE Gallery : L'Excellence Sur Mesure</h3>
      
      <p>Notre galerie COUTURE représente le summum de notre art, proposant des créations entièrement personnalisées :</p>
      
      <ul>
        <li><strong>Confection sur mesure</strong> selon vos mensurations exactes</li>
        <li><strong>Personnalisation complète</strong> des couleurs, motifs et finitions</li>
        <li><strong>Matières d'exception</strong> : soies pures, cristaux Swarovski, fils d'or</li>
        <li><strong>Création unique</strong> : chaque pièce est un exemplaire exclusif</li>
      </ul>
      
      <h3>Comment Choisir ?</h3>
      
      <p>Le choix entre nos deux galeries dépend de vos attentes personnelles. La galerie DIFFUSION convient parfaitement pour des occasions spéciales où vous souhaitez briller avec élégance. La galerie COUTURE s'adresse aux personnes recherchant l'exclusivité absolue et la personnalisation complète.</p>
      
      <p>Dans tous les cas, vous bénéficierez de la signature JPT : un style intemporel qui allie tradition marocaine et sophistication parisienne.</p>
    `
  },
  {
    id: 3,
    title: "Les Secrets du Caftan Moderne",
    slug: "secrets-caftan-moderne",
    date: "5 Janvier 2025",
    image: "/images/galleries/couture/queen-of-satin/caftan-couture-night-blue-satin-silk-handmade-swarovski-embroidery-1.webp",
    excerpt: "Comment nous réinventons le caftan traditionnel avec des techniques contemporaines, en alliant héritage marocain et sophistication parisienne.",
    author: "Jean Philippe Tourigny",
    category: "Design",
    tags: ["caftan", "design", "tradition", "modernité"],
    content: `
      <h2>Réinventer un Héritage Millénaire</h2>
      
      <p>Le caftan, vêtement emblématique du Maroc, traverse les siècles en s'adaptant aux codes de chaque époque. Chez Jean Philippe Tourigny, nous perpétuons cette tradition évolutive en créant des caftans contemporains qui respectent l'essence du vêtement traditionnel.</p>
      
      <h3>L'Héritage Traditionnel</h3>
      
      <p>Le caftan traditionnel marocain se caractérise par sa coupe droite et ample, ses manches longues et sa longueur jusqu'aux chevilles. Vêtement de prestige, il était porté par les sultans et les notables, orné de broderies précieuses et confectionné dans les plus belles étoffes.</p>
      
      <h3>Notre Vision Contemporaine</h3>
      
      <p>Tout en respectant les codes traditionnels, nous apportons une modernité subtile à nos créations :</p>
      
      <h4>Coupe et Silhouette</h4>
      <p>Nous affinons légèrement la silhouette pour flatter la morphologie féminine contemporaine, tout en conservant l'élégance et le confort du vêtement traditionnel.</p>
      
      <h4>Matières Innovantes</h4>
      <p>Aux soies traditionnelles, nous associons des matières contemporaines comme le satin duchesse ou l'organza de soie, créant des jeux de textures inédits.</p>
      
      <h4>Broderies Contemporaines</h4>
      <p>Nos motifs de broderie s'inspirent de l'art décoratif marocain tout en intégrant des éléments graphiques modernes. L'utilisation de cristaux Swarovski apporte une touche de modernité à l'artisanat traditionnel.</p>
      
      <h3>Techniques de Confection</h3>
      
      <p>Chaque caftan JPT nécessite plusieurs étapes de confection minutieuses :</p>
      
      <ol>
        <li><strong>Prise de mesures personnalisée</strong> pour un ajustement parfait</li>
        <li><strong>Patronage sur mesure</strong> adapté à votre morphologie</li>
        <li><strong>Coupe dans le tissu</strong> en tenant compte du tombé et du drapé</li>
        <li><strong>Assemblage artisanal</strong> avec finitions invisibles</li>
        <li><strong>Broderie à la main</strong> réalisée par nos maîtres artisans</li>
        <li><strong>Finitions précieuses</strong> : ourlets roulés, fermetures invisibles</li>
      </ol>
      
      <h3>Porter le Caftan Aujourd'hui</h3>
      
      <p>Le caftan moderne se porte en toute occasion : événements officiels, soirées de gala, mariages ou simplement pour affirmer son style unique. Sa polyvalence en fait un investissement mode intemporel.</p>
      
      <p>Chez Jean Philippe Tourigny, chaque caftan raconte une histoire : celle de l'alliance parfaite entre tradition et modernité, entre savoir-faire ancestral et vision contemporaine.</p>
    `
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getAllBlogSlugs = (): string[] => {
  return blogPosts.map(post => post.slug);
};

export const getRecentBlogPosts = (limit: number = 3): BlogPost[] => {
  return blogPosts.slice(0, limit);
};
