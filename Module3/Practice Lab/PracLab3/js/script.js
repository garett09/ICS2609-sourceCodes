var a = 1, b = 2, c = 3; 
(function firstFunction(){  
         var b = 5, c = 6;  
         console.log("1ST FUNCa: "+a+", b: "+b+", c: "+c);  
         (function secondFunction(){  
             var b = 8;  
             console.log("2ND FUNCa: "+a+", b: "+b+", c: "+c);  
             (function thirdFunction(){  
                 var a = 7, c = 9;  
                 console.log("3RD FUNCa: "+a+", b: "+b+", c: "+c);  
                 (function fourthFunction(){  
                     var a = 1, c = 8;  
                     console.log("4THFUNCa: "+a+", b: "+b+", c: "+c);  
                 })();  
                 console.log("TEST1a: "+a+", b: "+b+", c: "+c);
             })(); 
             console.log("TEST2a: "+a+", b: "+b+", c: "+c);
         })();  
         console.log("TEST3a: "+a+", b: "+b+", c: "+c);
     })();
     console.log("TEST4a: "+a+", b: "+b+", c: "+c);