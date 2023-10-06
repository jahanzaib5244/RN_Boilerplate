import {MMKV} from 'react-native-mmkv';

export default class Mmkv {
  private storage: MMKV;
  constructor() {
    this.storage = new MMKV();
  }

  setItem(key: string, value: string) {
    return new Promise((resolve, reject) => {
      try {
        resolve(this.storage.set(key, value));
      } catch {
        reject('Not Found');
      }
    });
  }
  getItem(key: string) {
    return new Promise((resolve, reject) => {
      try {
        resolve(this.storage.getString(key));
      } catch {
        reject('Not Found');
      }
    });
  }
  removeItem(key: string) {
    return new Promise((resolve, reject) => {
      try {
        resolve(this.storage.delete(key));
      } catch {
        reject('Not Found');
      }
    });
  }
}

export const storage = new MMKV();
