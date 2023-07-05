console.log('***** Music Collection *****')

let collection = [];

// adds album with 3 parameters
function addToCollection(title, artist, yearPublished) {

    let newAlbum = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        
    }
    // adds newalbum to collection
    collection.push(newAlbum);
    console.log('Album added = ', newAlbum);
};


// added 6 albums
addToCollection('Led Zeppelin', 'Led Zeppelin', 1969);
addToCollection('Led Zeppelin 2', 'Led Zeppelin', 1969);
addToCollection('Led Zeppelin 3', 'Led Zeppelin', 1970);
addToCollection('Led Zeppelin 4', 'Led Deppelin', 1971);
addToCollection('Houses of the Holy', 'Led Zeppelin', 1973);
addToCollection('Physical Graffiti', 'Led Zeppelin', 1975);

console.log(collection);

// function going through array, listing the objects
function showCollection(parameters){
    console.log('Number of items in array: ', collection.length);
    for (let i = 0; i < collection.length; i++) {
        console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
    }
    
}

showCollection();

// find artist by name, if found, add album to array
function findByArtist(artist){
    let results = [];
    for (let i = 0; i < collection.length; i++) {
        if (artist == collection[i].artist){
            results.push(collection[i])
        }
    }
    return results;
}

// log test, used Lez Deppelin to test for 'other' artist
console.log(findByArtist("Led Deppelin"));