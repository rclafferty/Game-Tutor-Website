import BookCalendly from "./BookCalendly";
import BookEmail from "./BookEmail";
import BookPhone from "./BookPhone";

export default function Book() {
    return (
        <>
            <h1 className={`col-12 header`}>Book Your Next Session!</h1>

            <p>Whether you are just starting out or aiming to sharpen your professional edge, working with a dedicated tutor can make a real difference. We offer one-on-one sessions designed around your pace, your goals, and your learning style. Together, we will cover the tools, systems, and strategies that matter most to you. Whether that is game development, design fundamentals, or other concentrations. Every learning plan is tailored to your needs and supported by flexible scheduling, real time feedback, and a commitment to helping you succeed.</p>

            <p>Here are some easy ways to schedule a free introductory call. We look forward to connecting and helping you take the next step.</p>

            <div className="button-row mb-4">
                <BookEmail />
                <BookPhone />
            </div>
            
            <BookCalendly />
        </>
    );
}