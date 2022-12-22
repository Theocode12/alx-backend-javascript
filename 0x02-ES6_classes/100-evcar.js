import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  static get [Symbol.species]() {
    return Car;
  }

  cloneCar(...rest) {
    if (this.x) {
      return new Car(...rest);
    }
    return new Car(...rest);
  }

  get range() { return this._range; }

  set range(value) {
    if (typeof value === 'string' || value === undefined) {
      this._range = value;
    } else {
      throw TypeError('range must be string');
    }
  }
}
