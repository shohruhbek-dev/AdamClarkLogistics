"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Truck, Shield, Clock, Users, Star, Phone, Mail, MapPin, CheckCircle, MessageCircle, Send } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ContactForm from "@/components/contact-form"
import TestimonialsSection from "@/components/testimonials-section"
import SpecialOfferBanner from "@/components/special-offer-banner"

export default function AdamClarkLogistics() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/acl-logo.png" width="40" height="40" alt="ACL Logo" className="rounded" />
            <Truck className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold">Adam Clark Logistics</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#services" className="text-sm font-medium hover:text-blue-400 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="#partnerships" className="text-sm font-medium hover:text-blue-400 transition-colors">
              Dealer Partners
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-blue-400 transition-colors">
              Contact
            </Link>
            <div className="flex items-center space-x-2">
              <Button
                className="bg-[#25D366] hover:bg-[#20b858] text-white font-bold px-4 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                onClick={() => window.open("https://wa.me/+1 (929)-734-6070", "_blank")}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
              <Button
                className="bg-[#0088cc] hover:bg-[#006ba6] text-white font-bold px-4 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                onClick={() => window.open("https://t.me/AdamclarkLogistics", "_blank")}
              >
                <Send className="mr-2 h-4 w-4" />
                Telegram
              </Button>
              <Button
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => {
                  const contactSection = document.querySelector("#contact-form")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Get Quote
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section with Background */}
        <section
          className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-blue-900/90 text-white py-20 lg:py-32 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.8)), url('/sunset-transport.png')`,
          }}
        >
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-blue-600 text-white w-fit">Trusted by 100+ Dealers and 500+ Customers</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Professional Auto Transport Across the USA
                  </h1>
                  <p className="max-w-[600px] text-slate-200 md:text-xl">
                    Reliable car hauling services with specialized dealer partnerships. Fast, secure, and insured
                    vehicle transportation from coast to coast.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-[#25D366] hover:bg-[#20b858] text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                    onClick={() => window.open("https://wa.me/+1 (929)-734-6070", "_blank")}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                    onClick={() => {
                      const contactSection = document.querySelector("#contact-form")
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    Get Free Quote
                  </Button>
                </div>
                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-green-400" />
                    <span>Fully Insured</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-green-400" />
                    <span>24/7 Update</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Trusted & Experienced</span>
                  </div>
                </div>
              </div>
              <Image
                src="/car-carrier-truck.png"
                width="600"
                height="400"
                alt="Professional car carrier truck transporting multiple vehicles"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Services Section with Background */}
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('/car-transport-2.png')`,
          }}
        >
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Transport Services</h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive auto transport solutions designed specifically for automotive dealers and businesses.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-slate-200 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <Truck className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle>Dealer-to-Dealer Transport</CardTitle>
                  <CardDescription>
                    Specialized vehicle transport between dealerships with priority scheduling and competitive rates.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Priority pickup & delivery</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Volume discounts available</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Dedicated account management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-slate-200 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <Shield className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle>Auction Transport</CardTitle>
                  <CardDescription>
                    Reliable pickup and delivery from major auto auctions nationwide with real-time tracking.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>All major auction locations</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Same-day pickup available</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Condition reports included</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-slate-200 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <Users className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle>Customer Delivery</CardTitle>
                  <CardDescription>
                    White-glove delivery service for your customers with professional drivers and pristine vehicles.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Professional uniformed drivers</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Door-to-door service</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Customer satisfaction guarantee</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section with New Image */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-blue-100 text-blue-800 w-fit">3 Years Experience</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Built for the Automotive Industry</h2>
                  <p className="max-w-[600px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Adam Clark Logistics was founded with one mission: to provide automotive dealers with the most
                    reliable, efficient, and cost-effective vehicle transport services in the industry.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-blue-600">100+</div>
                    <div className="text-sm text-slate-600">Dealer Partners</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-blue-600">5,000+</div>
                    <div className="text-sm text-slate-600">Vehicles Transported</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-blue-600">99.8%</div>
                    <div className="text-sm text-slate-600">On-Time Delivery</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-blue-600">24/7</div>
                    <div className="text-sm text-slate-600">Customer Support</div>
                  </div>
                </div>
              </div>
              <Image
                src="/luxury-car-transport.png"
                width="550"
                height="400"
                alt="Professional luxury car carrier truck with premium vehicles under palm trees"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Premium Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr]">
              <Image
                src="/enclosed-transport.png"
                width="550"
                height="400"
                alt="Enclosed transport for luxury vehicles"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full shadow-2xl"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-yellow-600 text-white w-fit">Premium Service</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Enclosed Transport for Luxury Vehicles
                  </h2>
                  <p className="max-w-[600px] text-slate-200 md:text-xl/relaxed">
                    Protect your high-value vehicles with our enclosed transport service. Perfect for luxury cars,
                    classic vehicles, and exotic automobiles that require extra protection during transport.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-yellow-400" />
                    <span>Complete weather protection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-yellow-400" />
                    <span>Enhanced security features</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span>White-glove handling</span>
                  </div>
                </div>
                <Button className="bg-yellow-600 hover:bg-yellow-700 w-fit">Learn More About Enclosed Transport</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Dealer Partnerships Section */}
        <section id="partnerships" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Dealers Choose Us</h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We understand the unique needs of automotive dealers and provide tailored solutions that drive your
                  business forward.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Flexible Scheduling</h3>
                    <p className="text-slate-600">
                      Work around your inventory needs with priority scheduling and expedited services when you need
                      them most.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Comprehensive Insurance</h3>
                    <p className="text-slate-600">
                      Insurance coverage from $100 up to $1M for complete cargo protection during transport.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Dedicated Support</h3>
                    <p className="text-slate-600">
                      Each dealer partner gets a dedicated account manager who understands your business and
                      transportation needs.
                    </p>
                  </div>
                </div>
              </div>
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-center">What Our Partners Say</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-slate-600">
                      "Adam Clark Logistics has been our go-to transport partner for over 3 years. Their reliability and competitive pricing have helped us streamline our operations significantly. Adams is really helpfull and professional broker. I recommend him and his company to all!"
                    </p>
                    <div className="text-sm font-medium">- Ted, VIRGOWAY Auto and Logistics </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-slate-600">
                      "Professional service from start to finish. They always keeps us informed every step of the way, and their drivers are always courteous and professional."
                    </p>
                    <div className="text-sm font-medium">- Sarah Davis, Premier Motors</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Special Offer Banner */}
        <SpecialOfferBanner />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* CTA Section with Detailed Contact Form */}
        <section id="contact-form" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Get Started?</h2>
                <p className="mx-auto max-w-[600px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get a detailed quote tailored to your specific transport needs. Our team responds to all quote
                  requests within 2 business hours.
                </p>
              </div>
              <ContactForm />
              <div className="bg-slate-900 text-white p-6 rounded-lg max-w-2xl">
                <h3 className="text-lg font-semibold mb-2">Need Immediate Assistance?</h3>
                <p className="text-slate-300 mb-4">
                  For urgent transport needs or questions about our services, contact us directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                  <Button
                    className="bg-[#25D366] hover:bg-[#20b858] text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                    onClick={() => window.open("https://wa.me/+1 (929)-734-6070", "_blank")}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                  <Button
                    className="bg-[#0088cc] hover:bg-[#006ba6] text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                    onClick={() => window.open("https://t.me/AdamclarkLogistics", "_blank")}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Telegram
                  </Button>
                  <Button
                    className="bg-[#0088cc] hover:bg-[#006ba6] text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                    onClick={() => window.open("https://t.me/ACL_support", "_blank")}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Support Telegram
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with Contact Buttons */}
      <footer id="contact" className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Truck className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-bold">Adam Clark Logistics</span>
              </div>
              <p className="text-sm text-slate-300">
                Professional auto transport services across the USA. Fully insured and experienced.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span>+998 (97) 987-11-05</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span>adamclark1105@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span>Nationwide Service</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  className="bg-[#25D366] hover:bg-[#20b858] text-white font-bold px-4 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  onClick={() => window.open("https://wa.me/+1 (929)-734-6070", "_blank")}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
                <Button
                  className="bg-[#0088cc] hover:bg-[#006ba6] text-white font-bold px-4 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  onClick={() => window.open("https://t.me/AdamclarkLogistics", "_blank")}
                >
                  <Send className="mr-2 h-4 w-4" />
                  Telegram
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link href="#" className="hover:text-white">
                    Dealer Transport
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Auction Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Customer Delivery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Expedited Shipping
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link href="#" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Dealer Partners
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <div className="flex flex-col gap-3">
                <Button
                  className="bg-[#0088cc] hover:bg-[#006ba6] text-white font-bold px-4 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-sm justify-start"
                  onClick={() => window.open("https://t.me/ACL_support", "_blank")}
                >
                  <Send className="mr-2 h-4 w-4" />
                  Telegram Support
                </Button>
                <Button
                  className="bg-[#1877f2] hover:bg-[#166fe5] text-white font-bold px-4 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-sm justify-start"
                  onClick={() => window.open("https://facebook.com/adamclarklogistics", "_blank")}
                >
                  <Users className="mr-2 h-4 w-4" />
                  Facebook
                </Button>
                <Button
                  className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:from-[#7c3aed] hover:via-[#dc2626] hover:to-[#f59e0b] text-white font-bold px-4 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-sm justify-start"
                  onClick={() => window.open("https://instagram.com/Adamclark.Logistics", "_blank")}
                >
                  <Star className="mr-2 h-4 w-4" />
                  Instagram
                </Button>
                <Button
                  className="bg-[#ea4335] hover:bg-[#d93025] text-white font-bold px-4 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-sm justify-start"
                  onClick={() => window.open("mailto:info@adamclarklogistics.com", "_blank")}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Direct Email
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} Adam Clark Logistics. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
