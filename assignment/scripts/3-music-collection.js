console.log('***** Music Collection *****')

// - Create a variable `collection` that starts as an empty array.
// let collection = []

// // - Add a function named `addToCollection`. This function should:
// //  - Take in the album's `title`, `artist`, `yearPublished` as input parameters
// //  - Create a new object having the above properties
// //  - Add the new object to the end of the `collection` array
// //  - Return the newly created object


// function addToCollection(title, artist, yearPublished){
//      album ={
//           Title: title,               
//           Artist: artist,
//           Year: yearPublished
//      };
//           collection.push(album);
//           return album;
// };




// //  - Test the `addToCollection` function:
// //   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
// //   - Console.log each album as added using the returned value.
// //   - After all are added, console.log the `collection` array.

// addToCollection("Babylon by Bus", "Bob Marley and the Wailers", '1978')
// console.log(album);

// addToCollection("99.9%", "Kaytranada", '2016')
// console.log(album);

// addToCollection("Little Dragon", "Little Dragon", '2007')
// console.log(album);

// addToCollection("Cross", "Justice", '2007')
// console.log(album);

// addToCollection("BUBBA", "Kaytranada", '2019')
// console.log(album);

// addToCollection("Malibu", "Anderson .Paak", '2016')
// console.log(album);

// addToCollection("Ray Charles", "Ray Charles", '1957')
// console.log(album);
// console.log(collection);

// // - Add a function named `showCollection`. This function should:
// //   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
// //   - Console.log the number of items in the array.
// //   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

// function showCollection(array){
//      console.log(array.length);
//      for (let i=0; i<array.length; i++){
//           console.log(`"${array[i].Title}" by ${array[i].Artist} was published in ${array[i].Year}.`);
//           };
//      };

// //  - Test the `showCollection` function.
// showCollection(collection)

// // - Add a function named `findByArtist`. This function should:
// //   - Take in `artist` (a string) parameter
// //   - Create an array to hold any results, empty to start
// //   - Loop through the `collection` and add any objects with a matching artist to the array.
// //   - Return the array with the matching results. If no results are found, return an empty array.
// function findByArtist(artist, array){
//      artistInArray = []
//      for (let i=0; i<array.length; i++){
//           if (array[i].Artist.includes(artist)){
//                artistInArray.push(artist);
//           };
//      };return artistInArray
// };

// console.log(findByArtist('Kaytranada', collection))
// console.log(findByArtist('Justice', collection))
// console.log(findByArtist('Little Dragon', collection))
// console.log(findByArtist('Anderson .Paak', collection))
// console.log(findByArtist('Bob Marley and the Wailers', collection))
// console.log(findByArtist('Ray Charles', collection))
// // - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

// // > When testing your functions, write all tests in the JavaScript file!


// // ### Stretch goals

// // - Create a function called `search`. This function should:
// //   - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
// //   ```
// //   { artist: 'Ray Charles', year: 1957 }
// //   ```
// //   - The returned output from `search` should meet these requirements:
// //     - Return a new array of all items in the `collection` matching *all* of the search criteria.
// //     - If no results are found, return an empty array.
// //     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.


// function search({Artist: name, Year: date}, array){
//      serachResults = [];     
//      for (items of array) {
//           if (name === items['Artist'] && date === items['Year']) { // could also be name === items['Artist'] || date === items['Year'] 
//                     serachResults.push(items);          
//                };
//      };
//      if (serachResults.length === 0) {
//           return console.log("So sorry, we couldn't find what you were looking for, here's what we do have:\n", array);
          
//      }return console.log("Here's what we found:"), serachResults;
     
     
// }; 

// search({Artist: 'Justice', Year: '2007'}, collection)
// console.log(serachResults);
// search({Artist: 'Ray Charles', Year: '1957'}, collection)
// console.log(serachResults);
// search({Artist: 'Boney M.', Year: '1976'}, collection)
// console.log(serachResults);

// ============================= ADD TO COLLECTION ================================================= //
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
let collection = []

function addToCollection(title, artist, yearPublished, tracks){
    
     album = {
          Title: title,               
          Artist: artist,
          Year: yearPublished,
          Tracks: tracks,
                  
     };
          collection.push(album);
          return album;
};

