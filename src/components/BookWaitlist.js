import styles from '../css/BookWaitlist.module.css'

import BookLink from "./BookLink";

import CompanyJSON from '../json/CompanyInfo.json';

export default function BookWaitlist() {
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

    const subject = encodeURIComponent("Tutoring Inquiry");
    const body = encodeURIComponent(
        `Hi,

        I am interested in tutoring. Please connect me with a tutor.

        [INSERT DETAILS ABOUT YOUR REQUEST]

        Thank you in advance,

        [NAME]`
    );
    const mailtoLink = `mailto:${CompanyJSON.email}?subject=${subject}&body=${body}`;

    return (
        <>
            <div className='container'>
                <h1 className={`col-12 header`}>Waitlist Signups are Open!</h1>

                <p>We're excited to share that our online game development tutoring services are launching soon! While we're putting the finishing touches in place, we're not booking sessions just yet but we expect to begin services in late August 2025. If you're interested in one-on-one game dev or programming support, now's the perfect time to join the waitlist. This ensures you'll be among the first to hear when sessions become available. We'll reach out directly as soon as we're ready to get rolling!</p>

                <iframe className={styles['google-form']} src="https://forms.gle/WkkWTdMYwqNMHBJR9?embedded=true" frameborder="0" marginheight="0" marginwidth="0" title="Guild of Beginnings Google Form Waitlist">Loading…</iframe>

                <p>If the above embed doesn't work for any reason, please click here to sign up for the waitlist: <a href="https://forms.gle/WkkWTdMYwqNMHBJR9" alt="">https://forms.gle/WkkWTdMYwqNMHBJR9</a></p>

                <h2>Contact Us</h2>
                <p>Still have questions about our services? Feel free to contact us and we'll be happy to help!</p>
                <div className="button-row">
                    <BookLink
                        link={mailtoLink}
                        title={`Click here to email us at ${CompanyJSON.email}`}
                        classInfo="hover-lift"
                        displayTextLine1={
                            <>
                                Email{" "}
                                <i className="fas fa-envelope" style={{ fontSize: 16, color: "white" }}></i>
                            </>
                        }
                        displayTextLine2={CompanyJSON.email}
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
                        link={CompanyJSON.socialMediaLinks.discord}
                        title="Click here to join the discord server"
                        classInfo="hover-lift"
                        displayTextLine1={
                            <>
                                Discord{" "}
                                <i className="fab fa-discord" style={{ fontSize: 16, color: "white" }}></i>
                            </>
                        }
                        displayTextLine2={CompanyJSON.socialMediaLinks.discord}
                    />
                </div>

            </div>
        </>
    );
}