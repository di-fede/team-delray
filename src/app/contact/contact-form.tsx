export default function ContactForm() {
    return (
        <div className="contactForm__container">
            <form className="contactForm">
                {/* <label htmlFor="name">Name</label> */}
                <input placeholder="Name" id="name" type="text" />
                {/* <label htmlFor="email">Email</label> */}
                <input placeholder="Email" id="email" type="email" />
                <textarea
                    placeholder="Message"
                    rows={5}
                    cols={50}
                    name="message"
                    id="message"
                ></textarea>
                <button className="contactForm__button">Submit</button>
            </form>
        </div>
    );
}
