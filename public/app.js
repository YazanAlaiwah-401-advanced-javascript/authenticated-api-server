// alert('dsf')
let url = 'https://github.com/login/oauth/authorize';

let options = {
  client_id:'4b7c598e9b0f32553ad7',
  redirect_uri:'http://localhost:3000/api/v1/auth/oauth',
  scope: 'read:user',
};

const queryString = Object.keys(options)
  .map((key) => {
    return `${key}=${encodeURIComponent(options[key])}`;
  })
  .join('&');

const authUrl = `${url}?${queryString}`;
const link = document.getElementById('github');
link.setAttribute('href', authUrl);








