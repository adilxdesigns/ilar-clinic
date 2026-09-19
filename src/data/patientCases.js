// ============================================================
// Patient Cases Data
// Each subfolder = one case. Images typed by filename prefix.
// Types: before | after | process | xray | gallery (untyped)
// ============================================================

const BASE = './assets/patient-examples'

export const patientCases = [
  {
    id: 'ctev',
    name: 'CTEV',
    description: 'Congenital Talipes Equinovarus',
    images: {
      before:  [`${BASE}/CTEV/before.jpeg`],
      process: [
        `${BASE}/CTEV/process1.jpeg`,
        `${BASE}/CTEV/process2.jpeg`,
        `${BASE}/CTEV/process3.jpeg`,
        `${BASE}/CTEV/process4.jpeg`,
        `${BASE}/CTEV/process5.jpeg`,
        `${BASE}/CTEV/process6.jpeg`,
        `${BASE}/CTEV/process7.jpeg`,
      ],
      after:   [`${BASE}/CTEV/after.jpeg`, `${BASE}/CTEV/after2.jpeg`],
      xray:    [],
    },
  },
  {
    id: 'cubitus',
    name: 'Cubitus Varus / Valgus',
    description: "Kim's Procedure – Elbow Deformity Correction",
    images: {
      before:  [],
      process: [],
      after:   [],
      xray:    [],
      gallery: [
        `${BASE}/Cubitus varus valgus- Kim's/Screenshot (30).png`,
        `${BASE}/Cubitus varus valgus- Kim's/Screenshot (32).png`,
        `${BASE}/Cubitus varus valgus- Kim's/Screenshot (33).png`,
        `${BASE}/Cubitus varus valgus- Kim's/Screenshot (34).png`,
      ],
    },
  },
  {
    id: 'equinus',
    name: 'Equinus – Lambrinudi',
    description: 'Equinus Foot Correction – Lambrinudi Procedure',
    images: {
      before:  [`${BASE}/Equinus Lambrinudi/before1.png`, `${BASE}/Equinus Lambrinudi/before2.png`],
      process: [],
      after:   [`${BASE}/Equinus Lambrinudi/after1.png`, `${BASE}/Equinus Lambrinudi/after2.png`],
      xray:    [],
    },
  },
  {
    id: 'genu-varum',
    name: 'Genu Varum – 8 Plate',
    description: 'Guided Growth with Eight Plate for Bow Legs',
    images: {
      before:  [`${BASE}/Genu Varum 8 plate/before.jpeg`],
      process: [],
      after:   [`${BASE}/Genu Varum 8 plate/after.jpeg`],
      xray:    [`${BASE}/Genu Varum 8 plate/xray1.jpeg`, `${BASE}/Genu Varum 8 plate/xray2.jpeg`],
    },
  },
  {
    id: 'genu-recurvatum',
    name: 'Genu Recurvatum',
    description: 'Open Wedge Osteotomy for Back-Knee Deformity',
    images: {
      before:  [`${BASE}/Genu recurvatum- open wedge osteotomy/before.png`],
      process: [],
      after:   [`${BASE}/Genu recurvatum- open wedge osteotomy/after.png`],
      xray:    [],
    },
  },
  {
    id: 'genu-valgum-ilizarov',
    name: 'Genu Valgum – Ilizarov',
    description: 'Knock Knee Correction using Ilizarov Frame',
    images: {
      before:  [`${BASE}/Genu valgum Ilizarov/before.png`],
      process: [`${BASE}/Genu valgum Ilizarov/process.png`],
      after:   [`${BASE}/Genu valgum Ilizarov/after.png`],
      xray:    [`${BASE}/Genu valgum Ilizarov/xray.png`],
    },
  },
  {
    id: 'genu-valgum-tkr',
    name: 'Genu Valgum – TKR',
    description: 'Total Knee Replacement for Severe Valgus Deformity',
    images: {
      before:  [`${BASE}/Genu valgum TKR/before.png`],
      process: [],
      after:   [`${BASE}/Genu valgum TKR/after.png`],
      xray:    [`${BASE}/Genu valgum TKR/xray.png`],
    },
  },
  {
    id: 'hallux-scarf',
    name: 'Hallux Valgus – Scarf Osteotomy',
    description: 'Bunion Correction via Scarf Osteotomy',
    images: {
      before:  [],
      process: [],
      after:   [],
      xray:    [],
      gallery: [
        `${BASE}/Hallux valgus Scarf osteotomy/1.png`,
        `${BASE}/Hallux valgus Scarf osteotomy/2.png`,
        `${BASE}/Hallux valgus Scarf osteotomy/3.png`,
        `${BASE}/Hallux valgus Scarf osteotomy/4.png`,
        `${BASE}/Hallux valgus Scarf osteotomy/5.png`,
      ],
    },
  },
  {
    id: 'hallux-arthrodesis',
    name: 'Hallux Valgus – Arthrodesis',
    description: 'First MTP Joint Fusion for Hallux Valgus',
    images: {
      before:  [`${BASE}/Hallux valgus arthrodesis/before.jpeg`],
      process: [],
      after:   [`${BASE}/Hallux valgus arthrodesis/after.jpeg`],
      xray:    [],
    },
  },
  {
    id: 'physeal-radius',
    name: 'Physeal Injury – Distal Radius',
    description: 'Growth Plate Injury Management of Distal Radius',
    images: {
      before:  [],
      process: [],
      after:   [],
      xray:    [],
      gallery: [
        `${BASE}/Physeal injury distal radius/Screenshot (22).png`,
        `${BASE}/Physeal injury distal radius/Screenshot (23).png`,
      ],
    },
  },
  {
    id: 'tibial-malunion',
    name: 'Tibial Shaft Malunion – Ilizarov',
    description: 'Tibial Shaft Malunion Correction with Ilizarov Frame',
    images: {
      before:  [],
      process: [],
      after:   [],
      xray:    [],
      gallery: [
        `${BASE}/Tibial shaft malunion- Ilizarov/Screenshot (39).png`,
        `${BASE}/Tibial shaft malunion- Ilizarov/Screenshot (40).png`,
      ],
    },
  },
]
