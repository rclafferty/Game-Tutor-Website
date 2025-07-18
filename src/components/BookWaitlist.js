import styles from '../css/BookWaitlist.module.css'

import CompanyJSON from '../json/CompanyInfo.json';

export default function BookWaitlist() {
    return (
        <>
            <div className='container'>
                <h1 className={`col-12 header`}>Waitlist Signups are Open!</h1>

                <p>We're excited to share that our online game development tutoring services are launching soon! While we're putting the finishing touches in place, we're not booking sessions just yet but we expect to begin services in late August 2025. If you're interested in one-on-one game dev or programming support, now's the perfect time to join the waitlist. This ensures you'll be among the first to hear when sessions become available. We'll reach out directly as soon as we're ready to get rolling!</p>

                <iframe className={styles['google-form']} src="https://forms.gle/WkkWTdMYwqNMHBJR9?embedded=true" frameborder="0" marginheight="0" marginwidth="0" title="Guild of Beginnings Google Form Waitlist">Loading…</iframe>

                <p>If the above embed doesn't work for any reason, please click here to sign up for the waitlist: <a href="https://forms.gle/WkkWTdMYwqNMHBJR9" alt="">https://forms.gle/WkkWTdMYwqNMHBJR9</a></p>
            </div>
        </>
    );
}