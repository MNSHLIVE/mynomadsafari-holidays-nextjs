import React from 'react';
import ContactForm from '@/components/contact-form';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Our Offices</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Mumbai Office</h3>
                    <div className="flex items-start space-x-2 text-muted-foreground">
                      <MapPin className="h-5 w-5 mt-1" />
                      <p>My Nomadsafari Holidays, 102 T.V Tower Badlapur East, Thane, Mumbai - 421503</p>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground mt-2">
                      <Phone className="h-5 w-5" />
                      <p>+91 9968682200</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Delhi Office</h3>
                    <div className="flex items-start space-x-2 text-muted-foreground">
                      <MapPin className="h-5 w-5 mt-1" />
                      <p>My Nomadsafari Holidays, Dwarka Sec 3, New Delhi - 110078</p>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground mt-2">
                      <Phone className="h-5 w-5" />
                      <p>+91 7042910449</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Mail className="h-5 w-5" />
                    <p>info@mynomadsafariholidays.in</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs; 