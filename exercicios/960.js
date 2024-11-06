function bmi(weight, height) {
    const imc = weight / (height * height)
  
    return imc <= 18.5 ? "Underweight" :
      imc <= 25.0? "Normal" :
        imc <= 30.0  ? "Overweight" : "Obese";
  }