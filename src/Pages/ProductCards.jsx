import './ProductCards.css'
import bag1 from'../assets/images/bag.jpg';
import bag2 from'../assets/images/bag2.jpg';
import shoe from'../assets/images/shoe.jpg';
import shoe2 from'../assets/images/shoe2.jpg';

export function ProductCards() {

const products = [
  {
    id: "1",
    name: "Aurora Silk Clutch",
    category: "Bags",
    price: 120,
    rating: 4.8,
    description: "Elegant evening clutch with a soft gold chain and futuristic shimmer.",
    image: bag1,
  },
  {
    id: "2",
    name: "Celeste Glow Serum",
    category: "Skincare",
    price: 65,
    rating: 4.9,
    description: "Hydrating face serum infused with pink quartz essence for radiant skin.",
    image:  bag2,
  },
  {
    id: "3",
    name: "Luna Pearl Necklace",
    category: "Jewelry",
    price: 150,
    rating: 4.7,
    description: "Classic pearl necklace reimagined with a modern metallic sheen.",
    image: shoe,
  },
  {
    id: "4",
    name: "Ethereal Essence Perfume",
    category: "Fragrance",
    price: 98,
    rating: 4.8,
    description: "A luxurious blend of rose, amber, and stardust tones — timeless allure.",
    image: shoe2,
  },
  {
    id: "5",
    name: "Velora Satin Heels",
    category: "Footwear",
    price: 180,
    rating: 4.6,
    description: "Soft rose-gold heels with a futuristic strap design and cushioned comfort.",
    image: bag1,
  },
  {
    id: "6",
    name: "Nova Radiant Watch",
    category: "Accessories",
    price: 210,
    rating: 4.9,
    description: "Smart analog hybrid watch blending elegance and subtle tech brilliance.",
    image: bag2,
  },
  {
    id: "7",
    name: "Iris Luxe Tote",
    category: "Bags",
    price: 145,
    rating: 4.7,
    description: "Spacious tote bag crafted from vegan leather with gold-trimmed handles.",
    image: shoe2,
  },
  {
    id: "8",
    name: "Seraph Aura Mist",
    category: "Beauty",
    price: 55,
    rating: 4.8,
    description: "Refreshing body mist that leaves a glowing scent of pink jasmine and musk.",
    image: shoe,
  },
  {
    id: "9",
    name: "Eclipse Wireless Pods",
    category: "Tech",
    price: 130,
    rating: 4.9,
    description: "Wireless earbuds designed with a metallic rose finish and premium clarity.",
    image: bag1,
  },
  {
    id: "10",
    name: "Opal Glow Compact",
    category: "Makeup",
    price: 75,
    rating: 4.8,
    description: "Illuminating compact powder that enhances natural glow with a silky touch.",
    image: bag2,
  },
];


 return (
  <main>
    <div className='container  products-container'>
       {products.map((product)=>(
<div key={product.id} className="product-card">
        <figure>
          <button className='product-like-btn'>
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className=""><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
          </button>
          <img src={product.image} alt= {product.name} />
          <figcaption className='stock-price'>
            Stock:100
          </figcaption>
        </figure>
        <div className='product-info'>
          <p className="product-name">
            {product.name}
          </p>
          <p className="product-short-description">
           {product.description}
          </p>
   
          <hr />
          <div className='d-flex justify-s-between align-center product-price-container'>
            <p className="product-discount-price">
              $189
              <span className='product-price'>
                ${product.price}
              </span>
            </p>

            <button className='product-icon product-cart-btn' type='button' arial-label="add to cart button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            </button>
          </div>
        </div>
      </div>
       ))}
      
    </div> 
  </main>
 )
}