import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
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
import api from "../../utils/api";

export function AdminProductPage({ allProducts, refreshProducts }) {
  const productMetrics = [
    {
      icon: <TrendingUp color="white" />,
      backgroundColor: "bg-heading",
    },
    {
      icon: <Footprints color="white" />,
      backgroundColor: "bg-accent-purple",
    },
    {
      icon: <CircleSlash color="white" />,
      backgroundColor: "bg-red",
    },
    {
      icon: <Handbag color="white" />,
      backgroundColor: "bg-accent-gold",
    },

    {
      icon: <BadgePlus color="white" />,
      backgroundColor: "bg-green",
    },
    {
      icon: <BadgePlus color="white" />,
      backgroundColor: "bg-green",
    },
  ];

  const [isDelPopUp, setIsDelPopUp] = useState(false);
  const [deleteProduct, setDeletProduct] = useState({});
  const [enrichedProducts, setEnrichedProducts] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const handleOpenDelete = (product) => {
    setDeletProduct(product);
    setIsDelPopUp(true);
    navigate(`?delete=${product._id}`, { replace: false });
  };

  const handleCloseDelete = () => {
    setDeletProduct({});
    setIsDelPopUp(false);

    navigate("", { replace: false });
  };

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

  const [adminAnalytics, setAdminAnalytics] = useState({});

  useEffect(() => {
    const handleMetricsAPI = async () => {
      try {
        const res = await api.get("/api/analytics");
        setAdminAnalytics(res.data);
        const enriched = (res.data.products || []).map((product, index) => ({
          ...product,
          icon: productMetrics[index]?.icon || null,
          backgroundColor:
            productMetrics[index]?.backgroundColor || "bg-default",
        }));
        setEnrichedProducts(enriched);
      } catch (err) {
        console.error(err);
      }
    };
    handleMetricsAPI();
  }, [allProducts]);

  return (
    <AdminLayout>
      <DeletePopUp
        isDelPopUp={isDelPopUp}
        deleteProduct={deleteProduct}
        handleCloseDelete={handleCloseDelete}
        refreshProducts={refreshProducts}
      />
      <div className="product-metrics-continer ">
        <div className="scrolling-element d-flex">
          {enrichedProducts.map((productMetric) => {
            return (
              <div
                key={productMetric.name}
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
        handleOpenDelete={handleOpenDelete}
      />
    </AdminLayout>
  );
}
