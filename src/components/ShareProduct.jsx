import { FaFacebookF, FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";
import { toast } from "react-toastify";

export function ShareProduct({ product }) {
  if (!product) return null;

  const productUrl = window.location.href;

  const message = `
👜 ${product?.name}

💰 Price: ₦${product?.price.toLocaleString()}
⭐ Rating: ${product?.rating || "N/A"}

👉 View product here:
${productUrl}
  `.trim();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(message);
      toast.success("Product details copied! Paste anywhere to share 🚀");
    } catch (err) {
      toast.error("Failed to copy product details");
    }
  };

  const shareToWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const shareToFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        productUrl
      )}`,
      "_blank"
    );
  };

  const shareToInstagram = () => {
    // Instagram does NOT support direct web sharing
    copyToClipboard();
    toast.info("Instagram doesn’t support auto-share. Paste it in your caption 📸");
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "1em" }}>
      <p>Share on :</p>
      <div style={styles.container}>
        <FaFacebookF style={styles.icon} onClick={shareToFacebook} />
        <FaWhatsapp style={styles.icon} onClick={shareToWhatsApp} />
        <FaInstagram style={styles.icon} onClick={shareToInstagram} />
        <FaTwitter style={styles.icon} onClick={shareToTwitter} />
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
