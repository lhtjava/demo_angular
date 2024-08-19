import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  // localStorageに保存
  save_into_local_storage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // localStorageからデータを取得
  get_from_local_storage(key: string): any {
    let storage_info = localStorage.getItem(key)
    if (storage_info){
      return JSON.parse(storage_info);
    }

    return null
  }

  // localStorageからデータを削除
  remove_from_local_storage(key: string): void {
    localStorage.removeItem(key);
  }
}
