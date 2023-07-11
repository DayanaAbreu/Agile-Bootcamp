import { TrackService } from '@modules/tracks/services/track.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json' //Todo en trakcs.json lo va a asignar al valor de data
import { TrackModel } from '@core/models/tracks.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy{
  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []

  listObservers$: Array<Subscription> = []

  constructor(private trackService: TrackService) {  }
  

  ngOnInit(): void {
    const observer1$ = this.trackService.dataTracksTrending$
      .subscribe(response => {
          this.tracksTrending = response
          console.log('Canciones trending ----->', response);    
        }) 
      this.listObservers$ = [observer1$]
    }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
  }
}
