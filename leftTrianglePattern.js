                     * 
                   * * 
                 * * * 
               * * * * 
             * * * * * 
           * * * * * * 
         * * * * * * * 
       * * * * * * * * 
     * * * * * * * * * 
   * * * * * * * * * * 
                       
function leftTrianglePattern(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 2 * (n - i); j >= 0; j--) {
            process.stdout.write(" ");
        }
        for (let j = 0; j <= i; j++) {
            process.stdout.write("* ");
        }
        console.log();
    }
}

let n = 10
leftTrianglePattern(n);                       
                       
