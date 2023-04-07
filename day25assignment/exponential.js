function recursive(baseNumber, exponent) {   // ----two parameter-base and exponent
    if (exponent == 1) {                 // ----Anytime the power is 1, return...
        return baseNumber;                         // ---return the baseNumber
  } else {
    return baseNumber * recursive(baseNumber, exponent - 1); // --calls itself with exponent -1 until base is reached 
  }
}
// ---Printing of the requested exponential that was provided
console.log(recursive(2,5))
console.log(recursive(7,3))
console.log(recursive(12,2))
console.log(recursive(9,4))