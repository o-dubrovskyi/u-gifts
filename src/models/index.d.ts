import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PlaceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RoomMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Place {
  readonly id: string;
  readonly name: string;
  readonly rooms?: (Room | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Place, PlaceMetaData>);
  static copyOf(source: Place, mutator: (draft: MutableModel<Place, PlaceMetaData>) => MutableModel<Place, PlaceMetaData> | void): Place;
}

export declare class Room {
  readonly id: string;
  readonly name: string;
  readonly place: Place;
  readonly items?: (Item | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Room, RoomMetaData>);
  static copyOf(source: Room, mutator: (draft: MutableModel<Room, RoomMetaData>) => MutableModel<Room, RoomMetaData> | void): Room;
}

export declare class Item {
  readonly id: string;
  readonly name: string;
  readonly room: Room;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Item, ItemMetaData>);
  static copyOf(source: Item, mutator: (draft: MutableModel<Item, ItemMetaData>) => MutableModel<Item, ItemMetaData> | void): Item;
}