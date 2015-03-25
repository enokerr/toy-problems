var inputSizes = [1000, 2000, 3000, 4000, 5000, 6000, 7000,
    8000, 9000, 10000, 11000, 12000, 13000, 14000,
    15000, 16000, 17000, 18000, 19000, 20000];

inputSizes.forEach(function(inputSize) {
    var a = [];
    for (var i=0; i<inputSize*10; i++) {
        a.push(Math.random() * 1000);
    };

    console.log("Sorting array of size:", a.length);
    console.time("Runtime");
    bucketSort(a); //can insert any function here!
    console.timeEnd("Runtime");
})

//-------------------------------------------------

//bubble sort algorithm 

var bubbleSort = function(a){
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        };
    } while (swapped);
}

//--------------------------------------------------------

//bucket sort algortithm

var bucketSort = function(a) {
    var buckets = [];
    for (var i=0; i<=1000; i++) {
        buckets.push(0);
    }

    for (var i = 0; i<a.length; i++) {
        var number = a[i];
        buckets[number]++;
    }

    var index = 0;
    for (var number = 0; number<=1000; number++) {
        var count = buckets[number];
        for (var j=0; j<count; j++) {
            a[index] = number;
            index++;
        }
    }
}

//--------------------------------------------------------------------



































