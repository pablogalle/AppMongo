import {Component, OnInit} from '@angular/core';
import {Serie} from "../../common/serie";
import {SerieService} from "../../service/serie.service";

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit{

  series: Serie[] = [];

  constructor(private serieService: SerieService) {
  }

  ngOnInit(): void {
    this.loadSeries()
  }

  private loadSeries() {
    this.serieService.getSeriesList().subscribe(
      data => {
        this.series = data;
      }
    )
  }

  newSerie() {
    
  }

  loadSerie(serie: Serie) {
    
  }

  removeSerie(serie: Serie) {
    
  }
}
