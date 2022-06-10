import axios from 'axios';

const API = 'http://localhost:8081/api/movies';

const config = {
    method: 'get',
    url: API
}
const configUpdate = {
    method: 'patch',
}
export async function getMovies(){
    try{
        return await (await axios(config)).data;
        
    } catch (error){
        throw new Error(error);
    }
}
export async function updateMovie(data) {
    try {
      const response = axios.patch(`${API}`, data);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }