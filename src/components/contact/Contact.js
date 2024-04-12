import "./Contact.css";
import myImage from "../../assets/bgrnd.jpg";
import linkedIn from "../../assets/linkIt.png";
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import { useState } from "react";
import toast from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);
  const submitHandeler = async (e) => {
    e.preventDefault();
    setDisableBtn(true);

    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
      });
      toast.success("message sent");
      setEmail("");
      setName("");
      setMessage("");
      setDisableBtn(false);
    } catch (error) {
      toast.error("Error");

      console.log(error);
      setDisableBtn(false);
    }
  };

  return (
    <div id="cnt-tit">
      <div className="cnt-tit-desc">
        <h2 className="contact-title">Contact Me</h2>
        <div className="con-des"></div>
      </div>

      <section className="portfolioSection">
        <div className="leftSection">
          <div className="profileImageContainer">
            <img src={myImage} alt="My Profile" className="profileImage" />
          </div>
          <div className="socialIcons">
            <a
              href="https://www.linkedin.com/in/sourabh-jaiswal-6200b5229/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedIn} alt="LinkedIn" className="socialIcon" />
            </a>
            <a
              href="https://github.com/Sourabhjaiswal12016"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github" className="socialIcon" />
            </a>
            <a
              href="https://www.instagram.com/sourabh_jaiswal120/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" className="socialIcon" />
            </a>
            <a href="link" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" className="socialIcon" />
            </a>
          </div>
        </div>
        <div className="rightSection">
          <form className="contactForm" onSubmit={submitHandeler}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="contactInput"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="contactInput"
              required
              placeholder="Your Email"
              email="your_email"
            />

            <textarea
              message="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              required
              placeholder="Your Message"
              className="contactInput"
            ></textarea>
            <button
              type="submit"
              value="Send"
              disabled={disableBtn}
              id="submit-btn"
              className={disableBtn ? "disableBtn" : ""}
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
