import axios from "axios";

class TravelService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_URL}`,
      // baseURL:'http://localhost:3010/api/plan',
      // baseURL:'https://travelershare.herokuapp.com/api/plan',
      withCredentials: true
    });
  
  }

//Mostrar viajes del usuario en /profile
  getAllTravels = () => {
    return this.service.get("/travel/:id/all",{})
    .then(response => response.data)
    .catch(err => console.error(err))
  }

  handleUpload = (theFile) => {
    // console.log('file in service: ', theFile)
    return this.service.post('/upload', theFile)
      .then(res => res.data)
      .catch(err => console.error(err));
  }

//Mostrar un viaje solo en /travel
  getOneTravel = (id) => {
    console.log(id)
    return this.service.get(`/travel/${id}`)
    .then(response => response.data)
    .catch(err => console.error(err))
  }

  //crear un viaje nuevo en /profile
  createNewTravel = (name, city ,country, description, imageUrl, author, plans, minDate, maxDate) => {
    return this.service.post("/travel/new",{name, city ,country, description, imageUrl, author, plans, minDate, maxDate})
    .then(response => {
      return response.data
    })
    .catch(err => console.error(err))
  }

  //borrar viaje en /profile
  deleteTravel = () => {
    return this.service.delete("/travel/delete/:id",{})
    .then(response => response.data)
    .catch(err => console.error(err))
  }

  //editar viaje en /profile, igual no lo implemento
  editTravel = () => {
    return this.service.put("/travel/edit/:id",{})
    .then(response => response.data)
    .catch(err => console.error(err))
  }

  
}

export default TravelService;
