"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

export function SearchBar() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("")
  const [location, setLocation] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    const params = new URLSearchParams()
    if (searchTerm) params.append("q", searchTerm)
    if (category) params.append("category", category)
    if (location) params.append("location", location)

    router.push(`/vendors?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSearch} className="flex w-full flex-col gap-2 md:flex-row">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search vendors..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="venues">Venues</SelectItem>
          <SelectItem value="photographers">Photographers</SelectItem>
          <SelectItem value="caterers">Caterers</SelectItem>
          <SelectItem value="florists">Florists</SelectItem>
          <SelectItem value="entertainment">DJs & Musicians</SelectItem>
        </SelectContent>
      </Select>
      <Select value={location} onValueChange={setLocation}>
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Location" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="new-york">New York</SelectItem>
          <SelectItem value="los-angeles">Los Angeles</SelectItem>
          <SelectItem value="chicago">Chicago</SelectItem>
          <SelectItem value="miami">Miami</SelectItem>
          <SelectItem value="dallas">Dallas</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit" className="w-full md:w-auto">
        Search
      </Button>
    </form>
  )
}

