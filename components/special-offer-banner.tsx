"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, DollarSign, TrendingDown, Mail } from "lucide-react"

export default function SpecialOfferBanner() {
  return (
    <section className="w-full py-12 md:py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-3 items-center">
          {/* Special Offer - Clickable */}
          <Card className="bg-white/10 border-white/20 text-white cursor-pointer hover:bg-white/20 transition-all duration-200 transform hover:scale-105">
            <CardContent className="p-6 text-center">
              <Badge className="bg-green-500 text-white mb-4">🎉 SPECIAL OFFER</Badge>
              <div className="text-4xl font-bold mb-2">$30</div>
              <div className="text-lg mb-2">First Shipment</div>
              <div className="text-sm opacity-90 mb-4">For Dealers Only</div>
              <Button
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                onClick={() =>
                  window.open(
                    "https://wa.me/998979871105?text=Hi! I'm interested in the $30 first shipment special offer for dealers.",
                    "_blank",
                  )
                }
              >
                <Truck className="mr-2 h-4 w-4" />
                Get $30 Deal
              </Button>
            </CardContent>
          </Card>

          {/* Lowest Fees - Clickable */}
          <Card className="bg-white/10 border-white/20 text-white cursor-pointer hover:bg-white/20 transition-all duration-200 transform hover:scale-105">
            <CardContent className="p-6 text-center">
              <DollarSign className="h-12 w-12 mx-auto mb-4 text-green-400" />
              <div className="text-xl font-bold mb-2">Lowest Service Fees</div>
              <div className="text-sm opacity-90 mb-4">Guaranteed lowest rates in the industry. Compare and save!</div>
              <Button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                onClick={() =>
                  window.open(
                    "https://wa.me/998979871105?text=Hi! I want to know more about your lowest service fees guarantee.",
                    "_blank",
                  )
                }
              >
                <DollarSign className="mr-2 h-4 w-4" />
                Compare Rates
              </Button>
            </CardContent>
          </Card>

          {/* Volume Discounts - Clickable */}
          <Card className="bg-white/10 border-white/20 text-white cursor-pointer hover:bg-white/20 transition-all duration-200 transform hover:scale-105">
            <CardContent className="p-6 text-center">
              <TrendingDown className="h-12 w-12 mx-auto mb-4 text-green-400" />
              <div className="text-xl font-bold mb-2">Volume Discounts</div>
              <div className="text-sm opacity-90 mb-4">More cars = More savings! Bulk shipping discounts available</div>
              <Button
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                onClick={() =>
                  window.open(
                    "https://wa.me/998979871105?text=Hi! I'm interested in volume discounts for bulk shipping.",
                    "_blank",
                  )
                }
              >
                <TrendingDown className="mr-2 h-4 w-4" />
                Get Volume Pricing
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Button
            size="lg"
            className="bg-[#ea4335] hover:bg-[#d93025] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            onClick={() =>
              window.open(
                "mailto:adamclark1105@gmail.com?subject=Transport Quote Request&body=Hi Adam,%0D%0A%0D%0AI'm interested in your transport services. Please contact me with more information.%0D%0A%0D%0AThank you!",
                "_blank",
              )
            }
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Us via Email
          </Button>
        </div>
      </div>
    </section>
  )
}
