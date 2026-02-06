import { div } from "framer-motion/client";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";

export  function ShareProduct() {
  return (
    <div style={{display:'flex', alignItems:'center', gap:'8px', paddingLeft:'1em', }}>
      <p>Share on :</p>
    <div style={styles.container}>
      <FaFacebookF style={styles.icon} />
      <FaWhatsapp style={styles.icon} />
      <FaInstagram style={styles.icon} />
      <FaTwitter style={styles.icon} />
    </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
  },
  icon: {
    cursor: "pointer",
    fontSize: "20px",
  },
};
