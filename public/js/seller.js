const becomeSellerElement = document.querySelector('.become-seller');
const productListingElement = document.querySelector('.product-listing');
const applyForm = document.querySelector('.apply-form');
const showApplyFormBtn = document.querySelector('#apply-btn');

window.onload = () => {
    if(sessionStorage.user){
        let user = JSON.parse(sessionStorage.user);
        if(compareToken(user.authToken, user.email)){
            if(!user.seller){
                becomeSellerElement.classList.remove('hide');
            }else{
                productListingElement.classList.remove('hide');
            }
        }else{
            location.replace('login');
        }
    }else{
        location.replace('/login');
    }
}

showApplyFormBtn.addEventListener('click', () => {
    becomeSellerElement.classList.add('hide');
    applyForm.classList.remove('hide');
})

// form submission

const showApplyFormButton = document.querySelector('#apply-form-btn');
const buisnessName = document.querySelector('#buisness-name');
const address = document.querySelector('#buisness-add');
const about = document.querySelector('#about');
const number = document.querySelector('#number');
const tac = document.querySelector('#terms-and-cond');
const legit = document.querySelector('#legitInfo');

showApplyFormButton.addEventListener('click', () => {
    if(!buisnessName.value.length || !address.value.length || !about.value.length || !number.value.length){
        showAlert('fill all the inputs');
    }else if(!tac.checked || !legitInfo.checked){
        showAlert('you must agreed to our terms and conditions');
    }else{
        // making server request
        sendData('/seller', {
            name: buisnessName.value,
            address : address.value,
            about : about.value,
            number : number.value,
            tac : tac.value,
            legitInfo : legitInfo.value,
            email: JSON.parse(sessionStorage.user).email
        });
    };
})