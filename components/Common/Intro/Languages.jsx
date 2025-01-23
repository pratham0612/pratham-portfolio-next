import { Progress } from "antd";
import { useEffect, useState } from "react";

const SkillsAndCompetencies = () => {
    const [frontend, setFrontend] = useState(0);
    const [react, setReact] = useState(0);
    const [graphicDesign, setGraphicDesign] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (frontend < 95) {
                setFrontend(prevCount => prevCount + 1);
            }
            if (react < 90) {
                setReact(prevCount => prevCount + 1);
            }
            if (graphicDesign < 85) {
                setGraphicDesign(prevCount => prevCount + 1);
            }
        }, 5);

        return () => clearInterval(timer);
    }, [frontend, react, graphicDesign]);

    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-Snow text-xs font-bold'>Skills and Competencies</span>
                <div className="flex flex-row items-center justify-between gap-4 flex-wrap">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#DFAC1F" type="circle" percent={frontend} size={50} />
                        <span className='text-xs font-bold text-Snow'>Front-End</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#DFAC1F" type="circle" percent={react} size={50} />
                        <span className='text-xs font-bold text-Snow'>React</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#DFAC1F" type="circle" percent={graphicDesign} size={50} />
                        <span className='text-xs font-bold text-Snow'>Graphic Design</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsAndCompetencies;
