// item-list.component.ts
import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { ItemService } from '../service/item.service';
import { Item } from '../warehouse.model/warehuse-item-model';

@Component({
  selector: 'app-item-list',
  standalone: false,
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];
  loading = true;

  constructor(private service: ItemService, private router: Router) {}

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems() {
    this.service.getItems().subscribe(data => {
      this.items = data;
      this.loading = false;
    });
  }

  deleteItem(id: string) {
    if (confirm('Delete this item?')) {
      this.service.deleteItem(id).subscribe(() => this.fetchItems());
    }
  }

  editItem(id: string) {
    this.router.navigate(['/warehouse/item', id]);
  }

  addItem() {
    this.router.navigate(['/add']);
  }
}
