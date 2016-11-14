const NOT_DEFINED_ERROR = (functionName) => new Error(functionName + " function is not defined");

class MapObject {
	getSprite() {
		throw NOT_DEFINED_ERROR("getSprite");
	}
}

export default MapObject