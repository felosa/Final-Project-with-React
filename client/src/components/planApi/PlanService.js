import axios from "axios";

class PlanService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_URL}`,
      // baseURL:'http://localhost:3010/api/plan',
      // baseURL:'https://travelershare.herokuapp.com/api/plan',
      withCredentials: true
    });
    
  }

  // mostrar planes que se adapten al viaje en /travel
  getAllPlans = () => {
    return this.service.get("/plan/all",{})
    .then(response => response.data)
    .catch(err => console.error(err))
  }

  getAllPlansWithInDates = (minDate,maxDate) => {
    return this.service.get(`/plan/filtered/${minDate}/${maxDate}`,{})
    .then(response => response.data)
    .catch(err => console.error(err))
  }

  handleUpload = (theFile) => {
    // console.log('file in service: ', theFile)
    return this.service.post('/upload', theFile)
      .then(res => res.data)
      .catch(err => console.error(err));
  }

  //Mostrar planes añandidos a ese viaje en /travel
  selectedPlans = () => {
    return this.service.get("/plan/:id/plansoftravel",{})
    .then(response => response.data)
    .catch(err => console.error(err))
  }

//Mostrar un plan en concreto en /plan
  getOnePlan = (id) => {
    return this.service.get(`/plan/one/${id}`,{})
    .then(response => response.data)
    .catch(err => console.error(err))
  }

//crear un nuevo plan en /travel
  createNewPlan = (name, city ,date, type, description, lang, genre, hour, maxYear, place, imageUrl,id) => {
    return this.service.post(`/plan/${id}/new`,{name, city ,date, type, description, lang, genre, hour, maxYear, place, imageUrl})
    .then(response => response.data)
    .catch(err => console.error(err))
  }

  //borrar plan en /travel
  deletePlan = () => {
    return this.service.delete("/plan/delete/:id",{})
    .then(response => response.data)
    .catch(err => console.error(err))
  }

  //editar plan en /travel
  editPlan = (id) => {
    console.log(id)
    return this.service.put(`/plan/${id}/edit`,{id})
    .then(response => response.data)
    .catch(err => console.error(err))
  }

  
}

export default PlanService;
