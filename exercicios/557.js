// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> 


function findNeedle() {
    const palavras = ["hay", "junk", "hay", "needle", "hay", "moreJunk", "randomJunk"]
    const encontrarIndice = palavras.indexOf("needle")
    if (encontrarIndice != -1) {
    return`found the needle at position ${encontrarIndice}`
    }
}

//"found the needle at position 5" 
findNeedle()