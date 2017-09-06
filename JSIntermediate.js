function starString(num) {
    var str = "";
    for (var i = 0; i < num; i++) {
        str += "*";
    }
    console.log(str);
}

// starString(7);

function drawStars(arr) {
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i]; j++) {
            str += "*";

        }
        console.log(str);
        str = "";
    }

}

//drawStars([1,4,5,2]);

// function drawStars2(arr){
//   var str = "";
//   for (var i = 0; i < arr.length; i++){
//     console.log(i);
//     console.log(arr[i]);
//     for (var j = 0; j < arr[i]; j++){
//       str += "*";
//       if (typeof arr[i] == 'string'){
//           str += arr[0].toLowerCase() * arr[i][j].length;
//           console.log(str);
//         }
//     }
//     console.log(str);
//     str = "";

//   }
// }
// drawStars2( [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]);


// def stars2(arr):
//     length = 0
//     letter = ""
//     for i in arr:
//         if type(i) is int:
//             print ("*"*i)
//         elif type(i) is str:
//             length = len(i)
//             letter = i[0].lower()
//             print letter * length



function drawStars2(arr) {
    var length = 0;
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number')
            console.log("*" * arr[i]);
        else if (typeof arr[i] == 'string') {
            length = arr[i].length;
            str = arr[i][0].toLowerCase();
            console.log(str * length);
        }
    }
}
drawStars2([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]);