describe ("Ship", function(){

    let weather;
    let port;
    let ship;
    let arrivalPort;

    beforeEach (function(){
        weather = new Weather();
        port = new Port(weather);
        ship = new Ship(port);
        arrivalPort = new Port();
    })

    it ('has a starting point', function(){
        expect(ship.getCurrentPort()).toBe(port);
    })

    it('can set sail from port', function(){
        spyOn(weather, 'isStormy').and.returnValue(false);

        ship.setSail();
        expect(ship.getCurrentPort()).toBeFalsy();
    })

    it('can dock at a port', function() {
        ship.dock(arrivalPort);
        expect(ship.getCurrentPort()).toBe(arrivalPort);
    })

    it('doesn\'t set sail in stormy weather', function () {
        spyOn(weather, 'isStormy').and.returnValue(true);

        expect(function () {
            ship.setSail();
        }).toThrowError('cannot sail in stormy weather'); 
    })

    it('instructs the port to add the ship', function (){
        spyOn(arrivalPort, 'addShip');
        ship.dock(arrivalPort);
        expect(arrivalPort.addShip).toHaveBeenCalledWith(ship);
    })

    it('doesn\'t dock if port is at capacity', function (){

        for (var i = 0; i <=8 ;i++){
            port.addShip('Shippy McShippyface');
        }
        
        expect(function(){
            ship.dock(port);
        }).toThrowError('the port is at full capacity, please try later.');
    })

});