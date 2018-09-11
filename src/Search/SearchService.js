import fetchJsonp from 'fetch-jsonp';

export function searchResultToSong(resultItem) {
    return {
        id: resultItem.trackId,
        name: resultItem.trackName,
        artist: resultItem.artistName,
        albumName: resultItem.collectionName,
        albumId: resultItem.collectionId,
        smallImage: resultItem.artworkUrl30,
        mediumImage: resultItem.artworkUrl60,
        sampleUrl: resultItem.previewUrl
    };
}

export async function fetchSongs(searchText) {
    const request = await fetchJsonp(`https://itunes.apple.com/search?term=${searchText}&entity=song`);
    const jsonResult = await request.json();
    return jsonResult.results.map(searchResultToSong);
}
