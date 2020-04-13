import tokenService from './tokenService';

const BASE_URL = '/api/jobs/';

export function index() {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

export function create(score) {
  console.log(tokenService.getToken());
  const options = {
    
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(score)
  
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

export function deleteOne(req, res) {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify()
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

export function update(req, res) {
  const options = {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify()
  };
  return fetch(BASE_URL, options).then(res => res.json());
}