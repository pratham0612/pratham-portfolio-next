import { Progress } from "antd"
import { useEffect, useState } from "react"

const Languages = () => {
    const [hindi, setHindi] = useState(0)
    const [english, setEnglish] = useState(0)
    const [gujarati, setGujarati] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            if (hindi < 98) {
                setHindi(prevCount => prevCount + 1);
            }
            if (english < 88) {
                setEnglish(prevCount => prevCount + 1);
            }
            if (gujarati < 98) {
                setGujarati(prevCount => prevCount + 1);
            }
        }, 5);

        return () => clearInterval(timer);
    }, [hindi, english])
    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-Snow text-xs font-bold'>Languages</span>
                <div className="flex flex-row items-center justify-between gap-4 flex-wrap">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#DFAC1F" type="circle" percent={hindi} size={50} />
                        <span className='text-xs font-bold text-Snow'>Hindi</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#DFAC1F" type="circle" percent={english} size={50} />
                        <span className='text-xs font-bold text-Snow'>English</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#DFAC1F" type="circle" percent={gujarati} size={50} />
                        <span className='text-xs font-bold text-Snow'>Gujarati</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Languages
