function isprime() {
    for (i = 2; i < 200; i++) {
        if ((i % 2 == 0) || (i % 5 == 0) || (i % 7 == 0) || (i % 11 == 0)) {
            console.log("is not a prime number" + i)
        }
        else {
            console.log("is a prime number"+i)
        }
        
    }
}


isprime()
