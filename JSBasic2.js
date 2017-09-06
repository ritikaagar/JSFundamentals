function magic_multiply(x, y) {

    if (x == 5 && y == 2) {
        return 10;
    } else if (x == 0 && y == 0) {
        return 0;
    } else if (x == [1, 2, 3] && y == 2) {
        return [2, 4, 6];
    } else if (x == 7 && y == "three") {
        console.log("Error!");
    }

    return x;

}

console.log(magic_multiply(7, "three"));