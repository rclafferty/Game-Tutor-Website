import BookLink from "./BookLink";
import BookCalendly from "./BookCalendly";

import styles from "../css/Book.module.css";

export default function Book() {
    const phoneNumber = "+11234567890"; // Replace with your phone number
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

    const email = "test@test.com";
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
                
                <BookCalendly />

                <h1>Cancelation + Refund Policy</h1>
                <p>We understand that life can be unpredictable. If you need to cancel or reschedule a session, please do so at least 24 hours in advance to avoid being charged for the session. If you cancel with less than 24 hours notice, you will be charged for the session.</p>

                <p>Refunds are available for sessions that are canceled at least 24 hours in advance. If you cancel with less than 24 hours notice, you will not be eligible for a refund.</p>
                <p>Refunds are processed within 7-10 business days. If you have not received your refund after 10 business days, please contact us.</p>

                <p>If you have any questions or concerns about our cancelation or refund policy, please feel free to contact us.</p>

                <h2>Refund Schedule</h2>
                <p>If you paid upfront to take advantage of discounts and bonus offers but plans changed, here's a schedule of when you're eligible for refunds.</p>

                <table className={`${styles['refund-schedule-table']}`}>
                    <thead>
                        <tr>
                            <th>Progress Point</th>
                            <th>Refund Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Prior to 1st Session (requires 24 hour notice)</td>
                            <td>100%</td>
                        </tr>
                        <tr>
                            <td>After Completing Session 2</td>
                            <td>75%</td>
                        </tr>
                        <tr>
                            <td>After Completing Session 5</td>
                            <td>50%</td>
                        </tr>
                        <tr>
                            <td>After Session 8</td>
                            <td>No refunds available</td>
                        </tr>
                    </tbody>
                </table>

                <p><strong>Note</strong>: Refunds are only available for sessions that have <strong>not been completed</strong>. If you have completed a session, you will not be eligible for a refund.</p>

                <p>If you chose a Pay As You Go plan, sessions are only eligible for refund if you cancel <strong>at least 24 hours prior to the session</strong>.</p>

                <p>We want to ensure that you have a positive experience with us, and we are committed to providing you with the best possible service. If you have any questions or concerns about our cancelation or refund policy, please feel free to contact us.</p>

            </div>
        </>
    );
}