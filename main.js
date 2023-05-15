const inputs = document.querySelectorAll('input');

const patterns = {
       
         name: /^[a-z]{5,20}$/i,
         phone: /^\d{11}$/,
         email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
        pass: /^[a-z0-9_-]{8,20}$/,
         
        repeat: /^[a-z0-9_-]{8,20}$/
       
       
};

// validation function
function validate(field, regex){

    if(regex.test(field.value)){
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }

}

// attach keyup events to inputs
inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
            //console.log(patterns[e.target.attributes.name.value]);
            validate(e.target, patterns[e.target.attributes.name.value]);
    });
});
 
