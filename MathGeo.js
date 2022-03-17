function MathGeo() { }

MathGeo.prototype.getDistanceBetweenPoints = function (latitude1, longitude1, latitude2, longitude2, unit = 'kilometers') {
    theta = longitude1 - longitude2;
    distance =
        Math.sin(deg2rad(latitude1)) * Math.sin(deg2rad(latitude2)) +
        Math.cos(deg2rad(latitude1)) *
        Math.cos(deg2rad(latitude2)) *
        Math.cos(deg2rad(theta));
    distance = Math.acos(distance);
    distance = rad2deg(distance);
    distance = distance * 60 * 1.1515;
    switch (unit) {
        case "miles":
            break;
        case "kilometers":
            distance = distance * 1.609344;
    }
    return distance
}




MathGeo.prototype.deg2rad = function (degrees) {
    var pi = Math.PI;
    return degrees * (pi / 180);
}
MathGeo.prototype.rad2deg = function (radians) {
    var pi = Math.PI;
    return radians * (180 / pi);
}

MathGeo.prototype.round = function (num, dec) {
    var num_sign = num >= 0 ? 1 : -1;
    return parseFloat((Math.round((num * Math.pow(10, dec)) + (num_sign * 0.0001)) / Math.pow(10, dec)).toFixed(dec));
}





//So função



function getDistanceBetweenPointsNew(latitude1, longitude1, latitude2, longitude2, unit = 'kilometers') {

    theta = longitude1 - longitude2
    distance = (Math.sin(deg2rad(latitude1)) * Math.sin(deg2rad(latitude2))) +
        (Math.cos(deg2rad(latitude1)) * Math.cos(deg2rad(latitude2)) * Math.cos(deg2rad(theta)));
    distance = Math.acos(distance);
    distance = rad2deg(distance);
    distance = distance * 60 * 1.1515;
    switch (unit) {
        case 'miles':
            break;
        case 'kilometers':
            distance = distance * 1.609344;
    }
  
  

