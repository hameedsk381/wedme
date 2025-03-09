"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { format } from "date-fns"
import { Check, X } from "lucide-react"

// Mock data for vendor approvals
const mockVendorApprovals = Array.from({ length: 10 }).map((_, i) => ({
  id: `vendor-${i + 1}`,
  name: `Vendor ${i + 1}`,
  category: ["Venues", "Photographers", "Caterers", "Florists", "DJs & Musicians"][Math.floor(Math.random() * 5)],
  location: ["New York", "Los Angeles", "Chicago", "Miami", "Dallas"][Math.floor(Math.random() * 5)],
  submittedDate: new Date(Date.now() - i * 86400000 * 2),
  status: "pending",
}))

interface VendorApprovalListProps {
  limit?: number
}

export function VendorApprovalList({ limit }: VendorApprovalListProps) {
  const [approvals, setApprovals] = useState(mockVendorApprovals)

  const handleApprove = (id: string) => {
    setApprovals(approvals.map((vendor) => (vendor.id === id ? { ...vendor, status: "approved" } : vendor)))
  }

  const handleReject = (id: string) => {
    setApprovals(approvals.map((vendor) => (vendor.id === id ? { ...vendor, status: "rejected" } : vendor)))
  }

  const filteredApprovals = approvals
    .filter((vendor) => vendor.status === "pending")
    .slice(0, limit || approvals.length)

  return (
    <div className="space-y-4">
      {filteredApprovals.length === 0 ? (
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground">No pending approvals</p>
          </CardContent>
        </Card>
      ) : (
        filteredApprovals.map((vendor) => (
          <Card key={vendor.id}>
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{vendor.name}</CardTitle>
                  <CardDescription>
                    {vendor.category} • {vendor.location}
                  </CardDescription>
                </div>
                <Badge>Pending</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">Submitted on {format(vendor.submittedDate, "PPP")}</div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <a href={`/admin/vendors/${vendor.id}`}>View Details</a>
              </Button>
              <div className="flex gap-2">
                <Button variant="destructive" size="sm" onClick={() => handleReject(vendor.id)}>
                  <X className="mr-1 h-4 w-4" />
                  Reject
                </Button>
                <Button variant="default" size="sm" onClick={() => handleApprove(vendor.id)}>
                  <Check className="mr-1 h-4 w-4" />
                  Approve
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))
      )}
    </div>
  )
}

