"use client";
import Footer from "@/app/components/Footer";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import InvestmentForm from "@/app/components/Form";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <div className="bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* <div className="text-center mb-12">
          <h2 className="text-4xl pt-20 font-bold text-gray-900">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We'd love to hear from you. Drop us a message!
          </p>
        </div> */}

        <div className=" gap-8">
          {/* Contact Info Section */}
          <div className="space-y-6 mt-20">
            {/* Featured Image */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  Reach Out To Us
                </h3>
                <p className="text-gray-600 mt-2">
                  We're here to help with all your investment queries.
                </p>
              </div>
            </div>

            {/* Head Office Address with Map */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Head Office
                </h3>
                <div className="flex items-start mb-4">
                  <MapPin className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-600">
                      12B, Tower 14
                      <br />
                      Central Park Resorts
                      <br />
                      Sohna Road, Sector 48
                      <br />
                      Gurugram, Haryana
                    </p>
                  </div>
                </div>

                {/* Google Map Embed */}
                <div className="relative w-full h-64 mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.8119574156267!2d77.0306720751219!3d28.424930375778764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18752b77e611%3A0x407b0468964a3ae9!2s12B%2C%20Tower%2C%20Central%20Park%20Resorts%2C%20CENTRAL%20PARK%20IN%2C%208A%2C%20Badshahpur%20Sohna%20Rd%20Hwy%2C%20Central%20Park%20II%2C%20Sector%2048%2C%20Gurugram%2C%20Haryana%20122018!5e0!3m2!1sen!2sin!4v1741600766221!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Contact Details */}
           

            {/* Flex Layout for Contact Info and Investment Form */}
            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
              {/* Contact Information Section */}
              <div className="flex-1">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Contact Information
                  </h3>

                  <div className="space-y-4">
                    {/* Phone Section */}
                    <div className="flex items-start">
                      <Phone className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900">Phone</h4>
                        <p className="text-gray-600 mt-1">+91 123 456 7890</p>
                      </div>
                    </div>

                    {/* Email Section */}
                    

                    {/* Business Hours Section */}
                    <div className="flex items-start">
                      <MessageSquare className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Business Hours
                        </h4>
                        <p className="text-gray-600 mt-1">
                          Monday - Friday: 9:00 AM - 6:00 PM
                          <br />
                          Saturday: 10:00 AM - 2:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Media Links Section */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-4">
                      Connect With Us
                    </h4>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="https://www.facebook.com/share/19vZkM9o4e/?mibextid=qi2Omg"
                        className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
                      >
                        <Facebook size={20} />
                      </a>
                      <a
                        href="https://x.com/hellodholera?t=3K5ekZmg0CGcz_zDUOtDPA&s=09"
                        className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
                      >
                        <Twitter size={20} />
                      </a>
                      <a
                        href="https://www.instagram.com/hello.dholera?igsh=bmw5YmRpdTRvNnpp"
                        className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
                      >
                        <Instagram size={20} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/hello-dholera-78a84b351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
                      >
                        <Linkedin size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Investment Form Section */}
              <div className="flex-1">
                <InvestmentForm />
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
