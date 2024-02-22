function sumFibonacci(n) {
	let arr = [0, 1];
	
	if (typeof n !== 'number' && n <= 0) {
        return 0;
    }
	
	for (let i = 2; i <= n; i++)
		arr.push(arr[i - 1] + arr[i - 2]);
	return arr.slice(0, n).reduce((a, b) => a + b, 0);
}

console.log(sumFibonacci(5)); // 7
console.log(sumFibonacci(6)); // 12
console.log(sumFibonacci(2)); // 1
console.log(sumFibonacci("afc")); // 0
console.log(sumFibonacci(-5)); // 0
console.log(sumFibonacci(0)); // 0
