
import { useEffect, useState } from "react";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";
import api from "../../../utils/api";

export function BarCharts() {
  const[isLoadingAnalytics, setIsLoadingAnalytics] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [productDataAnalytics, setProductDataAnalytics] = useState([]);

  const getProductAnalytics = async ()=>{
    setIsLoadingAnalytics(true);
     try{
      const res = await api.get("/api/analytics/product-chart-data");
      setProductDataAnalytics(res.data);
      setSuccessMessage( res.data || "Product analytics fetched successfully");
     }catch(err){
      setSuccessMessage(err.successMessage || "Failed to fetch product analytics");
       console.error(err);
     }finally{
      setIsLoadingAnalytics(false);
     }
  }

  useEffect(()=>{
    getProductAnalytics();
  }, []);


  return (
    <>
      <h5>Product Analtics:</h5>
      <br />
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={600}
          height={400}
          data={productDataAnalytics}
          margin={{ right: 30, bottom: 45 }}
        >
          <YAxis stroke="var(--text-subtle)" />
          <XAxis dataKey="week" stroke="var(--text-subtle)" />
          <CartesianGrid
            stroke="rgba(180, 142, 255, 0.25)"
            strokeDasharray="3 3"
          />
          <Tooltip
            contentStyle={{
              background: "white",
              borderRadius: "12px",
              border: "1px solid var(--accent-purple)",
            }}
          />
          <Legend />
          <Bar type="monotone" dataKey="shoes"  stackId="1"  radius={[10, 10, 0, 0]} fill="url(#pinkGlow)" />
          <Bar type="monotone" dataKey="bags"  stackId="1" radius={[10, 10, 10, 10]} fill="url(#purplePink)" />
            <defs>
    <linearGradient id="purplePink" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="var(--text-heading)" />
      <stop offset="100%" stopColor="var(--accent-purple)" />
    </linearGradient>

    <linearGradient id="pinkGlow" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="var(--accent-pink)" />
      <stop offset="100%" stopColor="var(--text-link)" />
    </linearGradient>
  </defs>
        </BarChart >
      </ResponsiveContainer>
    </>
  );
}
