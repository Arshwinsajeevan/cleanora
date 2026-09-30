export interface ServiceArea {
  name: string;
  type: "Primary City Hub" | "Suburban Hub" | "Key Locality";
  description: string;
}

export const serviceAreas: ServiceArea[] = [
  { name: "Kannur Town", type: "Primary City Hub", description: "Central commercial & residential areas" },
  { name: "Thana", type: "Key Locality", description: "Residential complexes and villas" },
  { name: "South Bazaar", type: "Key Locality", description: "Commercial & residential neighborhoods" },
  { name: "Payyambalam", type: "Key Locality", description: "Coastal apartments & residential homes" },
  { name: "Talap", type: "Key Locality", description: "Hospital zones, clinics & residences" },
  { name: "Chalad", type: "Key Locality", description: "Independent houses & residential layouts" },
  { name: "Mele Chovva", type: "Key Locality", description: "Residential & shopping hubs" },
  { name: "Thottada", type: "Suburban Hub", description: "Beachside properties & homestays" },
  { name: "Edakkad & Kadambur", type: "Suburban Hub", description: "Residential townships" },
  { name: "Dharmadam", type: "Suburban Hub", description: "Independent houses & educational hubs" },
  { name: "Thalassery", type: "Primary City Hub", description: "Villas, heritage homes & offices" },
  { name: "Mattannur", type: "Suburban Hub", description: "Airport zone residences & business hubs" },
  { name: "Payyanur", type: "Primary City Hub", description: "Commercial properties & homes" },
  { name: "Valapattanam & Pappinisseri", type: "Suburban Hub", description: "Industrial & residential estates" },
  { name: "Azhikode", type: "Key Locality", description: "Villas & local residential quarters" },
];
