import axios from "axios";

class PlanService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_URL}/plan`,
      // baseURL:'http://localhost:3010/api/plan',
      // baseURL:'https://travelershare.herokuapp.com/api/plan',
      withCredentials: true
    });
    console.log(`${process.env.REACT_APP_URL}/plan`);

    console.log(this.service);
  }

  // mostrar planes que se adapten al viaje en /travel
  getAllPlans = () => {
    return this.service.get("/all",{})
    .then(response => response.data)
    .catch(err => console.error(err))
  }

  //Mostrar planes añandidos a ese viaje en /travel
  selectedPlans = () => {
    return this.service.get("/:id/plansoftravel",{})
    .then(response => response.data)
    .catch(err => console.error(err))
  }

//Mostrar un plan en concreto en /plan
  getOnePlan = () => {
    return this.service.get("/one/:id",{})
    .then(response => response.data)
    .catch(err => console.error(err))
  }

//crear un nuevo plan en /travel
  createNewPlan = () => {
    return this.service.post("/:id/new",{})
    .then(response => response.data)
    .catch(err => console.error(err))
  }

  //borrar plan en /travel
  deletePlan = () => {
    return this.service.delete("/delete/:id",{})
    .then(response => response.data)
    .catch(err => console.error(err))
  }

  //editar plan en /travel
  editPlan = () => {
    return this.service.put("/edit/:id",{})
    .then(response => response.data)
    .catch(err => console.error(err))
  }

  
}

export default PlanService;
