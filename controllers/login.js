import {Validation} from '../util/validation.js'
import {LoginVal} from "../models/Login.js";

// emai: asc@gmail.com
//                     asc@gmail.com
// pass: aA1!aa
//                     aA1!aa

document.getElementById('login').onclick = function(){
  
    let loginVal = new LoginVal()
    
    let em = document.getElementById('txt__email').value
    loginVal.email = document.getElementById('txt__email').value
    loginVal.password = document.getElementById('txt__password').value

    if(em!=''){
      let usera = localStorage.getItem('mang');
      let data = JSON.parse(usera)
      console.log(data)
      if(loginVal.email== data.email && loginVal.password==data.password){
        
        window.location.href = './index.html'
        // loginAxios(login)
      }
  }
}

//  export const emaa = 31 
function loginAxios(user){
    let promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signin',
        method: "POST",
        ResponseType: JSON,
        data: user,
    })
    promise.then(function(res) {
        console.log(res.data);
    })
    promise.catch(function(err) {
        console.log(err.response.data);
    })
}


///EYE

function toggle(txt__id1,txt__id2){
    let id1 = document.getElementById(txt__id1)
    let id2 = document.getElementById(txt__id2)
    if(id1.type=== 'password'){
      id1.setAttribute('type', 'text');
      id2.style.color = '#7a797e';
    }
    else{
      id1.setAttribute('type', 'password');
      id2.style.color = '#5887ef';
    }
  }
document.getElementById('eye__open').onclick = function(){
    toggle('txt__password','eye__open')
  }