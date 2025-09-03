import ContactForm from "@/components/forms/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about our products or need assistance with your
              order? We're here to help and would love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="rounded-2xl shadow-lg border-0">
                <CardContent className="p-8">
                  <h3 className="font-bold text-xl mb-6 text-black">
                    Get in Touch
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <p className="font-semibold text-black">Email</p>
                        <p className="text-gray-600">contact@duria.com.my</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <p className="font-semibold text-black">Phone</p>
                        <p className="text-gray-600">+6011-1091 4393</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <p className="font-semibold text-black">Address</p>
                        <p className="text-gray-600">
                          Lot 5933A, Jalan Perusahaan 1,
                          <br />
                          Kamunting Industrial Area,
                          <br />
                          34600 Kamuting Perak.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <p className="font-semibold text-black">
                          Business Hours
                        </p>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM
                          <br />
                          Saturday: 9:00 AM - 2:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-lg border-0">
                <CardContent className="p-8">
                  <h3 className="font-bold text-xl mb-6 text-black">
                    Quick Responses
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">
                        General Inquiries
                      </span>
                      <span className="font-semibold text-green-600">
                        Within 24 hours
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">
                        Order Support
                      </span>
                      <span className="font-semibold text-green-600">
                        Within 4 hours
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">
                        Urgent Matters
                      </span>
                      <span className="font-semibold text-green-600">
                        Within 1 hour
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* REMOVAL BASED ON SITEMAP REQUIREMENTS ----------------------------------------------- */}
              {/* <Card className="rounded-2xl shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="font-bold text-xl mb-6 text-black">For Businesses</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Interested in becoming a retail partner or bulk purchasing? 
                  Contact our business development team:
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-black" />
                    </div>
                    <span className="text-gray-700 font-medium">business@durianexport.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-black" />
                    </div>
                    <span className="text-gray-700 font-medium">+65 9123 4568</span>
                  </div>
                </div>
              </CardContent>
            </Card> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
