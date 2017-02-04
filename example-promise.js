// function getTempCallback (location, callback) {
//     callback(undefined, 78);
//     callback('City not found');
// }
//
// getTempCallback('Philadelphia', function(err, temp){
//     if(err) {
//         console.log('error', err);
//     } else {
//         console.log('success', temp);
//     }
// });
//
// function getTempPromise(location) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function(){
//             resolve(79);
//             reject('City not found');
//         }, 1000);
//     });
// }
//
// getTempPromise('Philadelphia').then(function (temp) {
//    console.log('promise success ', temp);
// }, function(err){
//     console.log('promise error ', err);
// });


//challenge area
// 6d3cc3a632aaa6c93edd758ea9f36de9
function addPromise(a, b){
    return new Promise (function(resolve, reject){
        if (typeof a === 'number' && typeof b === 'number'){
            resolve(a + b);
        } else {
            reject('invalid numbers');
        }
    })
}

addPromise(1, 2).then(function(sum) {
    console.log('success', sum);
}, function(error) {
    console.log(error);
})