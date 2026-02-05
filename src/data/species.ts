export interface Species {
  id: string;
  name: string;
  scientificName: string;
  category: 'river' | 'mediterranean' | 'tropical' | 'european' | 'tropical_bird';
  type: 'fish' | 'bird';
  description: string;
  imageUrl: string;
  habitat: string;
  size: string;
  diet: string;
}

export const fishSpecies: Species[] = [
  // River Fish
  {
    id: 'salmon',
    name: 'Atlantic Salmon',
    scientificName: 'Salmo salar',
    category: 'river',
    type: 'fish',
    description: 'A large migratory fish known for its impressive journey from rivers to the ocean and back.',
    imageUrl: '/images/salmon.jpg',
    habitat: 'Freshwater rivers and streams, migrates to ocean',
    size: 'Up to 1.5m length, 46kg weight',
    diet: 'Small fish, crustaceans, insects'
  },
  {
    id: 'trout',
    name: 'Brown Trout',
    scientificName: 'Salmo trutta',
    category: 'river',
    type: 'fish',
    description: 'A popular game fish with beautiful spotted patterns, found in clear, cool streams.',
    imageUrl: '/images/trout.jpg',
    habitat: 'Cold, clear freshwater streams and rivers',
    size: '30-60cm length',
    diet: 'Insects, small fish, crustaceans'
  },
  {
    id: 'pike',
    name: 'Northern Pike',
    scientificName: 'Esox lucius',
    category: 'river',
    type: 'fish',
    description: 'A predatory fish with a long, slender body and sharp teeth, known as the "water wolf".',
    imageUrl: '/images/pike.jpg',
    habitat: 'Freshwater lakes, rivers, and marshes',
    size: 'Up to 1.5m length, 25kg weight',
    diet: 'Other fish, frogs, small mammals'
  },
  {
    id: 'perch',
    name: 'European Perch',
    scientificName: 'Perca fluviatilis',
    category: 'river',
    type: 'fish',
    description: 'A common freshwater fish with distinctive vertical stripes and spiny fins.',
    imageUrl: '/images/perch.jpg',
    habitat: 'Freshwater lakes, rivers, and ponds',
    size: '20-50cm length',
    diet: 'Small fish, insects, crustaceans'
  },

  // Mediterranean Fish
  {
    id: 'barracuda',
    name: 'Great Barracuda',
    scientificName: 'Sphyraena barracuda',
    category: 'mediterranean',
    type: 'fish',
    description: 'A large, fearsome-looking fish with sharp teeth and a streamlined body built for speed.',
    imageUrl: '/images/barracuda.jpg',
    habitat: 'Coastal waters, coral reefs, and open ocean',
    size: 'Up to 2m length, 50kg weight',
    diet: 'Small fish, cephalopods'
  },
  {
    id: 'tuna',
    name: 'Bluefin Tuna',
    scientificName: 'Thunnus thynnus',
    category: 'mediterranean',
    type: 'fish',
    description: 'One of the largest and fastest fish in the ocean, highly valued in cuisine.',
    imageUrl: '/images/tuna.jpg',
    habitat: 'Open ocean, coastal waters',
    size: 'Up to 3m length, 680kg weight',
    diet: 'Small fish, squid, crustaceans'
  },
  {
    id: 'octopus',
    name: 'Common Octopus',
    scientificName: 'Octopus vulgaris',
    category: 'mediterranean',
    type: 'fish',
    description: 'A highly intelligent cephalopod known for its problem-solving abilities and camouflage.',
    imageUrl: '/images/octopus.jpg',
    habitat: 'Rocky seabeds, coral reefs, seagrass beds',
    size: 'Up to 1m arm span',
    diet: 'Crabs, shellfish, small fish'
  },
  {
    id: 'seabream',
    name: 'Gilthead Seabream',
    scientificName: 'Sparus aurata',
    category: 'mediterranean',
    type: 'fish',
    description: 'A popular food fish with a distinctive golden stripe between the eyes.',
    imageUrl: '/images/seabream.jpg',
    habitat: 'Coastal waters, lagoons, estuaries',
    size: '30-70cm length',
    diet: 'Small fish, crustaceans, mollusks'
  },

  // Tropical Fish
  {
    id: 'clownfish',
    name: 'Clownfish',
    scientificName: 'Amphiprioninae',
    category: 'tropical',
    type: 'fish',
    description: 'Small, brightly colored fish that live in symbiosis with sea anemones.',
    imageUrl: '/images/clownfish.jpg',
    habitat: 'Coral reefs in warm tropical waters',
    size: '10-18cm length',
    diet: 'Algae, small invertebrates, zooplankton'
  },
  {
    id: 'parrotfish',
    name: 'Bumphead Parrotfish',
    scientificName: 'Bolbometopon muricatum',
    category: 'tropical',
    type: 'fish',
    description: 'Large parrotfish known for its beak-like mouth used to scrape coral.',
    imageUrl: '/images/parrotfish.jpg',
    habitat: 'Coral reefs in tropical oceans',
    size: 'Up to 1.3m length, 46kg weight',
    diet: 'Coral, algae, plankton'
  },
  {
    id: 'angelfish',
    name: 'Emperor Angelfish',
    scientificName: 'Pomacanthus imperator',
    category: 'tropical',
    type: 'fish',
    description: 'Striking fish with vibrant blue and yellow stripes, popular in aquariums.',
    imageUrl: '/images/angelfish.jpg',
    habitat: 'Coral reefs in tropical waters',
    size: 'Up to 40cm length',
    diet: 'Sponges, algae, small invertebrates'
  },
  {
    id: 'butterflyfish',
    name: 'Raccoon Butterflyfish',
    scientificName: 'Chaetodon lunula',
    category: 'tropical',
    type: 'fish',
    description: 'Small, colorful fish with distinctive eye-like spots on their sides.',
    imageUrl: '/images/butterflyfish.jpg',
    habitat: 'Coral reefs and rocky areas',
    size: '15-20cm length',
    diet: 'Coral polyps, small invertebrates'
  }
];

