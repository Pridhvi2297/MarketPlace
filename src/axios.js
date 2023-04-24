import axios from "axios";

const instace = axios.create({
    baseURL: 'http://127.0.0.1:5001/marketplace-pnc/us-central1/api'
});

export default instace;