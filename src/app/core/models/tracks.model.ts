import { ArtistModel } from "./artist.model";

export interface TrackModel { //Modelo de referencia que debe tener una canción
    name: string;
    album: string;
    cover: string;
    url: string;
    uid: string | number;
    artist?: ArtistModel;
}