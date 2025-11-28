import { useState , useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  TrendingUp,
  Footprints,
  Handbag,
  CircleSlash,
  BadgePlus,
} from "lucide-react";

import { AdminLayout } from "../../components/Admin/AdminLayout";
import { AdminAddProduct } from "../../components/Admin/AdminAddProduct";
import { DeletePopUp } from "../../components/DeletePopUp";

import "./AdminProductPage.css";

export function AdminProductPage({ allProducts, refreshProducts }) {
  const productMetrics = [
    {
      id: "1",
      icon: <TrendingUp color="white" />,
      name: "Total Products",
      number: 6,
      backgroundColor: "bg-heading",
    },
    {
      id: "2",
      icon: <Footprints color="white" />,
      name: "Total Shoes",
      number: 6,
      backgroundColor: "bg-accent-purple",
    },
    {
      id: "3",
      icon: <Handbag color="white" />,
      name: "Total Bags",
      number: 6,
      backgroundColor: "bg-accent-gold",
    },
    {
      id: "4",
      icon: <CircleSlash color="white" />,
      name: "Out of Stock",
      number: 6,
      backgroundColor: "bg-red",
    },
    {
      id: "5",
      icon: <BadgePlus color="white" />,
      name: "new-arrivals",
      number: 6,
      backgroundColor: "bg-green",
    },
  ];

  const [isDelPopUp, setIsDelPopUp] = useState(false);
  const [deleteProduct, setDeletProduct] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const handleOpenDelete = (product) => {
     setDeletProduct(product);
     setIsDelPopUp(true);

     navigate(`?delete=${product._id}`, {replace: false});
  }

  const handleCloseDelete = () =>{
     setDeletProduct({});
     setIsDelPopUp(false);

     navigate('', {replace: false});
  }

  // detect brosewer  forward backward  for openning and closing delete pop up

 useEffect(() => {
  const params = new URLSearchParams(location.search);
  const deleteId = params.get("delete");

  if (deleteId) {
    const product = allProducts.find((p) => p._id === deleteId);
    if (product) {
      setDeletProduct(product);
      setIsDelPopUp(true);
    } else {
      setIsDelPopUp(false);
      setDeletProduct({});
    }
  } else {
    // ❗ This is the missing part
    setIsDelPopUp(false);
    setDeletProduct({});
  }
}, [location.search, allProducts]);

  return (
    <AdminLayout>
      <DeletePopUp
        isDelPopUp={isDelPopUp}
        deleteProduct={deleteProduct}
        handleCloseDelete = {handleCloseDelete}
        refreshProducts = {refreshProducts}
      />
      <div className="product-metrics-continer ">
        <div className="scrolling-element d-flex">
          {productMetrics.map((productMetric) => {
            return (
              <div
                key={productMetric.id}
                className={`product-metrics-card ${productMetric.backgroundColor}`}
              >
                <span className={`p-m-icon`}>{productMetric.icon}</span>
                <p className="FWB text-white">{productMetric.name}</p>
                <span className="text-white">{productMetric.number}</span>
              </div>
            );
          })}
        </div>
      </div>
      <AdminAddProduct
        allProducts={allProducts}
        refreshProducts={refreshProducts}
        handleOpenDelete = {handleOpenDelete}
      />
    </AdminLayout>
  );
}
