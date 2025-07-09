import BookLink from "./BookLink";

import CompanyJSON from '../json/CompanyInfo.json';
import CancelationPolicy from "./CancelationPolicy";

export default function Book() {
    const phoneNumber = CompanyJSON.phone; // Replace with your phone number
    const telLink = `tel:${phoneNumber}`;

    // Format phone number as (123) 456-7890
    function formatPhoneNumber(number) {
        // Remove all non-digit characters
        const cleaned = ('' + number).replace(/\D/g, '');
        // Match and format
        const match = cleaned.match(/^1?(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return `+1 (${match[1]}) ${match[2]}-${match[3]}`;
        }
        return number;
    }

    const formattedPhoneNumber = formatPhoneNumber(phoneNumber);

    const email = CompanyJSON.email;
    const subject = encodeURIComponent("Tutoring Inquiry");
    const body = encodeURIComponent(
        `Hi,

        I am interested in tutoring. Please connect me with a tutor.

        [INSERT DETAILS ABOUT YOUR REQUEST]

        Thank you in advance,

        [NAME]`
    );
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    return (
        <>
        
            <div className='container'>
                <h1 className={`col-12 header`}>Book Your Next Session!</h1>

                <p>Whether you are just starting out or aiming to sharpen your professional edge, working with a dedicated tutor can make a real difference. We offer one-on-one sessions designed around your pace, your goals, and your learning style. Together, we will cover the tools, systems, and strategies that matter most to you. Whether that is game development, design fundamentals, or other concentrations. Every learning plan is tailored to your needs and supported by flexible scheduling, real time feedback, and a commitment to helping you succeed.</p>

                <p>Here are some easy ways to schedule a free consultation. We look forward to connecting and helping you take the next step.</p>

                <div className="button-row">
                    <BookLink
                        link={mailtoLink}
                        title={`Click here to email us at ${email}`}
                        classInfo="hover-lift"
                        displayTextLine1={
                            <>
                                Email{" "}
                                <i className="fas fa-envelope" style={{ fontSize: 16, color: "white" }}></i>
                            </>
                        }
                        displayTextLine2={email}
                    />
                    <BookLink
                        link={telLink}
                        title={`Click here to call us at ${formattedPhoneNumber}`}
                        classInfo="hover-lift"
                        displayTextLine1={
                            <>
                                Phone{" "}
                                <i className="fas fa-phone" style={{ fontSize: 16, color: "white" }}></i>
                            </>
                        }
                        displayTextLine2={formattedPhoneNumber}
                    />
                    <BookLink
                        link={"https://discord.gg/8SSbAs8MEv"}
                        title="Click here to join the discord server"
                        classInfo="hover-lift"
                        displayTextLine1={
                            <>
                                Discord{" "}
                                <i className="fab fa-discord" style={{ fontSize: 16, color: "white" }}></i>
                            </>
                        }
                        displayTextLine2={"https://discord.gg/8SSbAs8MEv"}
                    />
                </div>

                {/* TODO: Add Calendly back after scheduling chat with Dustin. */}
                {/* <BookCalendly /> */}

                <CancelationPolicy />

            </div>
        </>
    );
}