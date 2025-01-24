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
                <div className="skills-container">
                    <div className="skill-item">
                        <Progress strokeColor="#953fe1" type="circle" percent={frontend} size={48} />
                        <span className='text-xs font-bold text-Snow skill-text'>Front-End </span>
                    </div>
                    <div className="skill-item">
                        <Progress strokeColor="#953fe1" type="circle" percent={graphicDesign} size={48} />
                        <span className='text-xs font-bold text-Snow skill-text'>Graphic Design</span>
                    </div>
                    
                    <div className="skill-item">
                        <Progress strokeColor="#953fe1" type="circle" percent={react} size={48} />
                        <span className='text-xs font-bold text-Snow skill-text'>React </span>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default SkillsAndCompetencies;
