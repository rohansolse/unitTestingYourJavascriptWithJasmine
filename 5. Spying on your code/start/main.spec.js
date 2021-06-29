describe('main.js', function () {
    describe('calculate()', function () {
        it('validates expression when first no is invalid', function () {
            spyOn(window, 'updateResult').and.stub();
            calculate('a+7')
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });
        it('validates expression when second no is invalid', function () {
            spyOn(window, 'updateResult')
            calculate('3+b')
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });
        it('validates expression when operator is invalid', function () {
            spyOn(window, 'updateResult').and.stub();
            calculate('7_7')
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });
        it('calls add', function () {
            const spy = spyOn(Calculator.prototype, 'add')
            calculate('3+4')
            expect(spy).toHaveBeenCalledTimes(2)
            expect(spy).toHaveBeenCalledWith(3)
            expect(spy).toHaveBeenCalledWith(4)
        });
        it('calls subtract', function () {
            const spy = spyOn(Calculator.prototype, 'subtract')
            const spy0 = spyOn(Calculator.prototype, 'add')
            calculate('3-4')
            expect(spy).toHaveBeenCalledTimes(1)
            expect(spy0).toHaveBeenCalledTimes(1)
            expect(spy0).toHaveBeenCalledWith(3)
            expect(spy).toHaveBeenCalledWith(4)
        });
        it('calls multiply', function () {
            const spy = spyOn(Calculator.prototype, 'multiply')
            calculate('3*4')
            expect(spy).toHaveBeenCalledTimes(1)
            expect(spy).not.toHaveBeenCalledWith(3)
            expect(spy).toHaveBeenCalledWith(4)
        });
        it('calls divide', function () {
            const spy = spyOn(Calculator.prototype, 'divide')
            calculate('4/2')
            expect(spy).toHaveBeenCalledTimes(1)
            expect(spy).not.toHaveBeenCalledWith(4)
            expect(spy).toHaveBeenCalledWith(2)
        });
        xit('validates operation');
        it('calls updateResult', function () {
            spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, 'multiply').and.callThrough()
            calculate('5*5')
            expect(window.updateResult).toHaveBeenCalled()
            expect(window.updateResult).toHaveBeenCalledWith(25)
        });
        it('calls updateResult with returnValue', function () {
            spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, 'multiply').and.returnValue("It's done")
            calculate('5*5')
            expect(window.updateResult).toHaveBeenCalled()
            expect(window.updateResult).toHaveBeenCalledWith("It's done")
        });
        it('calls updateResult with returnValues', function () {
            spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, 'add').and.returnValues(null, "It's done")
            calculate('5+5')
            expect(window.updateResult).toHaveBeenCalled()
            expect(window.updateResult).toHaveBeenCalledWith("It's done")
        });
    });

    describe('updateResult()', function () {
        beforeAll(function () {
            // Executed ONCE before all specs inside this suite are executed.
            const element = document.createElement('div');
            element.setAttribute('id', 'result');
            document.body.appendChild(element);

            this.element = element;
        });

        afterAll(function () {
            // Executed ONCE after all specs inside this describe are executed.
            document.body.removeChild(this.element);
        });

        it('adds result to DOM element', function () {
            updateResult('5');

            expect(this.element.innerText).toBe('5');
        });
    });

    describe('showVersion()', function () {
        it('calls showversion', function () {
            spyOn(document, 'getElementById').and.returnValue({
                innerText: null
            })
            const spy = spyOnProperty(Calculator.prototype, 'version', 'get')
            showVersion()
            expect(spy).toHaveBeenCalled();
        })
    })
});