import { ArtistModel } from "./artist.model";

export interface TrackModel { //Modelo de referencia que debe tener una canción
    name: string;
    album: string;
    cover: string;
    url: string;
    _id: string | number;
    artist?: ArtistModel;
}