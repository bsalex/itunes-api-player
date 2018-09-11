import fetchJsonp from 'fetch-jsonp';
import {searchResultToSong} from '../Search/SearchService';

function getSongDetails(song, response) {
    const album = response[0];
    const [, ...songs] = response;

    return {
        song,
        album: {
            name: album.collectionName,
            image: album.artworkUrl100,
            songs: songs.map(searchResultToSong)
        }
    };
}

export async function getSongAlbum(song) {
    const request = await fetchJsonp(`https://itunes.apple.com/lookup?id=${song.albumId}&entity=song`);
    const jsonResult = await request.json();
    return getSongDetails(song, jsonResult.results);
}
