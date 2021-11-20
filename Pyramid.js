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
      
function pyramidPattern(n) {
    for (let i = 0; i < n; i++) {
        for (let j = n - i; j > 1; j--) {
            process.stdout.write(" ");
        }
        for (let j = 0; j <= i; j++) {
            process.stdout.write("* ");
        }
        console.log();
    }
}

let n = 10
pyramidPattern(n);
