class HoursInMinutes {
    private hours: string
    constructor(hours: string) {
        this.hours = hours
    }

    private separeHours() {
        return this.hours.split(`:`).map(char => Number(char))
    }
    
    public converterInMinutes() {
        return this.separeHours()[0] * 3600 + this.separeHours()[1] * 60
    }
}

const converter = new HoursInMinutes("05:15")
console.log(converter.converterInMinutes())