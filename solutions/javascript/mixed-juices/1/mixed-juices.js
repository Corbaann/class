// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
 switch (name){
   case 'Pure Strawberry Joy':
      return 0.5 ;
     break;
   case 'Energizer':
   case 'Green Garden':
      return 1.5;
     break;
   case 'Tropical Island':
      return 3 ;
      break;
   case 'All or Nothing':
      return 5;
   default:
     return 2.5;
 }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  
  let totalwedgescut=0;
  let limecutcount=0;
  while (limecutcount<limes.length && totalwedgescut<wedgesNeeded) {
  let lime= limes[limecutcount];
    let wedgesfromlime=0;
 switch(lime){
   case 'small':
     wedgesfromlime= 6 ;
     break;
   case 'medium':
     wedgesfromlime =8;
     break;
   case 'large':
      wedgesfromlime =10;
     break;
   default:
     wedgesfromlime =0;
     break; 
 }
  totalwedgescut+= wedgesfromlime;
  limecutcount++;
  }
  return limecutcount;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {

do {
  let CurrenJuice = orders.shift();
   let Timetaken=timeToMixJuice(CurrenJuice);
  timeLeft-=Timetaken;
} while (timeLeft>0 && orders.length>0)
return orders;
 
}
