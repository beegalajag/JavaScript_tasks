function isBigEnough(element) {
  return element >= 15;
}

console.log([12, 5, 8, ,25,130, 44].find(isBigEnough));