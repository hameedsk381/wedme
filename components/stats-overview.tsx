"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend } from "recharts"

// Mock data for stats
const mockData = [
  { month: "Jan", users: 100, vendors: 50, inquiries: 200 },
  { month: "Feb", users: 120, vendors: 55, inquiries: 220 },
  { month: "Mar", users: 140, vendors: 60, inquiries: 250 },
  { month: "Apr", users: 160, vendors: 70, inquiries: 280 },
  { month: "May", users: 180, vendors: 80, inquiries: 320 },
  { month: "Jun", users: 200, vendors: 90, inquiries: 350 },
]

export function StatsOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Platform Overview</CardTitle>
        <CardDescription>User growth and activity over the last 6 months</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            users: {
              label: "Users",
              color: "hsl(var(--chart-1))",
            },
            vendors: {
              label: "Vendors",
              color: "hsl(var(--chart-2))",
            },
            inquiries: {
              label: "Inquiries",
              color: "hsl(var(--chart-3))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="var(--color-users)" name="Users" />
              <Line type="monotone" dataKey="vendors" stroke="var(--color-vendors)" name="Vendors" />
              <Line type="monotone" dataKey="inquiries" stroke="var(--color-inquiries)" name="Inquiries" />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

