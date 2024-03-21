let n1 = +prompt('정수 A');
let n2 = +prompt('정수 B');
let n3 = +prompt('정수 C');

if (n1 <= n2 && n1 <= n3) {
    alert(`최소값: ${n1}`);    
} else if (n2 <= n1 && n2 <= n3) {
    alert(`최소값: ${n2}`);    
} else if (n3 <= n1 && n3 <= n2) {
    alert(`최소값: ${n3}`);
}