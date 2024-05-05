/* Question 40: Album: Create objects for music albums. */
//simple method to call object within a function
function musicAlbum() {
    let objects = {
        album: 'Rufus',
        singer: 'Chaka Khan',
        genre: 'Soul Music'
    };
    console.log(`${objects.album} is sung by ${objects.singer} and it's genre is ${objects.genre}.`);
}
musicAlbum();
// using return keyword to call parameters of a function through an object
function musicAlbum2(album, singer, track) {
    let objects = {
        album,
        singer,
        track
    };
    return objects;
}
console.log(musicAlbum2('Rufus', 'Chaka Khan', 10));
// Return method to call object from a function parameters
function make_album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(make_album("Bonnie Raitt", "Nick of Time"));
console.log(make_album("Harry Styles", "Harry's House"));
console.log(make_album("Linda Ronstadt", "Heart Like a Wheel", 3));
export {};
