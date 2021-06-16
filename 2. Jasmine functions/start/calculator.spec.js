describe('calculator.js', () => {
    it('should add number to total', () => {
        const calculator = new Calculator()
        calculator.total = 12
        calculator.add(2)
        expect(calculator.total).toBe(14)
    })
    it('should subtract number from total', () => {
        const calculator = new Calculator()
        calculator.total = 12
        calculator.subtract(2)
        expect(calculator.total).toBe(10)

    })
    it('should multiply number by total', () => {
        const calculator = new Calculator()
        calculator.total = 12
        calculator.multiply(2)
        expect(calculator.total).toBe(24)
    })
    it('should divide number by total', () => {
        const calculator = new Calculator()
        calculator.total = 12
        calculator.divide(2)
        expect(calculator.total).toBe(6)
    })
})