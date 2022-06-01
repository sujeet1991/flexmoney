
// let BaseURL = 'http://localhost:8043/registration/api/v2/';
let BaseURL = 'https://uatwealth.com/registration/api/v2/';
let BaseURL2 = 'https://uatwealth.com/mf/api/';
let apiList = {
    "checkUserExist" : `${BaseURL}isUserExists`,
    "signIn"         : `${BaseURL}signIn`,
    "sendOTP"        : `${BaseURL}forgotPassword`,
    "verifyOTP"      : `${BaseURL}verifyOTP`,
    "updatePassword" : `${BaseURL}updatePassword`,
    "generateUserID" : `${BaseURL}generateUserId`,
    "signUp"         : `${BaseURL}signUp`,
    "selfSendOtp"    : `${BaseURL}sendOtp`,
    "signUp"         : `${BaseURL}signUp`,
    "rmcp"           : `${BaseURL}GetRMDetails`
}   

export default apiList;