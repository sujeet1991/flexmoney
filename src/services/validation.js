import apiList from './api';
import AES from 'aes-js';
// const aesjs = require('aes-js');

export const encrypt = (data) => {
  const key = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];
  if(data !== undefined && data != ""){
    // Encrypt plain text using AES CTR algo.
    let requestData = data;
    var textBytes = AES.utils.utf8.toBytes(JSON.stringify(requestData));
    var aesCtr = new AES.ModeOfOperation.ctr(key, new AES.Counter(5));
    var encryptedBytes = aesCtr.encrypt(textBytes);
    var encryptedHex = AES.utils.hex.fromBytes(encryptedBytes);
    return encryptedHex;
  }else{
    return "";
  }
}

export const userIdValidation = (data) => {
    console.log(data, 'userid validtn')
    var dataErr = '' ;
    var formIsValid = false;

    if(data === ''){
        dataErr = 'User ID cannot be blank';
        formIsValid = false;
    }else{
        dataErr = '';
        formIsValid = true;
    }

    var data1 = {dataErr, formIsValid}
    return data1;
}

export const panValidation = (data) => {
  var dataErr = '' ;
  var formIsValid = false;
  var regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

  if(data === ''){
      dataErr = 'PAN cannot be blank';
      formIsValid = false;
  } else if(!regex.test(data)){
     dataErr = "Enter valid PAN";
     formIsValid = false;
  } else{
      dataErr = '';
      formIsValid = true;
  }

  var data1 = {dataErr, formIsValid}
  return data1;
}

export const loginApi = async (userid) => {
   
    const rawResponse = await fetch(apiList.checkUserExist, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
           
          },
          body: JSON.stringify({"userId" : userid})
        });
       const responseJson = await rawResponse.json();
       return responseJson;   
}

export const signUpApi = async (data) => {
   
  const rawResponse = await fetch(apiList.signUp, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
         
        },
        body: JSON.stringify(data)
      });
     const responseJson = await rawResponse.json();
     return responseJson;   
}

export const passwordValidation = (pwd) => {
    console.log(pwd, 'password validation')
    var pwdErr = '' ;
    var formIsValid = false;
   
    if(pwd === '' || pwd === undefined){
        pwdErr = 'Password cannot be blank';
        formIsValid = false;
    } else if(pwd.length < 8 || pwd.length > 14){
        console.log(pwd.length);
        pwdErr = 'Password must be minimum 8 characters and maximum 14 characters';
        formIsValid = false;
    } else{
        pwdErr = '';
        formIsValid = true;
    }

    var pwd1 = {pwdErr, formIsValid}
    return pwd1;
}

export const signUpPasswordValidation = (pwd) => {
  console.log(pwd.length, 'password validation')
  var pwdErr = '' ;
  var formIsValid = false;
  var pwdreg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,20}$/;
  if(pwd === '' || pwd === undefined){
      pwdErr = 'Password cannot be blank';
      formIsValid = false;
  } else if(pwd.length <= 7 || pwd.length >= 13){
    console.log(pwd.length);
      pwdErr = 'Password must be minimum 8 characters and maximum 14 characters';
      formIsValid = false;
  } else if(!pwdreg.test(pwd)){
    console.log(pwd.length, '2');
      pwdErr = 'Password must contain atleast 1 uppercase, 1 lowercase, 1 special character and 1 number.';
      formIsValid = false;
  } else{
      pwdErr = '';
      formIsValid = true;
  }

  var pwd1 = {pwdErr, formIsValid}
  return pwd1;
}

export const SignInApi = async (data) => {
   
    const rawResponse = await fetch(apiList.signIn, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
           
          },
          body: JSON.stringify(data)
        });
       const responseJson = await rawResponse.json();
       return responseJson;   
}

export const SendOTPApi = async (data) => {
   
    const rawResponse = await fetch(apiList.sendOTP, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
           
          },
          body: JSON.stringify(data)
        });
       const responseJson = await rawResponse.json();
       return responseJson;   
}

export const generateUserApi = async (data) => {
    console.log('api call functn');
    const rawResponse = await fetch(apiList.generateUserID, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
           
          },
          body: JSON.stringify((data),console.log(data))
        });
       const responseJson = await rawResponse.json();
       console.log(responseJson);
       return responseJson;   
}

