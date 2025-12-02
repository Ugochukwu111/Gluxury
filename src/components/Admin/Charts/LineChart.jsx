import axios from "axios";
import { useEffect, useState } from "react";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";

export function LineCharts() {
    const[isLoadingAnalytics, setIsLoadingAnalytics] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [UserDataAnalytics, setUserDataAnalytics] = useState([]);
  
    const getUserAnalytics = async ()=>{
      setIsLoadingAnalytics(true);
       try{
        const res = await axios.get("http://localhost:5000/api/analytics/users-weekly");
        setUserDataAnalytics(res.data);
        setSuccessMessage( res.data || "User analytics fetched successfully");
       }catch(err){
        setSuccessMessage(err.successMessage || "Failed to fetch user analytics");
         console.log(err);
       }finally{
        setIsLoadingAnalytics(false);
       }
    }
  
    useEffect(()=>{
      getUserAnalytics();
    }, []);

  
  return (
    <>
      <h5>Users Analytics :</h5>
      <br />
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={600}
          height={400}
          data={UserDataAnalytics}
          margin={{ right: 30, bottom: 45 }}
        >
          <YAxis stroke="var(--text-subtle)" />
          <XAxis dataKey="week" stroke="var(--text-subtle)" />
          <CartesianGrid
            strokeDasharray="5 5"
            stroke="rgba(180, 142, 255, 0.25)"
          />
          <Tooltip
            contentStyle={{
              background: "white",
              borderRadius: "12px",
              border: "1px solid var(--accent-purple)",
              boxShadow: "0 4px 15px rgba(212, 178, 255, 0.2)",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="registered"
            stackId="1"
            stroke="var(--text-heading)"
            strokeWidth={3}
            dot={{
              r: 4,
              strokeWidth: 2,
              fill: "white",
              stroke: "var(--text-heading)",
            }}
          />
          <Line
            type="monotone"
            dataKey="active"
            stackId="1"
            stroke="var(--accent-pink)"
            strokeWidth={3}
            dot={{
              r: 4,
              strokeWidth: 2,
              fill: "white",
              stroke: "var(--accent-pink)",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
