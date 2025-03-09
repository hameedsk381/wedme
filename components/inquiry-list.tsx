import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { format } from "date-fns"

// Mock data for inquiries
const mockInquiries = Array.from({ length: 10 }).map((_, i) => ({
  id: `inquiry-${i + 1}`,
  vendorName: `Vendor ${i + 1}`,
  vendorId: `${i + 1}`,
  category: ["Venues", "Photographers", "Caterers", "Florists", "DJs & Musicians"][Math.floor(Math.random() * 5)],
  date: new Date(Date.now() - i * 86400000 * 2),
  status: ["pending", "replied", "confirmed", "declined"][Math.floor(Math.random() * 4)],
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
}))

interface InquiryListProps {
  limit?: number
}

export function InquiryList({ limit }: InquiryListProps) {
  const inquiries = limit ? mockInquiries.slice(0, limit) : mockInquiries

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500 text-yellow-50"
      case "replied":
        return "bg-blue-500 text-blue-50"
      case "confirmed":
        return "bg-green-500 text-green-50"
      case "declined":
        return "bg-red-500 text-red-50"
      default:
        return "bg-gray-500 text-gray-50"
    }
  }

  return (
    <div className="space-y-4">
      {inquiries.map((inquiry) => (
        <Card key={inquiry.id}>
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>{inquiry.vendorName}</CardTitle>
                <CardDescription>{inquiry.category}</CardDescription>
              </div>
              <Badge className={getStatusColor(inquiry.status)}>
                {inquiry.status.charAt(0).toUpperCase() + inquiry.status.slice(1)}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-2 text-sm text-muted-foreground">Sent on {format(inquiry.date, "PPP")}</div>
            <p className="line-clamp-2">{inquiry.message}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm" asChild>
              <a href={`/vendor/${inquiry.vendorId}`}>View Vendor</a>
            </Button>
            <Button size="sm" asChild>
              <a href={`/dashboard/inquiries/${inquiry.id}`}>View Details</a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

