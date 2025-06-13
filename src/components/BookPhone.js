export default function BookPhone() {
    const phoneNumber = "+11234567890"; // Replace with your phone number
    const telLink = `tel:${phoneNumber}`;

    // Format phone number as (123) 456-7890
    function formatPhoneNumber(number) {
        // Remove all non-digit characters
        const cleaned = ('' + number).replace(/\D/g, '');
        // Match and format
        const match = cleaned.match(/^1?(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`;
        }
        return number;
    }

    const formattedPhoneNumber = formatPhoneNumber(phoneNumber);

    return (
        <>
            <button
                className="wide secondary"
                onClick={() => { window.location.href = telLink; }}
                title={`Call us at +1 ${formattedPhoneNumber}`}
            >
                Call us at +1 {formattedPhoneNumber}
            </button>
        </>
    );
}