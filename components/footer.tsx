import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2">
            <Link href="/" className="text-xl font-bold">
              WedMe
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">Find the perfect vendors for your special day</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">For Couples</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/vendors" className="text-muted-foreground hover:text-foreground">
                  Find Vendors
                </Link>
              </li>
              <li>
                <Link href="/planning-tools" className="text-muted-foreground hover:text-foreground">
                  Planning Tools
                </Link>
              </li>
              <li>
                <Link href="/inspiration" className="text-muted-foreground hover:text-foreground">
                  Wedding Inspiration
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">For Vendors</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/vendor/join" className="text-muted-foreground hover:text-foreground">
                  Join as Vendor
                </Link>
              </li>
              <li>
                <Link href="/vendor/pricing" className="text-muted-foreground hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/vendor/success-stories" className="text-muted-foreground hover:text-foreground">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} WedMe. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

