import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-test-service',
  templateUrl: './test-service.component.html',
  styleUrls: ['./test-service.component.css']
})
export class TestServiceComponent implements OnInit {

  // 画面での入力事項
  public keyword: string = "";
  // todoリストkey
  todolist_key: string = "todolist"
  // todoリスト
  public todolist: any[] = [];

  constructor(private storage: StorageService) {
  }

  ngOnInit(): void {
    // localStorageからtodoリストを取得
    let todolist_storage: [] = this.storage.get_from_local_storage(this.todolist_key);
    if(todolist_storage) {
      this.todolist = todolist_storage;
    }
  }

  // todo事項を追加
  todo_add(): void {
    // 空文字列禁止
    if (!this.keyword.trim()) {
      alert("todoを入力してください!");
      return;
    }
    
    // リストに存在されてない場合のみ追加
    if(!this.is_todo_in_list(this.todolist, this.keyword)) {
      // todo事項を追加
      this.todolist.push({
        title: this.keyword,
        status: false  // false:todo，true:done
      });

      // 入力欄をクリア
      this.keyword = '';
      // localStorageに保存
      this.storage.save_into_local_storage(this.todolist_key, this.todolist);
    } else {
      alert("【" + this.keyword + "】" + "が既にリストに存在しています！");
    }
  }

  // todo事項を削除
  todo_del(index: number): void {
    this.todolist.splice(index, 1);
    // localStorageに保存
    this.storage.save_into_local_storage(this.todolist_key, this.todolist);
  }

  // checkboxの状態が変わる時に実行
  todo_status_change(): void {
    // localStorageに保存
    this.storage.save_into_local_storage(this.todolist_key, this.todolist);
  }

  // todoが既にリストに存在されるか
  is_todo_in_list(todolist: any, keyword: any): boolean {
    for(var i = 0 ; i < todolist.length ; i++) {
      if(todolist[i].title == keyword) {
        return true;
      }
    }

    return false;
  }

}
