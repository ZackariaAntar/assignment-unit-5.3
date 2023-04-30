console.log('***** Music Collection *****')

//- Created `collection` as an empty array.

let collection = []

//- Created a function called `addToCollection` which creates an object from input arguments with the properties `Title`, `Artist`, and `Year`.
//- addToCollection then pushes the newly created object to the `collection` array, and returns the created album.

function addToCollection(title, artist, yearPublished){
     album ={
          Title: title,
          Artist: artist,
          Year: yearPublished
     };
          collection.push(album);
          return album;
};


//- Testing `addToCollection`:


addToCollection("Babylon by Bus", "Bob Marley and the Wailers", '1978')
console.log(album);
addToCollection("99.9%", "Kaytranada", '2016')
console.log(album);
addToCollection("Little Dragon", "Little Dragon", '2007')
console.log(album);
addToCollection("Cross", "Justice", '2007')
console.log(album);
addToCollection("BUBBA", "Kaytranada", '2019')
console.log(album);
addToCollection("Malibu", "Anderson .Paak", '2016')
console.log(album);
addToCollection("Ray Charles", "Ray Charles", '1957')
console.log(album);

console.log(collection);

//- Created a function called `showCollection` which takes an array as its parameter.
//- `showCollection` loops over the input array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

function showCollection(array){
     console.log(array.length);
     for (let i=0; i<array.length; i++){
          console.log(`"${array[i].Title}" by ${array[i].Artist} was published in ${array[i].Year}.`);
          };
     };

//- Testing `showCollection`:
showCollection(collection)

//- Created a function called `findByArtist` which accepts both the `artist` as a string and an array as its parameters
//-    to make it reproducable in a multi-user/multi-array scenario.
//- `findByArtist`loops through the input array and adds any objects with a matching artist to the array,
//-    then returns the array where the objects were added. If no results are found, it returns an empty array.

function findByArtist(artist, array){
     artistInArray = []
     for (let i=0; i<array.length; i++){
          if (array[i].Artist.includes(artist)){
               artistInArray.push(array[i]);
          };
     };return artistInArray
};

//- Testing `findByArtist`:

console.log(findByArtist('Kaytranada', collection))
console.log(findByArtist('Justice', collection))
console.log(findByArtist('Little Dragon', collection))
console.log(findByArtist('Anderson .Paak', collection))
console.log(findByArtist('Bob Marley and the Wailers', collection))
console.log(findByArtist('Ray Charles', collection))

// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //
// // PLEASE HIGHLIGHT AND COMMENT OUT LINES 3-75 BEFORE TESTING STRETCH GOALS.
// // After commenting out the aforementioned lines, highlight and uncomment lines 84-244 below.
// // LESS THAN 3, MGMT
// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //

// // ======================================= Stretch goals ========================================= //
// //- Created a function called `search` which accepts both an object and an array as input parameters
// //     for a search criteria .
// //- `search` loops through the input array and returns a new array of items that explicitely match the arguments.
// //     If no results are found it returns an empty array, and if there is an invalid input object,
// //     it returns all objects from the input array.

// function search({Artist: name, Year: date}, array){
//      serachResults = [];
//      for (items of array) {
//           if (name === items['Artist'] && date === items['Year']) {
//                     serachResults.push(items);
//                };
//      };
//      if (serachResults.length === 0) {
//           return console.log("So sorry, we couldn't find what you were looking for, here's what we do have:\n", array);

//      }return console.log("Here's what we found:"), serachResults;

// };

// //- Testing `search`:

// search({Artist: 'Justice', Year: '2007'}, collection)
// console.log(serachResults);
// search({Artist: 'Ray Charles', Year: '1957'}, collection)
// console.log(serachResults);
// search({Artist: 'Boney M.', Year: '1976'}, collection)
// console.log(serachResults);

// // //============================= ADD TO COLLECTION ================================================= //
// //-  Updated `addToCollection` to also take an array of tracks as an input parameter.

// let collection = []

// function addToCollection(title, artist, yearPublished, tracks){

//      album = {
//           Title: title,
//           Artist: artist,
//           Year: yearPublished,
//           Tracks: tracks,

//      };
//           collection.push(album);
//           return album;
// };

// //- Created standalone arrays of tracks that will be used as input arguments for the `addToCollection` function.
// //-    ** Decided to take this approach as it makes the tracks array more flexible/reusable within
// //-    the program facilitating editing (adding/removing) tracks across all functions that may take
// //-    the tracks arrays as a parameter. **

