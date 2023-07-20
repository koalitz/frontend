
import { schedules } from "./../helpers/scheduleList.js";
import Schedule from "../components/schedule/Schedule";


const Schedules = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Расписание</h2>
                <ul className="projects">

                    {schedules.map((schedule, index) => {
                        return <Schedule key={index} title={schedule.title} img={schedule.img} index={index} />                     
                    })}
                </ul>
            </div>
        </main>
    );

}

export default Schedules;