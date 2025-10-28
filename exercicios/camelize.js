function camelize(str) {
    const string = str.replace(/[^a-zA-Z0-9\s]+/g, ' ');
 
   return string
     .toLowerCase()
     .split(' ')
     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
     .join('');
 }
 
 