export const birdSpecies: Species[] = [
  // European Birds
  {
    id: 'eagle',
    name: 'Golden Eagle',
    scientificName: 'Aquila chrysaetos',
    category: 'european',
    type: 'bird',
    description: 'A powerful bird of prey with impressive wingspan and keen eyesight.',
    imageUrl: '/images/eagle.jpg',
    habitat: 'Mountains, open country, forests',
    size: '75-90cm length, 2-7kg weight',
    diet: 'Small mammals, birds, carrion'
  },
  {
    id: 'robin',
    name: 'European Robin',
    scientificName: 'Erithacus rubecula',
    category: 'european',
    type: 'bird',
    description: 'Small songbird with distinctive red breast, common in gardens and woodlands.',
    imageUrl: '/images/robin.jpg',
    habitat: 'Woodlands, gardens, parks',
    size: '12-14cm length',
    diet: 'Insects, worms, berries'
  },
  {
    id: 'swan',
    name: 'Mute Swan',
    scientificName: 'Cygnus olor',
    category: 'european',
    type: 'bird',
    description: 'Large, elegant waterbird known for its graceful movements and curved neck.',
    imageUrl: '/images/swan.jpg',
    habitat: 'Lakes, rivers, ponds, estuaries',
    size: '120-160cm length, 10-12kg weight',
    diet: 'Aquatic plants, small fish, insects'
  },
  {
    id: 'woodpecker',
    name: 'Great Spotted Woodpecker',
    scientificName: 'Dendrocopos major',
    category: 'european',
    type: 'bird',
    description: 'Medium-sized woodpecker with distinctive black and white plumage and red markings.',
    imageUrl: '/images/woodpecker.jpg',
    habitat: 'Woodlands, forests, parks',
    size: '23-26cm length',
    diet: 'Insects, larvae, seeds, berries'
  },

  // Tropical Birds
  {
    id: 'toucan',
    name: 'Keel-billed Toucan',
    scientificName: 'Ramphastos sulfuratus',
    category: 'tropical_bird',
    type: 'bird',
    description: 'Colorful bird with a large, rainbow-colored bill, found in tropical rainforests.',
    imageUrl: '/images/toucan.jpg',
    habitat: 'Tropical rainforests, forest edges',
    size: '42-55cm length',
    diet: 'Fruit, insects, eggs, small reptiles'
  },
  {
    id: 'parrot',
    name: 'Scarlet Macaw',
    scientificName: 'Ara macao',
    category: 'tropical_bird',
    type: 'bird',
    description: 'Large, vibrant parrot with brilliant red, yellow, and blue plumage.',
    imageUrl: '/images/parrot.jpg',
    habitat: 'Tropical rainforests, woodlands',
    size: '81-96cm length',
    diet: 'Nuts, seeds, fruits, flowers'
  },
  {
    id: 'hummingbird',
    name: 'Ruby-throated Hummingbird',
    scientificName: 'Archilochus colubris',
    category: 'tropical_bird',
    type: 'bird',
    description: 'Tiny bird with iridescent feathers and rapid wing beats, feeds on nectar.',
    imageUrl: '/images/hummingbird.jpg',
    habitat: 'Gardens, forests, meadows',
    size: '7-9cm length',
    diet: 'Nectar, small insects, spiders'
  },
  {
    id: 'flamingo',
    name: 'Greater Flamingo',
    scientificName: 'Phoenicopterus roseus',
    category: 'tropical_bird',
    type: 'bird',
    description: 'Tall wading bird with pink plumage, long legs, and curved bill.',
    imageUrl: '/images/flamingo.jpg',
    habitat: 'Salt lakes, lagoons, estuaries',
    size: '110-150cm height',
    diet: 'Algae, small crustaceans, insects'
  }
];

export const allSpecies = [...fishSpecies, ...birdSpecies];

export const getSpeciesByCategory = (category: string): Species[] => {
  return allSpecies.filter(species => species.category === category);
};

export const getSpeciesByType = (type: 'fish' | 'bird'): Species[] => {
  return allSpecies.filter(species => species.type === type);
};

export const getSpeciesById = (id: string): Species | undefined => {
  return allSpecies.find(species => species.id === id);
};