import { NavLink, Link } from "react-router";
import { Footer } from "../../components/Footer.jsx";
import { SideBarHeader } from "../../components/SideBarHeader.jsx";
import { ProductCard } from "../Product/ProductCard.jsx";
import { Faqs } from "./Faqs.jsx";
import { PremiumCarousel } from "./PremiumCarosel.jsx";


import {
  Star,
  StarHalf,
  StarOff,
  SendHorizontal,
  RefreshCwOff,
  KeyRound,
  Timer,
  UserPen,
  Store,
  Box,
  Award,
  Heart,
  BadgeCheck,
} from "lucide-react";

import { faqs, testimonials } from "../../utils/contentData.js";

import bag1 from "../../assets/images/bag.jpg";
import bag2 from "../../assets/images/bag2.jpg";
import shoe from "../../assets/images/shoe.jpg";
import shoe2 from "../../assets/images/shoe2.jpg";
import shippingImage from "../../assets/images/shipping.png";
import reFundImage from "../../assets/images/refund-illustration.png";

import contactUsIllustration from "../../assets/images/gluxury-contact-us.png";

import "./LandingPage.css";

export function LandingPage({ products }) {
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

  let displayedProducts = [];
  function getFirstFiveProducts() {
    for (let i = 0; i <= 5; i++) {
      displayedProducts.push(products[i]);
    }
    return displayedProducts;
  }
  getFirstFiveProducts();

  return (
    <div className="landing-page-container">
      <SideBarHeader />
      <div className="main-content">
        <section className="hero-section ">
          <div className="container hero-section-content-container">
            <div className="text-content-container">
              <h1>
               The Confidence She Wears.
              </h1>
              <br />
              <p>
                Gluxury is where trust meets beauty. Designed for women who
                value quality and love speed, we deliver a shopping experience
                that feels elegant, reliable, and made just for you.
              </p>
              <div className="hero-btn-container">
                <Link className="bg-heading text-white" to="/">
                Shop Now!
                <Store className="text-white shake-icon" />
                </Link>
                <Link className="bg-accent-pink" to="/sign-up">
                Sign up
                <UserPen />
                </Link>
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
                  src={images[1]}
                  alt=""
                  className="hero-pic last-hero-img"
                />
              </div>
            </figure>
          </div>
        </section>

        <section className="section about-us-section">
          <h2 className="text-center">About Gluxury</h2>
          <p></p>
          <br/><br/>
          <div className="container about-us-container">

             <div className="content">
              <div>
                <p className="FWB">
                  Where Beauty Meets 
                  <span className="d-block text-link">
                    Trust & Excellence
                    </span>
                </p>
                 <br/>
                <p>
                  At Gluxry, we believe that evcery woman deserves more than just products, she deserves an experience. An experience that's personal, luxurious, and crafted with care
                </p>
                <br/>
                <p>
                  Born from a passion for beauty and a commitment to quality, Gluxury has besome a trusted companion for women who refuse to comprimise .FRom the moment you discover us to the joy of unboxing, every touch point is designed to make you feel valued, beautiful, and confident.
                </p>

              </div>

              <br/><br/>
               <div className="proirity-container">
                <div>
                  <Heart className="text-red" />
                  <p className="FWB">Quality First</p>
                   <p>
                    Products that exceed expectations
                   </p>
                </div>
                <div>
                  <Box  className="text-heading"/>
                  <p className="FWB">Fast Delivery</p>
                  <p>beauty needs, delivered swiftly.</p>
                </div>
                <div>
                    <Award className="text-green" />
                  <p className="FWB">Trusted Care</p>
                  <p>A relationship built on trust</p>
                </div>
               </div>
             </div>
          </div>
        </section>

        <section className="section">
          <h2 className="text-center">
            Every Piece, a Proof of Luxury and Confidence
          </h2>
          <p className="text-center ">
            From timeless bags to captivating perfumes, each collection is
            crafted to make you feel effortlessly confident and beautifully
            seen.
          </p>
          <br />
          <br />
          <div className="container">
            <PremiumCarousel products={products} />
          </div>
          <br />
          <br />
          <Link to="/" className="text-center btn bg-accent-purple text-white">
            See more
          </Link>
        </section>

        <section className="testimonial-section section">
          <div className=" container ">
            <h2 className="text-center text-white">
              Loved by Women Who Walk in Confidence
            </h2>
            <p className="text-center text-white">
              Discover what real women are saying about their Gluxury
              experience.
            </p>
            <br />
            <br />

            <div className="testimonial-container">
              {testimonials.map((testimonial) => {
                return (
                  <div key={testimonial.id} className="testimonial-card">
                    <div className="d-flex align-center justify-s-between w100">
                    <figure>
                      <img src={testimonial.image} alt={testimonial.name} />
                    </figure>
                       {testimonial.verified ? <BadgeCheck className="text-green" />:''}
                       </div>
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
            {faqs.map((faq) => {
              return <Faqs key={faq.id} faq={faq} />;
            })}
          </div>
        </section>

        <section className="section contact-us-section">
          <h2 className="text-center text-white">
            Contact &nbsp;
            <span className="font-special">Gluxury</span>
          </h2>
          <p className="text-center text-white">
            Your time is the ultimate luxury. Reach out to our dedicated client
            advisor today and secure the exclusive partnership you deserve.
          </p>
          <br />
          <br />
          <div className="container contact-us-container">
            <figure>
              <img
                src={contactUsIllustration}
                alt="female hands reaching email logo"
              />
            </figure>

            <form action="">
               <h3 className="logo">
                gluxury
               </h3>
               <p className="text-center">
                Dedicated support is here. How can we assist?
               </p>
               <label htmlFor="name">Name:</label>
              <input type="text" id="name" name ="name" placeholder="Eg: Gift Beauty" required />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Eg: giftbeauty@example.com" required />

              <label htmlFor="Message"> Message:</label>
              <textarea placeholder="Your Message" required></textarea>
              <button>
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
