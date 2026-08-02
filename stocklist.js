function stockList(books, categories) {
    if (books.length === 0 || categories.length === 0) {
      return "";
    }
  
    const objectValues = {};
  
    for (const category of categories) {
      let sum = 0;
  
      for (const book of books) {
        if (category === book[0]) {
          const regexMatch = Number(book.match(/\d+/)[0]);
          sum += regexMatch;
        }
      }
  
      objectValues[category] = sum;
    }
  
    return Object.entries(objectValues)
      .map(([category, quantity]) => `(${category} : ${quantity})`)
      .join(" - ");
  }
  
  console.log(
    stockList(
      ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"],
      ["A", "B", "C", "W"]
    )
  );