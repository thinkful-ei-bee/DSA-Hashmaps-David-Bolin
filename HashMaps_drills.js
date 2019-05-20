'use strict';

const HashMap = require('./HashMap');

function main() {
  const lor = new HashMap();
  lor.set('Hobbit', 'Bilbo');
  lor.set('Hobbit', 'Frodo');
  lor.set('Wizard', 'Gandalf');
  lor.set('Human', 'Aragorn');
  lor.set('Elf', 'Logolas');
  lor.set('Maiar', 'The Necromancer');
  lor.set('Maiar', 'Sauron');
  lor.set('Ringbearer', 'Gollum');
  lor.set('LadyOfLight', 'Galadriel');
  lor.set('HalfElven', 'Arwen');
  lor.set('Ent', 'Treebeard');

  console.log(lor);

  // Exercise 1
  // length is 9 since we are overwriting 'Hobbit' and 'Maiar'
  
  console.log(lor.get('Maiar'));
  console.log(lor.get('Hobbit'));

  // Maiar is Sauron and Hobbit is Frodo since these are the last values we wrote to these keys.

  // Capacity is 24 since we have a length of 9. Capacity was tripled when we went over a length of 4.

  // Exercise 2
  // The code prints the values 20, 10.
  //
  // The code creates two hashmaps each with the key 'Hello World.'
  // The first map first has the value 10 assigned to this key, then overwrites this value with 20.
  // The second map first has the value 20 assigned to it, then overwrites this with 10. Then the value of the key for each map is displayed.

  // Exercise 3
  //
  // (1)
  //
  // Hashmap: [22, 88, _, _, 4, 15, 28, 17, 59, 31, 10]
  //
  // (2)
  //
  // [_, 28, 20, 12, _, 5, 15, _, 17]
  //     19               33
  //     10

  

}

main();