// let bobTracks = [{trackName: 'Positive Vibrations', duration: '5:50'}, {trackName: 'Punky Reggae Party', duration: '5:51'}, {trackName: 'Exodus', duration: '7:41'} ];
// let kayTracks = [{trackName: 'TRACK UNO', duration: '5:44'}, {trackName: 'BUS RIDE', duration: '2:13'}, {trackName: 'GOT IT GOOD', duration: '3:48'}];
// let dragonTracks = [{trackName: 'Twice', duration: '3:06'}, {trackName: 'Turn Left', duration: '4:05'}, {trackName: 'No Love', duration: '4:26'}];
// let justiceTracks = [{trackName: 'Genesis', duration: '3:54'}, {trackName: 'Let There Be Light', duration: '4:55'}, {trackName: 'D.A.N.C.E', duration: '4:02'}];
// let tranadaTracks = [{trackName: 'DO IT', duration: '2:12'}, {trackName: '2 The Music', duration: ' 3:55'}, {trackName: 'Go DJ', duration: '2:36'}];
// let paakTracks = [{trackName: 'The Bird', duration: '3:37'}, {trackName: "Heart Don't Stand a Chance", duration: '5:12'}, {trackName: 'The Waters', duration: '2:54'}];
// let rayTracks = [{trackName: "Ain't That Love", duration: '2:53'}, {trackName: 'Drown in My Own Tears', duration: '3:21'}, {trackName: 'Come Back Baby', duration: '3:06'}];

// //- Testing `addToCollection`:

// addToCollection("Babylon by Bus", "Bob Marley and the Wailers", '1978', bobTracks);
// addToCollection("99.9%", "Kaytranada", '2016', kayTracks)
// addToCollection("Little Dragon", "Little Dragon", '2007', dragonTracks )
// addToCollection("Cross", "Justice", '2007', justiceTracks)
// addToCollection("BUBBA", "Kaytranada", '2019', tranadaTracks)
// addToCollection("Malibu", "Anderson .Paak", '2016', paakTracks)
// addToCollection("Ray Charles", "Ray Charles", '1957', rayTracks)

// console.log(collection);

// // ============================= SHOW COLLECTION ================================================= //
// //- Updated `showCollection` to display the list of tracks for each album showing the song's name and duration.
// //     Formatted as shown below:
// //          TITLE by ARTIST, published in YEAR:
// //          1. NAME: DURATION
// //          2. NAME: DURATION
// //          3. NAME: DURATION


// function showCollection(array){
//      console.log(array.length);
//      for (let i = 0; i < array.length; i++) {
//           console.log(`"${array[i].Title}" by ${array[i].Artist} published in ${array[i].Year}:`);
//           for (let j = 1; j <= array[i].Tracks.length; j++) {
//                console.log(`${j}: ${array[i].Tracks[j - 1].trackName}`);
//           }console.log('\n');
//      }
// };

// //- Testing `showCollection`:

// showCollection(collection)
// // =========================== FIND BY ARTIST ============================================= //

// function findByArtist(artist, array){
//      artistInArray = []
//      for (let i=0; i<array.length; i++){
//           if (array[i].Artist.includes(artist)){
//                artistInArray.push(array[i]);
//           };
//      };return artistInArray
// };

// console.log(findByArtist('Kaytranada', collection))
// console.log(findByArtist('Justice', collection))
// console.log(findByArtist('Little Dragon', collection))
// console.log(findByArtist('Anderson .Paak', collection))
// console.log(findByArtist('Bob Marley and the Wailers', collection))
// console.log(findByArtist('Ray Charles', collection))
// console.log(findByArtist('Boney M.', collection))


// // ========================== SEARCH ================================================= //
// //- Updated `search` to accept `trackName` as a property of the input argument object and modified the parameter for the object.
// //- `search` now ignores any `artist` or `year` properties if it finds an object has the corresponding `trackName` property from the input argument.
// //     If no results are found it returns an empty array, and if there is an invalid input object,
// //     it returns all objects from the input array.

// function search(album, array){
//      serachResults = [];
//      if (!album.values){
//           return console.log("You didn't search for anything: \n", array);
//      }
//      for (items of array) { // looping through the collection array's entries.
//           for (songs of items['Tracks']) { // looping through the Tracks property entries in the collection array.
//                if (songs.trackName === (album.trackName)) { //
//                     serachResults.push(items);
//                     return console.log("Here's what we found:"), serachResults;

//                } else if (album.Artist === items['Artist'] && album.Year === items['Year']) { // could also be name === items['Artist'] || date === items['Year']
//                     serachResults.push(items);
//                     return console.log("Here's what we found:"), serachResults;
//                };

//           };

//      };
//      if (serachResults.length === 0) {
//           return console.log("So sorry, we couldn't find what you were looking for, here's what we do have:\n", serachResults);
//         };
// };

// //- Testing `search`:

// search({Artist: 'Kaytranda', Year: '2016' , trackName: 'TRACK UNO'}, collection);
// search('Kaytranda', '2016', 'Genesis', collection)
// console.log(serachResults);
// search('Kaytranada', '2016', 'adfsgdfsg', collection)
// search('Kaytranada', '2016', 'adfsgdfsg', collection)
// search('Justice', '2007', 'garble', collection)
// search('Little Dragon', '2007', collection)
// search('Ray Charles', '1957', collection)
// console.log(serachResults);
// search({Artist: 'Boney M.', Year: '1974' , trackName: 'Daddy Cool'}, collection);
// search({Artist: null, Year: null , trackName: null}, collection);
// search(null, collection);

// search('Boney M.', '1976', null ,collection)
// console.log(serachResults);

// // ===================================== END ============================================== //
