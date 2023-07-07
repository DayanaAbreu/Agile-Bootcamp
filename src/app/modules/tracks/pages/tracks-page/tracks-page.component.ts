import { Component } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json' //Todo en trakcs.json lo va a asignar al valor de data
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent {
  mockTracksList: Array<TrackModel> = [
  ]

  ngOnInit(): void {
    const {data}: any = (dataRaw as any).default
    this.mockTracksList = data;
  }
}
