import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/service/multimedia.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-get-tracks',
  templateUrl: './get-tracks.component.html',
  styleUrls: ['./get-tracks.component.css']
})
export class GetTracksComponent {
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
