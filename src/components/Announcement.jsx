import './Announcement.css'
import CartIcon from '../assets/images/gluxury-shoper.png'


export function Announcement() {
  const annoucements = [{
    id: '1',
    name: "The Secret to Luxury, Exposed",
    details: "Quality this undeniable should cost more. We simply decided it shouldn't.",
    date: "25th January 2025",
    image: "./assets/images/gluxury-shoper.png",
  }];

  return (
    <div className='announcement-wrapper'>
      {annoucements.map((announcement) => (
        <div key= {announcement.id} className='announcement-container'>
          <div className='details-container'>
            <h2 className='text-accent-pink'>{announcement.name}</h2>
            <p className='FWB text-white'>{announcement.details}</p>
            <small className='text-muted FWB'>{announcement.date}</small>
          </div>

          <figure className="text-white">
            <img src={CartIcon} alt="anouncement illustration" />
          </figure>
  
        </div>

      ))}

              <p class="scrolling-text">
        GLUXURY • QUALITY • EXPENSIVE • WOW • GLUXURY • QUALITY • EXPENSIVE • WOW • 
    </p>
    </div>
  );
}
