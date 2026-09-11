import type {Project} from './projects';
import type {ProjectDetails} from './project-details';
export const planStudies:Project[]=[
  {
    "slug": "sandplan-meadow-and-landscape",
    "title": "Sandplan Meadow and Landscape",
    "category": "Residential design study · Fall 2025",
    "location": "Southampton, Massachusetts",
    "hero": "/studies/sandplan/illustration.webp",
    "summary": "A sandplain meadow oasis, designed for everyday life.",
    "description": "A Conway School residential design study by Zaviere Drumm. Soil, drainage, sunlight, and existing vegetation guide a proposal for accessible circulation, shaded gathering, productive gardens, natural play, and regionally inspired meadow habitat. Explore original site records and proposed drawings.",
    "images": [
      "/plansets/sandplan/page-1.jpg",
      "/plansets/sandplan/page-4.jpg",
      "/plansets/sandplan/page-5.jpg",
      "/plansets/sandplan/page-7.jpg",
      "/plansets/sandplan/page-9.jpg",
      "/plansets/sandplan/page-11.jpg",
      "/plansets/sandplan/page-12.jpg",
      "/plansets/sandplan/page-14.jpg",
      "/plansets/sandplan/page-15.jpg",
      "/plansets/sandplan/page-19.jpg",
      "/plansets/sandplan/page-20.jpg"
    ],
    "captions": [
      "Cover illustration · proposed landscape",
      "Existing conditions · site photographs and plan",
      "Circulation analysis",
      "Soil analysis",
      "Sun and shade analysis",
      "Three alternative concepts",
      "Final design proposal",
      "Carpentry and shade concepts · reference precedents",
      "Rain garden planting plan",
      "South yard plant community",
      "Sandplain meadow planting palette"
    ],
    "tags": [
      "Residential design",
      "Site analysis",
      "Meadows",
      "Age-in-place"
    ],
    "study": true,
    "credit": "Zaviere Drumm · The Conway School · Fall 2025"
  },
  {
    "slug": "bells-pond",
    "title": "Bell’s Pond Conservation Property",
    "category": "Conservation + housing study · Spring 2026",
    "location": "Greenport & Livingston, New York",
    "hero": "/studies/bells-pond/plan.webp",
    "summary": "Conservation, affordable housing, and community access on common ground.",
    "description": "Finding Common Ground is a collaborative Conway School study by Anna Goff and Zaviere Drumm, prepared for Columbia Land Conservancy. It explores shared goals with Columbia-Greene Habitat for Humanity and Trillium Community Land Trust through site analysis, housing siting, ecological restoration, public trails, and a pocket-neighborhood concept.",
    "images": [
      "/plansets/bells-pond/page-1.jpg",
      "/plansets/bells-pond/page-4.jpg",
      "/plansets/bells-pond/page-8.jpg",
      "/plansets/bells-pond/page-10.jpg",
      "/plansets/bells-pond/page-13.jpg",
      "/plansets/bells-pond/page-14.jpg",
      "/plansets/bells-pond/page-16.jpg",
      "/plansets/bells-pond/page-23.jpg",
      "/plansets/bells-pond/page-24.jpg",
      "/plansets/bells-pond/page-27.jpg",
      "/plansets/bells-pond/page-28.jpg",
      "/plansets/bells-pond/page-30.jpg"
    ],
    "captions": [
      "Cover illustration · proposed landscape",
      "Existing conditions · site photographs and inventory",
      "Existing vegetation analysis",
      "Slopes and drainage analysis",
      "Alternative design strategies",
      "Final landscape proposal",
      "Proposed vegetation zones",
      "Bridge and observation deck concept",
      "Wildlife blind concepts and reference precedents",
      "Trillium barn landscape proposal",
      "Trillium pocket-neighborhood concept",
      "Good Neighbor planting guide"
    ],
    "tags": [
      "Conservation",
      "Housing",
      "Trail Design",
      "Site Analysis"
    ],
    "study": true,
    "credit": "Anna Goff & Zaviere Drumm · The Conway School · Spring 2026"
  }
];
export const studyDetails:Record<string,ProjectDetails>={
  "sandplan-meadow-and-landscape": {
    "title": "A sandy site.\nA more generous home.",
    "intro": "A residential landscape plan begins with the conditions already present: a dry, exposed yard, established trees, productive gardens, and an emerging meadow. The Sandplan Meadow and Landscape study connects age-in-place access, family play, shade, and habitat through a site-specific planting strategy.",
    "scope": "Residential design · site analysis · planting · access",
    "status": "Conway School design study · Fall 2025 · Not for construction",
    "pages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ],
    "source": {
      "directory": "/plansets/sandplan",
      "title": "Sandplan Meadow and Landscape",
      "credit": "Zaviere Drumm · The Conway School · Fall 2025",
      "note": "Source: 2025_Drumm_FallFinalSetHigh.pdf. A student landscape design proposal, not for construction and not based on a legal survey. Page numbers here refer to PDF positions; original printed sheet numbers vary. Reference photographs on the sheets are precedents, not photographs of a completed landscape."
    },
    "chapters": [
      {
        "title": "Let the soil set the direction",
        "subtitle": "01 / SOIL, GEOLOGY & WATER",
        "body": "The study describes a roughly 0.95-acre property on a sandy terrace above the Manhan River valley. Its soil analysis records acidic, rapidly draining conditions that shape both planting and water management.",
        "image": "/plansets/sandplan/page-7.jpg",
        "alt": "Let the soil set the direction — original plan-set sheet",
        "page": 7,
        "points": [
          "The study reports an average soil pH of 5.4 and a jar-test estimate of 85–90% sand.",
          "Lean, dry-site plant communities guide the meadow strategy; productive beds receive more targeted care.",
          "Rain barrels and planted runoff areas are proposed as part of the household water system."
        ]
      },
      {
        "title": "Design for everyday comfort",
        "subtitle": "02 / SUN, SHADE & ACCESS",
        "body": "Exposure, solar panels, existing trees, and everyday routes are considered together. The design adds shaded destinations while retaining sunny areas for food production and play.",
        "image": "/plansets/sandplan/page-9.jpg",
        "alt": "Design for everyday comfort — original plan-set sheet",
        "page": 9,
        "points": [
          "A connected loop links arrival, an expanded deck, patios, gardens, and the meadow.",
          "Firm primary paths and a proposed deck ramp respond to age-in-place objectives.",
          "Mown secondary paths allow the more distant meadow routes to change over time."
        ]
      },
      {
        "title": "One plan, many ways to inhabit it",
        "subtitle": "03 / RESIDENTIAL DESIGN RESPONSE",
        "body": "The final proposal brings an entry meadow, rain gardens, natural play spaces, productive planting, and a sandplain meadow into one connected residential landscape.",
        "image": "/plansets/sandplan/page-12.jpg",
        "alt": "One plan, many ways to inhabit it — original plan-set sheet",
        "page": 12,
        "points": [
          "A clearer stone entry and foundation planting establish arrival.",
          "Small bridges cross the proposed rain gardens, with shaded play and gathering nearby.",
          "The existing vegetable garden remains central to a productive landscape of cutting beds, fruit, and edible shrubs."
        ]
      },
      {
        "title": "Build a plant community",
        "subtitle": "04 / HABITAT & STEWARDSHIP",
        "body": "The meadow strategy takes its cues from regional sandplain grasslands. Near the house, pitch pine and scrub oak are proposed to establish a shaded microclimate suited to the dry site.",
        "image": "/plansets/sandplan/page-20.jpg",
        "alt": "Build a plant community — original plan-set sheet",
        "page": 20,
        "points": [
          "Retain and work with the existing meadow beginnings, including purple lovegrass.",
          "Different palettes address rain gardens, entry planting, screening, and the south yard.",
          "Seasonal mowing, selective editing, and path maintenance are integral to the proposed landscape."
        ]
      }
    ],
    "palette": [
      {
        "name": "Sandplain meadow",
        "role": "Dry-site habitat",
        "note": "A grass-and-forb community matched to sandy, exposed conditions."
      },
      {
        "name": "Pitch pine + scrub oak",
        "role": "Shade & regional character",
        "note": "A proposed plant community around backyard gathering spaces."
      },
      {
        "name": "Rain gardens",
        "role": "Water & play",
        "note": "Planted basins and streambed-like features connect runoff and outdoor experience."
      },
      {
        "name": "Stone + compacted paths",
        "role": "Access & longevity",
        "note": "Goshen stone destinations and firm primary paths complement flexible mown routes."
      }
    ],
    "documents": [
      {
        "page": 4,
        "title": "Existing conditions",
        "type": "Analysis",
        "description": "Site inventory, photographs, and existing spatial relationships."
      },
      {
        "page": 5,
        "title": "Circulation & areas of use",
        "type": "Analysis",
        "description": "Daily routes, access, gathering, and working areas."
      },
      {
        "page": 6,
        "title": "Geology & drainage",
        "type": "Analysis",
        "description": "Sand and gravel landforms, groundwater, and roof runoff."
      },
      {
        "page": 7,
        "title": "Soil analysis",
        "type": "Analysis",
        "description": "Soil texture, acidity, and implications for planting."
      },
      {
        "page": 8,
        "title": "Existing vegetation",
        "type": "Analysis",
        "description": "Retained trees, productive planting, and meadow beginnings."
      },
      {
        "page": 9,
        "title": "Sun & shade",
        "type": "Analysis",
        "description": "Solar exposure, seasonal shade, and microclimate."
      },
      {
        "page": 10,
        "title": "Ecological context",
        "type": "Analysis",
        "description": "Regional sandplain communities and habitat opportunities."
      },
      {
        "page": 11,
        "title": "Three design alternatives",
        "type": "Design",
        "description": "Secret Garden, Plant Communities, and Food Forest concepts."
      },
      {
        "page": 12,
        "title": "Final landscape plan",
        "type": "Design",
        "description": "Entry, deck, rain gardens, play, productive planting, and meadow."
      },
      {
        "page": 13,
        "title": "Hardscape & play",
        "type": "Design",
        "description": "Conceptual path assembly, stone, and natural play precedents."
      },
      {
        "page": 14,
        "title": "Carpentry & shade",
        "type": "Design",
        "description": "Arbor, bridges, and meadow shade structure concepts."
      },
      {
        "page": 15,
        "title": "Rain garden palette",
        "type": "Planting",
        "description": "Plant placement and species schedule for rain gardens."
      },
      {
        "page": 16,
        "title": "Entry & foundation palette",
        "type": "Planting",
        "description": "Structure and seasonal planting around the house."
      },
      {
        "page": 17,
        "title": "Front meadow palette",
        "type": "Planting",
        "description": "A meadow matrix surrounding paths and seating."
      },
      {
        "page": 18,
        "title": "Screen planting palette",
        "type": "Planting",
        "description": "Layered privacy planting."
      },
      {
        "page": 19,
        "title": "South yard palette",
        "type": "Planting",
        "description": "Pitch pine–scrub oak planting community."
      },
      {
        "page": 20,
        "title": "Sandplain meadow palette",
        "type": "Planting",
        "description": "Dry-site grasses and flowering plants."
      }
    ]
  },
  "bells-pond": {
    "title": "Shared land.\nCommon ground.",
    "intro": "Finding Common Ground examines how affordable housing, ecological restoration, and public access can coexist on the 143-acre Bell’s Pond site. Analysis of vegetation, water, soils, and circulation guides the relationship between new neighborhoods and a larger conservation landscape.",
    "scope": "Conservation planning · affordable housing · public access",
    "status": "Collaborative Conway School study · Spring 2026 · Proposed design",
    "pages": [
      3,
      4,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32
    ],
    "source": {
      "directory": "/plansets/bells-pond",
      "title": "Finding Common Ground",
      "credit": "Anna Goff & Zaviere Drumm · The Conway School · Spring 2026",
      "note": "Source: 2026_BellsPond_SpringFinalSetHigh.pdf, prepared for Columbia Land Conservancy. This page summarizes the study-stage proposal and partner goals recorded in that document; it does not confirm current ownership, approvals, construction, or housing delivery. Original source and photo credits appear on PDF pages 31–32. PDF positions are used here because printed sheet numbering varies."
    },
    "chapters": [
      {
        "title": "Three organizations, a shared landscape",
        "subtitle": "01 / CONSERVATION & AFFORDABLE HOUSING",
        "body": "The study brings together Columbia Land Conservancy, Columbia-Greene Habitat for Humanity, and Trillium Community Land Trust. It considers two housing areas alongside land intended for public conservation.",
        "image": "/plansets/bells-pond/page-3.jpg",
        "alt": "Three organizations, a shared landscape — original plan-set sheet",
        "page": 3,
        "points": [
          "The source describes approximately 15 acres for each housing organization within the larger 143-acre site.",
          "Habitat’s lot-based housing approach and Trillium’s community land trust model lead to different spatial patterns.",
          "These are the organizations’ goals as recorded in the Spring 2026 study, rather than completed developments."
        ]
      },
      {
        "title": "Find where development belongs",
        "subtitle": "02 / SITE ANALYSIS & SITING",
        "body": "The design directs proposed housing toward flatter land near Route 9 and existing infrastructure, while reading wetlands, drainage, forest, and public access as a connected system.",
        "image": "/plansets/bells-pond/page-10.jpg",
        "alt": "Find where development belongs — original plan-set sheet",
        "page": 10,
        "points": [
          "Soil, vegetation, slope, and watershed maps establish the opportunities and constraints.",
          "The final concept locates housing outside the wetland buffers depicted by the study.",
          "Landscape screening and routes mediate between private homes, public trails, and neighboring uses."
        ]
      },
      {
        "title": "A neighborhood around a common",
        "subtitle": "03 / TRILLIUM POCKET NEIGHBORHOOD",
        "body": "The Trillium concept clusters homes around shared greenspace. Pedestrian connections, concentrated parking, planting, and visible stormwater systems are designed together.",
        "image": "/plansets/bells-pond/page-28.jpg",
        "alt": "A neighborhood around a common — original plan-set sheet",
        "page": 28,
        "points": [
          "Firm, gently graded paths are proposed between homes, parking, gardens, and the conservation trails.",
          "Solar orientation and deciduous shade planting shape seasonal comfort.",
          "Rain gardens, swales, and planted parking islands organize runoff close to its source."
        ]
      },
      {
        "title": "Make conservation part of daily life",
        "subtitle": "04 / TRAILS & PUBLIC EXPERIENCE",
        "body": "The proposal creates a sequence of trails, a bridge and observation deck, gathering spaces, and wildlife-viewing destinations across the conservation land.",
        "image": "/plansets/bells-pond/page-23.jpg",
        "alt": "Make conservation part of daily life — original plan-set sheet",
        "page": 23,
        "points": [
          "The trail concept prioritizes broad access while recognizing the steeper southern terrain.",
          "Public arrival, a pavilion, and screened residential edges clarify where visitors belong.",
          "Boardwalk and crossing concepts remain design studies requiring technical development."
        ]
      },
      {
        "title": "Carry habitat through every boundary",
        "subtitle": "05 / RESTORATION & STEWARDSHIP",
        "body": "A mosaic of forest, meadow, and shrubland provides the long-term ecological structure. The Good Neighbor guide extends this thinking into residential gardens.",
        "image": "/plansets/bells-pond/page-16.jpg",
        "alt": "Carry habitat through every boundary — original plan-set sheet",
        "page": 16,
        "points": [
          "The final proposal emphasizes forest restoration while retaining selected open and transitional habitats.",
          "Vegetative screens add cover and continuity while providing privacy.",
          "Native residential planting, invasive-plant awareness, and ongoing management connect household care to conservation."
        ]
      }
    ],
    "palette": [
      {
        "name": "Forest + floodplain",
        "role": "Restoration framework",
        "note": "Upland and wet forest communities guide the largest restoration areas."
      },
      {
        "name": "Meadow + shrubland",
        "role": "Habitat mosaic",
        "note": "Selected open areas and transitional vegetation diversify the landscape."
      },
      {
        "name": "Native residential planting",
        "role": "Good Neighbor guide",
        "note": "Shade, seasonal interest, and habitat extend through shared and private gardens."
      },
      {
        "name": "Berms + planted swales",
        "role": "Edges & runoff",
        "note": "Layered planting addresses screening, water, and the transition from road to neighborhood."
      }
    ],
    "documents": [
      {
        "page": 3,
        "title": "Partnership & housing models",
        "type": "Context",
        "description": "The three organizations, their shared goals, and different housing approaches."
      },
      {
        "page": 4,
        "title": "Goals & existing conditions",
        "type": "Analysis",
        "description": "Site photography, land uses, buildings, and circulation."
      },
      {
        "page": 7,
        "title": "Ecological value",
        "type": "Analysis",
        "description": "Regional habitat relationships and conservation context."
      },
      {
        "page": 8,
        "title": "Existing vegetation",
        "type": "Analysis",
        "description": "Field, shrubland, woodland, and invasive-plant conditions."
      },
      {
        "page": 9,
        "title": "Soils & surficial geology",
        "type": "Analysis",
        "description": "Wetland, transitional, and upland soil groups."
      },
      {
        "page": 10,
        "title": "Slopes & drainage",
        "type": "Analysis",
        "description": "Landform, drainage networks, and prior site disturbance."
      },
      {
        "page": 11,
        "title": "Regional hydrology",
        "type": "Analysis",
        "description": "Connections to Mud Creek and the larger watershed."
      },
      {
        "page": 12,
        "title": "Trails, views & destinations",
        "type": "Analysis",
        "description": "Existing routes and opportunities for public access."
      },
      {
        "page": 13,
        "title": "Design alternatives",
        "type": "Design",
        "description": "Three approaches to conservation, commons, and education."
      },
      {
        "page": 14,
        "title": "Final landscape plan",
        "type": "Design",
        "description": "Proposed housing areas and a connected conservation landscape."
      },
      {
        "page": 15,
        "title": "Final design features",
        "type": "Design",
        "description": "Public arrival, screening, gathering, and habitat destinations."
      },
      {
        "page": 16,
        "title": "Vegetation zones",
        "type": "Planting",
        "description": "A mosaic of meadow, shrubland, upland, and floodplain forest."
      },
      {
        "page": 17,
        "title": "Meadow strategy",
        "type": "Planting",
        "description": "Species palette and management intent."
      },
      {
        "page": 18,
        "title": "Shrubland strategy",
        "type": "Planting",
        "description": "Transitional habitat and management."
      },
      {
        "page": 19,
        "title": "Upland forest strategy",
        "type": "Planting",
        "description": "Canopy, understory, and restoration."
      },
      {
        "page": 20,
        "title": "Floodplain forest strategy",
        "type": "Planting",
        "description": "Planting and care for the wetter forest communities."
      },
      {
        "page": 22,
        "title": "Trail network & accessibility",
        "type": "Design",
        "description": "Proposed access strategy and the standards referenced by the study."
      },
      {
        "page": 23,
        "title": "Bridge & observation deck",
        "type": "Design",
        "description": "Concept drawings and boardwalk considerations."
      },
      {
        "page": 24,
        "title": "Wildlife blinds",
        "type": "Design",
        "description": "Concepts for quiet observation."
      },
      {
        "page": 25,
        "title": "Vegetative screens",
        "type": "Planting",
        "description": "Layered transitions between conservation and residential uses."
      },
      {
        "page": 26,
        "title": "Roadside berm",
        "type": "Planting",
        "description": "Screening, shade, and runoff along Route 9."
      },
      {
        "page": 27,
        "title": "Trillium barn landscape",
        "type": "Design",
        "description": "Arrival, planting, parking, and gathering around the barn."
      },
      {
        "page": 28,
        "title": "Pocket neighborhood concept",
        "type": "Design",
        "description": "Shared common, walkability, solar orientation, and stormwater."
      },
      {
        "page": 29,
        "title": "Good Neighbor palette",
        "type": "Planting",
        "description": "Native plants suggested for residential landscapes."
      },
      {
        "page": 30,
        "title": "Good Neighbor planting guide",
        "type": "Planting",
        "description": "How residential planting can extend the conservation landscape."
      },
      {
        "page": 31,
        "title": "References",
        "type": "References",
        "description": "Research and source citations included in the plan set."
      },
      {
        "page": 32,
        "title": "Photo credits",
        "type": "References",
        "description": "Original photography and reference-image attribution."
      }
    ]
  }
};
