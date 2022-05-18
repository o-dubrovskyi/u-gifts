export const places: PlaceInterface[] = [
  { id: 1, name: 'Окраина' },
  { id: 2, name: 'Место' },
];

export const rooms: RoomInterface[] = [
  { id: 1, placeId: 1, name: 'Общая' },
  { id: 2, placeId: 1,  name: 'Коридор' },
  { id: 3, placeId: 1,  name: 'Ванная' },
];

const item1: ItemInterface = {
  id: 1,
  roomId: 1,
  name: 'Шкаф',
  parentId: null,
  childId: [11],
};

const item11: ItemInterface = {
  id: 11,
  roomId: null,
  name: 'Контейнер',
  parentId: 1,
  childId: [
    111, 112
  ],
};
const item12: ItemInterface = {
  id: 12,
  roomId: null,
  name: 'Калейдоскоп',
  parentId: 1,
  childId: [],
};

const item111: ItemInterface = {
  id: 111,
  roomId: null,
  name: 'Обувь',
  parentId: 11,
  childId: [],
};
const item112: ItemInterface = {
  id: 112,
  roomId: null,
  name: 'Коробка',
  parentId: 11,
  childId: [1121, 1122],
};

const item1121: ItemInterface = {
  id: 1121,
  roomId: null,
  name: 'Флюгер',
  parentId: 112,
  childId: [],
};
const item1122: ItemInterface = {
  id: 1122,
  roomId: null,
  name: 'Фартук',
  parentId: 112,
  childId: [],
};

const item2: ItemInterface = {
  id: 2,
  roomId: 1,
  name: 'А2. Хозяйственное',
  parentId: null,
  childId: [21],
};
const item21: ItemInterface = {
  id: 21,
  roomId: null,
  name: 'Скотч',
  parentId: 2,
  childId: [],
};

const item3: ItemInterface = {
  id: 3,
  roomId: 1,
  name: 'Бра',
  parentId: null,
  childId: [],
};

export const items: Array<{ [id: number]: ItemInterface }> = [
  { 1: item1 },
  { 11: item11 },
  { 12: item12 },
  { 111: item111 },
  { 112: item112 },
  { 1121: item1121 },
  { 1122: item1122 },
  { 2: item2 },
  { 21: item21 },
  { 3: item3 },
];

export interface PlaceInterface {
  id: number;
  name: string;
}

export interface RoomInterface {
  id: number;
  placeId: number;
  name: string;
}

export interface ItemInterface {
  id: number;
  roomId: number | null;
  name: string;
  parentId: number | null;
  childId: number[];
}
