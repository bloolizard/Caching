var headers = {'Cache-Control':'test'};


//gets header of specific type
function getResponseHeader(header){
    return headers[header];
}


// returns a boolean that says max-age
function hasMaxAge(header){
}

// returns a boolean that says if has 'must-validate'
function hasMustRevalidate(header){
}
