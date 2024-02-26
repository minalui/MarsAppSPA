import axios from "axios";

export class RequestHelper {
    public async fetchRovers():Promise <string[]> {
        const response = await axios.get('http://localhost:8000/rovers');
        return response.data;
    }
}