import './Announcement.css'
import CartIcon from '../assets/images/gluxury-shoper.png'


export function Announcement() {
  const annoucements = [{
    id: '1',
    name: "shop with good price",
    details: "shop with good price with little you have",
    date: "25th January 2025",
    image: "./assets/images/gluxury-shoper.png",
  }];

  return (
    <div>
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
    </div>
  );
}
