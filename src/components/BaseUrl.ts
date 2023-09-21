import axios from "axios";
import { apiKey } from "../data";

export const rebrandlyAPI = axios.create({
    baseURL: 'https://api.rebrandly.com/v1/',
    headers: {
        apiKey: apiKey,
        'Content-Type': 'application/json'
    }
});