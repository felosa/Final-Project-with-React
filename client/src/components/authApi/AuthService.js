import axios from "axios";

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL:`${process.env.REACT_APP_URL}/auth`,
      withCredentials: true
    });
   
  }


  // , lang, country, description, genre,year
  signup = (username, password, lang, country, description, genre,year) => {

    return this.service.post('/signup', {username, password, lang, country, description, genre,year})
    .then(response => response.data)
    .catch(err => console.error(err))
  }

  login = (username, password) => {
    console.log(username, password)
    return this.service.post('/login', {username, password})
    .then(response => 
      
      response.data
    )
    .catch(err => console.error(err))
  }

  loggedin = () => {
    return this.service.get('/currentUser')
    .then(response => response.data)
  }

  logout = () => {
    return this.service.get('/logout', {})
    .then(response => response.data)
  }
}

export default AuthService;