const notes = ['do', 'ray', 'me'];
notes.forEach((note) => console.log(note));

notes.forEach((note)=>{
    console.log(note);
})
// ?????
notes.forEach(console.log);

//===============================================

function myForEach(array, callback){
    for(let i = 0; i < array.length; i++)
    {
        callback(array[i]);
    }
}
myForEach(notes, (note) => console.log(note));

//===============================================
notes.map(note => console.log(note));

function myMap(array, callback){
    const myNewArray = [];
    for(let i = 0; i < array.length; i++){
        const callbackResult = callback(array[i]);
        myNewArray.push(callbackResult);
    }
    return myNewArray;
}
myMap(notes, (note)=> console.log(note));