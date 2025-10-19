import './Footer.css'

export function Footer(){
  return(
    <footer className='bg-gradient-top'>
      <div className="d-flex flex-column container">
        <div className="d-flex justify-s-around upper-container f-wrap">
          <div>
            <h5 className='font-special'>Gluxury</h5>
            <br />
            <p className='details'>
              Redefining luxury beauty with cutting-edge slegance. Experience the future of sophistication.
            </p>
            <ul className='d-flex justify-center'>
              <li><a href="">ig</a></li>
              <li><a href="">FB</a></li>
              <li><a href="">X</a></li>
              <li><a href="">YT</a></li>
            </ul>
          </div>

          <div>
            <h6>Customer Care</h6>
            <br />
            <ul>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Shipping & Delivery</a></li>
              <li><a href="">Returns & Exchanges</a></li>
              <li><a href="">FAQ</a></li>
              <li><a href="">Size Guide</a></li>
            </ul>
          </div>

          <div>
            <h6>Get In Touch</h6>
            <br />
            <ul>
              <li>
                <span></span>
                <span>
                  Email
                  <span>
                    hello@gluxury.com
                  </span>
                </span>
              </li>
              <li>
                <span></span>
                <span>
                  Phone
                  <span>
                    +234 704 6253 045
                  </span>
                </span>
              </li>
              <li>
                <span></span>
                <span>
                  location
                  <span>
                    Benin City, Nigeria
                  </span>
                </span>
              </li>
            </ul>
          </div>
          
        </div>

        <br />
        <br />

        <div className='d-flex flex-1 justify-center'>
          <form>
            <h5>Join Our Exclusive Club</h5>
            <br />
            <p>
              Suscribe for early access, exclusive offers, and luxury updates
            </p>
            <br />
            <div className='d-flex f-wrap justify-center'>
              <input type="text" />
              <button className='btn-accent'>
                SUSCRIBE
              </button>

            </div>
          </form>
        </div>
      </div>
    </footer>
  )
}