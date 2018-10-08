function Ship (port){
    this._currentPort = port;
    
}

Ship.prototype.getShip = function (){
return Ship;

}

Ship.prototype.getCurrentPort = function (){
    return this._currentPort;
}

Ship.prototype.setSail = function() {
    if(this.getCurrentPort().getWeather().isStormy()){
        throw new Error ('cannot sail in stormy weather');
    }

    this._currentPort = null;
    
}

Ship.prototype.dock = function(port) {
    this._currentPort = port;
    if(this._currentPort.getCapacity() <= 8){
        this._currentPort.addShip(this);
    } else {
        throw new Error ('the port is at full capacity, please try later.');
    }
    
}