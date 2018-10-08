function Port(weather){
    this._weather = weather;
    this._ships = [];
}

Port.prototype.getPort = function() {
    return this.port;
}

Port.prototype.getWeather = function() {
    return this._weather;
}

Port.prototype.addShip = function (ship){
    this._ships.push(ship);
}

Port.prototype.getShips = function(){
    return this._ships;

}

Port.prototype.getCapacity = function(){
    return this._ships.length;
}