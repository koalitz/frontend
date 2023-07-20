import { useParams } from "react-router-dom"
import BtnGitHub from "../components/btnGitHub/BtnGitHub"
import { schedules } from "../helpers/scheduleList.js"

const Schedule = () => {
    const { id } = useParams();
    const schedule = schedules[id];
    return (
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{schedule.title}</h1>


                    <img
                        src={schedule.imgBig}
                        alt={schedule.title}
                        className="project-details__cover"
                    />

                    <div className="project-details__desc">
                        <p>Дата: {schedule.skills}</p>
                    </div>

                    <div className="project-details__desc">
                        <p>Место проведения: {schedule.place}</p>
                    </div>

                    <div className="project-details__desc">
                        <p>Спикер: {schedule.lek}</p>
                    </div>

                    {schedule.gitHubLink && (
                        <BtnGitHub link="https://github.com/Lenis45" />
                    )}                       

                </div>
            </div>
        </main>
    );
};

export default Schedule;