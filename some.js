function solve(a,b){

    return [...new Set( [
     ...a,
     ...b
    ] )].sort((a, b) => b.localeCompare(a)).join("");
   };
   
   
   console.log(solve("xyab","xzca"));
   
   