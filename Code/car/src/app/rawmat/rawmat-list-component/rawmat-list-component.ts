import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RawmatModule } from '../rawmat/rawmat-module';
import { RawmatService } from '../../service/rawmat.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-rawmat-list-component',
  standalone: false,
  templateUrl: './rawmat-list-component.html',
  styleUrl: './rawmat-list-component.css'
})
export class RawmatListComponent implements OnInit {
 rawmats: RawmatModule[] = [];

  constructor(
    private rawmatService: RawmatService, 
    private router: Router,
    private cdr: ChangeDetectorRef

  ) {}

  ngOnInit(): void {
    this.loadRawmats();
    this.cdr.markForCheck();
  }

  loadRawmats() {
    this.rawmatService.getAll().subscribe({
      next: (rawmats) => {
        this.rawmats = rawmats;
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error('Error fetching rawmats:', error);
      }
    });
  }

  deleteRawmat(id: string) {
    if (confirm('Are you sure you want to delete this raw material?')) {
      this.rawmatService.delete(id).subscribe({
        next: () => {
          console.log('Rawmat deleted:', id);
          this.loadRawmats(); // Refresh list
          this.cdr.markForCheck();
        },
        error: (error) => {
          console.error('Error deleting rawmat:', error);
        }
      });
    }
  }

  editRawmat(id: string) {
    this.router.navigate([`/edit-rawmat/${id}`]);
  }
}