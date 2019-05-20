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
}

main();