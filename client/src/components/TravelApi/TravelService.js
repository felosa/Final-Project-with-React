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

//Mostrar viajes del usuario en /profile
  getAllTravels = () => {
    return this.service.get("/:id/all",{})
    .then(response => response.data)
    .catch(err => console.error(err))
  }

//Mostrar un viaje solo en /travel
  getOneTravels = () => {
    return this.service.get("/:id/one",{})
    .then(response => response.data)
    .catch(err => console.error(err))
  }

  //crear un viaje nuevo en /profile
  createNewTravel = (name, city ,country, description, imgPath, author, plans) => {
    return this.service.post("/new",{name, city ,country, description, imgPath, author, plans})
    .then(response => response.data)
    .catch(err => console.error(err))
  }

  //borrar viaje en /profile
  deleteTravel = () => {
    return this.service.delete("/delete/:id",{})
    .then(response => response.data)
    .catch(err => console.error(err))
  }

  //editar viaje en /profile, igual no lo implemento
  editTravel = () => {
    return this.service.put("/edit/:id",{})
    .then(response => response.data)
    .catch(err => console.error(err))
  }

  
}

export default TravelService;
