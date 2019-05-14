import axios from "axios";

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL:`${process.env.REACT_APP_URL}`,
      withCredentials: true
    });
  }


  // , lang, country, description, genre,year
  signup = (username, password, imageUrl, lang, country, description, genre,year) => {

    return this.service.post('/auth/signup', {username, password, imageUrl, lang, country, description, genre,year})
    .then(response => response.data)
    .catch(err => console.error(err))
  }

  handleUpload = (theFile) => {
    // console.log('file in service: ', theFile)
    return this.service.post('/upload', theFile)
      .then(res => res.data)
      .catch(err => console.error(err));
  }

  login = (username, password) => {
    console.log(username, password)
    return this.service.post('/auth/login', {username, password})
    .then(response => 
      response.data
    )
    .catch(err => console.error(err))
  }

  editProfile = (lang, country, description, genre,year, id) => {
    console.log(lang, country, description, genre,year, id)
    return this.service.post(`/auth/edit/${id}"`, {lang, country, description, genre,year})
    .then(response => 
      response.data
    )
    .catch(err => console.error(err))
  }


  loggedin = () => {
    return this.service.get('/auth/currentUser')
    .then(response => response.data)
  }

  logout = () => {
    return this.service.get('/auth/logout', {})
    .then(response => response.data)
  }
}

export default AuthService;