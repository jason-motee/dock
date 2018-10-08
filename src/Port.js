function Port(weather){
    this._weather = weather;
}

Port.prototype.getPort = function() {
    return this.port;
}

Port.prototype.getWeather = function() {
    return this._weather;
}