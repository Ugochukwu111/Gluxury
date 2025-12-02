import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";

export function AreaCharts() {
  const productSales = [
    { name: "January", product1: 120, product2: 90 },
    { name: "February", product1: 150, product2: 110 },
    { name: "March", product1: 170, product2: 130 },
    { name: "April", product1: 140, product2: 100 },
    { name: "May", product1: 180, product2: 160 },
    { name: "June", product1: 200, product2: 170 },
    { name: "July", product1: 160, product2: 140 },
    { name: "August", product1: 190, product2: 150 },
    { name: "September", product1: 220, product2: 180 },
    { name: "October", product1: 210, product2: 175 },
    { name: "November", product1: 230, product2: 185 },
    { name: "December", product1: 250, product2: 200 },
  ];
  return (
    <>
    <h5>Gluxury Overview: </h5>
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={600}
        height={400}
        data={productSales}
        margin={{ right: 30 }}
      >
        <YAxis stroke="var(--text-subtle)" />
        <XAxis dataKey="name" stroke="var(--text-subtle)" />
        <CartesianGrid stroke="rgba(180, 142, 255, 0.25)" />
        <Tooltip
          contentStyle={{
            background: "white",
            borderRadius: "12px",
            border: "1px solid var(--accent-purple)",
          }}
        />
        <Legend />
        <defs>
          <linearGradient id="areaPurple" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="10%"
              stopColor="var(--text-heading)"
              stopOpacity={0.5}
            />
            <stop
              offset="95%"
              stopColor="var(--accent-purple)"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="product1" fill="purple" stackId="1" />
        <Area
          type="monotone"
          dataKey="product2"
          stackId="1"
          stroke="var(--text-heading)"
          fill="url(#areaPurple)"
          strokeWidth={3}
        />
      </AreaChart>
    </ResponsiveContainer>
    </>
  );
}
