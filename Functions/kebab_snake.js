function kebabToSnake(kebab) {
    var regex = /-/gi;
var snakeCased = kebab.replace(regex, "_");
    return snakeCased;
}
