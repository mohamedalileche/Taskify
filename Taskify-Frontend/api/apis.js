import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000"
})
export const getProjects = async () => {
    const results = await api.get('/projects');
    return results.data;
}

export const get_Project = async () => {
      const res = await  api.get('/projects')
      return res.data;
  
}

export const addProject = async (projet) => {
    const res = await api.post('/projects',projet)
    return res.data;
}
export const removeProject = async (projet) => {
    const res = await api.delete('/projects/:id',projet)
    return res.data;
}





