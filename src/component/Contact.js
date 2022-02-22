import './Contactus.css';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export default function Contact() {
    return <div className="contact-us">

        <section className="form-container">

            <h4 className="contact-title">Contact Us</h4>

            <form>

                <div className="form-control">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" className="name" required />
                </div>

                <div className="form-control">
                    <label htmlFor="email">Your Email</label>
                    <input type="text" id="email" className="email" required />
                </div>

                <div className="form-control">
                    <label htmlFor="ph-number">Your Phone No</label>
                    <input type="text" id="ph-number" className="ph-number" required />
                </div>

                <div className="form-control">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" className="subject" required />
                </div>

                <div className="form-control">
                    <label htmlFor="text-area">Your Message</label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                </div>

                <button className="send-btn btn">send</button>
            </form>
        </section>

        <section className="footer">

            <div className="upper-footer">
                <div className="logo">
                    <h5>Shoppy</h5>
                </div>

                <article className="contact-us-footer">
                    <h4>Contact Us</h4>
                    <ul className="contact-footer">

                        <li className="phone">
                            <a href="tel:09123456">
                                <Icon icon="bxs:phone-call" />
                                +95912345678
                            </a>
                            <span style={{ margin: '0 5px' }}>,</span>
                            <a href="tel:09123456">
                                <Icon icon="bxs:phone-call" />
                                +95912345679
                            </a>
                        </li>

                        <li className="email-control">
                            <a href="mailto:aaa@gmail.com">
                                <Icon icon="eva:email-fill" />
                                <span>Send Email</span>
                            </a>
                        </li>
                    </ul>
                </article>

                <article className='social'>

                    <h4>Follow Us On</h4>

                    <ul className="socail-icons">
                        <li>
                            <a href="https://www.facebook.com/pro1homecenter/" target="_blank">
                                <Icon icon="akar-icons:facebook-fill" />
                                <span>Navbar Myanmar</span>
                            </a>
                        </li>

                        <li>
                            <a href="www.facebook.com">
                                <Icon icon="ant-design:instagram-filled" />
                                <span>@Navbar Myanmar</span>
                            </a>
                        </li>


                        <li>
                            <a href="www.facebook.com">
                                <Icon icon="fa:youtube" />
                                <span>Navbar Myanmar</span>
                            </a>
                        </li>

                    </ul>

                </article>
            </div>

            <div className="copy-right">
                <small>Terms all reserved.&copy;Copyright <a href="">@Navbar</a></small>
            </div>
        </section>
    </div>
}