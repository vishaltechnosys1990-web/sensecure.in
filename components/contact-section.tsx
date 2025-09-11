import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactSection() {
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
                <div className="font-medium">07554244139</div>
                <div className="text-sm text-muted-foreground">Sales & Inquiries</div>
                <div className="font-medium">+91 81781 19860</div>
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
                <div className="font-medium">info@sensecure.in</div>
                <div className="text-sm text-muted-foreground">General Inquiries</div>
                <div className="font-medium">sales@sensecure.in</div>
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
                  <div className="text-sm text-muted-foreground">
                    C/O NCHSE, Second Floor
                    <br />
                    Above SBI Sahapura Branch
                    <br />
                    Arera Colony, Madhya Pradesh 462016
                    <br />
                    India
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
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name *</label>
                    <Input placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Organization</label>
                    <Input placeholder="Your organization name" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address *</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number *</label>
                    <Input placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Project Type</label>
                  <select className="w-full p-3 border border-input rounded-md bg-background">
                    <option>Select project type</option>
                    <option>Traffic Signal Systems</option>
                    <option>Boom Barriers</option>
                    <option>Commercial Displays</option>
                    <option>Complete Traffic Management</option>
                    <option>Maintenance & Support</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message *</label>
                  <Textarea
                    placeholder="Please describe your project requirements, timeline, and any specific questions you have..."
                    className="min-h-[120px]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="flex-1 gradient-primary text-primary-foreground hover:opacity-90">
                    Send Message
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  >
                    Request Quote
                  </Button>
                </div>

                <div className="text-xs text-muted-foreground">
                  * Required fields. By submitting this form, you agree to our privacy policy.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
