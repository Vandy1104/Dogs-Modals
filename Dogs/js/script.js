console.log('Array of objects');

var dogs = [
  {
    name: 'Browny',
    id:   'D101',
    breed:'Australian Bull Dog',
    color: 'Brown and white',
    height: 50,
    age:    8,
    photo: 'images/dog1.jpeg'
  },

  {
    name: 'Blacky',
    id:   'D102',
    breed:'American Staffordshire',
    color: 'black and white',
    height: 60,
    age:    10,
    photo: 'images/dog2.jpeg'
  },

  {
    name: 'Beaggie',
    id:   'D103',  //id follows a pattern
    breed:'Beagle',
    color: 'Brown, white and black',
    height: 35,
    age:    6,
    photo: 'images/dog3.jpeg'
  },

  {
    name: 'Alasky',
    id:   'D104',
    breed:'Alaskan Malamute',
    color: 'black and white',
    height: 70,
    age:    11,
    photo: 'images/dog4.jpeg'
  },

  {
    name: 'Britty',
    id:   'D105',
    breed:'British Bull Dog',
    color: 'Brown and white',
    height: 30,
    age:    13,
    photo: 'images/dog5.jpeg'
  }
];

//Display dogs' details
var id = 101;
function allDogs(){
  document.getElementById('dogs').innerHTML = " "; //to clear the container
for(var i = 0; i < dogs.length; i++) {
  document.getElementById('dogs').innerHTML
  += '</br><h1 class="jumbotron text-danger">' + dogs[i].name + '</h1>'
  + '<div class="row">'
  +'<div class="col">'
  + '<img id="D' + id.toString() + '" class="myDogs img-thumbnail mt-5" src="' + dogs[i].photo + ' "  alt="Dog"/>'
  + '</div>'
  + '<div class="col">'
  + '</br></br> Breed : <h5 class="text-danger" >' + dogs[i].breed + '</h5>'
  + '</br> Age : <h5 class="text-danger" > ' + dogs[i].age + '</h5>'
  + '</br> Height : <h5 class="text-danger" >' + dogs[i].height + '</h5>'
  + '</div>'
  + '</div>';
  id++; //id is incremented automatically
}
}

//Cnditional display of dogs

// Display Beagle dog data
document.getElementById('beagle').addEventListener('click', function(){
  console.log(dogs);
  document.getElementById('dogs').innerHTML = " "; //to clear the container
  for(var i = 0; i < dogs.length; i++) {
    if (dogs[i].breed === "Beagle") {
      document.getElementById('dogs').innerHTML
      += '</br><h1 class="jumbotron text-danger">' + dogs[i].name + '</h1>'
      + '<div class="row">'
      +'<div class="col">'
      + '<img class="img-thumbnail mt-5 myDogs" src="' + dogs[i].photo + ' "  alt="Dog"/>'
      + '</div>'
      + '<div class="col">'
      + '</br></br> Breed : <h5 class="text-danger" >' + dogs[i].breed + '</h5>'
      + '</br> Age : <h5 class="text-danger" > ' + dogs[i].age + '</h5>'
      + '</br> Height : <h5 class="text-danger" >' + dogs[i].height + '</h5>'
      + '</div>'
      + '</div>';
   }
  }
});

//height >40
document.getElementById('height40').addEventListener('click', function(){
  console.log(dogs);
  document.getElementById('dogs').innerHTML = " "; //to clear the container
  for(var i = 0; i < dogs.length; i++) {
    if (dogs[i].height >= 40) {
      document.getElementById('dogs').innerHTML
      += '</br><h1 class="jumbotron text-danger">' + dogs[i].name + '</h1>'
      + '<div class="row">'
      +'<div class="col">'
      + '<img class="img-thumbnail mt-5 myDogs" src="' + dogs[i].photo + ' "  alt="Dog"/>'
      + '</div>'
      + '<div class="col">'
      + '</br></br> Breed : <h5 class="text-danger" >' + dogs[i].breed + '</h5>'
      + '</br> Age : <h5 class="text-danger" > ' + dogs[i].age + '</h5>'
      + '</br> Height : <h5 class="text-danger" >' + dogs[i].height + '</h5>'
      + '</div>'
      + '</div>';
   }
  }
});

// Search Age = 13

