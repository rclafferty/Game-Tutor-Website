export default function BookEmail() {

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
            <button className={`wide secondary`} onClick={() => { window.location.href = mailtoLink; }} title={`Email us at ${email}`}>Email us at {email}</button>
        </>
    );
}