describe('calculator.js', function () {
  it('should add numbers to total', function () {
    const calculator = new Calculator();
    calculator.add(5);

    expect(calculator.total).toBe(5);
  });

  it('should subtract numbers from total', function () {
    const calculator = new Calculator();
    calculator.total = 30;
    calculator.subtract(5);

    expect(calculator.total).toBe(25);
  });

  it('should multiply total by number', function () {
    const calculator = new Calculator();
    calculator.total = 100;
    calculator.multiply(2);

    expect(calculator.total).toBe(200);
  });

  it('should divide total by number', function () {
    const calculator = new Calculator();
    calculator.total = 200;
    calculator.divide(2);

    expect(calculator.total).toBe(100);
  });

  it("has constructor", function () {
    const calculator1 = new Calculator();
    const calculator2 = new Calculator();
    // expect(calculator1).toBe(calculator2)
    expect(calculator1).toEqual(calculator2)
    // expect(calculator1).toBeTruthy()
  })
  it("has tobetruthy", function () {
    const calculator1 = new Calculator();
    const calculator2 = new Calculator();
    expect(calculator1).toBeTruthy()
    expect(calculator2).toBeTruthy()
  })

  it("has unique object", function () {
    const calculator1 = new Calculator();
    const calculator2 = new Calculator();
    expect(calculator1).not.toBe(calculator2)
  });

  it("has common operations", function () {
    const calculator = new Calculator();
    expect(calculator.add).toBeDefined()
    expect(calculator.add).not.toBeUndefined()
  });

  it("it can overwrite total", function () {
    const calculator = new Calculator();
    calculator.total = null
    expect(calculator.total).toBeNull()
  });

  it("it should containes", function () {
    const calculator = new Calculator();
    expect(calculator.constructor.name).toContain('Calcu')
  });

  it("does not handle NaN", function () {
    const calculator = new Calculator();
    calculator.total = 20
    expect(calculator.multiply('a')).toBeNaN()
  });

  it("handle devide by 0", function () {
    const calculator = new Calculator();
    expect(function () { calculator.divide(0) }).toThrow()
    expect(function () { calculator.divide(0) }).toThrowError(Error)
    expect(function () { calculator.divide(0) }).toThrowError(Error, "Cannot divide by zero")
  });

  it("shoud match number", function () {
    const calculator = new Calculator();
    calculator.total = 20
    expect(calculator.add(50)).toMatch(/-?\d+/)
    expect(typeof calculator.total).toMatch('number')
  });

  it("shoud match anything", function () {
    const calculator = new Calculator();
    calculator.total = 20
    expect(calculator.total).toEqual(jasmine.anything())
    expect([]).toEqual(jasmine.anything())
    expect(function () { [] }).toEqual(jasmine.anything())
    // expect(null).toEqual(jasmine.anything())
    // expect(undefined).toEqual(jasmine.anything())
  });

  it("shoud custom matchers", function () {
    const calculator = new Calculator();
    calculator.total = 20
    expect(calculator.total).toBeNumber()
  });
})