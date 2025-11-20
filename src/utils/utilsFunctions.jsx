
import { Star, StarHalf, StarOff, Activity } from "lucide-react";


export function renderStars(count) {
    const stars = [];
    const totalStars = 5;
    const fullStars = Math.floor(count);
    const hasHalf = count % 1 !== 0;

    for (let i = 1; i <= totalStars; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} color="#ffcc00" fill="#ffcc00" size={15} />);
      } else if (hasHalf && i === fullStars + 1) {
        stars.push(
          <StarHalf key={i} color="#ffcc00" fill="#ffcc00" size={15} />
        );
      } else {
        stars.push(<StarOff key={i} color="#d3d3d3" size={15} />);
      }
    }

    return stars;
  }

  export function BackgroundCover({children, className}){
    return (
      <div className={`background-cover ${className || ''}`}>
        {children}
      </div>
    )
  }

  export function DropDownPopUpNotification ({children, className}){
    return(
      <div className={`dropdown-notification-popup ${className}`}>
        {children}
      </div>
    )
  }

  export function GluxNotification({children, className}){
    return(
      <div className={`gluxury-notification-card ${className}`}>
        <Activity />
        <span>
          {children}
        </span>
      </div>
    )
  }
