import { DataStore } from 'aws-amplify';
import { Place } from '../models';

export class Repositories {
  static createPlace(name: string): Promise<Place> | undefined {
    try {
      return DataStore.save(
        new Place({ name, rooms: null })
      );
    } catch (error) {
      console.log('Error saving post', error);
    }
  }

  static queryAll(): Promise<Place[]> | undefined {
    try {
      return DataStore.query(Place);
    } catch (error) {
      console.log("Error retrieving posts", error);
    }
  }
}
