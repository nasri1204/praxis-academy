function Vehicle(make, model, color, year) {
    this.make = make,
        this.model = model,
        this.color = color,
        this.year = year,
        this.getName = function() {
            return this.make + " " + this.model;
        }
}