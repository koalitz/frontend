 import Project from "../components/project/Project"
import { schedule } from "./../helpers/scheduleList.js"


const Schedule = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Расписание</h2>
                <ul className="projects">

                    {schedule.map((schedule, index) => {
                        return <Project key={index} title={schedule.title} img={schedule.img} index={index} />                     
                    })}
                </ul>
            </div>
        </main>
    );

}

export default Schedule;