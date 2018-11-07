
const UNAUTHORIZED = 401;           // 用户未认证
const USER_NOT_EXIST = 100401;      // 用户
const SUCCESS = 200;                // 成功


function urlencoded(data) {
  return Object.keys(data)
    .filter(key => data[key] !== undefined && data[key] !== null)
    .map(key => `${key}=${encodeURIComponent(data[key])}`).join('&')
}


function deal_response(data) {
  if (data.code == SUCCESS) {
    return data;
  }
  if (data.code == UNAUTHORIZED && data.redirect) {
    window.location.replace(data.redirect);
  }
  message.error(data.msg);
  return Promise.reject(data);
}

export function Get(url, options) {
  const data = options && options.data || {};
  options && delete options.data;
  const query = urlencoded(data);
  return fetch(query ? `${url}?${query}` : url, Object.assign({
    method: 'get',
    credentials: 'include'
  }, options))
    .then(res => res.json())
    .then(data => {
      return deal_response(data);
    });
}

export function Delete(url, options) {
  const data = options && options.data || {};
  options && delete options.data;
  const query = urlencoded(data);
  return fetch(query ? `${url}?${query}` : url, Object.assign({
    method: 'delete',
    credentials: 'include'
  }, options))
    .then(res => res.json())
    .then(data => {
      return deal_response(data);
    });
}

export function Post(url, options) {
  return fetch(url, Object.assign({
    method: 'post',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  }, options))
    .then(res => res.json())
    .then(data => {
      return deal_response(data);
    });
}

export function PostForm(url, datas) {
  const formData = new FormData();
  Object.keys(datas).forEach(key => {
    formData.append(key, datas[key]);
  });
  return fetch(url, {
    method: 'post',
    credentials: 'include',
    body: formData
  })
    .then(res => res.json())
    .then(data => {
      return deal_response(data);
    });
}

export function PostJson(url, datas) {
  return fetch(url, {
    method: 'post',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datas)
  })
    .then(res => res.json())
    .then(data => {
      return deal_response(data);
    });
}

export function PutJson(url, datas) {
  return fetch(url, {
    method: 'put',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datas)
  })
    .then(res => res.json())
    .then(data => {
      return deal_response(data);
    });
}