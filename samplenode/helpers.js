function greet(name) {
    console.log(`Hellow, ${name}`);
}


function hello(name) {
    console.log('say hello', __filename);
}



module.exports = { greet };
module.exports.hello = hello;
(function(){

})();