import styles from "../css/About.module.css"

export default function About() {
    return (
        <>
            <h1 className={`header`}>About Game Tutor</h1>

            <div className="row">
                <div className="col-5">
                    <img className={`${styles["about-image"]}`} src="/images/headshot.jpg" alt=""/>
                </div>
                <div className="col-7">
                    <p>Hi, I'm Robert Lafferty, an industry-seasoned game developer with credits on AAA titles like Call of Duty: Modern Warfare III and Black Ops 6. Whether you're just getting started or looking to level up your skills, I bring real-world experience from both indie gems and blockbuster franchises to help you master the art and science of game development. From AI programming in Unreal Engine 5 to gameplay systems in Unity, I've built games that ship—and now I want to help you build yours.</p>

                    <p>I specialize in hands-on, personalized tutoring for aspiring developers, students, and hobbyists alike. With deep experience in C++, C#, and game engine tech, I'll meet you where you are and guide you step-by-step—whether you want to understand the fundamentals or tackle advanced systems like AI behavior trees, networking, or animation pipelines. I've mentored peers on dev teams, led a university game dev club, and now I'm offering that same mentorship to you—tailored, flexible, and built to boost your confidence and creativity.</p>

                    <p>Game dev is hard, but you don't have to go it alone. Let's build your dream together. Reach out today to schedule a free consultation, ask questions, or start working through a project that's been sitting in your head (or hard drive) for too long. Whether it's Unreal, Unity, or a custom engine project, I'm here to help you level up with real dev know-how.</p>

                    <p>Visit me on <a href="https://www.linkedin.com/in/rclafferty/" target="_blank" rel="noreferrer">LinkedIn</a> to learn more about my experience.</p>
                </div>
            </div>
        </>
    );
}