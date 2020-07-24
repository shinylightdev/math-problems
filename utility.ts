/**
 * Tools used for calculations, validation, etc. throughout the project. 
 *
 * @class Utility
 */
export class Utility {
  
  constructor() {

  }


  /**
   * Returns a random number from min to max. 
   *
   * @static
   * @param {number} min
   * @param {number} max
   * @returns {number}
   * @memberof Utility
   */
  static getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}



//console.log(Utility.getRandom(0,10));