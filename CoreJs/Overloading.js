//Overloading not present in js but we have concept of over writing

name(); 

function name(params) {
    console.log(params)
}

name("Mengjie") //

function name(params, param2) {
    console.log(params +" 2nd "+ param2)
}

name("Mengjie", "Menglee") //