// There is no constructor because all big ints are simple arrays.
// Instead, there are only helper functions to modify these arrays.
// 
// TypedArrays aren't used as there is no current performance imperative to do so.
// 
// Utility
//  - toString(numbase)         {String} -> returns a string in the specified base supports Base 2,10,16,36,64
//  - fromString(num, base)  {BigInt} -> creates a bigInt from a string and its base, support is same as toString
// 
// Basic Arithmetic
//  - add(x,y)        {BigInt} -> computes x + y
//  - subtract(x,y)   {BigInt} -> computes x - y
//  - multiply(x,y)   {BigInt} -> computes x * y
//  - divide(x,y)     {BigInt} -> computes x / y
//  - pow(x,y)        {BigInt} -> computes x ** y
//  - abs(x)          {BigInt} -> computes |x|
//  
// Advanced Arithmetic
//  - modpow(x,y,z)   {BigInt} -> computes (x ** y) % z

const MAX_INTEGER = 2 ** 32