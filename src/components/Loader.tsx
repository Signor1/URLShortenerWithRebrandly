import { RotatingLines } from "react-loader-spinner"


const Loader = () => {
    return (
        <div className="w-full flex justify-center items-center py-4">
            <RotatingLines
                strokeColor="#0ea5e9"
                strokeWidth="3"
                animationDuration="0.75"
                width="65"
                visible={true}
            />
        </div>
    )
}

export default Loader