import { Component, Input } from '@angular/core';
import * as dataRaw from '../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MultimediaService } from '@shared/service/multimedia.service';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent {
  private readonly URL = environment.api
  @Input() tracks: Array<TrackModel> = [] //Es lo mismo que tracks: TrackModel[] = []
  optionSort: { property: string | null, order: string } = { property: null, order: 'asc'}
  
  constructor(private multimediaService: MultimediaService) {}
  
  ngOnInit():void {
    this.loadDataAll()
    
  }

  async loadDataAll(): Promise<any> {
    this.tracks = await this.multimediaService.getAllTracks$().toPromise()
  }

  changeSort(property: string): void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
    console.log(this.optionSort);
  }

  ngOnDestroy(): void {

  }
  
}
