class Ship {
    constructor(draft, crew) {
      this.draft = draft;
      this.crew = crew;
    }
  
    isWorthIt() {
      const sub = this.draft - this.crew * 1.5;
  
      return sub > 20;
    }
  }