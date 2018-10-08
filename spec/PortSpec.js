describe('Port', function () {

    let weather;
    let port;

    beforeEach(function () {
        weather = new Weather();
        port = new Port(weather);
    });

    it('has weather', function () {
        expect(port.getWeather()).toBe(weather);
    });

});