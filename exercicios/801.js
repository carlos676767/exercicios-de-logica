function bonusTime(salary, bonus) {
    const multiSlary = salary * 10
    return bonus ? `£${multiSlary}` : `£${salary}`
  }