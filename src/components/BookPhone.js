export default function BookPhone() {
    const phoneNumber = "+1234567890"; // Replace with your phone number
    const telLink = `tel:${phoneNumber}`;

    return (
        <>
            <button className={`wide secondary`} onClick={() => { window.location.href = telLink; }} title={`Call us at ${phoneNumber}`}>Call us at {phoneNumber}</button>
        </>
    );
}