export const otpValidation = (otp) => {
    console.log(otp, 'otp validation')
    var otpErr = '' ;
    var formIsValid = false;

    if(otp === ''){
        otpErr = 'Enter OTP';
        formIsValid = false;
    }else if (otp.length <= 5){
        otpErr = 'Enter valid OTP';
        formIsValid = false;
    }else{
        otpErr = '';
        formIsValid = true;
    }


    var otp1 = {otpErr, formIsValid}
    return otp1;
}

export const VerifyOTPApi = async (data) => {
   
    const rawResponse = await fetch(apiList.verifyOTP, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
           
          },
          body: JSON.stringify(data)
        });
       const responseJson = await rawResponse.json();
       console.log(responseJson);
       return responseJson;   
}

export const updatePasswordApi = async (data) => {
   
    const rawResponse = await fetch(apiList.updatePassword, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
           
          },
          body: JSON.stringify(data)
        });
       const responseJson = await rawResponse.json();
       console.log(responseJson);
       return responseJson;   
}

export const selfSendOTPApi = async (data) => {
   
    const rawResponse = await fetch(apiList.selfSendOtp, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
           
          },
          body: JSON.stringify(data)
        });
       const responseJson = await rawResponse.json();
       return responseJson;   
}

export const mobileValidator = (mobile) => {
  var mobErr = '';
  var formIsValid = true;
  var mobreg = /^[56789]\d{9}$/;
  if(mobile === ''){
      mobErr = "Mobile no. cannot be blank"
      formIsValid = false;
  } else if(!mobreg.test(mobile)){
      mobErr = "Enter valid mobile number"
      formIsValid = false;
  } else {
      mobErr = ""
      formIsValid = true;
  }

  var mob_det = {mobErr, formIsValid};
  return mob_det;
}
export const emailValidator = (email) => {
  console.log(email)
  var dataErr = '';
  var formIsValid = true;
  var emailreg =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 
  if(email === '' || email === null){
      dataErr = "Email id cannot be blank"
      formIsValid = false;
  } else if (!emailreg.test(email)){
      dataErr = "Enter valid email id"
      formIsValid = false;
  } else {
      dataErr = '';
      formIsValid = true;
  }
  var email_det = {dataErr, formIsValid};
  return email_det;
}

export const fullname = (name )=> {
  let formIsValid=true;
  let msg="";
  var regex = /^.+\s.+$/ ;
  //let namecheck=name.indexOf(' ');
  console.info(name.length);
  if(name===""){
      formIsValid=false;
      msg="Full name cannot be blank";
  }else if(name.length < 2 || name.length>=60){
      formIsValid=false;
      msg="Enter valid name (minimum 2 characters)";
  }else if(!regex.test(name)){
      formIsValid=false;
      msg="Enter last name";
    
  }else{
      formIsValid=true;
      msg=""; 
  }  
  let res={
      status:formIsValid,
      message:msg
  };
  return res
}

export const rmcpApi = async (userid) => {
   // payload = {"api_name":"GetRMDetails","request":{"data":{"emptype":"RM","userid":"BG255481"}}}
   // payload = {"api_name":"GetRMDetails","request":{"data":{"emptype":"BP","userid":"BG255481"}}}
   
   // {"success":false,"response":{"api_name":"GetRMDetails","data":{},"msg":"No Data Found"}}
   
   // {"success":true,"response":{"api_name":"GetRMDetails","data":{"rmcpid":1588,"empid":314880,"empcode":314880,"userid":"BGOS004364","euinno":null,"pan":null,"emptitile":null,"empfirstname":"GANESH GOUDMADLE","emplastname":null,"isactive":true},"msg":"Data Found Successfully"}}
    let payload = {"api_name":"GetRMDetails","request":{"data":{"emptype":"RM","userid":userid}}};
    let rawResponse = await fetch(apiList.rmcp, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
           
          },
          body: JSON.stringify(payload)
        });
       let responseJson = await rawResponse.json();
       if(responseJson.success == true){
             responseJson.type = "RM";
       }
       if(responseJson.success == false){
         payload = {"api_name":"GetRMDetails","request":{"data":{"emptype":"BP","userid":userid}}};
         rawResponse = await fetch(apiList.rmcp, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
               
              },
              body: JSON.stringify(payload)
            });
           responseJson = await rawResponse.json();
           if(responseJson.success == true){
             responseJson.type = "BP";
           }else{
             responseJson.type = "ONL";
           }
       }
       return responseJson;   
}