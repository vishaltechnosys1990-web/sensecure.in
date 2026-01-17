"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Send email via FormSubmit or similar service
      const response = await fetch("https://formspree.io/f/mvoewybl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          fullName: "",
          organization: "",
          email: "",
          phone: "",
          projectType: "",
          message: "",
        })
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Ready to discuss your traffic infrastructure project? Contact our expert team for consultation, quotes, and
            technical support.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="glass-effect border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <a href="tel:07554244139" className="font-medium hover:text-accent transition-colors">
                  07554244139
                </a>
                <div className="text-sm text-muted-foreground">Sales & Inquiries</div>
                <a href="tel:+918178119860" className="font-medium hover:text-accent transition-colors">
                  +91 81781 19860
                </a>
                <div className="text-sm text-muted-foreground">Technical Support</div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <a href="mailto:info@sensecure.in" className="font-medium hover:text-accent transition-colors">
                  info@sensecure.in
                </a>
                <div className="text-sm text-muted-foreground">General Inquiries</div>
                <a href="mailto:sales@sensecure.in" className="font-medium hover:text-accent transition-colors">
                  sales@sensecure.in
                </a>
                <div className="text-sm text-muted-foreground">Sales Department</div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <div className="font-medium">Sensecure Integrated Solutions Pvt. Ltd.</div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>C/O NCHSE, Second Floor</div>
                    <div>Above SBI Sahapura Branch</div>
                    <div>Arera Colony, Madhya Pradesh 462016</div>
                    <div>India</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Monday - Friday</span>
                  <span className="text-sm font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Saturday</span>
                  <span className="text-sm font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Sunday</span>
                  <span className="text-sm font-medium">Closed</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass-effect border-border/50">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and our team will get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-md text-green-400 text-sm">
                    ✓ Thank you! Your message has been sent successfully. We'll contact you soon.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-md text-red-400 text-sm">
                    ✕ Error sending message. Please try again or contact us directly.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name *</label>
                      <Input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Organization</label>
                      <Input
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="Your organization name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone Number *</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-input rounded-md bg-background text-foreground"
                    >
                      <option value="">Select project type</option>
                      <option value="Traffic Signal Systems">Traffic Signal Systems</option>
                      <option value="Boom Barriers">Boom Barriers</option>
                      <option value="Commercial Displays">Commercial Displays</option>
                      <option value="Complete Traffic Management">Complete Traffic Management</option>
                      <option value="Maintenance & Support">Maintenance & Support</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your project requirements, timeline, and any specific questions you have..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="flex-1 gradient-primary text-primary-foreground hover:opacity-90"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                      onClick={() => {
                        window.open(
                          "https://wa.me/917554244139?text=Hi%20Sensecure%2C%20I%20would%20like%20a%20quote%20for%20your%20services",
                          "_blank",
                        )
                      }}
                    >
                      Request Quote via WhatsApp
                    </Button>
                  </div>

                  <div className="text-xs text-muted-foreground">
                    * Required fields. By submitting this form, you agree to our privacy policy.
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
