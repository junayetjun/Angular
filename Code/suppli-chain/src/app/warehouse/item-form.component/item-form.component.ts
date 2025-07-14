import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemService } from '../service/item.service';
import { Item } from '../warehouse.model/warehuse-item-model';

@Component({
  selector: 'app-item-form',
  standalone: false,
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.css'
})
export class ItemFormComponent implements OnInit {
  isNew = true;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: this.fb.control<string>('', Validators.required),
      sku: this.fb.control<string>('', Validators.required),
      quantity: this.fb.control<number>(0, [Validators.required, Validators.min(0)]),
      location: this.fb.control<string>('', Validators.required),
    });

    // const id = this.route.snapshot.params['id'];
    // if (id) {
    //   this.isNew = false;
    //   this.service.getItem(id).subscribe(item => {
    //     this.form.patchValue(item);
    //     // Optional: if your update service needs the id
    //     this.form.addControl('id', this.fb.control<string>(item.id));
    //   });
    // }
  }

  save() {
    if (this.form.invalid) return;

    const item: Item = this.form.getRawValue() as Item;

    const saveObs = this.isNew
      ? this.service.createItem(item) // Backend assigns ID
      : this.service.updateItem(item); // Update with existing ID

    saveObs.subscribe(() => this.router.navigate(['/warehouse']));
  }

  cancel() {
    this.router.navigate(['/warehouse']);
  }
}

