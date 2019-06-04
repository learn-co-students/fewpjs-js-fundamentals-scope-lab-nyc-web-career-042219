let animal = ""

function myAnimal(name) {
  animal = name
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  animal = myAnimal(name)
  return animal
}

function add2(n) {
  let two = 2
  return n + two

  // Feel free to move things around!
  
}