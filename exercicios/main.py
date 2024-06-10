def somar(arr):

  if not arr:  
    return 0

  total_sum = 0
  for element in arr:
    if isinstance(element, (int, float)):  
      total_sum += element
  return total_sum
