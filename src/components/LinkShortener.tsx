import { useState } from "react"
import Loader from "./Loader"
import Result from "./Result"
import { UrlShortener } from "./UrlShortener"


const LinkShortener = () => {
    const [longUrl, setLongUrl] = useState<string>('')
    const [shortUrl, setShortUrl] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true)

        try {
            const shortenedUrl = await UrlShortener(longUrl);
            setShortUrl(shortenedUrl);
        } catch (error) {
            console.log('Error shortening url:', error);
            setShortUrl('');
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="flex flex-col items-center md:w-[550px] w-full md:px-10 px-6 py-10 rounded-lg bg-slate-900 border-2 border-sky-500">
            <h1 className="font-bold uppercase md:text-xl text-lg mb-4 text-slate-200">URL Shortener</h1>
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center my-3">
                <input type="text"
                    placeholder="Enter your long URL"
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                    className="w-full bg-slate-200 py-3 rounded px-4 text-base outline-none text-slate-900 focus:ring ring-sky-500"
                />
                {
                    isLoading ? (
                        <Loader />
                    ) : (
                        <Result shortUrl={shortUrl} />
                    )
                }
                <button disabled={isLoading} type="submit" className="bg-sky-500 hover:bg-sky-600 px-8 py-3 text-sky-50 mt-4 disabled:cursor-not-allowed disabled:opacity-80">Shorten</button>
            </form>
        </section>
    )
}

export default LinkShortener