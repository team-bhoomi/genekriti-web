type questionsCategory =
  | "WASTE_MANAGEMENT"
  | "SUSTAINABLE_SOLUTIONS"
  | "SUSTAINABLE_LIVING"
  | "CLIMATE_CHANGE"
  | "ENVIRONMENTAL_ACTIVISIM"
  | "BIODIVERSITY"
  | "CIRCULAR_ECONOMY"
  | "POLLUTION"
  | "SUSTAINABLE_PRODUCTS"
  | "RENEWABLE_ENERGY";

type questionDiffculty = "EASY" | "MEDIUM" | "HARD";
interface QuestionInterface {
  question: string;
  opt_1: string;
  opt_2: string;
  opt_3: string;
  opt_4: string;
  answer: string;
  level: questionDiffculty;
  points: number;
  category: questionsCategory;
  group: number;
}
export const questions: QuestionInterface[] = [
  {
    question:
      "What material typically cannot be recycled with cardboard boxes?",
    opt_1: "Paper bags",
    opt_2: "Plastic wrap",
    opt_3: "Aluminum cans",
    opt_4: "Newspaper",
    answer: "Plastic wrap",
    level: "EASY",
    points: 1,
    category: "WASTE_MANAGEMENT",
    group: 1,
  },
  {
    question: "Which agricultural practice is unsustainable?",
    opt_1: "Traditional crop rotation for soil health.",
    opt_2: "Heavy chemical fertilizer use without organic matter.",
    opt_3: "Water-intensive crops in drought-prone areas.",
    opt_4: "Community-led small-scale farming initiatives.",
    answer: "Heavy chemical fertilizer use without organic matter.",
    level: "EASY",
    points: 1,
    category: "SUSTAINABLE_SOLUTIONS",
    group: 1,
  },
  {
    question:
      "Which of these factors significantly contributes to water waste in households?",
    opt_1: "Taking shorter showers",
    opt_2: "Fixing leaky faucets and pipes",
    opt_3: "Using water-efficient appliances",
    opt_4: "Watering lawns and gardens during peak sun hours",
    answer: "Watering lawns and gardens during peak sun hours",
    level: "MEDIUM",
    points: 2,
    category: "SUSTAINABLE_LIVING",
    group: 1,
  },
  {
    question: "What is the difference between weather and climate?",
    opt_1:
      "Weather refers to short-term conditions, while climate describes long-term trends.",
    opt_2:
      "Climate is always predictable, while weather is always unpredictable.",
    opt_3:
      "Weather is caused by human activities, while climate is entirely natural.",
    opt_4: "There is no difference; the terms are interchangeable.",
    answer:
      "Weather refers to short-term conditions, while climate describes long-term trends.",
    level: "MEDIUM",
    points: 2,
    category: "CLIMATE_CHANGE",
    group: 1,
  },
  {
    question: "What is a major challenge for promoting sustainable solutions?",
    opt_1: "Lack of awareness about environmental issues.",
    opt_2: "Limited access to green technology and resources.",
    opt_3: "Difficulty changing ingrained cultural habits.",
    opt_4: "All of the above.",
    answer: "All of the above.",
    level: "HARD",
    points: 3,
    category: "SUSTAINABLE_SOLUTIONS",
    group: 1,
  },
  {
    question:
      "Which of these practices would have the smallest impact on reducing your carbon footprint?",
    opt_1: "Walking or cycling instead of driving short distances",
    opt_2: "Switching to energy-efficient light bulbs",
    opt_3: "Buying organic food instead of conventionally grown options",
    opt_4: "Using public transportation whenever possible",
    answer: "Buying organic food instead of conventionally grown options",
    level: "EASY",
    points: 1,
    category: "SUSTAINABLE_LIVING",
    group: 2,
  },
  {
    question: "Common methods used by activists?",
    opt_1: "Protests and demonstrations",
    opt_2: "Education and outreach",
    opt_3: "Lobbying and political engagement",
    opt_4: "All of the above",
    answer: "All of the above",
    level: "EASY",
    points: 1,
    category: "ENVIRONMENTAL_ACTIVISIM",
    group: 2,
  },
  {
    question:
      "Which of these is NOT a potential consequence of climate change?",
    opt_1: "Rising sea levels",
    opt_2: "More extreme weather events",
    opt_3: "Changes in agricultural yields",
    opt_4: "Improved air quality",
    answer: "Improved air quality",
    level: "MEDIUM",
    points: 2,
    category: "CLIMATE_CHANGE",
    group: 2,
  },
  {
    question:
      "What is the difference between BIODIVERSITY and species richness?",
    opt_1:
      "BIODIVERSITY only considers the number of species, while species richness includes genetic diversity within species.",
    opt_2:
      "Species richness only considers the number of species, while BIODIVERSITY encompasses all levels of life, from genes to ecosystems.",
    opt_3:
      "BIODIVERSITY refers to plant life only, while species richness includes animals as well.",
    opt_4: "There is no difference; the terms are interchangeable.",
    answer:
      "Species richness only considers the number of species, while BIODIVERSITY encompasses all levels of life, from genes to ecosystems.",
    level: "MEDIUM",
    points: 2,
    category: "BIODIVERSITY",
    group: 2,
  },
  {
    question: '"Radical" vs. "mainstream" activism?',
    opt_1: "Radical = violent, mainstream = peaceful",
    opt_2: "Radical = systemic change, mainstream = existing systems",
    opt_3: "Radical = animal rights, mainstream = other issues",
    opt_4: "No clear distinction",
    answer: "Radical = systemic change, mainstream = existing systems",
    level: "HARD",
    points: 3,
    category: "ENVIRONMENTAL_ACTIVISIM",
    group: 2,
  },
  {
    question:
      "What is the main greenhouse gas responsible for human-caused climate change?",
    opt_1: "Methane",
    opt_2: "Nitrous oxide",
    opt_3: "Carbon dioxide",
    opt_4: "Sulfur dioxide",
    answer: "Carbon dioxide",
    level: "EASY",
    points: 1,
    category: "CLIMATE_CHANGE",
    group: 3,
  },
  {
    question: "What are the three main phases of a circular economy model?",
    opt_1: "Reduce, reuse, repair",
    opt_2: "Extract, use, dispose",
    opt_3: "Design, manufacture, sell",
    opt_4: "Consume, invest, save",
    answer: "Reduce, reuse, repair",
    level: "EASY",
    points: 1,
    category: "CIRCULAR_ECONOMY",
    group: 3,
  },
  {
    question: "What is the importance of BIODIVERSITY for healthy ecosystems",
    opt_1: "It provides aesthetic beauty and enjoyment for humans.",
    opt_2: "It contributes to clean air, water, and soil quality",
    opt_3: "It supports food security and medicine development.",
    opt_4: "All of the above",
    answer: "All of the above",
    level: "MEDIUM",
    points: 2,
    category: "BIODIVERSITY",
    group: 3,
  },
  {
    question:
      "What is the difference between primary and secondary air pollutants?",
    opt_1:
      "Primary pollutants are emitted directly from sources, while secondary pollutants form in the atmosphere from chemical reactions.",
    opt_2:
      "Primary pollutants are harmful gases, while secondary pollutants are visible smoke and dust.",
    opt_3:
      "Primary pollutants are regulated by stricter laws, while secondary pollutants are less harmful.",
    opt_4: "There is no difference; the terms are interchangeable.",
    answer:
      "Primary pollutants are emitted directly from sources, while secondary pollutants form in the atmosphere from chemical reactions.",
    level: "MEDIUM",
    points: 2,
    category: "POLLUTION",
    group: 3,
  },
  {
    question:
      "Which of the following is NOT a key strategy for implementing a circular economy?",
    opt_1: "Designing products for disassembly and reuse",
    opt_2: "Extending product lifespans through repair and refurbishment",
    opt_3: "Encouraging consumers to buy more products",
    opt_4: "Fostering innovation in sustainable materials and technologies",
    answer: "Encouraging consumers to buy more products",
    level: "HARD",
    points: 3,
    category: "CIRCULAR_ECONOMY",
    group: 3,
  },
  {
    question:
      'BIODIVERSITY refers to the variety of life on Earth. What does "bio" mean in this term?',
    opt_1: "Big",
    opt_2: "Beautifu",
    opt_3: "Life",
    opt_4: "Balance",
    answer: "Life",
    level: "EASY",
    points: 1,
    category: "BIODIVERSITY",
    group: 4,
  },
  {
    question: "Which of these labels indicates a product is certified organic?",
    opt_1: "USDA Organic",
    opt_2: "Rainforest Alliance",
    opt_3: "Energy Star",
    opt_4: "Fairtrade",
    answer: "USDA Organic",
    level: "EASY",
    points: 1,
    category: "SUSTAINABLE_PRODUCTS",
    group: 4,
  },
  {
    question: "What is the main source of agricultural water POLLUTION?",
    opt_1: "Industrial waste",
    opt_2: "Runoff from farms containing fertilizers and pesticides",
    opt_3: "Sewage discharge",
    opt_4: "Oil spills",
    answer: "Runoff from farms containing fertilizers and pesticides",
    level: "MEDIUM",
    points: 2,
    category: "POLLUTION",
    group: 4,
  },
  {
    question:
      "What is the main disadvantage of hydroelectricity compared to other renewable energy sources?",
    opt_1: "Can damage ecosystems",
    opt_2: "Less widespread potential",
    opt_3: "Limited energy storage capacity",
    opt_4: "Less reliable during droughts",
    answer: "Limited energy storage capacity",
    level: "MEDIUM",
    points: 2,
    category: "RENEWABLE_ENERGY",
    group: 4,
  },
  {
    question:
      "When considering the sustainability of a product, which factor is LEAST important?",
    opt_1: "The brand name of the product",
    opt_2: "The product's durability and repairability",
    opt_3: "The distance the product traveled to reach you",
    opt_4: "The type of packaging used",
    answer: "The brand name of the product",
    level: "HARD",
    points: 3,
    category: "SUSTAINABLE_PRODUCTS",
    group: 4,
  },
  {
    question:
      "Which type of POLLUTION is NOT directly caused by burning fossil fuels?",
    opt_1: "Air POLLUTION",
    opt_2: "Water POLLUTION",
    opt_3: "Noise POLLUTION",
    opt_4: "Soil POLLUTION",
    answer: "Noise POLLUTION",
    level: "EASY",
    points: 1,
    category: "POLLUTION",
    group: 5,
  },
  {
    question:
      "What is the fastest-growing source of renewable energy globally?",
    opt_1: "Solar",
    opt_2: "Wind",
    opt_3: "Hydropower",
    opt_4: "Biomass",
    answer: "Solar",
    level: "EASY",
    points: 1,
    category: "RENEWABLE_ENERGY",
    group: 5,
  },
  {
    question: "What is the main advantage of solar energy over wind energy?",
    opt_1: "Requires less land",
    opt_2: "More predictable availability",
    opt_3: "More efficient energy conversion",
    opt_4: "No moving parts",
    answer: "No moving parts",
    level: "MEDIUM",
    points: 2,
    category: "RENEWABLE_ENERGY",
    group: 5,
  },
  {
    question:
      "What is an advantage of choosing products with minimal packaging?",
    opt_1: "Reducing waste and promoting resource conservation",
    opt_2: "Supporting companies with sustainable practices",
    opt_3: "Saving money on the product itself",
    opt_4: "Ensuring the product is fresh and hasn't been tampered with",
    answer: "Reducing waste and promoting resource conservation",
    level: "MEDIUM",
    points: 2,
    category: "SUSTAINABLE_PRODUCTS",
    group: 5,
  },
  {
    question:
      "What is the primary resource used in geothermal energy production?",
    opt_1: "Heat from the Earth's core",
    opt_2: "Sunlight",
    opt_3: "Wind",
    opt_4: "Ocean waves",
    answer: "Heat from the Earth's core",
    level: "HARD",
    points: 3,
    category: "RENEWABLE_ENERGY",
    group: 5,
  },
  {
    question:
      "What is the term used for tiny plastic particles polluting oceans and harming marine life?",
    opt_1: "Macroplastics",
    opt_2: "Microplastics",
    opt_3: "Nanoplastics",
    opt_4: "Plastic dust",
    answer: "Microplastics",
    level: "EASY",
    points: 1,
    category: "POLLUTION",
    group: 6,
  },
  {
    question: "Which of these is NOT a major type of renewable energy?",
    opt_1: "Solar",
    opt_2: "Wind",
    opt_3: "Hydropower",
    opt_4: "Geothermal",
    answer: "Solar",
    level: "EASY",
    points: 1,
    category: "RENEWABLE_ENERGY",
    group: 6,
  },
  {
    question:
      'What is the key principle of a "circular economy" approach to sustainable products?',
    opt_1: "Extending the lifespan of products through repair and reuse",
    opt_2: "Minimizing packaging and waste generation",
    opt_3: "Choosing products made with recycled materials",
    opt_4: "Prioritizing locally sourced ingredients",
    answer: "Extending the lifespan of products through repair and reuse",
    level: "MEDIUM",
    points: 2,
    category: "SUSTAINABLE_PRODUCTS",
    group: 6,
  },
  {
    question:
      'What is the difference between "recycling" and "downcycling" in the circular economy?',
    opt_1:
      "Creates new products of equal or higher quality (recycling) vs. lower quality (downcycling)",
    opt_2:
      "Reuses materials without chemical processing (downcycling) vs. uses chemical processes (recycling)",
    opt_3:
      "Focuses on organic materials (recycling) vs. inorganic materials (downcycling)",
    opt_4: "No difference; terms are interchangeable",
    answer:
      "Creates new products of equal or higher quality (recycling) vs. lower quality (downcycling)",
    level: "MEDIUM",
    points: 2,
    category: "CIRCULAR_ECONOMY",
    group: 6,
  },
  {
    question:
      "What are the potential consequences of light POLLUTION on human health and the environment?",
    opt_1: "Disrupted sleep patterns and migration cycles for animals",
    opt_2: "Increased energy consumption and greenhouse gas emissions",
    opt_3: "Reduced visibility and increased risk of accidents",
    opt_4: " All of the above",
    answer: " All of the above",
    level: "HARD",
    points: 3,
    category: "POLLUTION",
    group: 6,
  },
  {
    question: "Which of these is NOT a major threat to BIODIVERSITY?",
    opt_1: "Habitat loss and fragmentation",
    opt_2: "Climate change",
    opt_3: "Introduction of invasive species",
    opt_4: "Increased regulations on wildlife trade",
    answer: "Increased regulations on wildlife trade",
    level: "EASY",
    points: 1,
    category: "BIODIVERSITY",
    group: 7,
  },
  {
    question:
      'What is the main focus of the "Fairtrade" certification for sustainable products?',
    opt_1:
      "Ensuring fair wages and working conditions for farmers and producers",
    opt_2: "Using recycled materials in the production process",
    opt_3: "Reducing the carbon footprint of the product",
    opt_4: "Using organic ingredients",
    answer:
      "Ensuring fair wages and working conditions for farmers and producers",
    level: "EASY",
    points: 1,
    category: "SUSTAINABLE_PRODUCTS",
    group: 7,
  },
  {
    question:
      "What are the potential benefits of adopting a circular economy approach?",
    opt_1: "Reduced landfill waste and POLLUTION",
    opt_2: "Increased resource efficiency and economic stability",
    opt_3: "Improved product quality and lifespan",
    opt_4: "All of the above",
    answer: "All of the above",
    level: "MEDIUM",
    points: 2,
    category: "CIRCULAR_ECONOMY",
    group: 7,
  },
  {
    question: "Ways to participate (limited time)?",
    opt_1: "Support eco-businesses",
    opt_2: "Reduce own footprint",
    opt_3: "Contact elected officials",
    opt_4: "All of the above",
    answer: "All of the above",
    level: "MEDIUM",
    points: 2,
    category: "ENVIRONMENTAL_ACTIVISIM",
    group: 7,
  },
  {
    question:
      "What is the concept of keystone species, and how can their loss impact an ecosystem?",
    opt_1:
      "Keystone species are the largest animals in an ecosystem, and their loss has minimal impact.",
    opt_2:
      "They are critical species that play a disproportionately large role in ecosystem functioning, and their loss can trigger cascading negative effects.",
    opt_3:
      "They are the most abundant species in an ecosystem, and their loss has little to no impact on other species.",
    opt_4:
      "Keystone species are invasive species that disrupt ecosystems, and their removal improves ecosystem health.",
    answer:
      "They are critical species that play a disproportionately large role in ecosystem functioning, and their loss can trigger cascading negative effects.",
    level: "HARD",
    points: 3,
    category: "BIODIVERSITY",
    group: 7,
  },
  {
    question:
      "2. What is the term used to describe the long-term shift in temperatures and weather patterns in a place?",
    opt_1: "Global warming",
    opt_2: "Climate change",
    opt_3: "Weather fluctuation",
    opt_4: "Seasonal variations",
    answer: "Climate change",
    level: "EASY",
    points: 1,
    category: "CLIMATE_CHANGE",
    group: 8,
  },
  {
    question: "What is the central principle of the circular economy?",
    opt_1: "Minimize waste generation",
    opt_2: "Maximize resource consumption",
    opt_3: "Prioritize rapid economic growth",
    opt_4: "Encourage planned obsolescence",
    answer: "Minimize waste generation",
    level: "EASY",
    points: 1,
    category: "CIRCULAR_ECONOMY",
    group: 8,
  },
  {
    question: "Qualities of an effective activist?",
    opt_1: "Passion and commitment",
    opt_2: "Communication and organization skills",
    opt_3: "Knowledge of issues and solutions",
    opt_4: "All of the above",
    answer: "All of the above",
    level: "MEDIUM",
    points: 2,
    category: "ENVIRONMENTAL_ACTIVISIM",
    group: 8,
  },
  {
    question: "How can individuals reduce their carbon footprint?",
    opt_1: "Use public transportation more often.",
    opt_2: "Choose energy-efficient appliances and lights.",
    opt_3: "Reduce meat consumption and eat more plants.",
    opt_4: "All of the above.",
    answer: "All of the above.",
    level: "MEDIUM",
    points: 2,
    category: "SUSTAINABLE_SOLUTIONS",
    group: 8,
  },
  {
    question: "What is the Intergovernmental Panel on Climate Change (IPCC)?",
    opt_1: "A UN body that assesses the science related to climate change.",
    opt_2: "An international organization promoting renewable energy sources.",
    opt_3: "A group of climate activists advocating for stricter regulations.",
    opt_4:
      "A research institute studying the effects of climate change on polar regions.",
    answer: "A UN body that assesses the science related to climate change.",
    level: "HARD",
    points: 3,
    category: "CLIMATE_CHANGE",
    group: 8,
  },
  {
    question: 'What does the "3R" rule in sustainable living stand for?',
    opt_1: "Recycle, Reuse, Repair",
    opt_2: "Reduce, Reuse, Refuse",
    opt_3: "Rethink, Refuse, Refurbish",
    opt_4: "Recycle, Reuse, Rcycle",
    answer: "Recycle, Reuse, Rcycle",
    level: "EASY",
    points: 1,
    category: "SUSTAINABLE_LIVING",
    group: 9,
  },
  {
    question: "What's the main goal of environmental activism?",
    opt_1: "Raise awareness",
    opt_2: "Influence policy change",
    opt_3: "Encourage sustainable practices",
    opt_4: "All of the above",
    answer: "All of the above",
    level: "EASY",
    points: 1,
    category: "ENVIRONMENTAL_ACTIVISIM",
    group: 9,
  },
  {
    question:
      "Approximately what percentage of e-waste generated globally is recycled each year?",
    opt_1: "15 percent",
    opt_2: "30 percent",
    opt_3: "50 percent",
    opt_4: "75 percent",
    answer: "15 percent",
    level: "MEDIUM",
    points: 2,
    category: "WASTE_MANAGEMENT",
    group: 9,
  },
  {
    question: "Which city leads in sustainable waste management?",
    opt_1: "Mumbai",
    opt_2: "Delhi",
    opt_3: "Pune",
    opt_4: "Bengaluru",
    answer: "Bengaluru",
    level: "MEDIUM",
    points: 2,
    category: "SUSTAINABLE_SOLUTIONS",
    group: 9,
  },
  {
    question:
      "Which of the following statements about sustainable building practices is MOST accurate?",
    opt_1:
      "They prioritize using locally sourced materials regardless of sustainability certifications.",
    opt_2:
      "They focus solely on reducing energy consumption while neglecting water conservation.",
    opt_3:
      "They aim to create passive buildings that minimize dependence on external heating and cooling.",
    opt_4:
      "They are only relevant for large-scale commercial buildings, not individual homes.",
    answer:
      "They aim to create passive buildings that minimize dependence on external heating and cooling.",
    level: "HARD",
    points: 3,
    category: "SUSTAINABLE_LIVING",
    group: 9,
  },
  {
    question:
      "How can economic growth be balanced with environmental protection?",
    opt_1: "Prioritize rapid development now, clean up later.",
    opt_2: "Invest in renewable energy and sustainable practices.",
    opt_3: "Ignore environmental concerns for poverty reduction.",
    opt_4: "Reduce individual consumption and adopt simpler lifestyles.",
    answer: "Invest in renewable energy and sustainable practices.",
    level: "EASY",
    points: 1,
    category: "SUSTAINABLE_SOLUTIONS",
    group: 10,
  },
  {
    question: "What household item should you NEVER flush down the toilet?",
    opt_1: "Facial tissues",
    opt_2: "Toilet paper",
    opt_3: "Cooking oil",
    opt_4: "Dental floss",
    answer: " Cooking oil",
    level: "EASY",
    points: 1,
    category: "WASTE_MANAGEMENT",
    group: 10,
  },
  {
    question:
      "Which of the following is NOT a benefit of composting food scraps?",
    opt_1: "Reducing landfill waste",
    opt_2: "Creating nutrient-rich fertilizer for plants",
    opt_3: "Attracting harmful pests and rodents",
    opt_4: "Reducing greenhouse gas emissions",
    answer: "Attracting harmful pests",
    level: "MEDIUM",
    points: 2,
    category: "WASTE_MANAGEMENT",
    group: 10,
  },
  {
    question:
      "What is the term for buying local and seasonal produce to reduce environmental impact?",
    opt_1: "Ethical sourcing",
    opt_2: "Fair trade",
    opt_3: "Food miles reduction",
    opt_4: "Sustainable agriculture",
    answer: "Food miles reduction",
    level: "MEDIUM",
    points: 2,
    category: "SUSTAINABLE_LIVING",
    group: 10,
  },
  {
    question:
      "What is the difference between incineration and waste-to-energy facilities?",
    opt_1:
      "Incineration simply burns waste, while waste-to-energy recovers energy from the burning process.",
    opt_2:
      "Waste-to-energy facilities are less efficient than incineration at burning waste.",
    opt_3:
      "Both methods have similar environmental impacts, and neither is preferable for waste management.",
    opt_4:
      "Incineration is illegal in most countries, while waste-to-energy is widely promoted.",
    answer:
      "Incineration simply burns waste, while waste-to-energy recovers energy from the burning process.",
    level: "HARD",
    points: 3,
    category: "WASTE_MANAGEMENT",
    group: 10,
  },
];
