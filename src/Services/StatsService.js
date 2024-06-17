import axios from 'axios'
const ProfilService = {}

ProfilService.getStates = async (headers) => {
    return await axios.get(`http://127.0.0.1:4000/Admin/getStats`,{headers })
}

ProfilService.getStatsCharts = async (headers) => {
    return await axios.get(`http://127.0.0.1:4000/Admin/getStatsCharts`,{headers })
}

export default ProfilService;
