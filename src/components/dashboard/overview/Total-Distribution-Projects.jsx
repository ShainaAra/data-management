"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { Pie, PieChart, Cell, ResponsiveContainer } from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PieChart as PieChartIcon } from "lucide-react"; 

const COLORS = ["#34d399", "#60a5fa"]; // green = import, blue = export

export default function TotalDistributionProjects() {
  const data = [
    { name: "Import Projects", value: 160 },
    { name: "Export Projects", value: 110 },
  ];

  return (
    <Card className="bg-white border border-gray-200 shadow-md rounded-2xl">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-gray-800 text-lg font-semibold">
          Total Distribution of Projects
        </CardTitle>
        <PieChartIcon className="text-blue-500" size={24} />
      </CardHeader>

      <CardContent>
        {/*Chart container */}
        <ChartContainer
          config={{
            import: { label: "Import Projects", color: "#34d399" },
            export: { label: "Export Projects", color: "#60a5fa" },
          }}
          className="mx-auto"
          style={{ width: "100%", height: 250 }}
        >
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>

        {/* Chart */}
        <div className="flex justify-center mt-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-400"></span> Import
          </div>
          <div className="flex items-center gap-2 ml-4">
            <span className="w-3 h-3 rounded-full bg-blue-400"></span> Export
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
