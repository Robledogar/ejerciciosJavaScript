let valorImpreso;

for (i=1; i<=100; i++) {
	

	if(i%3 == 0 && i%5 == 0) {
		valorImpreso = ("fizzbuzz");
	} else if(i%5 == 0) {
		valorImpreso = ("buzz");
	} else if(i%3 == 0) {
		valorImpreso = ("fizz");
	} else {
		valorImpreso = i;
	}

	console.log(valorImpreso);
}
