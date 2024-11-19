import "./App.css";

const dataSkills = [
    {
        skill: "HTML & CSS",
        level: "advanced",
        color: "blue",
    },
    {
        skill: "JavaScript",
        level: "intermediate",
        color: "yellow"
    },
    {
        skill: "React",
        level: "beginner",
        color: "teal"
    },
    {
        skill: "Git",
        level: "intermediate",
        color: "red"
    }
];

function App() {
    return (
        <div className="app">
            <Profile />
        </div>
    );
}

function Profile() {

    return (
        <div className="dev-profile">
            <div className="img-container">
                <img src="front-end developer cool image.jpg" alt="Developer"/>
            </div>
            <div className="dev-info">
                <h1 className="name">Mohamed Ouahmane</h1>
                <p className="about">
                    I am Mohamed Ouahmane, A baby front-end developer. I am learning ReactJS for now. I like games and hiking.
                    I suck at football.
                </p>
                <div className="skills">
                    {
                        dataSkills.map((skill, index) => {
                            return <Skill {...skill} key={index}/>;
                        })
                    }
                </div>
            </div>
        </div>
    );
}

function Skill({ color, level, skill}) {
    const levels = {
        "beginner": "🐒",
        "intermediate": "🐻‍❄️",
        "advanced": "🐋"
    }
    return (
        <div className="skill">
            <h2 style={{background: color}}>
                {skill + " " + levels[level]}
            </h2>
        </div>
    )
}

export default App;