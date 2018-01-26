function noDuplication(originalString) {
    var noDuplicationString = "";
    var extras = "";
    for (var i = 0; i < originalString.length; i++) {
        console.log(noDuplicationString.indexof(originalString[i]));
        
        noDuplicationString = noDuplicationString + originalString[i];


    }
}
noDuplication("Home Sweet Home.");
