import { CONTACT_INFO } from "../../constants/navigation";
import { EmailIcon, PhoneIcon } from "../icons/PhoneIcon";

const ICON_MAP = { phone: PhoneIcon, email: EmailIcon };

const ContactBar = () => (
  <section className="contact-container">
    <section className="contact-bar" aria-label="Contact information">
    <ul className="contact-bar__list" role="list">
      {CONTACT_INFO.map(({ icon, label, href }) => {
        const Icon = ICON_MAP[icon];
        return (
          <li key={href} className="contact-bar__item">
            <Icon
              size={20}
              className={`contact-bar__icon contact-bar__icon--${icon}`}
              color="#000000"
            />
            <a href={href} className="contact-bar__link">
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  </section>
  </section>
);

export default ContactBar;