import { Link } from "react-router";
import { Footer } from "../../components/Footer.jsx";
import { SideBarHeader } from "../../components/SideBarHeader.jsx";
import {  Faqs } from "./Faqs.jsx"
import {
  Star,
  StarHalf,
  StarOff,
  SendHorizontal,
  RefreshCwOff,
  KeyRound,
  Timer,
  Plus,
} from "lucide-react";

import { faqs, testimonials } from "../../utils/contentData.js";

import bag1 from "../../assets/images/bag.jpg";
import bag2 from "../../assets/images/bag2.jpg";
import shoe from "../../assets/images/shoe.jpg";
import shoe2 from "../../assets/images/shoe2.jpg";
import shippingImage from "../../assets/images/shipping.png";
import reFundImage from "../../assets/images/refund-illustration.png";

import "./LandingPage.css";

export function LandingPage() {
  let images = [bag1, bag2, shoe, shoe2];

  function renderStars(count) {
    const stars = [];
    const totalStars = 5;
    const fullStars = Math.floor(count);
    const hasHalf = count % 1 !== 0;

    for (let i = 1; i <= totalStars; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} color="#ffcc00" fill="#ffcc00" size={20} />);
      } else if (hasHalf && i === fullStars + 1) {
        stars.push(
          <StarHalf key={i} color="#ffcc00" fill="#ffcc00" size={20} />
        );
      } else {
        stars.push(<StarOff key={i} color="#d3d3d3" size={20} />);
      }
    }

    return stars;
  }

  return (
    <div className="landing-page-container">
      <SideBarHeader />
      <div className="main-content">
        <section className="hero-se ction ">
          <div className="container hero-section-content-container">
            <div className="text-content-container">
              <h1>Gluxury, Designed for the Woman Who Walks in Confidence.</h1>
              <p>
                Gluxury is where trust meets beauty. Designed for women who
                value quality and love speed, we deliver a shopping experience
                that feels elegant, reliable, and made just for you.
              </p>
              <div>
                <button>Sign Up</button>
                <button>See product</button>
              </div>
            </div>

            <figure>
              <div className="first-hero-img">
                <img src={images[1]} alt="" className="hero-pic " />
              </div>
              <div>
                <img
                  src={images[0]}
                  alt=""
                  className="hero-pic middle-hero-img"
                />
              </div>
              <div>
                <img
                  src={images[2]}
                  alt=""
                  className="hero-pic last-hero-img"
                />
              </div>
            </figure>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="text-center">
              Every Piece, a Proof of Luxury and Confidence
            </h2>
            <p className="text-center ">
  From timeless bags to captivating perfumes, each collection is crafted to make you feel effortlessly confident and beautifully seen.
</p>
          </div>
        </section>

        <section className="testimonial-section section">
          <div className=" container">
            <h2 className="text-center text-link">
              Loved by Women Who Walk in Confidence
            </h2>
            <p className="text-center text-link">
              Discover what real women are saying about their Gluxury
              experience.
            </p>

            <div className="testimonial-container">
              {testimonials.map((testimonial) => {
                return (
                  <div key={testimonial.id} className="testimonial-card">
                    <figure>
                      <img src={testimonial.image} alt={testimonial.name} />
                    </figure>

                    <div>
                      <p className="FWB clients-name">
                        <span>{testimonial.name}</span>
                        <span>{renderStars(testimonial.rateCount)}</span>
                      </p>
                      <p className="clients-comment">{testimonial.comment}</p>
                      <small>benin city</small>
                    </div>
                  </div>
                );
              })}
              {/* <div className="testimonial-card">
              <figure></figure>

              <div>
                <p className='FWB clients-name'>
                <span>Emma Thompson</span>
                  <span>
                    <Star color="#ffcc00" fill='#ffcc00' size={20} />
                     <Star color="#ffcc00" fill='#ffcc00'  size={20} />
                      <Star color="#ffcc00" fill='#ffcc00'  size={20} />
                       <Star color="#ffcc00" fill='#ffcc00'  size={20} />
                       <Star color="#ffcc00"  size={20} />
                  </span>
                </p>
                <p className='clients-comment'>
                  Beautiful with staying power. the only reson I give it 4 stars is the price, but the quality justifies it.
                </p>
                <small>
                  benin city
                </small>
              </div>
            </div> */}
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="text-center">Shipping and Delivery</h2>
          <br />
          <br />
          <div className="container shipping-delivery-container">
            <div className="shipping-delivery-content">
              <h3>Your Style, Delivered Securely</h3>
              <h4>How we Esure Trust and Protection ?</h4>
              <ul className="shipping-criteria-list">
                <li>
                  <strong>Secure Packaging:</strong> Every item, especially
                  delicate shoes and luxury bags, is carefully packaged to
                  prevent damage during transit. Your purchase is protected.
                </li>
                <li>
                  <strong>Insured Shipments:</strong>
                  For your peace of mind, all our shipments are insured. In the
                  rare event of loss or damage, you are fully covered.
                </li>
                <li>
                  <strong>Reliable Tracking:</strong>
                  As soon as your order ships, you will receive a confirmation
                  email with a tracking number. This allows you to monitor your
                  package's journey every step of the way.
                </li>
              </ul>
              <div className="shipping-btn-container">
                <Link to="/sign-up">
                  <button className="bg-accent-purple text-white">
                    Sign Up Now !
                    <SendHorizontal className="text-white" />
                  </button>
                </Link>
              </div>
            </div>
            <figure>
              <img src={shippingImage} alt="man carrying boxes" />
            </figure>
          </div>
        </section>

        <section className="section">
          <h2 className="text-center">Returns and exchanges</h2>
          <br />
          <br />
          <div className="container refund-container">
            <figure>
              <img src={reFundImage} alt="phone with refund arrow" />
            </figure>
            <div>
              <div className="refund-card refund-card-1">
                <span>
                  <Timer />
                </span>
                <div>
                  <p className="FWB text-accent-purple">
                    12-Hour Fit Notification Policy
                  </p>
                  <p>
                    Since we specialize in luxury bags and shoes, we require
                    immediate notification to manage the delicate status of our
                    inventory.
                  </p>
                </div>
              </div>
              <div className="refund-card refund-card-2">
                <span>
                  <KeyRound />
                </span>
                <div>
                  <p className="FWB text-accent-purple">Condition is Key:</p>
                  <p>
                    Items must be unused and in perfect, re-saleable condition,
                    including unscuffed soles and all original packaging/tags.
                  </p>
                </div>
              </div>
              <div className="refund-card refund-card-3">
                <span>
                  <RefreshCwOff />
                </span>
                <div>
                  <p className="FWB text-accent-purple">
                    {" "}
                    No Returns on Final Sale:
                  </p>
                  <p>
                    Final Sale items are non-refundable. We cover manufacturing
                    defects and guarantee lifetime authenticity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <h2 className="text-center text-white">Frequently Asked Questions</h2>
          <br />
          <br />
          <div className="container">
               {
                faqs.map((faq)=>{
                  console.log(faq)
                  return(
                    <Faqs  key = {faq.id} faq = {faq}/>
                  )
                })
               }
          </div>
        </section>


      </div>
      <Footer />
    </div>
  );
}
