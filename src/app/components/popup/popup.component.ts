import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Spot } from 'src/app/services/spots';
import { SpotsService } from 'src/app/services/spots.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopUpComponent implements OnInit {
  spot = new Spot();

  //injectare service in constructor
  constructor(private service: SpotsService) {}

  //functie pentru a adauga un spot
  addSpot() {
    this.service.postSpot(this.spot).subscribe((spot) => {
      window.location.reload();
    });
  }

  //initializarea proprietatii "range" pentru date picker
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  ngOnInit(): void {}

  //proprietatile default ale minimap-ului din popup
  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 44.1733,
    lng: 28.6383,
  };
  zoom = 10;

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
}
