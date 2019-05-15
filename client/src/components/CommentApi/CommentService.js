import axios from "axios";

class CommentService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_URL}/comment`,
      // baseURL:'http://localhost:3010/api/plan',
      // baseURL:'https://travelershare.herokuapp.com/api/plan',
      withCredentials: true
    });
    
  }



//crear un nuevo plan en /travel
  createNewComment = (message,id) => {
    return this.service.post(`/${id}/new`,{message,id})
    .then(response => response.data)
    .catch(err => console.error(err))
  }

  
}

export default CommentService;
