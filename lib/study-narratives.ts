export type StudyNarrative={key:string;kicker:string;title:string;subtitle:string;date:string;hero:string;heroAlt:string;briefTitle:string;brief:string[];metrics:{value:string;label:string}[];partners?:{title:string;text:string;focus:string}[];analysisTitle:string;analysisIntro:string;layers:{title:string;label:string;headline:string;text:string;response:string;image:string;alt:string}[];choicesTitle:string;choicesIntro:string;choices:{title:string;headline:string;text:string;points:string[];tradeoff:string;image:string}[];resolution:string;planTitle:string;plan:string;planAlt:string;features:{title:string;x:number;y:number;category:string;text:string;points:string[]}[];livingTitle:string;scenes:{title:string;label:string;image:string;alt:string;text:string;details:{title:string;text:string}[]}[];plantTitle:string;plantIntro:string;communities:{title:string;text:string;care:string}[];plants:{name:string;latin:string;role:string;light:string;soil:string;community:string;height?:string;bloom?:string;page?:number}[];neighbors?:{from:string;to:string;why:string}[];careTitle:string;careIntro:string;care:{title:string;text:string}[];colophon:string};
export const studyNarratives:Record<string,StudyNarrative>={
  "sandplan-meadow-and-landscape": {
    "key": "sandplan",
    "kicker": "SANDPLAN MEADOW AND LANDSCAPE / RESIDENTIAL LANDSCAPE",
    "title": "Sandplan Meadow and Landscape",
    "subtitle": "A home landscape for shade, play, food, and a lifetime of everyday use.",
    "date": "Fall 2025",
    "hero": "/studies/sandplan/illustration.webp",
    "heroAlt": "Illustrated Sandplan Meadow and Landscape landscape with interconnected gardens, paths, and meadow",
    "briefTitle": "Make room for a fuller outdoor life.",
    "brief": [
      "The residence sits on a gently sloping, sandy terrace in Southampton. An open yard, a small deck, and scattered mature trees offer space and possibility—but limited shade, loose circulation, and dry soils make parts of the property difficult to enjoy.",
      "Our design begins with the rhythms of the household: morning coffee, gardening, time with grandchildren, and gathering outdoors. The clients plan to age in place. Comfortable routes, shaded places to sit, and easier access to water are as important as the planting itself.",
      "We bring these needs together through a connected landscape of rain gardens, productive beds, natural play, and sandplain meadow. The design works with the site’s lean soils and existing vegetation to create a place that can become richer over time."
    ],
    "metrics": [
      {
        "value": "0.95",
        "label": "acre residential property"
      },
      {
        "value": "5.4",
        "label": "average soil pH recorded"
      },
      {
        "value": "6",
        "label": "distinct planting palettes"
      },
      {
        "value": "2025",
        "label": "landscape design"
      }
    ],
    "analysisTitle": "The site sets the terms.",
    "analysisIntro": "Move through the analysis to see how existing conditions become design decisions.",
    "layers": [
      {
        "title": "Everyday use",
        "label": "CIRCULATION & ACCESS",
        "headline": "A yard with destinations, but few connections.",
        "text": "Movement follows patches of lawn between the kitchen deck, vegetable garden, planting beds, and play areas. Narrow deck steps and an informal front entrance limit comfortable access. Existing shade pulls seating to the western edge, away from the main play spaces.",
        "response": "Create a firm primary circulation loop, improve entry, and place shaded gathering where family activities remain visible.",
        "image": "/studies/sandplan/circulation.webp",
        "alt": "Everyday use — project analysis drawing"
      },
      {
        "title": "Soil + water",
        "label": "GEOLOGY & HYDROLOGY",
        "headline": "A landscape shaped by sand.",
        "text": "Glacial sand and gravel form the terrace beneath the property. Field observations found rapid infiltration, while soil testing recorded acidic conditions and a jar test indicated roughly 85–90% sand. Water moves readily through this ground; the design also considers its relationship to the Barnes Aquifer.",
        "response": "Keep meadow soils lean. Concentrate compost and moisture-retaining amendments in productive and ornamental beds, and direct roof water toward rain barrels and planted basins.",
        "image": "/studies/sandplan/soil.webp",
        "alt": "Soil + water — project analysis drawing"
      },
      {
        "title": "Sun + shade",
        "label": "MICROCLIMATE",
        "headline": "Comfort changes through the day.",
        "text": "The broad backyard receives strong sun and wind. Mature western pines provide the most useful shade, while the deck becomes too exposed as the day warms. Roof-mounted solar panels and food gardens depend on retained sunlight.",
        "response": "Place shade where people gather without losing productive sun. A pergola, selected tree communities, and a meadow shelter distribute comfortable places through the yard.",
        "image": "/studies/sandplan/sun.webp",
        "alt": "Sun + shade — project analysis drawing"
      },
      {
        "title": "Living ground",
        "label": "EXISTING VEGETATION",
        "headline": "The meadow has already begun.",
        "text": "The clients have stopped mowing the far southern part of the yard. Purple lovegrass and other low-growing plants are beginning to establish around mown paths. Mature trees, new fruit and nut trees, and the vegetable garden give the design a valuable starting structure.",
        "response": "Retain productive and established planting, reinforce the meadow matrix, and connect new gardens to the vegetation already growing.",
        "image": "/studies/sandplan/vegetation.webp",
        "alt": "Living ground — project analysis drawing"
      },
      {
        "title": "Habitat",
        "label": "REGIONAL ECOLOGY",
        "headline": "Think in plant communities.",
        "text": "The regional sandplain landscape offers a model for planting adapted to dry, acidic, nutrient-poor ground. Open grassland, low shrubs, and pitch pine–scrub oak communities provide different kinds of structure and habitat.",
        "response": "Use related communities across the yard: a sunny sandplain meadow, shade-tolerant front meadow, and a pitch pine–scrub oak gathering grove.",
        "image": "/studies/sandplan/habitat.webp",
        "alt": "Nearby sandplain habitat — regional planting reference"
      }
    ],
    "choicesTitle": "Three ways to inhabit the same ground.",
    "choicesIntro": "We tested privacy, plant communities, and food production as different organizing ideas before bringing the strongest relationships into the final plan.",
    "choices": [
      {
        "title": "Secret Garden",
        "headline": "An intimate front garden.",
        "text": "A sheltered courtyard makes the front yard a place to spend time. A colorful meadow and orchard-framed clearing create more private destinations beyond the house.",
        "points": [
          "A walled front gathering space",
          "An accessible front-door route",
          "Rain gardens, natural play, and a small treehouse"
        ],
        "tradeoff": "More enclosure and a stylized meadow bring a moderate level of ongoing care.",
        "image": "/studies/sandplan/concept-1.webp"
      },
      {
        "title": "Plant Communities",
        "headline": "Let ecology organize the outdoor rooms.",
        "text": "A pitch pine–scrub oak grove provides shade around gathering. Firm paths link the house, garden, and an expansive native meadow.",
        "points": [
          "A shaded play area beside the house",
          "Covered deck, paver patio, and rear ramp",
          "Mown meadow paths and a wildlife-viewing shelter"
        ],
        "tradeoff": "A strong habitat framework pairs with a comparatively low-maintenance landscape.",
        "image": "/studies/sandplan/concept-2.webp"
      },
      {
        "title": "Food Forest",
        "headline": "A productive central spine.",
        "text": "An accessible path connects raised beds, a shaded orchard gathering area, and a distant treehouse. Food production becomes the main spatial language.",
        "points": [
          "Table-height planting beds",
          "Covered patio, deck, and rear ramp",
          "Orchard shade and cold frames near the house"
        ],
        "tradeoff": "Greater food production brings more intensive seasonal gardening and maintenance.",
        "image": "/studies/sandplan/concept-3.webp"
      }
    ],
    "resolution": "The final design combines the ecological structure of plant communities with a clear arrival, accessible daily routes, productive planting, and a range of sunny and shaded play spaces.",
    "planTitle": "A connected landscape, close to home.",
    "plan": "/studies/sandplan/plan.webp",
    "planAlt": "Sandplan Meadow and Landscape final landscape plan with selectable design destinations",
    "features": [
      {
        "title": "Arrival garden",
        "x": 33,
        "y": 40,
        "category": "FRONT YARD",
        "text": "A formal stone approach and layered planting give guests a clear route from driveway to porch. The front lawn becomes a meadow courtyard with seating between dogwoods.",
        "points": [
          "Goshen stone landing and steps",
          "Foundation planting that continues around the house",
          "Road screening creates a more private garden room"
        ]
      },
      {
        "title": "Rain gardens + play",
        "x": 32,
        "y": 48,
        "category": "WEST YARD",
        "text": "A pair of planted rain gardens shapes a shady area for exploration. Small bridges carry the path across swales; stones and a deeper streambed-like play feature bring water into the experience.",
        "points": [
          "Keep circulation continuous across drainage features",
          "Place play in the coolest part of the yard",
          "Match basin, slope, and berm planting to moisture"
        ]
      },
      {
        "title": "Deck + gathering",
        "x": 49,
        "y": 40,
        "category": "BACK OF HOUSE",
        "text": "An expanded kitchen deck, pergola, stone patio, and ramp make a more generous threshold between house and garden.",
        "points": [
          "Proposed deck expands from 12 × 12 feet to 30 × 12 feet",
          "Pergola shade extends the hours of comfortable use",
          "Cold frames and cutting beds stay close to daily routes"
        ]
      },
      {
        "title": "Productive garden",
        "x": 58,
        "y": 57,
        "category": "CENTRAL YARD",
        "text": "The existing vegetable garden remains in the sunniest area, close to the main path. Huckleberries, cutting beds, cold frames, fruit, and nut trees extend the productive landscape.",
        "points": [
          "Retain the established vegetable garden",
          "Keep water and garden access practical",
          "Place productive uses within the circulation loop"
        ]
      },
      {
        "title": "Sandplain meadow",
        "x": 68,
        "y": 73,
        "category": "SOUTH YARD",
        "text": "A meadow of dry-site grasses, flowering plants, and low shrubs replaces the expectation of a uniform lawn. Mown paths lead between fruit trees, play, and places to pause.",
        "points": [
          "Build on the purple lovegrass already present",
          "Use species suited to lean sandy ground",
          "Let mowing and selective editing guide the meadow"
        ]
      },
      {
        "title": "Meadow refuge",
        "x": 77,
        "y": 61,
        "category": "SHADE & NATURAL PLAY",
        "text": "A triangular shade structure creates a quiet gathering place with views over the meadow. A spiral play mound and a pruned interior in the forsythia hedge offer different kinds of exploration.",
        "points": [
          "Shade cloth oriented for the hottest part of the day",
          "Boulders, logs, and herbs shape the play mound",
          "A choice of open and enclosed places for play"
        ]
      }
    ],
    "livingTitle": "Small places. A more usable whole.",
    "scenes": [
      {
        "title": "A generous threshold.",
        "label": "DECK / PERGOLA / ACCESS",
        "image": "/studies/sandplan/deck.webp",
        "alt": "A generous threshold. — project design illustration",
        "text": "The kitchen door becomes the start of an outdoor room. More deck space, overhead shade, stone transitions, and a ramp connect everyday life inside with the garden beyond.",
        "details": [
          {
            "title": "A place for all-day use",
            "text": "Pergola slats shade the expanded deck and adjacent stone steps and patio, allowing the space to be used through the sunniest part of the day."
          },
          {
            "title": "Firm paths, flexible edges",
            "text": "Primary paths use compacted dense-grade material with defined edges. Secondary meadow paths remain mown, allowing their position and frequency of care to adapt."
          },
          {
            "title": "A considered ground assembly",
            "text": "The path concept layers a compacted subgrade, separation fabric, crushed-stone base, and a compacted surface. Material transitions and grades need to be resolved as the design moves toward construction."
          }
        ]
      },
      {
        "title": "Follow the water.",
        "label": "ROOF / SWALE / RAIN GARDEN",
        "image": "/studies/sandplan/rain-garden.webp",
        "alt": "Follow the water. — project design illustration",
        "text": "Roof water is part of the garden’s structure. Rain barrels support watering; overflows and downspouts feed planted features that carry water away from the house before it enters the ground.",
        "details": [
          {
            "title": "Plant by moisture",
            "text": "Wetter basins, transitional slopes, and dry upper berms each receive a different palette. Blue flag iris and fox sedge occupy wetter positions; butterfly weed and little bluestem belong higher on the dry edges."
          },
          {
            "title": "Cross without interruption",
            "text": "Small bridges connect the primary paths across west-side swales. Stone-lined low points slow flow and give the water features a clear form."
          },
          {
            "title": "Make room for exploration",
            "text": "A shaded play area sits between rain gardens. A deeper dry streambed, steppers, and access to a ponded area turn changing water conditions into a landscape experience."
          }
        ]
      },
      {
        "title": "A destination in the meadow.",
        "label": "SHADE / VIEW / PLAY",
        "image": "/studies/sandplan/shelter.webp",
        "alt": "A destination in the meadow. — project design illustration",
        "text": "The meadow is a place to enter and inhabit. A small shelter creates an outdoor room without closing off the surrounding habitat.",
        "details": [
          {
            "title": "Gather in the shade",
            "text": "The triangular cloth canopy fits the meadow corner and shelters seating for a small group. Its position supports wildlife observation and views toward nearby play."
          },
          {
            "title": "Play with natural form",
            "text": "A terraced spiral uses boulders, logs, and planted earth to invite climbing and exploration. A separate sundial area takes advantage of the sun."
          },
          {
            "title": "Work with what is there",
            "text": "Pruning opens a sheltered interior within the existing forsythia hedge, while maintenance also controls its outward spread."
          }
        ]
      }
    ],
    "plantTitle": "One site. Six planting responses.",
    "plantIntro": "We choose plant communities for the conditions they will occupy. Meadow ground stays lean; garden beds receive targeted soil care. Native plants provide the framework, with selected garden species adding structure and seasonal character.",
    "communities": [
      {
        "title": "Rain gardens",
        "text": "A wet-to-dry sequence runs from basin to slope to berm. Each plant occupies the hydrologic position that suits it.",
        "care": "Care focus: establish cover and keep water routes clear."
      },
      {
        "title": "Entry + foundation",
        "text": "Sweetfern, small shrubs, dogwoods, and perennials create continuity as planting wraps from shade into sun.",
        "care": "Care focus: targeted compost, mulch, and selective editing."
      },
      {
        "title": "Front meadow",
        "text": "Shade-tolerant grasses and flowering plants soften the front courtyard around clear paths and seating.",
        "care": "Care focus: allow seed set, then mow selectively for height and structure."
      },
      {
        "title": "Screen planting",
        "text": "Broadleaf evergreens, transplanted false cypress, shrubs, and groundcovers make the road edge more private.",
        "care": "Care focus: moisture-retentive soil and layered plant structure."
      },
      {
        "title": "South yard",
        "text": "Pitch pine, scrub oak, low shrubs, and groundcovers create a regional plant community around gathering.",
        "care": "Care focus: protect the developing canopy and retain a usable understory."
      },
      {
        "title": "Sandplain meadow",
        "text": "Dry-site grasses, flowering forbs, and low shrubs make use of the soil already present.",
        "care": "Care focus: seasonal mowing, clear paths, and selective woody management."
      }
    ],
    "plants": [
      {
        "name": "Common sneezeweed",
        "latin": "Helenium autumnale",
        "role": "Late-season nectar source",
        "light": "Full sun",
        "soil": "Moist–wet",
        "community": "Rain gardens",
        "height": "3–5",
        "bloom": "",
        "page": 15
      },
      {
        "name": "Blue flag iris",
        "latin": "Iris versicolor",
        "role": "Ideal basin perennial",
        "light": "Sun–part sun",
        "soil": "Wet–moist",
        "community": "Rain gardens",
        "height": "2–3",
        "bloom": "",
        "page": 15
      },
      {
        "name": "Great blue lobelia",
        "latin": "Lobelia siphilitica",
        "role": "Blue summer flowers for wetter areas",
        "light": "Sun–part shade",
        "soil": "Moist–wet",
        "community": "Rain gardens",
        "height": "2–4",
        "bloom": "",
        "page": 15
      },
      {
        "name": "Dwarf cutleaf coneflower",
        "latin": "Rudbeckia laciniata var. humilis",
        "role": "Compact wetland coneflower",
        "light": "Full sun–part sun",
        "soil": "Moist–wet",
        "community": "Rain gardens",
        "height": "3–5",
        "bloom": "",
        "page": 15
      },
      {
        "name": "Purple-stem aster",
        "latin": "Symphyotrichum puniceum",
        "role": "Tall wet aster for basin edges",
        "light": "Full sun–part shade",
        "soil": "Moist–wet",
        "community": "Rain gardens",
        "height": "3–6",
        "bloom": "",
        "page": 15
      },
      {
        "name": "Fox sedge",
        "latin": "Carex vulpinoidea",
        "role": "Top sedge for wetter basin zones",
        "light": "Full sun–part sun",
        "soil": "Wet–moist",
        "community": "Rain gardens",
        "height": "2–3",
        "bloom": "",
        "page": 15
      },
      {
        "name": "Winterberry holly",
        "latin": "Ilex verticillata (dwarf forms)",
        "role": "Best shrub for wetter zones; needs male pollinator",
        "light": "Full sun–part sun",
        "soil": "Moist–wet",
        "community": "Rain gardens",
        "height": "3–6",
        "bloom": "",
        "page": 15
      },
      {
        "name": "Butterfly weed",
        "latin": "Asclepias tuberosa",
        "role": "Monarch host; thrives in dry upper areas",
        "light": "Full sun",
        "soil": "Dry, sandy",
        "community": "Rain gardens",
        "height": "1–2.5",
        "bloom": "",
        "page": 15
      },
      {
        "name": "Lanceleaf tickseed",
        "latin": "Coreopsis lanceolata",
        "role": "Bright color for upper slopes",
        "light": "Full sun",
        "soil": "Dry–mesic",
        "community": "Rain gardens",
        "height": "1–2",
        "bloom": "",
        "page": 15
      },
      {
        "name": "Wild bergamot",
        "latin": "Monarda fistulosa",
        "role": "Fragrant; drought-tolerant",
        "light": "Full sun–part sun",
        "soil": "Dry–mesic",
        "community": "Rain gardens",
        "height": "2–4",
        "bloom": "",
        "page": 15
      },
      {
        "name": "Spotted horsemint",
        "latin": "Monarda punctata",
        "role": "Sandplain species; major pollinator magnet",
        "light": "Full sun",
        "soil": "Dry–mesic",
        "community": "Rain gardens",
        "height": "1–3",
        "bloom": "",
        "page": 15
      },
      {
        "name": "Slender mountain mint",
        "latin": "Pycnanthemum tenuifolium",
        "role": "Highly attractive to pollinators",
        "light": "Full sun–part sun",
        "soil": "Dry–mesic",
        "community": "Rain gardens",
        "height": "1–3",
        "bloom": "",
        "page": 15
      },
      {
        "name": "Slender wheatgrass",
        "latin": "Elymus trachycaulus",
        "role": "Upright, slender warm- season grass",
        "light": "Full sun–part sun",
        "soil": "Dry–mesic",
        "community": "Rain gardens",
        "height": "2–4",
        "bloom": "",
        "page": 15
      },
      {
        "name": "Purple lovegrass",
        "latin": "Eragrostis spectabilis",
        "role": "Pink airy texture; pure sandplain character",
        "light": "Full sun",
        "soil": "Dry, sandy",
        "community": "Rain gardens",
        "height": "1–2",
        "bloom": "",
        "page": 15
      },
      {
        "name": "Little bluestem",
        "latin": "Schizachyrium scoparium",
        "role": "Classic sandplain warming grass",
        "light": "Full sun",
        "soil": "Dry, sandy",
        "community": "Rain gardens",
        "height": "1–3",
        "bloom": "",
        "page": 15
      },
      {
        "name": "Prairie dropseed",
        "latin": "Sporobolus heterolepis",
        "role": "Elegant grass for dry upper slopes",
        "light": "Full sun",
        "soil": "Dry–mesic",
        "community": "Rain gardens",
        "height": "2–3",
        "bloom": "",
        "page": 15
      },
      {
        "name": "Northern bayberry",
        "latin": "Myrica pensylvanica",
        "role": "Aromatic; nitrogen-fixing; great for berms",
        "light": "Full sun–part sun",
        "soil": "Dry–mesic, sandy",
        "community": "Rain gardens",
        "height": "5–8",
        "bloom": "",
        "page": 15
      },
      {
        "name": "Carolina rose",
        "latin": "Rosa carolina",
        "role": "Low-growing native for dry edges",
        "light": "Full sun",
        "soil": "Dry–mesic",
        "community": "Rain gardens",
        "height": "2–3",
        "bloom": "",
        "page": 15
      },
      {
        "name": "Coastal Joe Pye weed",
        "latin": "Eutrochium dubium",
        "role": "Short, rain garden–sized Joe- Pye",
        "light": "Full sun–part sun",
        "soil": "Moist–mesic",
        "community": "Rain gardens",
        "height": "3–6",
        "bloom": "",
        "page": 15
      },
      {
        "name": "Foxglove beardtongue",
        "latin": "Penstemon digitalis",
        "role": "White early-season bloom",
        "light": "Full sun–part sun",
        "soil": "Mesic",
        "community": "Rain gardens",
        "height": "2–4",
        "bloom": "",
        "page": 15
      },
      {
        "name": "Blue-eyed grass",
        "latin": "Sisyrinchium angustifolium",
        "role": "Low plant with spring bloom",
        "light": "Sun–part sun",
        "soil": "Moist–mesic",
        "community": "Rain gardens",
        "height": "0.5–1",
        "bloom": "",
        "page": 15
      },
      {
        "name": "Wrinkleleaf goldenrod",
        "latin": "Solidago rugosa (dry ecotype)",
        "role": "Dry ecotype suitable for sandier soils",
        "light": "Full sun–part sun",
        "soil": "Moist–mesic",
        "community": "Rain gardens",
        "height": "2–4",
        "bloom": "",
        "page": 15
      },
      {
        "name": "Golden alexander",
        "latin": "Zizia aurea",
        "role": "Early-season umbel; swallowtail host",
        "light": "Sun–part sun",
        "soil": "Moist–mesic",
        "community": "Rain gardens",
        "height": "1.5–3",
        "bloom": "",
        "page": 15
      },
      {
        "name": "Broom sedge",
        "latin": "Carex scoparia",
        "role": "Fine-textured sedge for mid–wet zones",
        "light": "Full sun",
        "soil": "Moist–mesic",
        "community": "Rain gardens",
        "height": "1–3",
        "bloom": "",
        "page": 15
      },
      {
        "name": "Virginia wild rye",
        "latin": "Elymus virginicus",
        "role": "Cool-season grass; early structure",
        "light": "Sun–part shade",
        "soil": "Mesic–wet",
        "community": "Rain gardens",
        "height": "2–4",
        "bloom": "",
        "page": 15
      },
      {
        "name": "Path rush",
        "latin": "Juncus tenuis",
        "role": "Highly adaptable stabilizer",
        "light": "Full sun–part shade",
        "soil": "Moist–dry",
        "community": "Rain gardens",
        "height": "1–2",
        "bloom": "",
        "page": 15
      },
      {
        "name": "Black chokeberry",
        "latin": "Aronia melanocarpa",
        "role": "Excellent rain garden shrub; berries + fall color",
        "light": "Full sun–part sun",
        "soil": "Dry–mesic, sandy, tolerates wet",
        "community": "Rain gardens",
        "height": "3–6",
        "bloom": "",
        "page": 15
      },
      {
        "name": "Purple chokeberry",
        "latin": "Aronia prunifolia",
        "role": "Taller shrub for back / mid slopes",
        "light": "Full sun–part sun",
        "soil": "Dry–mesic",
        "community": "Rain gardens",
        "height": "6–10",
        "bloom": "",
        "page": 15
      },
      {
        "name": "Summersweet",
        "latin": "Clethra alnifolia (compact forms)",
        "role": "Fragrant blooms, strong pollinator value",
        "light": "Part sun–shade",
        "soil": "Moist–mesic",
        "community": "Rain gardens",
        "height": "3–4",
        "bloom": "",
        "page": 15
      },
      {
        "name": "Black chokeberry (compact)",
        "latin": "Aronia melanocarpa 'Low Scape Mound'",
        "role": "Spring bloom + berries",
        "light": "Sun–part shade",
        "soil": "Dry–mesic",
        "community": "Entry + foundation",
        "height": "1.5–2",
        "bloom": "",
        "page": 16
      },
      {
        "name": "New Jersey tea",
        "latin": "Ceanothus americanus",
        "role": "Fragrant bloom; compact entry shrub",
        "light": "Part sun",
        "soil": "Dry–mesic, sandy",
        "community": "Entry + foundation",
        "height": "2–4",
        "bloom": "",
        "page": 16
      },
      {
        "name": "Sweet Fern",
        "latin": "Comptonia peregrina",
        "role": "Aromatic; softens entry edges",
        "light": "Sun–part shade",
        "soil": "Dry, sandy, acidic",
        "community": "Entry + foundation",
        "height": "2–4",
        "bloom": "",
        "page": 16
      },
      {
        "name": "Pagoda Dogwood",
        "latin": "Cornus alternifolia",
        "role": "Small Accent Tree",
        "light": "Sun–part shade",
        "soil": "Moist–mesic",
        "community": "Entry + foundation",
        "height": "15-25",
        "bloom": "",
        "page": 16
      },
      {
        "name": "Flowering Dogwood",
        "latin": "Cornus x 'Rutcan'",
        "role": "Spring flowers, columnar form",
        "light": "Sun–part sun",
        "soil": "Moist–mesic",
        "community": "Entry + foundation",
        "height": "15 - 25",
        "bloom": "",
        "page": 16
      },
      {
        "name": "Dwarf sweetspire",
        "latin": "Itea virginica 'Little Henry'",
        "role": "Fragrance + fall color",
        "light": "Part shade",
        "soil": "Moist–mesic",
        "community": "Entry + foundation",
        "height": "2–3",
        "bloom": "",
        "page": 16
      },
      {
        "name": "Hairy beardtongue",
        "latin": "Penstemon hirsutus",
        "role": "Early-season bloom",
        "light": "Part shade",
        "soil": "Dry–mesic",
        "community": "Entry + foundation",
        "height": "1–2",
        "bloom": "",
        "page": 16
      },
      {
        "name": "Hoary mountain mint",
        "latin": "Pycnanthemum incanum",
        "role": "Silvery foliage, strong pollinator value",
        "light": "Part sun",
        "soil": "Dry–mesic",
        "community": "Entry + foundation",
        "height": "2–3",
        "bloom": "",
        "page": 16
      },
      {
        "name": "Ohio spiderwort",
        "latin": "Tradescantia ohiensis",
        "role": "Early bloom, vertical accents",
        "light": "Part shade",
        "soil": "Mesic",
        "community": "Entry + foundation",
        "height": "1.5–3",
        "bloom": "",
        "page": 16
      },
      {
        "name": "Serviceberry",
        "latin": "Amelanchier canadensis",
        "role": "Spring bloom, berries, fall color",
        "light": "Part shade",
        "soil": "Mesic–well drained",
        "community": "Entry + foundation",
        "height": "6–12",
        "bloom": "",
        "page": 16
      },
      {
        "name": "Appalachian sedge",
        "latin": "Carex appalachica",
        "role": "Elegant arching sedge for low shade",
        "light": "Shade–part shade",
        "soil": "Dry, acidic soils",
        "community": "Entry + foundation",
        "height": "0.75–1",
        "bloom": "",
        "page": 16
      },
      {
        "name": "Pennsylvania sedge",
        "latin": "Carex pensylvanica",
        "role": "Soft-textured sedge for low unifying layer",
        "light": "Shade–part shade",
        "soil": "Dry–mesic",
        "community": "Entry + foundation",
        "height": "0.5–1",
        "bloom": "",
        "page": 16
      },
      {
        "name": "Wintergreen",
        "latin": "Gaultheria procumbens",
        "role": "Evergreen carpet with berries",
        "light": "Shade–part shade",
        "soil": "Acidic woodland soils",
        "community": "Entry + foundation",
        "height": "0.1–0.4",
        "bloom": "",
        "page": 16
      },
      {
        "name": "Black huckleberry",
        "latin": "Gaylussacia baccata",
        "role": "Shade-tolerant, berries",
        "light": "Part shade",
        "soil": "Dry–mesic, acidic",
        "community": "Entry + foundation",
        "height": "1–3",
        "bloom": "",
        "page": 16
      },
      {
        "name": "Barren strawberry",
        "latin": "Geum fragarioides",
        "role": "Semi-evergreen, yellow spring flowers; great foundation edge plant",
        "light": "Part shade",
        "soil": "Dry–mesic",
        "community": "Entry + foundation",
        "height": "0.1–0.3",
        "bloom": "",
        "page": 16
      },
      {
        "name": "Sheep laurel",
        "latin": "Kalmia angustifolia",
        "role": "Compact evergreen form",
        "light": "Sun–part shade",
        "soil": "Dry, acidic",
        "community": "Entry + foundation",
        "height": "1–3",
        "bloom": "",
        "page": 16
      },
      {
        "name": "Mountain laurel",
        "latin": "Kalmia latifolia",
        "role": "Evergreen; blooms in shade",
        "light": "Part shade",
        "soil": "Moist–mesic, acidic",
        "community": "Entry + foundation",
        "height": "6–10",
        "bloom": "",
        "page": 16
      },
      {
        "name": "Partridgeberry",
        "latin": "Mitchella repens",
        "role": "Evergreen matting groundcover; red berries",
        "light": "Shade–part shade",
        "soil": "Moist–mesic, acidic",
        "community": "Entry + foundation",
        "height": "0.1–0.2",
        "bloom": "",
        "page": 16
      },
      {
        "name": "Catawba rhododendron",
        "latin": "Rhododendron catawbiense",
        "role": "Large evergreen structure",
        "light": "Part shade",
        "soil": "Moist, acidic",
        "community": "Entry + foundation",
        "height": "6–10",
        "bloom": "",
        "page": 16
      },
      {
        "name": "Swamp azalea",
        "latin": "Rhododendron viscosum",
        "role": "Fragrant midsummer bloom",
        "light": "Part shade",
        "soil": "Moist–mesic",
        "community": "Entry + foundation",
        "height": "3–5",
        "bloom": "",
        "page": 16
      },
      {
        "name": "Zigzag goldenrod",
        "latin": "Solidago flexicaulis",
        "role": "Low Forb Layer",
        "light": "Shade–part shade",
        "soil": "Mesic",
        "community": "Entry + foundation",
        "height": "1–3",
        "bloom": "",
        "page": 16
      },
      {
        "name": "Lowbush blueberry",
        "latin": "Vaccinium angustifolium",
        "role": "NLOowRT-fHo rCmARinOgL eINdAib EleX nTEaNtivSeION GARDENER PLANT TOOLBOX",
        "light": "Sun–part shade",
        "soil": "Acidic, well-drained",
        "community": "Entry + foundation",
        "height": "0.5–2",
        "bloom": "",
        "page": 16
      },
      {
        "name": "Blackhaw viburnum",
        "latin": "Viburnum prunifolium",
        "role": "Trainable as a small tree; excellent bloom + berries",
        "light": "Part shade–shade",
        "soil": "Dry–mesic, adaptable",
        "community": "Entry + foundation",
        "height": "10–15",
        "bloom": "",
        "page": 16
      },
      {
        "name": "Pennsylvania sedge",
        "latin": "Carex pensylvanica",
        "role": "Important early-season forage",
        "light": "Part sun–shade",
        "soil": "Dry, acidic",
        "community": "Front meadow",
        "height": "0.5–1",
        "bloom": "",
        "page": 17
      },
      {
        "name": "Partridge pea",
        "latin": "Chamaecrista fasciculata",
        "role": "Annual legume; fixes nitrogen; seed mix 7%",
        "light": "Full sun–part sun",
        "soil": "Dry, sandy or gravelly",
        "community": "Front meadow",
        "height": "1–3",
        "bloom": "",
        "page": 17
      },
      {
        "name": "Northern sea oats",
        "latin": "Chasmanthium latifolium",
        "role": "Graceful nodding seedheads; good in bright shade; seed mix 3%",
        "light": "Part sun–light shade",
        "soil": "Mesic, loamy to sandy",
        "community": "Front meadow",
        "height": "2–4",
        "bloom": "",
        "page": 17
      },
      {
        "name": "Lanceleaf tickseed",
        "latin": "Coreopsis lanceolata",
        "role": "Early summer bloom; supports pollinators; seed mix 6%",
        "light": "Full sun–part sun",
        "soil": "Dry, sandy or gravelly",
        "community": "Front meadow",
        "height": "1–2",
        "bloom": "",
        "page": 17
      },
      {
        "name": "Common hairgrass",
        "latin": "Deschampsia flexuosa",
        "role": "Seeds feed small birds",
        "light": "Full sun–part sun",
        "soil": "Acidic, sandy",
        "community": "Front meadow",
        "height": "1–2",
        "bloom": "",
        "page": 17
      },
      {
        "name": "Purple coneflower",
        "latin": "Echinacea purpurea",
        "role": "Seeds for birds; good in light shade; seed mix 3%",
        "light": "Full sun–part sun",
        "soil": "Mesic, well- drained",
        "community": "Front meadow",
        "height": "2–4",
        "bloom": "",
        "page": 17
      },
      {
        "name": "Virginia wild-rye",
        "latin": "Elymus virginicus",
        "role": "Cool-season grass; good for shaded meadows; seed mix 20%",
        "light": "Part sun–shade",
        "soil": "Mesic, sandy- loam",
        "community": "Front meadow",
        "height": "2–4",
        "bloom": "",
        "page": 17
      },
      {
        "name": "Spotted horsemint",
        "latin": "Monarda punctata",
        "role": "Excellent for native bees and wasps; seed mix 6%",
        "light": "Full sun–part sun",
        "soil": "Dry, sandy",
        "community": "Front meadow",
        "height": "1–3",
        "bloom": "",
        "page": 17
      },
      {
        "name": "Hairy beardtongue",
        "latin": "Penstemon hirsutus",
        "role": "Early-season nectar, tolerates light shade; seed mix 10%",
        "light": "Full sun–part sun",
        "soil": "Dry–mesic, well-drained",
        "community": "Front meadow",
        "height": "1–2",
        "bloom": "",
        "page": 17
      },
      {
        "name": "Bracken fern",
        "latin": "Pteridium aquilinum",
        "role": "Provides ground cover; thrives post-fire",
        "light": "Full sun–part sun",
        "soil": "Dry, acidic",
        "community": "Front meadow",
        "height": "1–4",
        "bloom": "",
        "page": 17
      },
      {
        "name": "Hoary mountain mint",
        "latin": "Pycnanthemum incanum",
        "role": "Intense pollinator plant; does well at woodland edge; seed mix 2%",
        "light": "Full sun–part sun",
        "soil": "Dry–mesic, rocky or sandy",
        "community": "Front meadow",
        "height": "2–3",
        "bloom": "",
        "page": 17
      },
      {
        "name": "Slender mountain mint",
        "latin": "Pycnanthemum tenuifolium",
        "role": "Top-tier pollinator species; seed mix 2%",
        "light": "Full sun–part sun",
        "soil": "Dry–mesic, well-drained",
        "community": "Front meadow",
        "height": "1–3",
        "bloom": "",
        "page": 17
      },
      {
        "name": "Orange coneflower",
        "latin": "Rudbeckia fulgida",
        "role": "Long-blooming, handles light shade; seed mix 3%",
        "light": "Full sun–part sun",
        "soil": "Mesic, well- drained",
        "community": "Front meadow",
        "height": "1.5–3",
        "bloom": "",
        "page": 17
      },
      {
        "name": "Black-eyed Susan",
        "latin": "Rudbeckia hirta",
        "role": "Early successional, short-lived; seed mix 2%",
        "light": "Full sun–part sun",
        "soil": "Dry–mesic",
        "community": "Front meadow",
        "height": "1–3",
        "bloom": "",
        "page": 17
      },
      {
        "name": "Gray goldenrod",
        "latin": "Solidago nemoralis",
        "role": "Late-season nectar; seed mix 2%",
        "light": "Full sun–part sun",
        "soil": "Dry, sandy or rocky",
        "community": "Front meadow",
        "height": "1–3",
        "bloom": "",
        "page": 17
      },
      {
        "name": "Aromatic aster",
        "latin": "Symphyotrichum oblongifolium",
        "role": "Aromatic foliage, late nectar; seed mix 9%",
        "light": "Full sun–part sun",
        "soil": "Dry, rocky or sandy",
        "community": "Front meadow",
        "height": "1–2.5",
        "bloom": "",
        "page": 17
      },
      {
        "name": "Ohio spiderwort",
        "latin": "Tradescantia ohiensis",
        "role": "Early bloomer; good in bright shade; seed mix 8%",
        "light": "Part sun–light shade",
        "soil": "Mesic, well- drained",
        "community": "Front meadow",
        "height": "1.5–3",
        "bloom": "",
        "page": 17
      },
      {
        "name": "Purpletop",
        "latin": "Tridens flavus",
        "role": "Tall warm-season grass; adds height; seed mix 10%",
        "light": "Full sun–part sun",
        "soil": "Dry–mesic, well-drained",
        "community": "Front meadow",
        "height": "2–4",
        "bloom": "",
        "page": 17
      },
      {
        "name": "Golden Alexander",
        "latin": "Zizia aurea",
        "role": "Early umbel; swallowtail host; seed mix 7%",
        "light": "Part sun–light shade",
        "soil": "Moist–mesic, loamy",
        "community": "Front meadow",
        "height": "1.5–3",
        "bloom": "",
        "page": 17
      },
      {
        "name": "Black Chokeberry",
        "latin": "Aronia melanocarpa",
        "role": "Dense screening and wildlife value",
        "light": "Sun–part shade",
        "soil": "Semi-drought tolerant",
        "community": "Screen planting",
        "height": "4-8",
        "bloom": "",
        "page": 18
      },
      {
        "name": "Possumhaw Viburnum",
        "latin": "Viburnum nudum",
        "role": "Seasonal interest + screening",
        "light": "Sun–part shade",
        "soil": "Medium moisture",
        "community": "Screen planting",
        "height": "4-8",
        "bloom": "",
        "page": 18
      },
      {
        "name": "Catawba Rhododendron",
        "latin": "Rhododendron catawbiense",
        "role": "Primary tall evergreen screen",
        "light": "Part shade",
        "soil": "Moist–well drained",
        "community": "Screen planting",
        "height": "6-10",
        "bloom": "",
        "page": 18
      },
      {
        "name": "Mountain Laurel",
        "latin": "Kalmia latifolia",
        "role": "Native evergreen backbone",
        "light": "Part shade",
        "soil": "Semi-drought tolerant",
        "community": "Screen planting",
        "height": "6-10",
        "bloom": "",
        "page": 18
      },
      {
        "name": "Red Chokeberry",
        "latin": "Aronia arbutifolia",
        "role": "Tall, narrow deciduous filler",
        "light": "Sun–part shade",
        "soil": "Semi-drought tolerant",
        "community": "Screen planting",
        "height": "6-10",
        "bloom": "",
        "page": 18
      },
      {
        "name": "Gold Thread False Cypress",
        "latin": "Chamaecyparis pisifera 'Gold Thread'",
        "role": "Accent evergreen + color, transplanted from foundation bed",
        "light": "Part shade",
        "soil": "Semi-drought tolerant",
        "community": "Screen planting",
        "height": "5-10",
        "bloom": "",
        "page": 18
      },
      {
        "name": "Pennsylvania Sedge",
        "latin": "Carex pensylvanica",
        "role": "Groundcover + slope stability",
        "light": "Part shade",
        "soil": "Dry–medium",
        "community": "Screen planting",
        "height": ".5-1",
        "bloom": "",
        "page": 18
      },
      {
        "name": "Foamflower",
        "latin": "Tiarella cordifolia",
        "role": "Woodland groundcover",
        "light": "Part shade",
        "soil": "Medium",
        "community": "Screen planting",
        "height": ".75-1",
        "bloom": "",
        "page": 18
      },
      {
        "name": "Golden Ragwort",
        "latin": "Packera aurea",
        "role": "Semi-evergreen + soil binding",
        "light": "Part shade",
        "soil": "Medium",
        "community": "Screen planting",
        "height": "1-1.5",
        "bloom": "",
        "page": 18
      },
      {
        "name": "Alumroot",
        "latin": "Heuchera americana",
        "role": "Foliage interest",
        "light": "Part shade",
        "soil": "Dry–medium",
        "community": "Screen planting",
        "height": "1-1.5",
        "bloom": "",
        "page": 18
      },
      {
        "name": "Wild Geranium",
        "latin": "Geranium maculatum",
        "role": "Spring bloom, soft texture",
        "light": "Part shade",
        "soil": "Medium",
        "community": "Screen planting",
        "height": "1-1.5",
        "bloom": "",
        "page": 18
      },
      {
        "name": "Christmas Fern",
        "latin": "Polystichum acrostichoides",
        "role": "Evergreen, stabilizes slope",
        "light": "Part shade",
        "soil": "Medium",
        "community": "Screen planting",
        "height": "1'-2",
        "bloom": "",
        "page": 18
      },
      {
        "name": "Dwarf Ninebark",
        "latin": "Physocarpus opulifolius 'Nanus'",
        "role": "Color contrast foliage",
        "light": "Sun–part shade",
        "soil": "Dry–medium",
        "community": "Screen planting",
        "height": "2-4",
        "bloom": "",
        "page": 18
      },
      {
        "name": "Bush Honeysuckle",
        "latin": "Diervilla lonicera",
        "role": "Sloped-berm stabilizer; tough",
        "light": "Part shade",
        "soil": "Dry–medium",
        "community": "Screen planting",
        "height": "2-4",
        "bloom": "",
        "page": 18
      },
      {
        "name": "Drooping Leucothoe",
        "latin": "Leucothoe fontanesiana",
        "role": "Arching evergreen filler",
        "light": "Part shade",
        "soil": "Moist–medium",
        "community": "Screen planting",
        "height": "3-5",
        "bloom": "",
        "page": 18
      },
      {
        "name": "Inkberry Holly",
        "latin": "Ilex glabra 'Shamrock'",
        "role": "Evergreen density + structure",
        "light": "Sun–part shade",
        "soil": "Semi-drought tolerant",
        "community": "Screen planting",
        "height": "3-5",
        "bloom": "",
        "page": 18
      },
      {
        "name": "Virginia Sweetspire",
        "latin": "Itea virginica 'Henry’s Garnet'",
        "role": "Fall color; spreads lightly",
        "light": "Part shade",
        "soil": "Medium moisture",
        "community": "Screen planting",
        "height": "3-5",
        "bloom": "",
        "page": 18
      },
      {
        "name": "Chionoides Rhododendron",
        "latin": "Rhododendron × chionoides",
        "role": "Lower evergreen massing",
        "light": "Part shade",
        "soil": "Moist–well drained",
        "community": "Screen planting",
        "height": "4-6",
        "bloom": "",
        "page": 18
      },
      {
        "name": "Summersweet",
        "latin": "Clethra alnifolia",
        "role": "Fragrant bloom; good filler",
        "light": "Part shade",
        "soil": "Medium moisture",
        "community": "Screen planting",
        "height": "3-6",
        "bloom": "",
        "page": 18
      },
      {
        "name": "Mapleleaf Viburnum",
        "latin": "Viburnum acerifolium",
        "role": "Woodland texture",
        "light": "Shade–part shade",
        "soil": "Dry–medium",
        "community": "Screen planting",
        "height": "3-6",
        "bloom": "",
        "page": 18
      },
      {
        "name": "Black chokeberry",
        "latin": "Aronia melanocarpa",
        "role": "Excellent bird forage; adaptable",
        "light": "Full sun–part sun",
        "soil": "Acidic, sandy",
        "community": "South yard",
        "height": "3–6",
        "bloom": "",
        "page": 19
      },
      {
        "name": "Black chokeberry (compact)",
        "latin": "Aronia melanocarpa 'Low Scape Mound'",
        "role": "Spring bloom + berries",
        "light": "Sun–part shade",
        "soil": "Dry–mesic",
        "community": "South yard",
        "height": "1.5–2",
        "bloom": "",
        "page": 19
      },
      {
        "name": "Bearberry",
        "latin": "Arctostaphylos uva-ursi",
        "role": "Evergreen groundcover",
        "light": "Full sun",
        "soil": "Dry, sandy",
        "community": "South yard",
        "height": "0.5–1",
        "bloom": "",
        "page": 19
      },
      {
        "name": "Pennsylvania sedge",
        "latin": "Carex pensylvanica",
        "role": "Important early-season forage",
        "light": "Part sun–shade",
        "soil": "Dry, acidic",
        "community": "South yard",
        "height": "0.5–1",
        "bloom": "",
        "page": 19
      },
      {
        "name": "American hazelnut",
        "latin": "Corylus americana",
        "role": "Nut producer; Lepidoptera host",
        "light": "Full sun–part sun",
        "soil": "Dry–mesic, sandy",
        "community": "South yard",
        "height": "6–12",
        "bloom": "",
        "page": 19
      },
      {
        "name": "Poverty grass",
        "latin": "Danthonia spicata",
        "role": "Early successional stabilizer",
        "light": "Full sun",
        "soil": "Dry, sandy, nutrient-poor",
        "community": "South yard",
        "height": "0.5–1.5",
        "bloom": "",
        "page": 19
      },
      {
        "name": "Common hairgrass",
        "latin": "Deschampsia flexuosa",
        "role": "Seeds feed small birds",
        "light": "Full sun–part sun",
        "soil": "Acidic, sandy",
        "community": "South yard",
        "height": "1–2",
        "bloom": "",
        "page": 19
      },
      {
        "name": "Wintergreen",
        "latin": "Gaultheria procumbens",
        "role": "Evergreen groundcover; berries for wildlife",
        "light": "Part sun",
        "soil": "Acidic forest floor",
        "community": "South yard",
        "height": "0.1–0.4",
        "bloom": "",
        "page": 19
      },
      {
        "name": "Black huckleberry",
        "latin": "Gaylussacia baccata",
        "role": "Berries + specialist bee host",
        "light": "Full sun–part sun",
        "soil": "Acidic, sandy",
        "community": "South yard",
        "height": "1–3",
        "bloom": "",
        "page": 19
      },
      {
        "name": "Sheep laurel",
        "latin": "Kalmia angustifolia",
        "role": "Dense evergreen shrub; bumblebee forage",
        "light": "Full sun–part sun",
        "soil": "Very acidic",
        "community": "South yard",
        "height": "1–3",
        "bloom": "",
        "page": 19
      },
      {
        "name": "Pitch pine",
        "latin": "Pinus rigida",
        "role": "Fire-adapted; seeds feed birds & mammals",
        "light": "Full sun",
        "soil": "Very dry, sandy, acidic",
        "community": "South yard",
        "height": "20–70",
        "bloom": "",
        "page": 19
      },
      {
        "name": "Bracken fern",
        "latin": "Pteridium aquilinum",
        "role": "Provides ground cover; thrives post-fire",
        "light": "Full sun–part sun",
        "soil": "Dry, acidic",
        "community": "South yard",
        "height": "1–4",
        "bloom": "",
        "page": 19
      },
      {
        "name": "Scrub oak",
        "latin": "Quercus ilicifolia",
        "role": "Critical barrens species; resprouts after fire",
        "light": "Full sun",
        "soil": "Dry, acidic, sandy",
        "community": "South yard",
        "height": "3–15",
        "bloom": "",
        "page": 19
      },
      {
        "name": "Dwarf chestnut oak",
        "latin": "Quercus prinoides",
        "role": "Dwarf oak; thrives in poor soil",
        "light": "Full sun–part sun",
        "soil": "Dry–mesic",
        "community": "South yard",
        "height": "12-25",
        "bloom": "",
        "page": 19
      },
      {
        "name": "Sassafras",
        "latin": "Sassafras albidum",
        "role": "Host for spicebush swallowtail",
        "light": "Full sun–part sun",
        "soil": "Dry, sandy",
        "community": "South yard",
        "height": "20–40",
        "bloom": "",
        "page": 19
      },
      {
        "name": "Little bluestem",
        "latin": "Schizachyrium scoparium",
        "role": "Matrix species; supports grass skippers",
        "light": "Full sun",
        "soil": "Very dry, sandy",
        "community": "South yard",
        "height": "1–3",
        "bloom": "",
        "page": 19
      },
      {
        "name": "Lowbush blueberry",
        "latin": "Vaccinium angustifolium",
        "role": "High wildlife value (berries & nectar)",
        "light": "Full sun–part sun",
        "soil": "Acidic, sandy",
        "community": "South yard",
        "height": "0.5–2",
        "bloom": "",
        "page": 19
      },
      {
        "name": "Early low blueberry",
        "latin": "Vaccinium pallidum",
        "role": "Pollinator-rich species",
        "light": "Full sun–part sun",
        "soil": "Acidic, sandy",
        "community": "South yard",
        "height": "1–3",
        "bloom": "",
        "page": 19
      },
      {
        "name": "Butterfly weed",
        "latin": "Asclepias tuberosa",
        "role": "Monarch host; drought- adapted",
        "light": "Full sun",
        "soil": "Dry, sandy, well-drained",
        "community": "Sandplain meadow",
        "height": "1–2.5",
        "bloom": "",
        "page": 20
      },
      {
        "name": "Yellow wild indigo",
        "latin": "Baptisia tinctoria",
        "role": "Legume; host plant; meadow- compatible",
        "light": "Full sun",
        "soil": "Dry, sandy",
        "community": "Sandplain meadow",
        "height": "2–3",
        "bloom": "",
        "page": 20
      },
      {
        "name": "Pennsylvania sedge",
        "latin": "Carex pensylvanica",
        "role": "Important early-season forage",
        "light": "Part sun–shade",
        "soil": "Dry, acidic",
        "community": "Sandplain meadow",
        "height": "0.5–1",
        "bloom": "",
        "page": 20
      },
      {
        "name": "Partridge pea",
        "latin": "Chamaecrista fasciculata",
        "role": "Nitrogen-fixing; heavy pollinator draw",
        "light": "Full sun",
        "soil": "Dry, sandy",
        "community": "Sandplain meadow",
        "height": "1–3",
        "bloom": "",
        "page": 20
      },
      {
        "name": "Sweetfern",
        "latin": "Comptonia peregrina",
        "role": "Nitrogen-fixing; stabilizes sand",
        "light": "Full sun",
        "soil": "Dry, sandy, acidic",
        "community": "Sandplain meadow",
        "height": "2–4",
        "bloom": "",
        "page": 20
      },
      {
        "name": "Lanceleaf tickseed",
        "latin": "Coreopsis lanceolata",
        "role": "Early summer color; supports pollinators",
        "light": "Full sun",
        "soil": "Dry, sandy/gravelly",
        "community": "Sandplain meadow",
        "height": "1–2",
        "bloom": "",
        "page": 20
      },
      {
        "name": "Poverty grass",
        "latin": "Danthonia spicata",
        "role": "Early successional stabilizer",
        "light": "Full sun",
        "soil": "Dry, sandy, nutrient-poor",
        "community": "Sandplain meadow",
        "height": "0.5–1.5",
        "bloom": "",
        "page": 20
      },
      {
        "name": "Common hairgrass",
        "latin": "Deschampsia flexuosa",
        "role": "Seeds feed small birds",
        "light": "Full sun–part sun",
        "soil": "Acidic, sandy",
        "community": "Sandplain meadow",
        "height": "1–2",
        "bloom": "",
        "page": 20
      },
      {
        "name": "Virginia wild rye",
        "latin": "Elymus virginicus",
        "role": "Cool-season bunchgrass; early cover",
        "light": "Full sun–part sun",
        "soil": "Mesic, sandy- loam",
        "community": "Sandplain meadow",
        "height": "2–4",
        "bloom": "",
        "page": 20
      },
      {
        "name": "Purple lovegrass",
        "latin": "Eragrostis spectabilis",
        "role": "Airy texture; strong sandplain indicator",
        "light": "Full sun",
        "soil": "Dry, sandy, well-drained",
        "community": "Sandplain meadow",
        "height": "1–2",
        "bloom": "",
        "page": 20
      },
      {
        "name": "Wintergreen",
        "latin": "Gaultheria procumbens",
        "role": "Evergreen groundcover; berries for wildlife",
        "light": "Part sun",
        "soil": "Acidic forest floor",
        "community": "Sandplain meadow",
        "height": "0.1–0.4",
        "bloom": "",
        "page": 20
      },
      {
        "name": "Black huckleberry",
        "latin": "Gaylussacia baccata",
        "role": "Berries + specialist bee host",
        "light": "Full sun–part sun",
        "soil": "Acidic, sandy",
        "community": "Sandplain meadow",
        "height": "1–3",
        "bloom": "",
        "page": 20
      },
      {
        "name": "New England blazing star",
        "latin": "Liatris scariosa var. novae-angliae",
        "role": "Rare sandplain species; top nectar plant",
        "light": "Full sun",
        "soil": "Dry, sandy",
        "community": "Sandplain meadow",
        "height": "2–4",
        "bloom": "",
        "page": 20
      },
      {
        "name": "Spotted horsemint",
        "latin": "Monarda punctata",
        "role": "Excellent for native bees & wasps",
        "light": "Full sun",
        "soil": "Dry, sandy",
        "community": "Sandplain meadow",
        "height": "1–3",
        "bloom": "",
        "page": 20
      },
      {
        "name": "Foxglove beardtongue",
        "latin": "Penstemon digitalis",
        "role": "Early-season nectar",
        "light": "Full sun–part sun",
        "soil": "Mesic, well- drained",
        "community": "Sandplain meadow",
        "height": "2–4",
        "bloom": "",
        "page": 20
      },
      {
        "name": "Hairy beardtongue",
        "latin": "Penstemon hirsutus",
        "role": "Early nectar; supports pollinators",
        "light": "Full sun–part sun",
        "soil": "Dry–mesic",
        "community": "Sandplain meadow",
        "height": "1–2",
        "bloom": "",
        "page": 20
      },
      {
        "name": "Bracken fern",
        "latin": "Pteridium aquilinum",
        "role": "Provides ground cover; thrives post-fire",
        "light": "Full sun–part sun",
        "soil": "Dry, acidic",
        "community": "Sandplain meadow",
        "height": "1–4",
        "bloom": "",
        "page": 20
      },
      {
        "name": "Slender mountain mint",
        "latin": "Pycnanthemum tenuifolium",
        "role": "One of the best pollinator plants",
        "light": "Full sun–part sun",
        "soil": "Dry–mesic",
        "community": "Sandplain meadow",
        "height": "1–3",
        "bloom": "",
        "page": 20
      },
      {
        "name": "Orange coneflower",
        "latin": "Rudbeckia fulgida",
        "role": "Long bloom; supports bees & butterflies",
        "light": "Full sun–part sun",
        "soil": "Mesic",
        "community": "Sandplain meadow",
        "height": "1.5–3",
        "bloom": "",
        "page": 20
      },
      {
        "name": "Black-eyed Susan",
        "latin": "Rudbeckia hirta",
        "role": "Early successional pollinator plant",
        "light": "Full sun",
        "soil": "Dry–mesic",
        "community": "Sandplain meadow",
        "height": "1–3",
        "bloom": "",
        "page": 20
      },
      {
        "name": "Little bluestem",
        "latin": "Schizachyrium scoparium",
        "role": "Matrix species; supports grass skippers",
        "light": "Full sun",
        "soil": "Very dry, sandy",
        "community": "Sandplain meadow",
        "height": "1–3",
        "bloom": "",
        "page": 20
      },
      {
        "name": "Early goldenrod",
        "latin": "Solidago juncea",
        "role": "Earlier goldenrod; extends bloom season",
        "light": "Full sun",
        "soil": "Dry–mesic",
        "community": "Sandplain meadow",
        "height": "2–4",
        "bloom": "",
        "page": 20
      },
      {
        "name": "Gray goldenrod",
        "latin": "Solidago nemoralis",
        "role": "Late-season resource",
        "light": "Full sun",
        "soil": "Dry, rocky/sandy",
        "community": "Sandplain meadow",
        "height": "1–3",
        "bloom": "",
        "page": 20
      },
      {
        "name": "Aromatic aster",
        "latin": "Symphyotrichum oblongifolium",
        "role": "Late-season pollinator magnet",
        "light": "Full sun",
        "soil": "Dry, rocky/sandy",
        "community": "Sandplain meadow",
        "height": "1–2.5",
        "bloom": "",
        "page": 20
      },
      {
        "name": "Ohio spiderwort",
        "latin": "Tradescantia ohiensis",
        "role": "Early bloom; supports bees",
        "light": "Full sun–part sun",
        "soil": "Mesic",
        "community": "Sandplain meadow",
        "height": "1.5–3",
        "bloom": "",
        "page": 20
      },
      {
        "name": "Purpletop",
        "latin": "Tridens flavus",
        "role": "Tall warm-season grass; supports fauna",
        "light": "Full sun",
        "soil": "Dry–mesic, well-drained",
        "community": "Sandplain meadow",
        "height": "2–4",
        "bloom": "",
        "page": 20
      },
      {
        "name": "Lowbush blueberry",
        "latin": "Vaccinium angustifolium",
        "role": "High wildlife value (berries & nectar)",
        "light": "Full sun–part sun",
        "soil": "Acidic, sandy",
        "community": "Sandplain meadow",
        "height": "0.5–2",
        "bloom": "",
        "page": 20
      },
      {
        "name": "Golden Alexander",
        "latin": "Zizia aurea",
        "role": "Early umbel; swallowtail host",
        "light": "Full sun–part sun",
        "soil": "Moist–mesic",
        "community": "Sandplain meadow",
        "height": "1.5–3",
        "bloom": "",
        "page": 20
      }
    ],
    "careTitle": "Let the landscape grow into itself.",
    "careIntro": "A long-term plan includes how the garden will be used, maintained, and changed. Different zones need different levels of attention.",
    "care": [
      {
        "title": "Establish the framework",
        "text": "Prioritize access, water movement, soil preparation in garden beds, and the tree and shrub structure that will create future shade."
      },
      {
        "title": "Support the first seasons",
        "text": "Allow meadow plants to mature and set seed. Provide establishment care where needed, keep primary paths clear, and watch how new planting responds to the dry site."
      },
      {
        "title": "Guide the meadow",
        "text": "Use seasonal mowing and selective editing to control height and woody growth. The front meadow can be managed differently from the larger southern habitat area."
      },
      {
        "title": "Adapt to daily life",
        "text": "Extend firm paths if access needs change. Edit garden planting, adjust shade and seating, and keep water access practical as the household and landscape evolve."
      }
    ],
    "colophon": "Sandplan Meadow and Landscape · Landscape design, site analysis, and planting design. Developed at The Conway School in Fall 2025. Proposed landscape; construction detailing remains a subsequent phase. Original drawings, palettes, and source acknowledgments are available below."
  },
  "bells-pond": {
    "key": "bells-pond",
    "kicker": "BELL’S POND CONSERVATION PROPERTY / CONSERVATION + HOUSING",
    "title": "Finding common ground.",
    "subtitle": "Conservation, affordable housing, and community access—planned as one landscape.",
    "date": "Spring 2026",
    "hero": "/studies/bells-pond/neighborhood.webp",
    "heroAlt": "Pocket neighborhood illustration with shared green, pedestrian paths, planting, and parking",
    "briefTitle": "A shared future for the land.",
    "brief": [
      "At Bell’s Pond, the needs of people and the future of the land meet on a 143-acre property spanning Greenport and Livingston. Agricultural fields, returning woodland, wetlands, and creeks form the setting for a collaboration between Columbia Land Conservancy, Columbia-Greene Habitat for Humanity, and Trillium Community Land Trust.",
      "Our work brings conservation, affordable housing, and public access into a shared landscape plan. We locate housing in relation to soils, drainage, existing infrastructure, and habitat; design transitions between public and private space; and connect daily life with a larger network of trails and ecological communities.",
      "The site’s history is part of its design context. Long-standing Indigenous relationships with the Hudson Valley were followed by colonial dispossession and agricultural change. More recent grading and infrastructure for an unrealized baseball facility left another layer of disturbance. Restoration here means responding to this layered landscape and the life already returning to it."
    ],
    "metrics": [
      {
        "value": "143",
        "label": "acres considered together"
      },
      {
        "value": "3",
        "label": "partner organizations"
      },
      {
        "value": "2",
        "label": "housing communities"
      },
      {
        "value": "4",
        "label": "principal habitat communities"
      }
    ],
    "partners": [
      {
        "title": "Columbia Land Conservancy",
        "text": "Public conservation land, ecological restoration, trails, and opportunities for environmental education form the landscape’s shared framework.",
        "focus": "Conservation + public access"
      },
      {
        "title": "Columbia-Greene Habitat for Humanity",
        "text": "The housing approach uses individually owned homes and lots. The landscape plan relates this neighborhood to existing Habitat property and the conservation lands.",
        "focus": "Affordable homeownership"
      },
      {
        "title": "Trillium Community Land Trust",
        "text": "A community land trust approach creates an opportunity for compact homes, shared greenspace, and collective landscape care. The existing barn becomes an important gathering asset.",
        "focus": "Pocket neighborhoods + shared land"
      }
    ],
    "analysisTitle": "Read the connections before drawing the boundaries.",
    "analysisIntro": "Site analysis reveals where housing, public space, water, and habitat can support one another.",
    "layers": [
      {
        "title": "Vegetation",
        "label": "EXISTING COMMUNITIES",
        "headline": "A landscape already in transition.",
        "text": "Mature trees line creeks and older property edges. Old fields contain young cedar, shrubs, brambles, and returning hardwoods alongside invasive vegetation. Wet areas support red maple, gray dogwood, willow, and patches of reed canary grass.",
        "response": "Protect useful regeneration, target invasive management, and strengthen connections between open habitat and emerging forest.",
        "image": "/studies/bells-pond/vegetation.webp",
        "alt": "Vegetation — project analysis drawing"
      },
      {
        "title": "Soils",
        "label": "WETLAND TO UPLAND",
        "headline": "Three soil groups, different possibilities.",
        "text": "Wetland soils occupy the low stream corridors; transitional valley soils support the central fields; better-drained uplands carry the existing northeastern buildings. Lacustrine silt and clay and alluvial deposits help explain these differences.",
        "response": "Use the soil gradient to organize restoration and planting. Consider housing in the more suitable upland areas near existing infrastructure.",
        "image": "/studies/bells-pond/soils.webp",
        "alt": "Soils — project analysis drawing"
      },
      {
        "title": "Water + slopes",
        "label": "DRAINAGE & LANDFORM",
        "headline": "Water organizes the whole site.",
        "text": "Most of the property is gently rolling. Water enters from the elevated eastern edge and Route 9, then moves through low swales toward the creeks along the west, south, and north. Steeper land is concentrated around drainage features.",
        "response": "Keep development and routes responsive to wet ground. Use planted runoff systems near hard surfaces and carefully positioned crossings where trails meet drainage.",
        "image": "/studies/bells-pond/drainage.webp",
        "alt": "Water + slopes — project analysis drawing"
      },
      {
        "title": "Watershed",
        "label": "REGIONAL HYDROLOGY",
        "headline": "The property is part of a larger system.",
        "text": "Mud Creek and the unnamed southern creek link the site to surrounding floodplains and the wider Hudson Valley watershed. Decisions about runoff, vegetation, and soil disturbance extend beyond the property line.",
        "response": "Maintain natural water movement, protect riparian vegetation, and connect floodplain restoration to upland management.",
        "image": "/studies/bells-pond/hydrology.webp",
        "alt": "Watershed — project analysis drawing"
      },
      {
        "title": "Habitat + access",
        "label": "ECOLOGY & EXPERIENCE",
        "headline": "A mosaic offers many ways to belong.",
        "text": "Fields, shrublands, forest edges, and wetland corridors support different kinds of life. They also create a sequence of enclosure, open views, and destinations for people walking the landscape.",
        "response": "Retain a varied habitat mosaic and direct access through connected loops, with quieter observation areas at sensitive edges.",
        "image": "/studies/bells-pond/habitat.webp",
        "alt": "Habitat + access — project analysis drawing"
      }
    ],
    "choicesTitle": "Conservation, commons, or education?",
    "choicesIntro": "Three alternatives tested how the housing communities and conservation lands could relate. Each gave a different emphasis to shared space, habitat, and the intensity of public use.",
    "choices": [
      {
        "title": "Centering Conservation",
        "headline": "Let the conservation land be the common.",
        "text": "Denser housing near Route 9 creates more room for the conservation landscape. A modest trail network and informal productive planting connect residents to the land.",
        "points": [
          "Compact residential development",
          "Fewer constructed gathering destinations",
          "A loose planted transition to the conservation land"
        ],
        "tradeoff": "A smaller development footprint requires careful coordination of concentrated runoff and shared infrastructure.",
        "image": "/studies/bells-pond/concept-1.webp"
      },
      {
        "title": "Community Commons",
        "headline": "Gather around a shared center.",
        "text": "A formal commons becomes the public entry and a bridge between the two neighborhoods. Gardens, play, and a pavilion create opportunities for daily encounters.",
        "points": [
          "Public parking near Trillium’s barn",
          "Community and sensory gardens",
          "An extensive connected trail system"
        ],
        "tradeoff": "More cultivated shared space offers social opportunities and brings ongoing coordination and maintenance responsibilities.",
        "image": "/studies/bells-pond/concept-2.webp"
      },
      {
        "title": "Environmental Education",
        "headline": "Learn by moving through the landscape.",
        "text": "More self-contained neighborhoods connect to an educational conservation landscape. Trails pass native nurseries, wildlife blinds, restoration demonstrations, and gathering places.",
        "points": [
          "Vegetation defines private residential space",
          "Public arrival set back from Route 9",
          "A sequence of educational destinations"
        ],
        "tradeoff": "A richer program of destinations also means more investment, disturbance, and long-term care.",
        "image": "/studies/bells-pond/concept-3.webp"
      }
    ],
    "resolution": "The final plan combines housing near infrastructure with a central public arrival, connected trail loops, restored forest, and selected areas of meadow and shrubland. Vegetated edges provide privacy while keeping the ecological and pedestrian networks connected.",
    "planTitle": "One landscape, many relationships.",
    "plan": "/studies/bells-pond/plan.webp",
    "planAlt": "Bell’s Pond final landscape plan with housing areas, trails, forest, meadow, and gathering destinations",
    "features": [
      {
        "title": "Trillium neighborhood",
        "x": 58,
        "y": 22,
        "category": "SHARED RESIDENTIAL LANDSCAPE",
        "text": "A compact neighborhood and the existing barn occupy the northeastern part of the site. Shared green, planting, and pedestrian routes connect homes to the larger landscape.",
        "points": [
          "Cluster homes around a common",
          "Relate the neighborhood to the barn and trails",
          "Use planting to define shared and private areas"
        ]
      },
      {
        "title": "Habitat neighborhood",
        "x": 74,
        "y": 45,
        "category": "AFFORDABLE HOMEOWNERSHIP",
        "text": "The proposed Habitat area sits beside the existing ReStore property. Individual homes and lots are connected to the conservation lands through thoughtful edges and routes.",
        "points": [
          "Build on proximity to existing infrastructure",
          "Integrate native residential planting",
          "Use screening to balance privacy and connection"
        ]
      },
      {
        "title": "Public arrival",
        "x": 60,
        "y": 39,
        "category": "CLC PARKING & GATHERING",
        "text": "Public parking sits between the residential areas. Restrooms, play, and a nearby pavilion form a clear arrival sequence into the conservation land.",
        "points": [
          "Shade and screen parking with native trees",
          "Make the public route legible",
          "Provide space for learning and community use"
        ]
      },
      {
        "title": "Bridge + observation",
        "x": 44,
        "y": 25,
        "category": "WETLAND EXPERIENCE",
        "text": "A bridge and observation deck cross a swale near the oaks. The destination offers a place to pause and experience the wet landscape while concentrating foot traffic.",
        "points": [
          "Minimize disturbance around water and roots",
          "Consider locally sourced black locust",
          "Make stopping and viewing part of the route"
        ]
      },
      {
        "title": "Forest edge + blind",
        "x": 29,
        "y": 45,
        "category": "QUIET WILDLIFE OBSERVATION",
        "text": "A boardwalk and bird blind create a quieter experience toward the western floodplain. The surrounding forest is part of a continuous ecological corridor.",
        "points": [
          "Direct visitors to defined observation areas",
          "Retain cover and connected vegetation",
          "Work with wetland and floodplain conditions"
        ]
      },
      {
        "title": "Meadow + gazebo",
        "x": 53,
        "y": 67,
        "category": "OPEN LANDSCAPE & RESPITE",
        "text": "Meadow routes lead south through open views toward a gazebo associated with the existing well. Planting and rest points create variety along the walk.",
        "points": [
          "Retain selected meadow and shrubland",
          "Provide shade and places to rest",
          "Connect loops so visitors can choose their experience"
        ]
      },
      {
        "title": "Grand Old Oak",
        "x": 26,
        "y": 83,
        "category": "SOUTHERN LANDSCAPE",
        "text": "The old oak becomes a destination reached through the southern landscape. A more gently graded loop provides an alternative to the short, steeper southern route.",
        "points": [
          "Follow contours with a switchback where needed",
          "Protect established trees and habitat",
          "Offer clear information about route conditions"
        ]
      }
    ],
    "livingTitle": "Daily life at the edge of conservation.",
    "scenes": [
      {
        "title": "A neighborhood around a common.",
        "label": "TRILLIUM / POCKET NEIGHBORHOOD",
        "image": "/studies/bells-pond/neighborhood.webp",
        "alt": "A neighborhood around a common. — project design illustration",
        "text": "Homes face a shared green. Walking routes connect front doors, gardens, parking, and conservation trails. The landscape makes density feel generous by bringing useful open space close to every home.",
        "details": [
          {
            "title": "Solar orientation + comfort",
            "text": "Orient primary living spaces toward the south where site planning allows. Deciduous trees provide summer shade while admitting winter light; shade planting near paving also moderates outdoor conditions."
          },
          {
            "title": "Parking + pedestrian life",
            "text": "Concentrated parking reduces the need to distribute pavement throughout the neighborhood and simplifies shared maintenance. Firm, gently graded paths become the primary connections between homes and amenities."
          },
          {
            "title": "Visible stormwater",
            "text": "Rain gardens, swales, tree islands, and planted infiltration areas receive water near its source. Crossings keep the pedestrian network connected while water remains visible in the landscape."
          },
          {
            "title": "Planting + privacy",
            "text": "Layered native planting separates private thresholds from shared space without breaking habitat continuity. Seasonal flowers, fruit, and shade bring daily contact with the conservation landscape."
          }
        ]
      },
      {
        "title": "A trail is a sequence of experiences.",
        "label": "PUBLIC ACCESS / BRIDGE & OBSERVATION",
        "image": "/studies/bells-pond/bridge.webp",
        "alt": "A trail is a sequence of experiences. — project design illustration",
        "text": "Interconnecting loops let visitors choose different distances and destinations. A pavilion, old trees, wildlife blinds, and places to rest give the paths purpose beyond movement.",
        "details": [
          {
            "title": "Access for a wider range of visitors",
            "text": "The plan targets gentle grades across the primary trail network, with a short steeper section in the south and an alternative loop. Surface improvements can be phased, and wayfinding should communicate actual conditions."
          },
          {
            "title": "Cross lightly",
            "text": "Boardwalks and bridges concentrate use across wetter ground. Their alignment considers trees, roots, water movement, and wildlife passage beneath the structures."
          },
          {
            "title": "Work with local material",
            "text": "The existing black locust stand offers a potential source of durable poles and lumber. The bridge concept considers this material alongside low-impact foundation options."
          },
          {
            "title": "Observe without dispersing use",
            "text": "Bird blinds and observation decks create defined places to watch wildlife, helping concentrate visitors along designated routes."
          }
        ]
      },
      {
        "title": "Gather at the barn.",
        "label": "TRILLIUM / ARRIVAL & LANDSCAPE",
        "image": "/studies/bells-pond/barn.webp",
        "alt": "Gather at the barn. — project design illustration",
        "text": "The renovated barn is a recognizable destination within the shared landscape. Parking, an access ramp, a mown gathering area, and native planting organize the space around it.",
        "details": [
          {
            "title": "An everyday arrival",
            "text": "Place parking to the east and use trees and planted edges to provide shade and enclosure. Connect arrival to the barn with a clear pedestrian route."
          },
          {
            "title": "Room for community",
            "text": "A mown area to the west accommodates gathering. Planting defines this open space and connects it to the larger trail and residential framework."
          },
          {
            "title": "A layered boundary",
            "text": "The roadside berm and vegetative screens distinguish public, residential, and neighboring uses. Evergreen, fruit-and-flower, and conservation palettes respond to different edge conditions."
          }
        ]
      }
    ],
    "plantTitle": "A mosaic with continuity.",
    "plantIntro": "Our palettes connect canopy, understory, shrubs, and the ground layer. Soil moisture and existing vegetation guide where species belong, while planting near homes and trails carries habitat into daily life.",
    "communities": [
      {
        "title": "Meadow",
        "text": "Different establishment methods respond to cultivated fields and emerging shrubland. Dry and mesic meadow species occupy higher ground; wetter areas receive a different mix.",
        "care": "Care focus: rotational mowing and monitoring for invasive plants."
      },
      {
        "title": "Shrubland",
        "text": "Thickets provide a transition between open land and forest. Berry-producing shrubs, varied ages, and different densities add cover and seasonal interest.",
        "care": "Care focus: rotational disturbance to retain early-successional habitat."
      },
      {
        "title": "Upland forest",
        "text": "Build on trees already regenerating and establish a layered forest structure. Regional maple, pine–hardwood, and oak–hickory communities guide the palette.",
        "care": "Care focus: protect desired regeneration and manage gaps and edges."
      },
      {
        "title": "Floodplain forest",
        "text": "Active floodplain, terrace, and upland transition form a connected sequence that responds to different flooding and soil conditions.",
        "care": "Care focus: retain natural hydrology and direct public use to defined routes."
      },
      {
        "title": "Screens + residential gardens",
        "text": "Native planting makes a transition from habitat to home. Evergreen structure, seasonal flowers, fruit, and groundcover all have roles to play.",
        "care": "Care focus: match plants to the edge and monitor outward spread."
      }
    ],
    "plants": [
      {
        "name": "Bush clover",
        "latin": "Lespedeza capitata",
        "role": "Forb",
        "light": "Meadow palette",
        "soil": "Dry",
        "community": "Meadow",
        "height": "3-4'",
        "bloom": "Jul-Sep",
        "page": 17
      },
      {
        "name": "Hairy bush clover",
        "latin": "Lespedeza hirta",
        "role": "Forb",
        "light": "Meadow palette",
        "soil": "Dry",
        "community": "Meadow",
        "height": "2-4'",
        "bloom": "Jul-Sep",
        "page": 17
      },
      {
        "name": "Showy tick trefoil",
        "latin": "Desmodium canadense",
        "role": "Forb",
        "light": "Meadow palette",
        "soil": "Dry–Mesic",
        "community": "Meadow",
        "height": "3-5'",
        "bloom": "Jul-Sep",
        "page": 17
      },
      {
        "name": "Wild bergamot",
        "latin": "Monarda fistulosa",
        "role": "Forb",
        "light": "Meadow palette",
        "soil": "Dry–Mesic",
        "community": "Meadow",
        "height": "2-4'",
        "bloom": "Jul-Aug",
        "page": 17
      },
      {
        "name": "Black-eyed Susan",
        "latin": "Rudbeckia hirta",
        "role": "Forb",
        "light": "Meadow palette",
        "soil": "Dry–Mesic",
        "community": "Meadow",
        "height": "2-3'",
        "bloom": "Jun-Sep",
        "page": 17
      },
      {
        "name": "Gray goldenrod",
        "latin": "Solidago nemoralis",
        "role": "Forb",
        "light": "Meadow palette",
        "soil": "Dry–Mesic",
        "community": "Meadow",
        "height": "1-3'",
        "bloom": "Aug-Oct",
        "page": 17
      },
      {
        "name": "Early goldenrod",
        "latin": "Solidago juncea",
        "role": "Forb",
        "light": "Meadow palette",
        "soil": "Dry–Mesic",
        "community": "Meadow",
        "height": "2-4'",
        "bloom": "Jul-Sep",
        "page": 17
      },
      {
        "name": "Mountain mint",
        "latin": "Pycnanthemum muticum",
        "role": "Forb",
        "light": "Meadow palette",
        "soil": "Dry–Mesic",
        "community": "Meadow",
        "height": "2-3'",
        "bloom": "Jul-Sep",
        "page": 17
      },
      {
        "name": "Rough goldenrod",
        "latin": "Solidago rugosa",
        "role": "Forb",
        "light": "Meadow palette",
        "soil": "Dry–Mesic",
        "community": "Meadow",
        "height": "3-5'",
        "bloom": "Aug-Oct",
        "page": 17
      },
      {
        "name": "Little bluestem",
        "latin": "Schizachyrium scoparium",
        "role": "Grass",
        "light": "Meadow palette",
        "soil": "Dry–Mesic",
        "community": "Meadow",
        "height": "2-4'",
        "bloom": "Aug-Oct",
        "page": 17
      },
      {
        "name": "Virginia wild rye",
        "latin": "Elymus virginicus",
        "role": "Grass",
        "light": "Meadow palette",
        "soil": "Dry–Mesic",
        "community": "Meadow",
        "height": "2-4'",
        "bloom": "Jun-Jul",
        "page": 17
      },
      {
        "name": "Switchgrass",
        "latin": "Panicum virgatum",
        "role": "Grass",
        "light": "Meadow palette",
        "soil": "Dry–Mesic",
        "community": "Meadow",
        "height": "3-6'",
        "bloom": "Aug-Oct",
        "page": 17
      },
      {
        "name": "Common milkweed",
        "latin": "Asclepias syriaca",
        "role": "Forb",
        "light": "Meadow palette",
        "soil": "Mesic",
        "community": "Meadow",
        "height": "3-5'",
        "bloom": "Jun-Aug",
        "page": 17
      },
      {
        "name": "Tall coreopsis",
        "latin": "Coreopsis tripteris",
        "role": "Forb",
        "light": "Meadow palette",
        "soil": "Mesic",
        "community": "Meadow",
        "height": "4-7'",
        "bloom": "Jul-Sep",
        "page": 17
      },
      {
        "name": "New England aster",
        "latin": "Symphyotrichum novae- angliae",
        "role": "Forb",
        "light": "Meadow palette",
        "soil": "Mesic",
        "community": "Meadow",
        "height": "3-6'",
        "bloom": "Aug-Oct",
        "page": 17
      },
      {
        "name": "Calico aster",
        "latin": "Symphyotrichum lateriflorum",
        "role": "Forb",
        "light": "Meadow palette",
        "soil": "Mesic",
        "community": "Meadow",
        "height": "2-4'",
        "bloom": "Sep-Oct",
        "page": 17
      },
      {
        "name": "Wild strawberry",
        "latin": "Fragaria virginiana",
        "role": "G.Cover",
        "light": "Meadow palette",
        "soil": "Mesic",
        "community": "Meadow",
        "height": "4-8\"",
        "bloom": "Apr-May",
        "page": 17
      },
      {
        "name": "Northern dewberry",
        "latin": "Rubus flagellaris",
        "role": "G.Cover",
        "light": "Meadow palette",
        "soil": "Mesic",
        "community": "Meadow",
        "height": "6-12\"",
        "bloom": "May-Jun",
        "page": 17
      },
      {
        "name": "Big bluestem",
        "latin": "Andropogon gerardii",
        "role": "Grass",
        "light": "Meadow palette",
        "soil": "Mesic",
        "community": "Meadow",
        "height": "4-7'",
        "bloom": "Aug-Oct",
        "page": 17
      },
      {
        "name": "Indian grass",
        "latin": "Sorghastrum nutans",
        "role": "Grass",
        "light": "Meadow palette",
        "soil": "Mesic",
        "community": "Meadow",
        "height": "4-6'",
        "bloom": "Aug-Oct",
        "page": 17
      },
      {
        "name": "Swamp milkweed",
        "latin": "Asclepias incarnata",
        "role": "Forb",
        "light": "Meadow palette",
        "soil": "Wet",
        "community": "Meadow",
        "height": "3-5'",
        "bloom": "Jul-Aug",
        "page": 17
      },
      {
        "name": "White turtlehead",
        "latin": "Chelone glabra",
        "role": "Forb",
        "light": "Meadow palette",
        "soil": "Wet",
        "community": "Meadow",
        "height": "2-4'",
        "bloom": "Aug-Oct",
        "page": 17
      },
      {
        "name": "Boneset",
        "latin": "Eupatorium perfoliatum",
        "role": "Forb",
        "light": "Meadow palette",
        "soil": "Wet",
        "community": "Meadow",
        "height": "3-5'",
        "bloom": "Jul-Sep",
        "page": 17
      },
      {
        "name": "Great blue lobelia",
        "latin": "Lobelia siphilitica",
        "role": "Forb",
        "light": "Meadow palette",
        "soil": "Wet",
        "community": "Meadow",
        "height": "2-4'",
        "bloom": "Aug-Sep",
        "page": 17
      },
      {
        "name": "Purple-stemmed aster",
        "latin": "Symphyotrichum puniceum",
        "role": "Forb",
        "light": "Meadow palette",
        "soil": "Wet",
        "community": "Meadow",
        "height": "3-6'",
        "bloom": "Aug-Oct",
        "page": 17
      },
      {
        "name": "Blue vervain",
        "latin": "Verbena hastata",
        "role": "Forb",
        "light": "Meadow palette",
        "soil": "Wet",
        "community": "Meadow",
        "height": "3-5'",
        "bloom": "Jul-Sep",
        "page": 17
      },
      {
        "name": "Soft rush",
        "latin": "Juncus effusus",
        "role": "Rush",
        "light": "Meadow palette",
        "soil": "Wet",
        "community": "Meadow",
        "height": "2-4'",
        "bloom": "Jun-Aug",
        "page": 17
      },
      {
        "name": "Tussock sedge",
        "latin": "Carex stricta",
        "role": "Sedge",
        "light": "Meadow palette",
        "soil": "Wet",
        "community": "Meadow",
        "height": "2-3'",
        "bloom": "Apr-May",
        "page": 17
      },
      {
        "name": "Fox sedge",
        "latin": "Carex vulpinoidea",
        "role": "Sedge",
        "light": "Meadow palette",
        "soil": "Wet",
        "community": "Meadow",
        "height": "2-3'",
        "bloom": "May-Jun",
        "page": 17
      },
      {
        "name": "Smooth sumac",
        "latin": "Rhus glabra",
        "role": "Shrub",
        "light": "Shrubland palette",
        "soil": "Dry",
        "community": "Shrubland",
        "height": "8-15'",
        "bloom": "Jun-Jul",
        "page": 18
      },
      {
        "name": "American hazelnut",
        "latin": "Corylus americana",
        "role": "Shrub",
        "light": "Shrubland palette",
        "soil": "Dry–Mesic",
        "community": "Shrubland",
        "height": "8–15'",
        "bloom": "Mar–Apr",
        "page": 18
      },
      {
        "name": "Staghorn sumac",
        "latin": "Rhus typhina",
        "role": "Shrub",
        "light": "Shrubland palette",
        "soil": "Dry–Mesic",
        "community": "Shrubland",
        "height": "10-20'",
        "bloom": "Jun-Jul",
        "page": 18
      },
      {
        "name": "Northern dewberry",
        "latin": "Rubus flagellaris",
        "role": "G.Cover",
        "light": "Shrubland palette",
        "soil": "Dry–Mesic",
        "community": "Shrubland",
        "height": "6-12\"",
        "bloom": "May-Jun",
        "page": 18
      },
      {
        "name": "Lowbush blueberry",
        "latin": "Vaccinium angustifolium",
        "role": "Shrub",
        "light": "Shrubland palette",
        "soil": "Dry–Mesic",
        "community": "Shrubland",
        "height": "1-2'",
        "bloom": "May-Jun",
        "page": 18
      },
      {
        "name": "Nodding onion",
        "latin": "Allium cernuum",
        "role": "Forb",
        "light": "Shrubland palette",
        "soil": "Dry–Mesic",
        "community": "Shrubland",
        "height": "1-2'",
        "bloom": "Jul-Aug",
        "page": 18
      },
      {
        "name": "Texas wild flax",
        "latin": "Linum medium var. texanum",
        "role": "Forb",
        "light": "Shrubland palette",
        "soil": "Dry–Mesic",
        "community": "Shrubland",
        "height": "1-2'",
        "bloom": "Jun-Jul",
        "page": 18
      },
      {
        "name": "Stiff goldenrod",
        "latin": "Solidago rigida var. rigida",
        "role": "Forb",
        "light": "Shrubland palette",
        "soil": "Dry–Mesic",
        "community": "Shrubland",
        "height": "3-5'",
        "bloom": "Aug-Oct",
        "page": 18
      },
      {
        "name": "Black chokeberry",
        "latin": "Aronia melanocarpa",
        "role": "Shrub",
        "light": "Shrubland palette",
        "soil": "Dry–Mesic–Wet",
        "community": "Shrubland",
        "height": "3-6'",
        "bloom": "Apr-May",
        "page": 18
      },
      {
        "name": "Mountain mint",
        "latin": "Pycnanthemum muticum",
        "role": "Forb",
        "light": "Shrubland palette",
        "soil": "Dry–Mesic–Wet",
        "community": "Shrubland",
        "height": "2-3'",
        "bloom": "Jul-Sep",
        "page": 18
      },
      {
        "name": "Common blackberry",
        "latin": "Rubus allegheniensis",
        "role": "Shrub",
        "light": "Shrubland palette",
        "soil": "Mesic",
        "community": "Shrubland",
        "height": "4-8'",
        "bloom": "May-Jun",
        "page": 18
      },
      {
        "name": "Wild red raspberry",
        "latin": "Rubus idaeus var. strigosus",
        "role": "Shrub",
        "light": "Shrubland palette",
        "soil": "Mesic",
        "community": "Shrubland",
        "height": "3-6'",
        "bloom": "May-Jun",
        "page": 18
      },
      {
        "name": "Black raspberry",
        "latin": "Rubus occidentalis",
        "role": "Shrub",
        "light": "Shrubland palette",
        "soil": "Mesic",
        "community": "Shrubland",
        "height": "3-6'",
        "bloom": "Apr-May",
        "page": 18
      },
      {
        "name": "Woodland agrimony",
        "latin": "Agrimonia rostellata",
        "role": "Forb",
        "light": "Shrubland palette",
        "soil": "Mesic",
        "community": "Shrubland",
        "height": "2-4'",
        "bloom": "Jul-Sep",
        "page": 18
      },
      {
        "name": "Green gentian",
        "latin": "Frasera caroliniensis",
        "role": "Forb",
        "light": "Shrubland palette",
        "soil": "Mesic",
        "community": "Shrubland",
        "height": "4-8'",
        "bloom": "Jul-Aug",
        "page": 18
      },
      {
        "name": "Basil balm",
        "latin": "Monarda clinopodia",
        "role": "Forb",
        "light": "Shrubland palette",
        "soil": "Mesic",
        "community": "Shrubland",
        "height": "2-4'",
        "bloom": "Jul-Aug",
        "page": 18
      },
      {
        "name": "Rose pink",
        "latin": "Sabatia angularis",
        "role": "Forb",
        "light": "Shrubland palette",
        "soil": "Mesic",
        "community": "Shrubland",
        "height": "1-3'",
        "bloom": "Jul-Sep",
        "page": 18
      },
      {
        "name": "Blue-eyed grass",
        "latin": "Sisyrinchium mucronatum",
        "role": "Forb",
        "light": "Shrubland palette",
        "soil": "Mesic",
        "community": "Shrubland",
        "height": "1-2'",
        "bloom": "May-Jun",
        "page": 18
      },
      {
        "name": "Gray dogwood",
        "latin": "Cornus racemosa",
        "role": "Shrub",
        "light": "Shrubland palette",
        "soil": "Mesic",
        "community": "Shrubland",
        "height": "6-15'",
        "bloom": "May-Jun",
        "page": 18
      },
      {
        "name": "Smooth arrowwood",
        "latin": "Viburnum dentatum var. lucidum",
        "role": "Shrub",
        "light": "Shrubland palette",
        "soil": "Mesic",
        "community": "Shrubland",
        "height": "6-10'",
        "bloom": "May-Jun",
        "page": 18
      },
      {
        "name": "Nannyberry",
        "latin": "Viburnum lentago",
        "role": "Shrub",
        "light": "Shrubland palette",
        "soil": "Mesic",
        "community": "Shrubland",
        "height": "10-18'",
        "bloom": "May-Jun",
        "page": 18
      },
      {
        "name": "Silky dogwood",
        "latin": "Cornus amomum",
        "role": "Shrub",
        "light": "Shrubland palette",
        "soil": "Wet",
        "community": "Shrubland",
        "height": "6-12'",
        "bloom": "May-Jun",
        "page": 18
      },
      {
        "name": "Red-osier dogwood",
        "latin": "Cornus sericea",
        "role": "Shrub",
        "light": "Shrubland palette",
        "soil": "Wet",
        "community": "Shrubland",
        "height": "6-10'",
        "bloom": "May-Jun",
        "page": 18
      },
      {
        "name": "Sageleaf Willow",
        "latin": "Salix candida",
        "role": "Shrub",
        "light": "Shrubland palette",
        "soil": "Wet",
        "community": "Shrubland",
        "height": "8'",
        "bloom": "Apr-May",
        "page": 18
      },
      {
        "name": "Narrow Leaf Willow",
        "latin": "Salix exigua",
        "role": "Shrub",
        "light": "Shrubland palette",
        "soil": "Wet",
        "community": "Shrubland",
        "height": "55'",
        "bloom": "Mar-Jun",
        "page": 18
      },
      {
        "name": "Meadow Willow",
        "latin": "Salix petiolaris",
        "role": "Shrub",
        "light": "Shrubland palette",
        "soil": "Wet",
        "community": "Shrubland",
        "height": "20'",
        "bloom": "Apr-Jun",
        "page": 18
      },
      {
        "name": "American elderberry",
        "latin": "Sambucus canadensis",
        "role": "Shrub",
        "light": "Shrubland palette",
        "soil": "Wet–Mesic",
        "community": "Shrubland",
        "height": "6-12'",
        "bloom": "Jun-Jul",
        "page": 18
      },
      {
        "name": "Highbush blueberry",
        "latin": "Vaccinium corymbosum",
        "role": "Shrub",
        "light": "Shrubland palette",
        "soil": "Wet–Mesic",
        "community": "Shrubland",
        "height": "6-10'",
        "bloom": "May-Jun",
        "page": 18
      },
      {
        "name": "Speckled Alder",
        "latin": "Alnus incana ssp. rugosa",
        "role": "Shrub, large",
        "light": "Upland forest palette",
        "soil": "Wet",
        "community": "Upland forest",
        "height": "10-20'",
        "bloom": "Mar-Apr",
        "page": 19
      },
      {
        "name": "Spicebush",
        "latin": "Lindera benzoin",
        "role": "Shrub",
        "light": "Upland forest palette",
        "soil": "Mesic–Wet",
        "community": "Upland forest",
        "height": "6-12'",
        "bloom": "Mar-Apr",
        "page": 19
      },
      {
        "name": "Wild Raisin",
        "latin": "Viburnum nudum var. cassinoides",
        "role": "Shrub",
        "light": "Upland forest palette",
        "soil": "Wet",
        "community": "Upland forest",
        "height": "6-12'",
        "bloom": "May-Jun",
        "page": 19
      },
      {
        "name": "Highbush Blueberry",
        "latin": "Vaccinium corymbosum",
        "role": "Shrub",
        "light": "Upland forest palette",
        "soil": "Wet",
        "community": "Upland forest",
        "height": "6-12'",
        "bloom": "May",
        "page": 19
      },
      {
        "name": "Winterberry Holly",
        "latin": "Ilex verticillata",
        "role": "Shrub",
        "light": "Upland forest palette",
        "soil": "Wet",
        "community": "Upland forest",
        "height": "6-12'",
        "bloom": "May-Jun",
        "page": 19
      },
      {
        "name": "Tall Meadow Rue",
        "latin": "Thalictrum pubescens",
        "role": "Forb",
        "light": "Upland forest palette",
        "soil": "Wet",
        "community": "Upland forest",
        "height": "3-6'",
        "bloom": "Jun-Jul",
        "page": 19
      },
      {
        "name": "Blue-stem Goldenrod",
        "latin": "Solidago caesia",
        "role": "Forb",
        "light": "Upland forest palette",
        "soil": "Dry–Mesic",
        "community": "Upland forest",
        "height": "1-3'",
        "bloom": "Aug-Oct",
        "page": 19
      },
      {
        "name": "Silverrod",
        "latin": "Solidago bicolor",
        "role": "Forb",
        "light": "Upland forest palette",
        "soil": "Dry–Mesic",
        "community": "Upland forest",
        "height": "1-3'",
        "bloom": "Aug-Oct",
        "page": 19
      },
      {
        "name": "Red Trillium",
        "latin": "Trillium erectum",
        "role": "Forb",
        "light": "Upland forest palette",
        "soil": "Mesic–Wet",
        "community": "Upland forest",
        "height": "8–18\"",
        "bloom": "Apr–May",
        "page": 19
      },
      {
        "name": "Mayapple",
        "latin": "Podophyllum peltatum",
        "role": "Forb",
        "light": "Upland forest palette",
        "soil": "Mesic",
        "community": "Upland forest",
        "height": "12-18\"",
        "bloom": "Apr-May",
        "page": 19
      },
      {
        "name": "False Solomon's Seal",
        "latin": "Maianthemum racemosum",
        "role": "Forb",
        "light": "Upland forest palette",
        "soil": "Mesic",
        "community": "Upland forest",
        "height": "18-36\"",
        "bloom": "May-Jun",
        "page": 19
      },
      {
        "name": "Round-lobed Hepatica",
        "latin": "Hepatica americana",
        "role": "Forb",
        "light": "Upland forest palette",
        "soil": "Mesic",
        "community": "Upland forest",
        "height": "4-8\"",
        "bloom": "Mar-Apr",
        "page": 19
      },
      {
        "name": "White Avens",
        "latin": "Geum canadense",
        "role": "Forb",
        "light": "Upland forest palette",
        "soil": "Mesic",
        "community": "Upland forest",
        "height": "2-4'",
        "bloom": "Jun-Aug",
        "page": 19
      },
      {
        "name": "Enchanter's Nightshade",
        "latin": "Circaea canadensis",
        "role": "Forb",
        "light": "Upland forest palette",
        "soil": "Mesic",
        "community": "Upland forest",
        "height": "12-24\"",
        "bloom": "Jul-Aug",
        "page": 19
      },
      {
        "name": "Wild Sarsaparilla",
        "latin": "Aralia nudicaulis",
        "role": "Forb",
        "light": "Upland forest palette",
        "soil": "Mesic",
        "community": "Upland forest",
        "height": "12-24\"",
        "bloom": "May-Jun",
        "page": 19
      },
      {
        "name": "Black Cohosh",
        "latin": "Actaea racemosa",
        "role": "Forb",
        "light": "Upland forest palette",
        "soil": "Mesic",
        "community": "Upland forest",
        "height": "4-6'",
        "bloom": "Jul-Aug",
        "page": 19
      },
      {
        "name": "White Baneberry",
        "latin": "Actaea pachypoda",
        "role": "Forb",
        "light": "Upland forest palette",
        "soil": "Mesic",
        "community": "Upland forest",
        "height": "18-30\"",
        "bloom": "Apr-May",
        "page": 19
      },
      {
        "name": "Cinnamon Fern",
        "latin": "Osmundastrum cinnamomeum",
        "role": "Fern",
        "light": "Upland forest palette",
        "soil": "Wet",
        "community": "Upland forest",
        "height": "2-5'",
        "bloom": "N/A",
        "page": 19
      },
      {
        "name": "Royal Fern",
        "latin": "Osmunda regalis var. spectabilis",
        "role": "Fern",
        "light": "Upland forest palette",
        "soil": "Wet",
        "community": "Upland forest",
        "height": "2-5'",
        "bloom": "N/A",
        "page": 19
      },
      {
        "name": "Sensitive Fern",
        "latin": "Onoclea sensibilis",
        "role": "Fern",
        "light": "Upland forest palette",
        "soil": "Wet",
        "community": "Upland forest",
        "height": "1-3'",
        "bloom": "N/A",
        "page": 19
      },
      {
        "name": "Tussock Sedge",
        "latin": "Carex stricta",
        "role": "Sedge",
        "light": "Upland forest palette",
        "soil": "Wet",
        "community": "Upland forest",
        "height": "2-3'",
        "bloom": "May-Jun",
        "page": 19
      },
      {
        "name": "Eastern Star Sedge",
        "latin": "Carex radiata",
        "role": "Sedge",
        "light": "Upland forest palette",
        "soil": "Mesic",
        "community": "Upland forest",
        "height": "12-18\"",
        "bloom": "May",
        "page": 19
      },
      {
        "name": "Pennsylvania Sedge",
        "latin": "Carex pensylvanica",
        "role": "Sedge",
        "light": "Upland forest palette",
        "soil": "Dry–Mesic",
        "community": "Upland forest",
        "height": "6-12\"",
        "bloom": "Apr-May",
        "page": 19
      },
      {
        "name": "White-tinged Sedge",
        "latin": "Carex albicans",
        "role": "Sedge",
        "light": "Upland forest palette",
        "soil": "Dry–Mesic",
        "community": "Upland forest",
        "height": "8-18\"",
        "bloom": "Apr-May",
        "page": 19
      },
      {
        "name": "Partridge Berry",
        "latin": "Mitchella repens",
        "role": "G.Cover",
        "light": "Upland forest palette",
        "soil": "Mesic",
        "community": "Upland forest",
        "height": "2-4\"",
        "bloom": "May-Jul",
        "page": 19
      },
      {
        "name": "Canada Mayflower",
        "latin": "Maianthemum canadense",
        "role": "G.Cover",
        "light": "Upland forest palette",
        "soil": "Mesic",
        "community": "Upland forest",
        "height": "4-8\"",
        "bloom": "May-Jun",
        "page": 19
      },
      {
        "name": "Wintergreen",
        "latin": "Gaultheria procumbens",
        "role": "G.Cover",
        "light": "Upland forest palette",
        "soil": "Dry–Mesic",
        "community": "Upland forest",
        "height": "4-6\"",
        "bloom": "Jul-Aug",
        "page": 19
      },
      {
        "name": "Red Maple",
        "latin": "Acer rubrum",
        "role": "Tree, large",
        "light": "Upland forest palette",
        "soil": "Mesic",
        "community": "Upland forest",
        "height": "40-70'",
        "bloom": "",
        "page": 19
      },
      {
        "name": "Sugar Maple",
        "latin": "Acer saccharum",
        "role": "Tree, large",
        "light": "Upland forest palette",
        "soil": "Mesic",
        "community": "Upland forest",
        "height": "60-80'",
        "bloom": "",
        "page": 19
      },
      {
        "name": "Yellow Birch",
        "latin": "Betula alleghaniensis",
        "role": "Tree, large",
        "light": "Upland forest palette",
        "soil": "Mesic–Wet",
        "community": "Upland forest",
        "height": "50-75'",
        "bloom": "",
        "page": 19
      },
      {
        "name": "Paper Birch",
        "latin": "Betula papyrifera",
        "role": "Tree, large",
        "light": "Upland forest palette",
        "soil": "Mesic",
        "community": "Upland forest",
        "height": "50-70'",
        "bloom": "",
        "page": 19
      },
      {
        "name": "Bitternut Hickory",
        "latin": "Carya cordiformis",
        "role": "Tree, large",
        "light": "Upland forest palette",
        "soil": "Mesic",
        "community": "Upland forest",
        "height": "50-80'",
        "bloom": "",
        "page": 19
      },
      {
        "name": "Pignut Hickory",
        "latin": "Carya glabra",
        "role": "Tree, large",
        "light": "Upland forest palette",
        "soil": "Dry–Mesic",
        "community": "Upland forest",
        "height": "50-80'",
        "bloom": "",
        "page": 19
      },
      {
        "name": "Shagbark Hickory",
        "latin": "Carya ovata",
        "role": "Tree, large",
        "light": "Upland forest palette",
        "soil": "Mesic",
        "community": "Upland forest",
        "height": "60-80'",
        "bloom": "",
        "page": 19
      },
      {
        "name": "Eastern White Pine",
        "latin": "Pinus strobus",
        "role": "Tree, large",
        "light": "Upland forest palette",
        "soil": "Dry–Mesic",
        "community": "Upland forest",
        "height": "80-150'",
        "bloom": "",
        "page": 19
      },
      {
        "name": "Black Cherry",
        "latin": "Prunus serotina",
        "role": "Tree, large",
        "light": "Upland forest palette",
        "soil": "Mesic",
        "community": "Upland forest",
        "height": "50-80'",
        "bloom": "",
        "page": 19
      },
      {
        "name": "White Oak",
        "latin": "Quercus alba",
        "role": "Tree, large",
        "light": "Upland forest palette",
        "soil": "Dry–Mesic",
        "community": "Upland forest",
        "height": "60-100'",
        "bloom": "",
        "page": 19
      },
      {
        "name": "Black Oak",
        "latin": "Quercus velutina",
        "role": "Tree, large",
        "light": "Upland forest palette",
        "soil": "Dry–Mesic",
        "community": "Upland forest",
        "height": "50-80'",
        "bloom": "",
        "page": 19
      },
      {
        "name": "Striped Maple",
        "latin": "Acer pensylvanicum",
        "role": "Tree, small",
        "light": "Upland forest palette",
        "soil": "Mesic",
        "community": "Upland forest",
        "height": "15-25'",
        "bloom": "",
        "page": 19
      },
      {
        "name": "Witch Hazel",
        "latin": "Hamamelis virginiana",
        "role": "Tree, small",
        "light": "Upland forest palette",
        "soil": "Mesic",
        "community": "Upland forest",
        "height": "15-20'",
        "bloom": "",
        "page": 19
      },
      {
        "name": "Hophornbeam",
        "latin": "Ostrya virginiana",
        "role": "Tree, small",
        "light": "Upland forest palette",
        "soil": "Dry–Mesic",
        "community": "Upland forest",
        "height": "25-40'",
        "bloom": "",
        "page": 19
      },
      {
        "name": "Black walnut",
        "latin": "Juglans nigra",
        "role": "Edible nuts",
        "light": "Sun",
        "soil": "Mesic",
        "community": "Floodplain forest",
        "height": "50-75'",
        "bloom": "May",
        "page": 20
      },
      {
        "name": "American basswood",
        "latin": "Tilia americana",
        "role": "Fragrant flowers",
        "light": "Part shade",
        "soil": "Mesic",
        "community": "Floodplain forest",
        "height": "60-80'",
        "bloom": "Jun",
        "page": 20
      },
      {
        "name": "Bitternut hickory",
        "latin": "Carya cordiformis",
        "role": "Golden buds",
        "light": "Sun/Part shade",
        "soil": "Mesic",
        "community": "Floodplain forest",
        "height": "50-80'",
        "bloom": "Apr-May",
        "page": 20
      },
      {
        "name": "Hackberry",
        "latin": "Celtis occidentalis",
        "role": "Purple fruits",
        "light": "Sun/Part shade",
        "soil": "Mesic",
        "community": "Floodplain forest",
        "height": "40-60'",
        "bloom": "Apr-May",
        "page": 20
      },
      {
        "name": "American hornbeam",
        "latin": "Carpinus caroliniana",
        "role": "Muscular bark",
        "light": "Part shade/Sh",
        "soil": "Mesic",
        "community": "Floodplain forest",
        "height": "20-35'",
        "bloom": "Apr-May",
        "page": 20
      },
      {
        "name": "Hophornbeam",
        "latin": "Ostrya virginiana",
        "role": "Hop-like fruit",
        "light": "Part shade",
        "soil": "Mesic",
        "community": "Floodplain forest",
        "height": "25-40'",
        "bloom": "Apr-May",
        "page": 20
      },
      {
        "name": "Gray dogwood",
        "latin": "Cornus racemosa",
        "role": "White berries",
        "light": "Sun/Part shade",
        "soil": "Mesic",
        "community": "Floodplain forest",
        "height": "8-15'",
        "bloom": "May-Jun",
        "page": 20
      },
      {
        "name": "Woodland sedge",
        "latin": "Carex blanda",
        "role": "Fine texture",
        "light": "Part shade/Sh",
        "soil": "Mesic",
        "community": "Floodplain forest",
        "height": "1-2'",
        "bloom": "Apr-May",
        "page": 20
      },
      {
        "name": "White snakeroot",
        "latin": "Ageratina altissima",
        "role": "Late nectar",
        "light": "Part shade/Sh",
        "soil": "Mesic",
        "community": "Floodplain forest",
        "height": "2-5'",
        "bloom": "Aug-Oct",
        "page": 20
      },
      {
        "name": "Solomon's seal",
        "latin": "Polygonatum biflorum",
        "role": "Blue-black berries",
        "light": "Part shade/Sh",
        "soil": "Mesic",
        "community": "Floodplain forest",
        "height": "1-3'",
        "bloom": "Apr-May",
        "page": 20
      },
      {
        "name": "Jewelweed",
        "latin": "Impatiens capensis",
        "role": "Seed dispersal",
        "light": "Part shade",
        "soil": "Mesic",
        "community": "Floodplain forest",
        "height": "2-5'",
        "bloom": "Jul-Sep",
        "page": 20
      },
      {
        "name": "New England aster",
        "latin": "Symphyotrichum novae- angliae",
        "role": "Late season bloom",
        "light": "Sun",
        "soil": "Mesic",
        "community": "Floodplain forest",
        "height": "3-6'",
        "bloom": "Aug-Oct",
        "page": 20
      },
      {
        "name": "Ostrich fern",
        "latin": "Matteuccia struthiopteris",
        "role": "Architectural form",
        "light": "Part shade/Sh",
        "soil": "Mesic",
        "community": "Floodplain forest",
        "height": "3-5'",
        "bloom": "None",
        "page": 20
      },
      {
        "name": "American elm",
        "latin": "Ulmus americana",
        "role": "Vase form",
        "light": "Sun/Part shade",
        "soil": "Mesic–Wet",
        "community": "Floodplain forest",
        "height": "60-80'",
        "bloom": "Mar-Apr",
        "page": 20
      },
      {
        "name": "Boxelder",
        "latin": "Acer negundo",
        "role": "Early nectar source",
        "light": "Sun/Part shade",
        "soil": "Mesic–Wet",
        "community": "Floodplain forest",
        "height": "30-60'",
        "bloom": "Mar-Apr",
        "page": 20
      },
      {
        "name": "Spicebush",
        "latin": "Lindera benzoin",
        "role": "Red berries",
        "light": "Part shade",
        "soil": "Mesic–Wet",
        "community": "Floodplain forest",
        "height": "6-12'",
        "bloom": "Apr",
        "page": 20
      },
      {
        "name": "American elderberry",
        "latin": "Sambucus canadensis",
        "role": "Purple berries",
        "light": "Sun/Part shade",
        "soil": "Mesic–Wet",
        "community": "Floodplain forest",
        "height": "5-12'",
        "bloom": "Jun-Jul",
        "page": 20
      },
      {
        "name": "Red Elderberry",
        "latin": "Sambucus racemosa",
        "role": "Red berries",
        "light": "Sun/Part shade",
        "soil": "Mesic–Wet",
        "community": "Floodplain forest",
        "height": "6–12'",
        "bloom": "Apr–May",
        "page": 20
      },
      {
        "name": "Arrowwood viburnum",
        "latin": "Viburnum dentatum",
        "role": "Blue fruits",
        "light": "Part shade/Sun",
        "soil": "Mesic–Wet",
        "community": "Floodplain forest",
        "height": "6-10'",
        "bloom": "May-Jun",
        "page": 20
      },
      {
        "name": "Riverbank wild rye",
        "latin": "Elymus riparius",
        "role": "Winter seed heads",
        "light": "Sun/Part shade",
        "soil": "Mesic–Wet",
        "community": "Floodplain forest",
        "height": "3-5'",
        "bloom": "Jul-Aug",
        "page": 20
      },
      {
        "name": "Jack-in-the-pulpit",
        "latin": "Arisaema triphyllum",
        "role": "Red berries",
        "light": "Part shade/Sh",
        "soil": "Mesic–Wet",
        "community": "Floodplain forest",
        "height": "1-3'",
        "bloom": "Apr-May",
        "page": 20
      },
      {
        "name": "Virginia bluebells",
        "latin": "Mertensia virginica",
        "role": "Spring ephemeral",
        "light": "Part shade",
        "soil": "Mesic–Wet",
        "community": "Floodplain forest",
        "height": "1-2'",
        "bloom": "Apr-May",
        "page": 20
      },
      {
        "name": "Rough goldenrod",
        "latin": "Solidago rugosa",
        "role": "Winter seed heads",
        "light": "Sun/Part shade",
        "soil": "Mesic–Wet",
        "community": "Floodplain forest",
        "height": "3-5'",
        "bloom": "Aug-Oct",
        "page": 20
      },
      {
        "name": "Silver maple",
        "latin": "Acer saccharinum",
        "role": "Yellow fall color",
        "light": "Sun/Part shade",
        "soil": "Wet",
        "community": "Floodplain forest",
        "height": "60-90'",
        "bloom": "Mar-Apr",
        "page": 20
      },
      {
        "name": "American sycamore",
        "latin": "Platanus occidentalis",
        "role": "Exfoliating bark",
        "light": "Sun",
        "soil": "Wet",
        "community": "Floodplain forest",
        "height": "75-100'",
        "bloom": "Apr-May",
        "page": 20
      },
      {
        "name": "Eastern cottonwood",
        "latin": "Populus deltoides",
        "role": "Fast-growing",
        "light": "Sun",
        "soil": "Wet",
        "community": "Floodplain forest",
        "height": "70-100'",
        "bloom": "Mar-Apr",
        "page": 20
      },
      {
        "name": "Green ash",
        "latin": "Fraxinus pennsylvanica",
        "role": "Yellow fall color",
        "light": "Sun/Part shade",
        "soil": "Wet",
        "community": "Floodplain forest",
        "height": "50-70'",
        "bloom": "Apr-May",
        "page": 20
      },
      {
        "name": "Silky dogwood",
        "latin": "Cornus amomum",
        "role": "Blue fruits",
        "light": "Part shade/Sun",
        "soil": "Wet",
        "community": "Floodplain forest",
        "height": "6-12'",
        "bloom": "May-Jun",
        "page": 20
      },
      {
        "name": "Winterberry",
        "latin": "Ilex verticillata",
        "role": "Red winter berries",
        "light": "Sun/Part shade",
        "soil": "Wet",
        "community": "Floodplain forest",
        "height": "6-10'",
        "bloom": "May-Jun",
        "page": 20
      },
      {
        "name": "Tussock sedge",
        "latin": "Carex stricta",
        "role": "Winter structure",
        "light": "Sun/Part shade",
        "soil": "Wet",
        "community": "Floodplain forest",
        "height": "2-3'",
        "bloom": "Apr-May",
        "page": 20
      },
      {
        "name": "Swamp milkweed",
        "latin": "Asclepias incarnata",
        "role": "Seed pods",
        "light": "Sun",
        "soil": "Wet",
        "community": "Floodplain forest",
        "height": "3-5'",
        "bloom": "Jul-Aug",
        "page": 20
      },
      {
        "name": "Boneset",
        "latin": "Eupatorium perfoliatum",
        "role": "Winter seed heads",
        "light": "Sun/Part shade",
        "soil": "Wet",
        "community": "Floodplain forest",
        "height": "3-5'",
        "bloom": "Jul-Sep",
        "page": 20
      },
      {
        "name": "Sensitive fern",
        "latin": "Onoclea sensibilis",
        "role": "Winter fertile fronds",
        "light": "Part shade/Sh",
        "soil": "Wet",
        "community": "Floodplain forest",
        "height": "2-4'",
        "bloom": "None",
        "page": 20
      },
      {
        "name": "Red Maple",
        "latin": "Acer rubrum",
        "role": "General restoration canopy",
        "light": "Sun/Part shade",
        "soil": "Mesic–Wet",
        "community": "Screens",
        "height": "40–60",
        "bloom": "",
        "page": 25
      },
      {
        "name": "Black Gum",
        "latin": "Nyssa sylvatica",
        "role": "Seasonal color, wildlife fruit",
        "light": "Sun/Part shade",
        "soil": "Dry–Wet",
        "community": "Screens",
        "height": "30–50",
        "bloom": "",
        "page": 25
      },
      {
        "name": "White Oak",
        "latin": "Quercus alba",
        "role": "Canopy, wildlife habitat",
        "light": "Full sun",
        "soil": "Dry–Mesic",
        "community": "Screens",
        "height": "60–80",
        "bloom": "",
        "page": 25
      },
      {
        "name": "Red Oak",
        "latin": "Quercus rubra",
        "role": "Long-term canopy, nuts",
        "light": "Sun/Part shade",
        "soil": "Dry–Mesic",
        "community": "Screens",
        "height": "60–75",
        "bloom": "",
        "page": 25
      },
      {
        "name": "American Hornbeam",
        "latin": "Carpinus caroliniana",
        "role": "Woodland transition",
        "light": "Part shade",
        "soil": "Mesic",
        "community": "Screens",
        "height": "20–35",
        "bloom": "",
        "page": 25
      },
      {
        "name": "American Hophornbeam",
        "latin": "Ostrya virginiana",
        "role": "Woodland structure, resilient understory canopy",
        "light": "Sun/Part shade",
        "soil": "Dry–Mesic",
        "community": "Screens",
        "height": "30–45",
        "bloom": "",
        "page": 25
      },
      {
        "name": "Witch Hazel",
        "latin": "Hamamelis virginiana",
        "role": "Late-season flowers",
        "light": "Part shade",
        "soil": "Dry–Mesic",
        "community": "Screens",
        "height": "15–20",
        "bloom": "",
        "page": 25
      },
      {
        "name": "Arrowwood Viburnum",
        "latin": "Viburnum dentatum",
        "role": "Screening, berries",
        "light": "Sun/Part shade",
        "soil": "Mesic",
        "community": "Screens",
        "height": "8–12",
        "bloom": "",
        "page": 25
      },
      {
        "name": "Blackhaw Viburnum",
        "latin": "Viburnum prunifolium",
        "role": "Wildlife fruit, structure",
        "light": "Sun/Part shade",
        "soil": "Dry–Mesic",
        "community": "Screens",
        "height": "12–15",
        "bloom": "",
        "page": 25
      },
      {
        "name": "New Jersey Tea",
        "latin": "Ceanothus americanus",
        "role": "Nitrogen fixer, pollinators",
        "light": "Sun",
        "soil": "Dry",
        "community": "Screens",
        "height": "2–4",
        "bloom": "",
        "page": 25
      },
      {
        "name": "Sweetfern",
        "latin": "Comptonia peregrina",
        "role": "Nitrogen fixer, erosion control",
        "light": "Sun",
        "soil": "Dry",
        "community": "Screens",
        "height": "2–5",
        "bloom": "",
        "page": 25
      },
      {
        "name": "Silky Dogwood",
        "latin": "Cornus amomum",
        "role": "Wet edge habitat",
        "light": "Sun/Part shade",
        "soil": "Mesic–Wet",
        "community": "Screens",
        "height": "6–10",
        "bloom": "",
        "page": 25
      },
      {
        "name": "Gray Dogwood",
        "latin": "Cornus racemosa",
        "role": "Colony-forming edge",
        "light": "Sun/Part shade",
        "soil": "Dry–Mesic",
        "community": "Screens",
        "height": "8–12",
        "bloom": "",
        "page": 25
      },
      {
        "name": "Eastern Redbud",
        "latin": "Cercis canadensis",
        "role": "Early blooms",
        "light": "Sun/Part shade",
        "soil": "Mesic",
        "community": "Screens",
        "height": "20–30",
        "bloom": "",
        "page": 25
      },
      {
        "name": "Flowering Dogwood 'Constellation'",
        "latin": "Cornus × 'Constellation'",
        "role": "Spring flowers",
        "light": "Sun/Part shade",
        "soil": "Mesic",
        "community": "Screens",
        "height": "20–25",
        "bloom": "",
        "page": 25
      },
      {
        "name": "American Persimmon",
        "latin": "Diospyros virginiana",
        "role": "Fall color, winter interest and wildlife fruit",
        "light": "Sun",
        "soil": "Dry–Mesic",
        "community": "Screens",
        "height": "35–60",
        "bloom": "",
        "page": 25
      },
      {
        "name": "Pawpaw",
        "latin": "Asimina triloba",
        "role": "Colonizing and foliage interest",
        "light": "Part shade/Sun",
        "soil": "Mesic",
        "community": "Screens",
        "height": "15–30",
        "bloom": "",
        "page": 25
      },
      {
        "name": "Shrubby St. John's Wort",
        "latin": "Hypericum prolificum",
        "role": "Summer bloom, pollinators",
        "light": "Sun",
        "soil": "Dry–Mesic",
        "community": "Screens",
        "height": "3–4",
        "bloom": "",
        "page": 25
      },
      {
        "name": "Virginia Sweetspire",
        "latin": "Itea virginica",
        "role": "Long bloom, fall color",
        "light": "Sun/Part shade",
        "soil": "Mesic–Wet",
        "community": "Screens",
        "height": "3–5",
        "bloom": "",
        "page": 25
      },
      {
        "name": "Northern Bayberry",
        "latin": "Morella pensylvanica",
        "role": "Wildlife fruit, screening",
        "light": "Sun",
        "soil": "Dry",
        "community": "Screens",
        "height": "5–10",
        "bloom": "",
        "page": 25
      },
      {
        "name": "Ninebark",
        "latin": "Physocarpus opulifolius",
        "role": "Flowers, bark interest",
        "light": "Sun/Part shade",
        "soil": "Dry–Mesic",
        "community": "Screens",
        "height": "6–10",
        "bloom": "",
        "page": 25
      },
      {
        "name": "Highbush Blueberry",
        "latin": "Vaccinium corymbosum",
        "role": "Pollinators, wildlife fruit",
        "light": "Sun/Part shade",
        "soil": "Mesic",
        "community": "Screens",
        "height": "6–12",
        "bloom": "",
        "page": 25
      },
      {
        "name": "Black Chokeberry",
        "latin": "Aronia melanocarpa",
        "role": "Fall color",
        "light": "Sun/Part shade",
        "soil": "Dry–Wet",
        "community": "Screens",
        "height": "3–6",
        "bloom": "",
        "page": 25
      },
      {
        "name": "American Plum",
        "latin": "Prunus americana",
        "role": "Early blooms and dense shrub",
        "light": "Sun",
        "soil": "Dry–Mesic",
        "community": "Screens",
        "height": "15–25",
        "bloom": "",
        "page": 25
      },
      {
        "name": "American Elderberry",
        "latin": "Sambucus canadensis",
        "role": "Pollinators, wildlife fruit",
        "light": "Sun/Part shade",
        "soil": "Mesic–Wet",
        "community": "Screens",
        "height": "6–12",
        "bloom": "",
        "page": 25
      },
      {
        "name": "Wentworth Highbush Cranberry",
        "latin": "Viburnum trilobum 'Wentworth'",
        "role": "Pollinators, wildlife fruit",
        "light": "Sun/Part shade",
        "soil": "Mesic",
        "community": "Screens",
        "height": "8–12",
        "bloom": "",
        "page": 25
      },
      {
        "name": "Eastern Red Cedar",
        "latin": "Juniperus virginiana",
        "role": "Bird habitat, forage",
        "light": "Sun",
        "soil": "Dry",
        "community": "Screens",
        "height": "30–50",
        "bloom": "",
        "page": 25
      },
      {
        "name": "White Spruce",
        "latin": "Picea glauca",
        "role": "Primary evergreen screening, windbreak",
        "light": "Sun",
        "soil": "Mesic",
        "community": "Screens",
        "height": "40–60",
        "bloom": "",
        "page": 25
      },
      {
        "name": "Eastern White Pine",
        "latin": "Pinus strobus",
        "role": "Fast-growing evergreen canopy",
        "light": "Sun/Part shade",
        "soil": "Dry–Mesic",
        "community": "Screens",
        "height": "50–80",
        "bloom": "",
        "page": 25
      },
      {
        "name": "Northern White Cedar",
        "latin": "Thuja occidentalis",
        "role": "Narrow evergreen screen",
        "light": "Sun/Part shade",
        "soil": "Mesic–Wet",
        "community": "Screens",
        "height": "30–50",
        "bloom": "",
        "page": 25
      },
      {
        "name": "Inkberry Holly",
        "latin": "Ilex glabra",
        "role": "Low evergreen massing",
        "light": "Sun/Part shade",
        "soil": "Mesic–Wet",
        "community": "Screens",
        "height": "5–8",
        "bloom": "",
        "page": 25
      },
      {
        "name": "American Holly",
        "latin": "Ilex opaca",
        "role": "Evergreen understory, winter berries",
        "light": "Sun/Part shade",
        "soil": "Mesic",
        "community": "Screens",
        "height": "20–35",
        "bloom": "",
        "page": 25
      },
      {
        "name": "Winterberry Holly",
        "latin": "Ilex verticillata",
        "role": "Winter berries, seasonal interest",
        "light": "Sun/Part shade",
        "soil": "Mesic–Wet",
        "community": "Screens",
        "height": "6–10",
        "bloom": "",
        "page": 25
      },
      {
        "name": "Common Juniper",
        "latin": "Juniperus communis",
        "role": "Low evergreen cover",
        "light": "Shade",
        "soil": "Dry",
        "community": "Screens",
        "height": "2–4",
        "bloom": "",
        "page": 25
      },
      {
        "name": "Redbud",
        "latin": "Cercis canadensis",
        "role": "Pink spring flowers on bare branches; heart-shaped foliage; seed pods",
        "light": "Part shade",
        "soil": "Mesic–Dry",
        "community": "Residential gardens",
        "height": "20'",
        "bloom": "May",
        "page": 29
      },
      {
        "name": "Fringe tree",
        "latin": "Chionanthus virginicus",
        "role": "Fragrant white fringe flowers; blue-black fruit on female plants; yellow fall color",
        "light": "Part shade/Sun",
        "soil": "Wet–Mesic–Dry",
        "community": "Residential gardens",
        "height": "12-20'",
        "bloom": "Spring",
        "page": 29
      },
      {
        "name": "Thornless cockspur hawthorn",
        "latin": "Crataegus crus-galli var. inermis",
        "role": "White spring flowers; red fruit; orange-red fall color",
        "light": "Sun",
        "soil": "Wet–Mesic–Dry",
        "community": "Residential gardens",
        "height": "20-35'",
        "bloom": "May-June",
        "page": 29
      },
      {
        "name": "Sweetbay magnolia",
        "latin": "Magnolia virginiana",
        "role": "Fragrant white flowers; red seed cones; semi- evergreen foliage in mild winters",
        "light": "Part shade",
        "soil": "Wet–Mesic",
        "community": "Residential gardens",
        "height": "10-35'",
        "bloom": "May-June",
        "page": 29
      },
      {
        "name": "Bottlebrush buckeye",
        "latin": "Aesculus parviflora",
        "role": "Large white flower panicles; yellow fall color; winter structure",
        "light": "Part shade/Sh",
        "soil": "Mesic",
        "community": "Residential gardens",
        "height": "8-12'",
        "bloom": "June-July",
        "page": 29
      },
      {
        "name": "Sweet pepperbush",
        "latin": "Clethra alnifolia",
        "role": "Fragrant midsummer flowers; golden fall color; persistent seed capsules",
        "light": "Part shade/Sun",
        "soil": "Wet–Mesic",
        "community": "Residential gardens",
        "height": "3-8'",
        "bloom": "July-August",
        "page": 29
      },
      {
        "name": "Red osier dogwood",
        "latin": "Cornus sericea",
        "role": "White spring flowers; white berries; red winter stems",
        "light": "Part shade/Sun",
        "soil": "Wet–Mesic",
        "community": "Residential gardens",
        "height": "6-10'",
        "bloom": "Spring",
        "page": 29
      },
      {
        "name": "Dwarf fothergilla",
        "latin": "Fothergilla gardenii",
        "role": "White bottlebrush flowers; blue-green foliage; brilliant orange-red fall color",
        "light": "Part shade/Sun",
        "soil": "Mesic–Wet",
        "community": "Residential gardens",
        "height": "2-3'",
        "bloom": "April-May",
        "page": 29
      },
      {
        "name": "Shrubby St. John's wort",
        "latin": "Hypericum prolificum",
        "role": "Long yellow summer bloom; attractive seed capsules; yellow fall color",
        "light": "Sun/Part shade",
        "soil": "Dry–Mesic",
        "community": "Residential gardens",
        "height": "3-5'",
        "bloom": "July-Aug",
        "page": 29
      },
      {
        "name": "Inkberry",
        "latin": "Ilex glabra",
        "role": "Evergreen foliage; black berries on female plants",
        "light": "Part shade/Sun",
        "soil": "Wet–Mesic",
        "community": "Residential gardens",
        "height": "5-8'",
        "bloom": "May-June",
        "page": 29
      },
      {
        "name": "Winterberry",
        "latin": "Ilex verticillata",
        "role": "Red berries through winter; yellow fall foliage",
        "light": "Part shade/Sun",
        "soil": "Wet–Mesic",
        "community": "Residential gardens",
        "height": "4-10'",
        "bloom": "Spring",
        "page": 29
      },
      {
        "name": "Mountain laurel",
        "latin": "Kalmia latifolia",
        "role": "Evergreen foliage; showy late-spring flower clusters",
        "light": "Shade/Part shade/S un",
        "soil": "Wet–Mesic–Dry",
        "community": "Residential gardens",
        "height": "5-15'",
        "bloom": "May-June",
        "page": 29
      },
      {
        "name": "Swamp azalea",
        "latin": "Rhododendron viscosum",
        "role": "Fragrant white summer flowers; red-orange fall color",
        "light": "Part shade/Sun",
        "soil": "Mesic–Wet",
        "community": "Residential gardens",
        "height": "3-5'",
        "bloom": "May-July",
        "page": 29
      },
      {
        "name": "American red raspberry",
        "latin": "Rubus idaeus var. strigosa",
        "role": "White spring flowers; red summer berries; cane structure",
        "light": "Part shade/Sun",
        "soil": "Mesic",
        "community": "Residential gardens",
        "height": "3-6'",
        "bloom": "April-May",
        "page": 29
      },
      {
        "name": "Purple-flowering raspberry",
        "latin": "Rubus odoratus",
        "role": "Large pink flowers; maple-like foliage; ornamental fruit; yellow fall color",
        "light": "Part shade/Sun",
        "soil": "Mesic",
        "community": "Residential gardens",
        "height": "4-6'",
        "bloom": "June-Aug",
        "page": 29
      },
      {
        "name": "Dwarf Korean lilac",
        "latin": "Syringa meyeri 'Palabin'",
        "role": "Fragrant pink-lilac spring flowers; compact shrub form",
        "light": "Sun",
        "soil": "Mesic–Dry",
        "community": "Residential gardens",
        "height": "4-5'",
        "bloom": "April-May",
        "page": 29
      },
      {
        "name": "Black cohosh",
        "latin": "Actaea racemosa",
        "role": "Tall white flower wands; dark seed pods; bold woodland foliage",
        "light": "Shade/Part shade",
        "soil": "Wet–Mesic",
        "community": "Residential gardens",
        "height": "4-6'",
        "bloom": "July",
        "page": 29
      },
      {
        "name": "Anise hyssop",
        "latin": "Agastache foeniculum",
        "role": "Long summer bloom; aromatic foliage; persistent seed heads",
        "light": "Part shade/Sun",
        "soil": "Mesic–Dry",
        "community": "Residential gardens",
        "height": "2-4'",
        "bloom": "June-Sept",
        "page": 29
      },
      {
        "name": "Blue star",
        "latin": "Amsonia hubrichtii",
        "role": "Soft blue spring flowers; fine-textured foliage; golden fall color",
        "light": "Part shade/Sun",
        "soil": "Mesic–Dry",
        "community": "Residential gardens",
        "height": "2-3'",
        "bloom": "April-May",
        "page": 29
      },
      {
        "name": "Purple coneflower",
        "latin": "Echinacea purpurea",
        "role": "Summer flowers; winter seed cones; strong pollinator and bird value",
        "light": "Part shade/Sun",
        "soil": "Mesic–Dry",
        "community": "Residential gardens",
        "height": "2-4'",
        "bloom": "July-Aug",
        "page": 29
      },
      {
        "name": "Globe thistle",
        "latin": "Echinops ritro",
        "role": "Globe-shaped blue flowers; architectural seed heads",
        "light": "Part shade/Sun",
        "soil": "Mesic–Dry",
        "community": "Residential gardens",
        "height": "2.5-4'",
        "bloom": "July-Sept",
        "page": 29
      },
      {
        "name": "Blue flag iris",
        "latin": "Iris versicolor",
        "role": "Violet spring flowers; sword-like foliage; winter seed pods",
        "light": "Part shade/Sun",
        "soil": "Wet–Mesic",
        "community": "Residential gardens",
        "height": "2-2.5'",
        "bloom": "May-June",
        "page": 29
      },
      {
        "name": "Blazing Star",
        "latin": "Liatris spicata",
        "role": "Vertical purple flower spikes; winter seed heads",
        "light": "Sun",
        "soil": "Mesic",
        "community": "Residential gardens",
        "height": "2-4'",
        "bloom": "Aug",
        "page": 29
      },
      {
        "name": "Blue cardinal flower",
        "latin": "Lobelia siphilitica",
        "role": "Late blue flowers; upright winter stems",
        "light": "Part shade/Sun",
        "soil": "Wet–Mesic",
        "community": "Residential gardens",
        "height": "2-3'",
        "bloom": "July-Sept",
        "page": 29
      },
      {
        "name": "Beebalm",
        "latin": "Monarda spp.",
        "role": "Showy summer blooms, colorful bracts (some species), aromatic foliage, persistent seed heads",
        "light": "Part shade/Sun",
        "soil": "Dry–Mesic–Wet",
        "community": "Residential gardens",
        "height": "2–4'",
        "bloom": "June–August",
        "page": 29
      },
      {
        "name": "Hairy beardtongue",
        "latin": "Penstemon hirsutus",
        "role": "Lavender spring flowers; winter seed heads",
        "light": "Part shade/Sun",
        "soil": "Wet–Mesic–Dry",
        "community": "Residential gardens",
        "height": "1.5-2'",
        "bloom": "May-June",
        "page": 29
      },
      {
        "name": "Solomon's seal",
        "latin": "Polygonatum biflorum",
        "role": "Arching stems; spring flowers; dark blue berries; yellow fall color",
        "light": "Part shade/Sun",
        "soil": "Wet–Mesic",
        "community": "Residential gardens",
        "height": "1-3'",
        "bloom": "April-May",
        "page": 29
      },
      {
        "name": "Mountain mint",
        "latin": "Pycnanthemum muticum",
        "role": "Silver-blue bracts; aromatic foliage; late-summer bloom",
        "light": "Part shade/Sun",
        "soil": "Wet–Mesic",
        "community": "Residential gardens",
        "height": "1-3'",
        "bloom": "July-Sept",
        "page": 29
      },
      {
        "name": "Brown-eyed Susan",
        "latin": "Rudbeckia triloba",
        "role": "Abundant yellow flowers; winter seed heads",
        "light": "Part shade/Sun",
        "soil": "Mesic",
        "community": "Residential gardens",
        "height": "2-3'",
        "bloom": "July-Oct",
        "page": 29
      },
      {
        "name": "Hoary skullcap",
        "latin": "Scutellaria incana",
        "role": "Late blue-violet flowers; seed heads; soft gray-green foliage",
        "light": "Part shade/Sun",
        "soil": "Mesic–Dry",
        "community": "Residential gardens",
        "height": "2-3'",
        "bloom": "July-Sept",
        "page": 29
      },
      {
        "name": "Blue-eyed grass",
        "latin": "Sisyrinchium angustifolium",
        "role": "Small blue spring flowers; grass-like texture",
        "light": "Part shade/Sun",
        "soil": "Mesic",
        "community": "Residential gardens",
        "height": "1-1.5'",
        "bloom": "May-June",
        "page": 29
      },
      {
        "name": "Sensitive fern",
        "latin": "Onoclea sensibilis",
        "role": "Bold green foliage; persistent bead-like fertile fronds",
        "light": "Part shade/Sun",
        "soil": "Wet–Mesic",
        "community": "Residential gardens",
        "height": "3-4'",
        "bloom": "None",
        "page": 29
      },
      {
        "name": "Interrupted fern",
        "latin": "Osmunda claytoniana",
        "role": "Bold vase-shaped foliage; distinctive interrupted fertile fronds; golden fall color",
        "light": "Part shade/Sun",
        "soil": "Wet–Mesic",
        "community": "Residential gardens",
        "height": "2-3'",
        "bloom": "None",
        "page": 29
      },
      {
        "name": "Cinnamon fern",
        "latin": "Osmundastrum cinnamomeum",
        "role": "Cinnamon-colored fertile fronds; bold wetland texture; golden fall color",
        "light": "Shade/Part shade",
        "soil": "Wet–Mesic",
        "community": "Residential gardens",
        "height": "2-3'",
        "bloom": "None",
        "page": 29
      },
      {
        "name": "Canadian anemone",
        "latin": "Anemone canadensis",
        "role": "White spring flowers; spreading groundcover; seed heads",
        "light": "Part shade/Sun",
        "soil": "Wet–Mesic",
        "community": "Residential gardens",
        "height": "1-2'",
        "bloom": "April-June",
        "page": 29
      },
      {
        "name": "Wild strawberry",
        "latin": "Fragaria virginiana",
        "role": "White spring flowers; red fruit; red fall foliage",
        "light": "Part shade/Sun",
        "soil": "Mesic–Dry",
        "community": "Residential gardens",
        "height": ".25-. 75'",
        "bloom": "April-May",
        "page": 29
      },
      {
        "name": "Cranesbill geranium",
        "latin": "Geranium maculatum",
        "role": "Pink spring flowers; mounded foliage; fall color",
        "light": "Part shade/Sun",
        "soil": "Mesic",
        "community": "Residential gardens",
        "height": "1.5-2'",
        "bloom": "April-May",
        "page": 29
      },
      {
        "name": "Heal-all",
        "latin": "Prunella vulgaris ssp. lanceolata",
        "role": "Low purple flowers; long bloom; spreading groundcover",
        "light": "Part shade/Sun",
        "soil": "Mesic–Dry",
        "community": "Residential gardens",
        "height": ".5-1'",
        "bloom": "May-Oct",
        "page": 29
      },
      {
        "name": "Little bluestem",
        "latin": "Schizachyrium scoparium",
        "role": "Blue-green summer blades; copper-orange fall color; winter seed heads",
        "light": "Sun",
        "soil": "Mesic–Dry",
        "community": "Residential gardens",
        "height": "2-4'",
        "bloom": "Aug-Feb",
        "page": 29
      }
    ],
    "neighbors": [
      {
        "to": "Highbush blueberry · Vaccinium corymbosum",
        "why": "Our guide pairs seasonal garden interest with native fruiting structure. Match blueberry to the soil and moisture conditions of its planting location.",
        "from": "Burning bush"
      },
      {
        "to": "Black chokeberry · Aronia melanocarpa",
        "why": "A native shrub alternative for layered residential planting, with flowers, fruit, and fall color.",
        "from": "Japanese barberry"
      },
      {
        "to": "Little bluestem · Schizachyrium scoparium",
        "why": "A native grass option for a dry, sunny position that connects the residential garden to the meadow palette.",
        "from": "Maiden grass"
      },
      {
        "to": "Golden ragwort · Packera aurea",
        "why": "A native groundcover option included in the guide. Select its location by moisture, light, and the space available for growth.",
        "from": "Periwinkle"
      },
      {
        "to": "Serviceberry · Amelanchier canadensis",
        "why": "A native flowering tree alternative that brings seasonal interest and fruit into the residential landscape.",
        "from": "Callery pear"
      },
      {
        "to": "Red maple · Acer rubrum",
        "why": "Use native canopy structure in place of a tree that can suppress woodland regeneration.",
        "from": "Norway maple"
      },
      {
        "to": "Tall thimbleweed · Anemone virginiana",
        "why": "The guide offers a native flowering perennial alternative to a garden plant that can spread beyond its intended area.",
        "from": "Japanese anemone"
      },
      {
        "to": "Buttonbush · Cephalanthus occidentalis",
        "why": "A flowering native shrub option for a suitable moist or wet location.",
        "from": "Butterfly bush"
      },
      {
        "to": "Virgin’s bower · Clematis virginiana",
        "why": "A native vine alternative; plan its support and growing space as part of the garden.",
        "from": "Sweet autumn clematis"
      },
      {
        "to": "American lily-of-the-valley · Convallaria majuscula",
        "why": "A native woodland alternative included in the project guide.",
        "from": "Lily-of-the-valley"
      },
      {
        "to": "Virginia creeper · Parthenocissus quinquefolia",
        "why": "A native climbing plant option for a location with adequate room and support.",
        "from": "English ivy"
      },
      {
        "to": "Foamflower · Tiarella cordifolia",
        "why": "A native ground-layer plant for a suitable woodland garden position.",
        "from": "Yellow archangel"
      },
      {
        "to": "Arrowwood viburnum · Viburnum dentatum",
        "why": "Native shrub structure, flowers, and fruit for a layered residential edge.",
        "from": "Bush honeysuckles"
      },
      {
        "to": "Blunt mountain mint · Pycnanthemum muticum",
        "why": "A native flowering option in the guide’s herbaceous palette; allow space for spreading growth.",
        "from": "Mint"
      },
      {
        "to": "Wild ginger · Asarum canadense",
        "why": "A native groundcover option for a shaded garden with appropriate moisture.",
        "from": "Japanese pachysandra"
      },
      {
        "to": "Pussy willow · Salix discolor",
        "why": "A native shrub alternative in the guide; choose its site according to available space and moisture.",
        "from": "Running bamboo"
      },
      {
        "to": "Trumpet vine · Campsis radicans",
        "why": "A native vine option that requires a suitable location, support, and ongoing growth management.",
        "from": "Japanese wisteria"
      },
      {
        "to": "Coral honeysuckle · Lonicera sempervirens",
        "why": "A native flowering vine alternative for a garden support.",
        "from": "Chinese wisteria"
      }
    ],
    "careTitle": "Conservation is an ongoing practice.",
    "careIntro": "Restoration is carried forward by repeated observations and different management rhythms across the site. The goal is to support useful change while retaining the habitats the plan intends to protect.",
    "care": [
      {
        "title": "Read what is returning",
        "text": "Map native regeneration and invasive pressure before intervening. Protect desired saplings, identify priority areas, and consider temporary nurseries where existing young trees can be retained for later planting."
      },
      {
        "title": "Establish by condition",
        "text": "Use different approaches for cultivated ground, old fields, wet areas, and emerging forest. Match the amount of disturbance to the vegetation and soil rather than applying one method across the property."
      },
      {
        "title": "Maintain a mosaic",
        "text": "Use rotational meadow and shrubland management to preserve patches of different ages. Time work around wildlife activity and ground conditions; wet soils need particular care to avoid compaction."
      },
      {
        "title": "Connect garden and habitat",
        "text": "Help residents select suitable plants and recognize unwanted spread. Coordinate care around homes, shared greens, trails, and conservation edges so the whole landscape remains connected."
      }
    ],
    "colophon": "Finding Common Ground · Prepared for Columbia Land Conservancy with the landscape goals of Columbia-Greene Habitat for Humanity and Trillium Community Land Trust. Design by Anna Goff and Zaviere Drumm, The Conway School, Spring 2026. The landscape and housing layouts shown are proposals. Full references and image acknowledgments remain in the original plan set below."
  }
};
