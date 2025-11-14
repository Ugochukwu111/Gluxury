import {
  TrendingUp,
  Footprints,
  Handbag,
  CircleSlash,
  BadgePlus,
} from "lucide-react";

import { AdminLayout } from "../../components/Admin/AdminLayout";
import { AdminAddProduct } from "../../components/Admin/AdminAddProduct"

import "./AdminProductPage.css";

export function AdminProductPage() {
  const productMetrics = [
    {
      id:'1',
      icon: <TrendingUp color="white" />,
      name: "Total Products",
      number: 6,
      backgroundColor: "bg-heading",
    },
    {
      id:'2',
      icon: <Footprints color="white" />,
      name: "Total Shoes",
      number: 6,
      backgroundColor: "bg-accent-purple",
    },
    {
      id:'3',
      icon: <Handbag color="white" />,
      name: "Total Bags",
      number: 6,
      backgroundColor: "bg-accent-gold",
    },
    {
      id:'4',
      icon: <CircleSlash color="white" />,
      name: "Out of Stock",
      number: 6,
      backgroundColor: "bg-red",
    },
    {
      id: '5',
      icon: <BadgePlus color="white" />,
      name: "new-arrivals",
      number: 6,
      backgroundColor: "bg-green",
    },
  ];

  return (
    <AdminLayout>
      <div className="product-metrics-continer ">
        <div className="scrolling-element d-flex">
        {productMetrics.map((productMetric) => {
          return (
            <div key={productMetric.id} className={`product-metrics-card ${productMetric.backgroundColor}`}>
              <span className={
                `p-m-icon`
              }>{productMetric.icon}</span>
              <p className="FWB text-white">{productMetric.name}</p>
              <span className="text-white">{productMetric.number}</span>
            </div>
          );
        })}
        </div>
      </div>
      <AdminAddProduct/>
    </AdminLayout>
  );
}
