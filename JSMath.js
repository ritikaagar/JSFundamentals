//Math1

function zero_negativity(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            return false;
        }
    }
    return true;
}

//zero_negativity([1,9,7,-8,-6]);

//Math2

function is_even(num) {
    if (num % 2 === 0) {
        return true;
    } else
        return false;
}

// is_even(2);


//Math3

function how_many_even(myarr) {
    count = 0;
    for (var i = 0; i < myarr.length; i++) {
        if (myarr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}

// how_many_even([1,2,3,6]);


//Math4
function create_dummy_array(n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * 10));
    }
    return arr;
}

create_dummy_array(3);


//Math5

function random_choice(arr) {
    var item = arr[Math.floor(Math.random() * arr.length)];
    return item;
}

//random_choice([1,4,4]);