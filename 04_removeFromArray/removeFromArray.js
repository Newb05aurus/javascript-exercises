const removeFromArray = function(givenArray, ...toRemove) {
    return givenArray.filter(item => !toRemove.includes(item));

};

// Do not edit below this line
module.exports = removeFromArray;
