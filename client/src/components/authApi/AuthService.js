// auth/auth-service.js
import axios from 'axios';

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:3010/api/auth',
      withCredentials: true
    });
  }


  // , lang, country, description, genre,year
  signup = (username, password, lang, country, description, genre,year) => {
    return this.service.post('/signup', {username, password, lang, country, description, genre,year})
    .then(response => response.data)
  }

  login = (username, password) => {
    return this.service.post('/login', {username, password})
    .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/currentUser',)
    .then(response => response.data)
  }

  logout = () => {
    return this.service.get('/logout',)
    .then(response => response.data)
  }
}

export default AuthService;