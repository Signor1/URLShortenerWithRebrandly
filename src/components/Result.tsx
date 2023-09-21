import { useState } from "react";
import CopySVG from "./SVG/CopySVG";


type ShortUrlProps = {
    shortUrl: string
}

const Result = ({ shortUrl }: ShortUrlProps) => {

    //state to check for copy
    const [isCopied, setIsCopied] = useState<boolean>(false)

    // async function clipboard copy
    const copyTextToClipboard = async (text: string) => {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
    }

    //handle copy to clipboard
    const handleCopy = () => {
        copyTextToClipboard(`http://${shortUrl}`).then(() => {
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 3000);
        }).catch((err) => {
            console.log(err);
        });
    }
    return (
        <div className="w-full flex flex-col">
            {
                shortUrl ?
                    (<div className="w-full flex items-stretch justify-between gap-1 mt-6">
                        <p className="text-sky-500 text-base font-medium">Shortened URL:{" "}
                            <a href={`http://${shortUrl}`} className="text-sky-100 font-light hover:underline" target="_blank" rel="noopener noreferrer">{`http://${shortUrl}`}</a>
                        </p>
                        <button type="button" onClick={handleCopy} title="Copy URL" className="bg-sky-500 px-2 text-sky-50 rounded py-2">
                            <CopySVG />
                        </button>
                    </div>)
                    :
                    (<p className="text-sky-100 mt-4 flex items-center gap-1">
                        <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3zM12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z" />
                        </svg>
                        No shortened URL available
                    </p>)
            }
            <p className={`text-green-600 text-xs flex items-center mt-2 ml-2 transition-opacity duration-200 gap-1 ${isCopied ? 'opacity-100' : 'opacity-0'}`}>
                Link Copied
                <svg width="15" height="15" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
                        <path d="M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2ZM30 4l10 10" />
                        <path d="m17 29l6 5l9-11" />
                    </g>
                </svg>
            </p>
        </div>
    )
}

export default Result