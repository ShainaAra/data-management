"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const data = [
  { date: "Apr 1", import: 120, export: 80 },
  { date: "Apr 8", import: 150, export: 110 },
  { date: "Apr 15", import: 200, export: 130 },
  { date: "Apr 22", import: 180, export: 160 },
  { date: "Apr 29", import: 220, export: 200 },
  { date: "May 6", import: 260, export: 230 },
  { date: "May 13", import: 100, export: 200 },
  { date: "June 12", import: 50, export: 50 },
  { date: "June 19", import: 70, export: 80 },
  { date: "June 26", import: 90, export: 100 },
  { date: "July 3", import: 120, export: 130 },
  { date: "July 10", import: 150, export: 160 },
  { date: "July 11", import: 155, export: 69 },
  { date: "August 12", import: 150, export: 250 },
  { date: "August 19", import: 75, export: 180 },
  { date: "August 26", import: 93, export: 65 },
  { date: "September 3", import: 120, export: 130 },
  { date: "September 10", import: 150, export: 160 },
  { date: "September 11", import: 155, export: 69 },
];

const chartConfig = {
  import: {
    label: "Import",
    color: "hsl(220, 80%, 60%)", // blue tone
  },
  export: {
    label: "Export",
    color: "hsl(160, 70%, 50%)", // green tone
  },
};

export default function ImportExportChart() {
  return (
    <Card className="bg-white border border-gray-200 shadow-md rounded-2xl">
      <CardHeader className="pb-2">
        <CardTitle className="text-gray-800 text-lg font-semibold">
          Import-Export Activity
        </CardTitle>
      </CardHeader>

      <CardContent>
        {/* Scrollable Chart Container */}
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            <ChartContainer config={chartConfig} className="h-[350px] w-full">
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                
                {/* Slanted Date Labels */}
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tick={{
                    fill: "#4B5563",
                    fontSize: 12,
                    angle: -35,
                    textAnchor: "end",
                  }}
                  interval={0}
                  height={60} // adds space for angled labels
                />

                <YAxis
                  tick={{ fill: "#4B5563", fontSize: 11 }}
                  width={40}
                />

                <ChartTooltip content={<ChartTooltipContent />} />

                <Area
                  type="monotone"
                  dataKey="import"
                  stroke="var(--color-import)"
                  fill="var(--color-import)"
                  fillOpacity={0.3}
                />
                <Area
                  type="monotone"
                  dataKey="export"
                  stroke="var(--color-export)"
                  fill="var(--color-export)"
                  fillOpacity={0.3}
                />
                <ChartLegend content={<ChartLegendContent />} />
              </AreaChart>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
