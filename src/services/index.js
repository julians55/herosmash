import axios from 'axios';

const API = 'https://herosmash-server.herokuapp.com/api/movies';

const config = {
    method: 'get',
    url: API
}
const configRanking = {
    method: 'get',
    url: `${API}/ten`
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
export async function getRanking(){
    try{
        return await (await axios(configRanking)).data;
        
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