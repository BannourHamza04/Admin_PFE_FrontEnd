import axios from 'axios'
const ProfilService = {}

ProfilService.login = async (data) => {
    return await axios.post('http://127.0.0.1:4000/Admin/loginAdmin', data)
    }

export default ProfilService;
