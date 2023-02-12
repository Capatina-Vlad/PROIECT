import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map, Observable } from 'rxjs';
import { Spot } from 'src/app/services/spots';
import { SpotsService } from 'src/app/services/spots.service';
import { PopUpComponent } from '../popup/popup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  search: String = '';
  ELEMENT_DATA: Spot[] = [];

  //definim coloanele tabelului
  displayedColumns: string[] = [
    'name',
    'country',
    'lat',
    'long',
    'probability',
    'month',
  ];
  //dataSource-ul tabelului va fi de tip array de Spot-uri
  dataSource = new MatTableDataSource<Spot>(this.ELEMENT_DATA);

  //injectam service-ul , router-ul si proprietatea dialogRef pentru a putea deschide popup-ul
  constructor(
    private service: SpotsService,
    public dialogRef: MatDialog,
    private router: Router
  ) {}

  //functia care deschide popup-ul
  openDialog() {
    this.dialogRef.open(PopUpComponent);
  }

  //functia care asociaza dataSource-ului response-ul get-ului pentru spoturi
  public getAllSpots() {
    let res = this.service.getSpots();
    res.subscribe((data: Spot[]) => {
      this.dataSource.data = data as Spot[];
    });
  }

  //adaugam paginatie si optiunea de a sorta coloanele tabelului
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  //apeleaza functia care creaza tabelul
  ngOnInit(): void {
    this.getAllSpots();
  }

  //functia de logout
  logOut() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['']);
  }

  //functia de filtrare necesara pentru search input
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //proprietatile default ale hartii
  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12,
  };
  zoom = 4;

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
}

