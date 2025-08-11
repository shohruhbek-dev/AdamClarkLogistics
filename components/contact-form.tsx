"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CalendarDays, MapPin, Car, Users, Phone, Building, MessageCircle, Send } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    customerType: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    vehicleType: "",
    vehicleCount: "",
    pickupLocation: "",
    deliveryLocation: "",
    pickupDate: "",
    deliveryDate: "",
    isFlexible: false,
    additionalServices: [],
    specialRequirements: "",
    budgetRange: "",
    hearAboutUs: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")

  const sendToTelegram = async (message: string) => {
    const BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
    const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error("Telegram configuration error: BOT_TOKEN or CHAT_ID is missing")
      return false
    }

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      })

      return response.ok
    } catch (error) {
      console.error("Telegram send error:", error)
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Prepare formatted message for Telegram
      const telegramMessage = `
🚛 <b>NEW TRANSPORT QUOTE REQUEST</b>

👤 <b>Customer Information:</b>
• Name: ${formData.firstName} ${formData.lastName}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Type: ${formData.customerType}
${formData.company ? `• Company: ${formData.company}` : ""}

🚗 <b>Service Details:</b>
• Service: ${formData.serviceType}
• Vehicle Type: ${formData.vehicleType}
• Vehicle Count: ${formData.vehicleCount}

📍 <b>Locations:</b>
• Pickup: ${formData.pickupLocation}
• Delivery: ${formData.deliveryLocation}

📅 <b>Timeline:</b>
• Pickup Date: ${formData.pickupDate || "Not specified"}
• Delivery Date: ${formData.deliveryDate || "Not specified"}
• Flexible: ${formData.isFlexible ? "Yes" : "No"}

💰 <b>Budget:</b> ${formData.budgetRange || "Not specified"}

🔧 <b>Additional Services:</b> ${formData.additionalServices.length > 0 ? formData.additionalServices.join(", ") : "None"}

📝 <b>Special Requirements:</b>
${formData.specialRequirements || "None"}

📢 <b>How they heard about us:</b> ${formData.hearAboutUs || "Not specified"}

⏰ <b>Submitted:</b> ${new Date().toLocaleString()}
`

      // Send to Telegram
      const telegramSuccess = await sendToTelegram(telegramMessage)

      if (telegramSuccess) {
        setSubmitStatus("success")
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    }

    setIsSubmitting(false)

    // Reset form after successful submission
    if (submitStatus === "success") {
      setTimeout(() => {
        setSubmitStatus("")
        setFormData({
          customerType: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          serviceType: "",
          vehicleType: "",
          vehicleCount: "",
          pickupLocation: "",
          deliveryLocation: "",
          pickupDate: "",
          deliveryDate: "",
          isFlexible: false,
          additionalServices: [],
          specialRequirements: "",
          budgetRange: "",
          hearAboutUs: "",
        })
      }, 5000)
    }
  }

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleAdditionalServiceChange = (service: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      additionalServices: checked
        ? [...prev.additionalServices, service]
        : prev.additionalServices.filter((s) => s !== service),
    }))
  }

  if (submitStatus === "success") {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-green-600 mb-2">Quote Request Sent!</h3>
          <p className="text-slate-600 mb-4">
            Thank you for your interest in Adam Clark Logistics. We've received your request via Telegram and will
            contact you within 2 business hours with a detailed quote.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <p className="text-sm text-blue-800">
              <strong>Continue the conversation:</strong>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button
              className="bg-[#25D366] hover:bg-[#20b858] text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              onClick={() => window.open("https://wa.me/998979871105", "_blank")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Continue on WhatsApp
            </Button>
            <Button
              className="bg-[#0088cc] hover:bg-[#006ba6] text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              onClick={() => window.open("https://t.me/AdamclarkLogistics", "_blank")}
            >
              <Send className="mr-2 h-5 w-5" />
              Continue on Telegram
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (submitStatus === "error") {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-2xl font-bold text-red-600 mb-2">Submission Error</h3>
          <p className="text-slate-600 mb-4">
            We're sorry, there was an error submitting your form. Please try again or contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button
              className="bg-[#25D366] hover:bg-[#20b858] text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              onClick={() => window.open("https://wa.me/998979871105", "_blank")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </Button>
            <Button
              className="bg-[#0088cc] hover:bg-[#006ba6] text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              onClick={() => window.open("https://t.me/AdamclarkLogistics", "_blank")}
            >
              <Send className="mr-2 h-5 w-5" />
              Telegram Us
            </Button>
          </div>
          <Button className="mt-4 bg-slate-600 hover:bg-slate-700" onClick={() => setSubmitStatus("")}>
            Try Form Again
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Get Your Free Transport Quote</CardTitle>
        <CardDescription className="text-center">
          Fill out the form below and we'll provide you with a detailed quote within 2 business hours
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6" lang="en-US">
          {/* Customer Type Selection */}
          <div className="space-y-3">
            <Label className="text-base font-semibold flex items-center gap-2">
              <Users className="w-4 h-4" />I am a:
            </Label>
            <RadioGroup
              value={formData.customerType}
              onValueChange={(value) => handleInputChange("customerType", value)}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dealer" id="dealer" />
                <Label htmlFor="dealer">Auto Dealer</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="business" id="business" />
                <Label htmlFor="business">Business/Fleet</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="individual" id="individual" />
                <Label htmlFor="individual">Individual Customer</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Contact Information */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                required
              />
            </div>
            {(formData.customerType === "dealer" || formData.customerType === "business") && (
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="company" className="flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  Company/Dealership Name *
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  required
                />
              </div>
            )}
          </div>

          {/* Service Selection */}
          <div className="space-y-4">
            <Label className="text-base font-semibold">Service Type *</Label>
            <Select value={formData.serviceType} onValueChange={(value) => handleInputChange("serviceType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select the service you need" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dealer-to-dealer">Dealer-to-Dealer Transport</SelectItem>
                <SelectItem value="auction-pickup">Auction Pickup & Delivery</SelectItem>
                <SelectItem value="customer-delivery">Customer Delivery Service</SelectItem>
                <SelectItem value="fleet-transport">Fleet/Multiple Vehicle Transport</SelectItem>
                <SelectItem value="expedited">Expedited Transport</SelectItem>
                <SelectItem value="other">Other (Please specify in comments)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Vehicle Information */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="vehicleType" className="flex items-center gap-2">
                <Car className="w-4 h-4" />
                Vehicle Type *
              </Label>
              <Select value={formData.vehicleType} onValueChange={(value) => handleInputChange("vehicleType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select vehicle type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedan">Sedan</SelectItem>
                  <SelectItem value="suv">SUV</SelectItem>
                  <SelectItem value="truck">Pickup Truck</SelectItem>
                  <SelectItem value="luxury">Luxury Vehicle</SelectItem>
                  <SelectItem value="classic">Classic/Vintage Car</SelectItem>
                  <SelectItem value="motorcycle">Motorcycle</SelectItem>
                  <SelectItem value="rv">RV/Motorhome</SelectItem>
                  <SelectItem value="commercial">Commercial Vehicle</SelectItem>
                  <SelectItem value="mixed">Mixed Fleet</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="vehicleCount">Number of Vehicles *</Label>
              <Select value={formData.vehicleCount} onValueChange={(value) => handleInputChange("vehicleCount", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="How many vehicles?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Vehicle</SelectItem>
                  <SelectItem value="2-5">2-5 Vehicles</SelectItem>
                  <SelectItem value="6-10">6-10 Vehicles</SelectItem>
                  <SelectItem value="11-20">11-20 Vehicles</SelectItem>
                  <SelectItem value="20+">20+ Vehicles</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Location Information */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="pickupLocation" className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Pickup Location *
              </Label>
              <Input
                id="pickupLocation"
                placeholder="Enter pickup address (e.g., Los Angeles, CA or 90210)"
                value={formData.pickupLocation}
                onChange={(e) => handleInputChange("pickupLocation", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="deliveryLocation" className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Delivery Location *
              </Label>
              <Input
                id="deliveryLocation"
                placeholder="Enter delivery address (e.g., New York, NY or 10001)"
                value={formData.deliveryLocation}
                onChange={(e) => handleInputChange("deliveryLocation", e.target.value)}
                required
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="pickupDate" className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                Preferred Pickup Date
              </Label>
              <Input
                id="pickupDate"
                type="text"
                value={formData.pickupDate}
                onChange={(e) => handleInputChange("pickupDate", e.target.value)}
                placeholder="Enter your preferred pickup date (e.g., January 15, 2024)"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="deliveryDate">Preferred Delivery Date</Label>
              <Input
                id="deliveryDate"
                type="text"
                value={formData.deliveryDate}
                onChange={(e) => handleInputChange("deliveryDate", e.target.value)}
                placeholder="Enter your preferred delivery date (e.g., January 20, 2024)"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="flexible"
              checked={formData.isFlexible}
              onCheckedChange={(checked) => handleInputChange("isFlexible", checked as boolean)}
            />
            <Label htmlFor="flexible" className="text-sm">
              I'm flexible with pickup/delivery dates for better pricing
            </Label>
          </div>

          {/* Additional Services */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">Additional Services (Optional)</Label>
            <div className="grid gap-3 md:grid-cols-2">
              {[
                "Enclosed Transport",
                "Expedited Delivery",
                "Top Load Priority",
                "Door-to-Door Service",
                "Terminal-to-Terminal",
                "Insurance Upgrade",
              ].map((service) => (
                <div key={service} className="flex items-center space-x-2">
                  <Checkbox
                    id={service}
                    checked={formData.additionalServices.includes(service)}
                    onCheckedChange={(checked) => handleAdditionalServiceChange(service, checked as boolean)}
                  />
                  <Label htmlFor={service} className="text-sm">
                    {service}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Budget Range */}
          <div className="space-y-2">
            <Label htmlFor="budgetRange">Budget Range (Optional)</Label>
            <Select value={formData.budgetRange} onValueChange={(value) => handleInputChange("budgetRange", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select your budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-500">Under $500</SelectItem>
                <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
                <SelectItem value="2000-5000">$2,000 - $5,000</SelectItem>
                <SelectItem value="5000+">$5,000+</SelectItem>
                <SelectItem value="volume-pricing">Need Volume Pricing</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Special Requirements */}
          <div className="space-y-2">
            <Label htmlFor="specialRequirements">Special Requirements or Comments</Label>
            <Textarea
              id="specialRequirements"
              placeholder="Please describe any special handling requirements, vehicle conditions, or additional information..."
              value={formData.specialRequirements}
              onChange={(e) => handleInputChange("specialRequirements", e.target.value)}
              rows={4}
            />
          </div>

          {/* How did you hear about us */}
          <div className="space-y-2">
            <Label htmlFor="hearAboutUs">How did you hear about us?</Label>
            <Select value={formData.hearAboutUs} onValueChange={(value) => handleInputChange("hearAboutUs", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Please select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="google">Google Search</SelectItem>
                <SelectItem value="referral">Referral from another dealer</SelectItem>
                <SelectItem value="social-media">Social Media</SelectItem>
                <SelectItem value="industry-publication">Industry Publication</SelectItem>
                <SelectItem value="trade-show">Trade Show/Event</SelectItem>
                <SelectItem value="existing-customer">Existing Customer</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sending to Telegram...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Get My Free Quote
                </>
              )}
            </Button>
            <p className="text-xs text-slate-500 text-center mt-2">
              By submitting this form, you agree to be contacted by Adam Clark Logistics regarding your transport needs.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}