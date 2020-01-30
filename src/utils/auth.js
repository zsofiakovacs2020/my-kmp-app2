function checkLocalAuth(){
  let user = window.localStorage.getItem('user');
  let pass = window.localStorage.getItem('pass');

  if (user && pass){
      return checkCredendials (user, pass);
  }else {
      return false;
  }
}

function checkCredendials(user,pass){
  return (user==="Zsofi" && pass==="123");
}

function storeAuth(user,pass){
  window.localStorage.setItem('user', user);
  window.localStorage.setItem('pass', pass);
}

function removeUserCredentails(){
  window.localStorage.removeItem('user');
  window.localStorage.removeItem('pass');
}

export default {storeAuth,checkCredendials,checkLocalAuth, removeUserCredentails};