let bobTracks = ['Positive Vibrations: 5:50', 'Punky Reggae Party: 5:51', 'Exodus: 7:41'];
let kayTracks = ['TRACK UNO : 5:44', 'BUS RIDE: 2:13', 'GOT IT GOOD: 3:48'];
let dragonTracks = ['Twice: 3:06', 'Turn Left: 4:05', 'No Love: 4:26'];
let justiceTracks = ['Genesis: 3:54', 'Let There Be Light: 4:55', 'D.A.N.C.E: 4:02'];
let tranadaTracks = ['DO IT: 2:12', '2 The Music: 3:55', 'Go DJ: 2:36'];
let paakTracks = ['The Bird: 3:37', "Heart Don't Stand a Chance: 5:12", 'The Waters: 2:54'];
let rayTracks = ["Ain't That Love: 2:53", 'Drown in My Own Tears: 3:21', 'Come Back Baby: 3:06'];


addToCollection("Babylon by Bus", "Bob Marley and the Wailers", '1978', bobTracks);
addToCollection("99.9%", "Kaytranada", '2016', kayTracks)
addToCollection("Little Dragon", "Little Dragon", '2007', dragonTracks )
addToCollection("Cross", "Justice", '2007', justiceTracks)
addToCollection("BUBBA", "Kaytranada", '2019', tranadaTracks)
addToCollection("Malibu", "Anderson .Paak", '2016', paakTracks)
addToCollection("Ray Charles", "Ray Charles", '1957', rayTracks)

// console.log(collection);

// // ============================= SHOW COLLECTION ================================================= //
// //   - Update the `showCollection` function to display the list of tracks 
// //     for each album with its name and duration.;

function showCollection(array){
     console.log(array.length);
     
     for (let i = 0; i < array.length; i++){ 
          console.log(`"${array[i].Title}" by ${array[i].Artist} published in ${array[i].Year}:\n${array[i].Tracks.join('\n')}\n`);
          }; 
}

     showCollection(collection)
// // =========================== FIND BY ARTIST  ============================================= //

// function findByArtist(artist, array){
//      artistInArray = []
//      for (let i=0; i<array.length; i++){
//           if (array[i].Artist.includes(artist)){
//                artistInArray.push(artist);
//           };
//      };return artistInArray
// };

// console.log(findByArtist('Kaytranada', collection))
// console.log(findByArtist('Justice', collection))
// console.log(findByArtist('Little Dragon', collection))
// console.log(findByArtist('Anderson .Paak', collection))
// console.log(findByArtist('Bob Marley and the Wailers', collection))
// console.log(findByArtist('Ray Charles', collection))

// // ========================== SEARCH ================================================= //
// // - Update `search` to allow a `trackName` search criteria.
// // - IF the search object has a `trackName` property, only search for that, ignoring any `artist` or `year` properties.
// //        

function search(name, date, trackName, array){
     serachResults = [];     
     for (items of array) {
          for (songs of items['Tracks']) {
               if (songs.includes(trackName)) {
                    serachResults.push(trackName, items['Title']);
                    return console.log("Here's what we found:"), serachResults;          
               }
               else if (name === items['Artist'] && date === items['Year']) { // could also be name === items['Artist'] || date === items['Year'] 
                    serachResults.push(items);          
                    return console.log("Here's what we found:"), serachResults;
               };
                              
          }if (serachResults.length === 0) {
               return console.log("So sorry, we couldn't find what you were looking for, here's what we do have:\n", array);
          
          };
     
          
     };
     
     
}; 


// search('Justice', '2007', 'Genesis', collection)
// console.log(serachResults);
// search('Kaytranada', '2016', 'adfsgdfsg', collection)
// search('Justice', '2007', 'garble', collection)
// search('Little Dragon', '2007', collection)
// search('Ray Charles', '1957', collection)
// console.log(serachResults);
search('Boney M.', '1976', null ,collection)
console.log(serachResults);

// // =============================================================================================== //
// - Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//   - Update `search` to allow a `trackName` search criteria. 
//     - IF the search object has a `trackName` property, only search for that, ignoring any `artist` or `year` properties.
//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
// ```
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
// ```
// // > Make sure to test all your code!






// function addTracksToAlbum(trackArray){
//      listOfTracks = [];
//      tracks = {};
//      for (let i = 0; i < trackArray.length; i++) {
//           // tracks['trackNames'] = trackArray[i]
//           // tracks[trackArray[i]] = durationArray[i]
//           tracks['trackNames'] = trackArray
          
//      };listOfTracks.push(tracks)
     
//      // for (items of durationArray) {
//           // tracks.trackNames[i]['duration'] = durationArray[i]
//      // }
//      return tracks;
// }