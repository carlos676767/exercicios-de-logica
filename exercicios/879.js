var min = function(list){
    
    return list.sort((a,b) => a - b)[0]
}

var max = function(list){
    
    const value = list.sort((a, b) => b- a)
    return value[0]
}

