export const getCategories = camper => [
  {
    condition: camper.transmission === 'automatic',
    text: 'Automatic',
    id: 'transmission',
    icon: 'automatic',
  },
  {
    condition: camper.engine === 'petrol',
    text: 'Petrol',
    id: 'engine',
    icon: 'Petrol',
  },
  {
    condition: camper.kitchen,
    text: 'Kitchen',
    id: 'kitchen',
    icon: 'kitchen',
  },
  { condition: camper.AC, text: 'AC', id: 'ac', icon: 'AC' },
  { condition: camper.TV, text: 'TV', id: 'tv', icon: 'TV' },
  {
    condition: camper.bathroom,
    text: 'Bathroom',
    id: 'bathroom',
    icon: 'bathroom',
  },
  { condition: camper.radio, text: 'Radio', id: 'radio', icon: 'Radio' },
  { condition: camper.water, text: 'Water', id: 'water', icon: 'Water' },
  { condition: camper.gas, text: 'Gas', id: 'gas', icon: 'Gas' },
  {
    condition: camper.refrigerator,
    text: 'Refrigerator',
    id: 'refrigerator',
    icon: 'Refrigerator',
  },
  {
    condition: camper.microwave,
    text: 'Microwave',
    id: 'microwave',
    icon: 'Microwave',
  },
];
