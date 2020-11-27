// learning Constructor:

function HouseKeeper( name, age, yearsOfExperience, gender, favor, clean){
  this.name = name;
  this.age = age;
  this.yearsOfExperience = yearsOfExperience;
  this.gender = gender;
  this.favor = favor;
  this.clean = () => {
    alert('cleaning in progress');
  }
}

houseKeeper1 = new HouseKeeper('eve', 30, 10, 'f', 'overall');
houseKeeper2 = new HouseKeeper('mel', 24, 1, 'f', 'book-keeping');


// function PlayAudio(source){
//   let audio = new Audio(`sounds/${source}.mp3`);
//   audio.play();
// }

// let audio1 = PlayAudio(tom-1);