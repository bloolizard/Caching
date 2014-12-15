describe('Web Caching', function(){

    describe('Cache-Control', function(){

        it('Cache-Control header should contain max-age', function(){
            expect(hasMaxAge(getResponseHeader('Cache-Control'))).toBe(true);
        });

        it('Cache-Control header should contain must revalidate', function(){
            expect(hasMustRevalidate(getResponseHeader('Cache-Control'))).toBe(true);
        });

    });






});