"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { VendorCard } from "@/components/vendor-card"
import { InquiryList } from "@/components/inquiry-list"
import { Calendar, Heart, MessageSquare, Clock } from "lucide-react"

// Mock data for saved vendors
const mockSavedVendors = Array.from({ length: 3 }).map((_, i) => ({
  id: `${i + 1}`,
  name: `Saved Vendor ${i + 1}`,
  category: ["Venues", "Photographers", "Caterers"][i % 3],
  location: ["New York", "Los Angeles", "Chicago"][i % 3],
  rating: 4 + Math.random(),
  reviewCount: Math.floor(Math.random() * 100) + 10,
  imageUrl: "/placeholder.svg?height=200&width=300",
  price: ["$", "$$", "$$$"][i % 3],
}))

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saved Vendors</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockSavedVendors.length}</div>
            <p className="text-xs text-muted-foreground">Vendors you've saved for later</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Inquiries</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Inquiries awaiting vendor response</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Events in the next 30 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Days Until Wedding</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">120</div>
            <p className="text-xs text-muted-foreground">Days until your big day</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="saved">
        <TabsList>
          <TabsTrigger value="saved">Saved Vendors</TabsTrigger>
          <TabsTrigger value="inquiries">Recent Inquiries</TabsTrigger>
        </TabsList>
        <TabsContent value="saved" className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Saved Vendors</h2>
            <Button variant="outline" size="sm" asChild>
              <a href="/vendors">Find More Vendors</a>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mockSavedVendors.map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} saved={true} onSave={() => {}} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="inquiries" className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Recent Inquiries</h2>
            <Button variant="outline" size="sm" asChild>
              <a href="/dashboard/inquiries">View All Inquiries</a>
            </Button>
          </div>
          <InquiryList limit={5} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

