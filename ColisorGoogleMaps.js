function ColisorGoogleMaps(separator = ",") {
    this.polygon = [];
    this.pointOnVertex = true
    this.separator = separator

}

ColisorGoogleMaps.prototype.setPolygon = function (polygon) {
    this.polygon = polygon;
};

ColisorGoogleMaps.prototype.getPolygon = function () {
    return this.polygon;
};


ColisorGoogleMaps.prototype.pointOnVertexS = function (point, vertices) {
    var rowsVertices = vertices.length
    for (next = 0; next < rowsVertices; next++) {
        if (point == vertices) {
            return true
        }
    }
    return false
};

ColisorGoogleMaps.prototype.pointStringToCoordinates = function (pointString) {
    var coordinates = pointString.split(this.separator)
    return { x: coordinates[0], y: coordinates[1] }
};


ColisorGoogleMaps.prototype.pointInPolygon = function (point, polygon, pointOnVertex = true) {
    this.pointOnVertex = pointOnVertex
    // Transform string coordinates into arrays with x and y values
    var point = this.pointStringToCoordinates(point)
    var vertices = [];
    var rowsVertices = polygon.length
    for (next = 0; next < rowsVertices; next++) {
        vertices.push(this.pointStringToCoordinates(polygon[next]))
    }

    // Check if the point sits exactly on a vertex
    if (this.pointOnVertex == true && this.pointOnVertexS(point, vertices)) {
        return "vertex";
    }

    // Check if the point is inside the polygon or on the boundary
    intersections = 0;
    vertices_count = vertices.length

    for (i = 1; i < vertices_count; i++) {
        vertex1 = vertices[i - 1];
        vertex2 = vertices[i];
        if (vertex1['y'] == vertex2['y'] && vertex1['y'] == point['y'] && point['x'] > Math.min(vertex1['x'], vertex2['x']) && point['x'] < Math.max(vertex1['x'], vertex2['x'])) { // Check if point is on an horizontal polygon boundary
            return -1 //Fronteira "boundary";
        }
        if (point['y'] >  Math.min(vertex1['y'], vertex2['y']) && point['y'] <=  Math.max(vertex1['y'], vertex2['y']) && point['x'] <=  Math.max(vertex1['x'], vertex2['x']) && vertex1['y'] != vertex2['y']) {
            xinters = (point['y'] - vertex1['y']) * (vertex2['x'] - vertex1['x']) / (vertex2['y'] - vertex1['y']) + vertex1['x'];
            if (xinters == point['x']) { // Check if point is on the polygon boundary (other than horizontal)
                return -1 //Fronteira "boundary";
            }
            if (vertex1['x'] == vertex2['x'] || point['x'] <= xinters) {
                intersections++;
            }
        }
    }

    // If the number of edges we passed through is odd, then it's in the polygon. 
    if (intersections % 2 != 0) {
        return 1 //"inside";
    } else {
        return 0 //"outside";
    }
};


 