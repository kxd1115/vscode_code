// 封装3个和Token相关的方法 存 取 删

const TOKENKEY = 'Token_key';

function setToken(token) {
  localStorage.setItem(TOKENKEY, token);
}

function getToken() {
  return localStorage.getItem(TOKENKEY);
}

function removeToken() {
  localStorage.removeItem(TOKENKEY);
}

export {
  setToken,
  getToken,
  removeToken
};