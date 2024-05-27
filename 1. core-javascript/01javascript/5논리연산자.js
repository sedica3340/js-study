let t = true, f = false;
// and &&
console.log(t && t);//true
console.log(t && f);//false
console.log(f && t);//false
console.log(f && f);//false

// or ||
console.log(t || t);//true
console.log(t || f);//true
console.log(f || t);//true
console.log(f || f);//false

// not !
console.log(!t);//false
console.log(!f);//true