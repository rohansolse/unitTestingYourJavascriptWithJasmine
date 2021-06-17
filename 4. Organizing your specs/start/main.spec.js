describe('main.js', function () {
    describe("updateResult()", function () {
        beforeAll(function () {
            element = document.createElement('div')
            element.setAttribute('id', 'result')
            document.body.appendChild(element)
            this.element = element
        })
        afterAll(function () {
            document.body.removeChild(this.element)
        })
        it("add result to dom", function () {
            updateResult('5')
            expect(this.element.innerText).toBe('5')
        })
    })
})