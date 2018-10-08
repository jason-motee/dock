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
    this._currentPort = null;
}

Ship.prototype.dock = function(arrivalPort) {
    this._currentPort = arrivalPort;
}