document.getElementById('age').addEventListener('click', function(){
  console.log(dogs);
  document.getElementById('dogs').innerHTML = '';
  for(var i = 0; i < dogs.length; i++) {
    if (dogs[i].age === 13) {
  document.getElementById('dogs').innerHTML
  += '</br><h1 class="jumbotron text-danger">' + dogs[i].name + '</h1>'
  + '<div class="row">'
  +'<div class="col">'
  + '<img class="img-thumbnail mt-5 myDogs" src="' + dogs[i].photo + ' "  alt="Dog"/>'
  + '</div>'
  + '<div class="col">'
  + '</br></br> Breed : <h5 class="text-danger" >' + dogs[i].breed + '</h5>'
  + '</br> Age : <h5 class="text-danger" > ' + dogs[i].age + '</h5>'
  + '</br> Height : <h5 class="text-danger" >' + dogs[i].height + '</h5>'
  + '</div>'
  + '</div>';
}
}
});
// Search Bulldog
document.getElementById('bulldog').addEventListener('click', function(){
  console.log(dogs);
  document.getElementById('dogs').innerHTML = '';
  for(var i = 0; i < dogs.length; i++) {
  if (dogs[i].breed.indexOf("Bull Dog") > (-1) ) {
  document.getElementById('dogs').innerHTML
  += '</br><h1 class="jumbotron text-danger">' + dogs[i].name + '</h1>'
  + '<div class="row">'
  +'<div class="col">'
  + '<img class="img-thumbnail mt-5 myDogs" src="' + dogs[i].photo + ' "  alt="Dog"/>'
  + '</div>'
  + '<div class="col">'
  + '</br></br> Breed : <h5 class="text-danger" >' + dogs[i].breed + '</h5>'
  + '</br> Age : <h5 class="text-danger" > ' + dogs[i].age + '</h5>'
  + '</br> Height : <h5 class="text-danger" >' + dogs[i].height + '</h5>'
  + '</div>'
  + '</div>';
}
}
});

document.getElementById('changeName').addEventListener('click', function(){
  var oldName = document.getElementById('oldName').value;
  var newName = document.getElementById('newName').value;
  console.log(oldName, newName);
  for(var i = 0; i < dogs.length; i++) {
    if (oldName === dogs[i].name){
      dogs[i].name = newName;
    }
  }
  console.log(dogs);
  allDogs();
});

//document.getElementById('all').addEventListener('click', function(){
  allDogs();
//});

//Using Jquery to display Modal
$('.myDogs').on('click', function(){
  console.log('dogs');
  console.log(this.id);
  console.log(i);
  $('.myModal').show();
  for (var i = 0; i< dogs.length; i++){
    // id property if dog is checked for equivallence with the image id
    if (dogs[i].id.trim() === this.id.trim()) {
      console.log(dogs[i].name);
      console.log(dogs[i].breed);
      console.log(dogs[i].color);
      console.log(dogs[i].height);
      console.log(dogs[i].age);
      document.getElementById('modalContent').innerHTML
      += '<div class="display-4 bg-dark text-info text-center"> ' + dogs[i].name + '</br>'
      + dogs[i].breed + '</br>' + dogs[i].color + '</br>'
      + 'Height : ' + dogs[i].height + '</br>' + 'Age :' + dogs[i].age + '</div>'
      + ''
        + '<img class="card-thumbnail mt-5 ml-5 myDogs modalDog" src="' + dogs[i].photo + ' "  alt="Dog"/>'
    }
  }
});

$('.closeBar').on('click', function(){
  console.log('close');
  $('.myModal').hide();
});
//Before adding columns
// Search Bulldog
// document.getElementById('bulldog').addEventListener('click', function(){
//   console.log(dogs);
//   document.getElementById('dogs').innerHTML = '';
//   for(var i = 0; i < dogs.length; i++) {
//   if (dogs[i].breed.indexOf("Bull Dog") > (-1) ) {
//   document.getElementById('dogs').innerHTML
//   document.getElementById('dogs').innerHTML += '<img class="img-thumbnail myDogs" src=" ' + dogs[i].photo + ' " alt="Dog">';
//   document.getElementById('dogs').innerHTML += '<br><h5 class="text-danger"> ' + dogs[i].breed + '</h5>';
//   document.getElementById('dogs').innerHTML += '<br><h5 class="text-danger"> ' + dogs[i].age + '</h5>';
//   document.getElementById('dogs').innerHTML += '<br><h5 class="text-danger"> ' + dogs[i].height + '</h5>';
//     }
//   }
// });



//James suggestion

// for(var i = 0; i < dogs.length; i++) {
//
//     document.getElementById('dogs').innerHTML
//     += 'id="' + dog[i].button'"'
//
// }





// var fruits = ['Banana','Apple','Kiwi','Orange'];
// fruits.sort;
// console.log(fruits);
