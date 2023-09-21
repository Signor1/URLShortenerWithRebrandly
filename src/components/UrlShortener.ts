import { customDomain } from "../data"
import { rebrandlyAPI } from "./BaseUrl"


export const UrlShortener = async (longUrl: string) => {
    try {
        const response = await rebrandlyAPI.post('links', {
            destination: longUrl,
            domain: { fullName: customDomain }
        });
    return response.data.shortUrl
    } catch (error) {
        console.log(error);
    }
}

