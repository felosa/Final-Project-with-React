import axios from "axios";

class TravelService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_URL}/travel`,
      // baseURL:'http://localhost:3010/api/plan',
      // baseURL:'https://travelershare.herokuapp.com/api/plan',
      withCredentials: true
    });
    console.log(`${process.env.REACT_APP_URL}/travel`);

    console.log(this.service);
  }

  loggedin = () => {
    return this.service.get("/currentUser").then(response => response.data);
  };

  login = (username, password) => {
    console.log(username, password);
    return this.service
      .post("/login", { username, password })
      .then(response => response.data)
      .catch(err => console.error(err));
  };

  logout = () => {
    return this.service.get("/logout", {}).then(response => response.data);
  };
}

export default TravelService;
