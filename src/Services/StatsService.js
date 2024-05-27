import axios from 'axios'
const ProfilService = {}


ProfilService.getStates = async (headers) => {
    return await axios.get(`http://127.0.0.1:4000/Admin/getStats`,{headers })
}

export default ProfilService;
