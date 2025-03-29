import { useState } from "react";
import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  CheckCircle,
  Facebook,
  Instagram,
  Twitter,
  Linkedin
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
import BackButton from "@/components/back-button";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters."
  }),
  email: z.string().email({
    message: "Please enter a valid email address."
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number."
  }),
  subject: z.string({
    required_error: "Please select a subject."
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters."
  }),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  }

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <BackButton />
      <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary/30 text-secondary-foreground mb-3">
            Get in Touch
          </span>
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-muted-foreground">
            We'd love to hear from you. Let us know how we can help with your travel plans.
          </p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
        <div className="bg-card rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 rounded-md border border-input bg-background"
                      />
                    </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-2 rounded-md border border-input bg-background"
                      />
                    </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="w-full px-4 py-2 rounded-md border border-input bg-background"
              />
          </div>
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <select className="w-full px-4 py-2 rounded-md border border-input bg-background">
                <option value="">Select a subject</option>
                <option value="booking">Tour Booking</option>
                <option value="inquiry">General Inquiry</option>
                <option value="support">Support</option>
              </select>
                  </div>
                  <div>
              <label className="block text-sm font-medium mb-2">Your Message</label>
              <textarea
                rows={4}
                placeholder="How can we help you?"
                className="w-full px-4 py-2 rounded-md border border-input bg-background"
              />
                  </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90"
            >
              Send Message
            </button>
          </form>
                </div>
                
        {/* Contact Information */}
        <div className="space-y-8">
                  <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            {/* Mumbai Office */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Mumbai Office:</h3>
              <p className="text-muted-foreground mb-2">
                My Nomadsafari Holidays<br />
                102 T.V Tower<br />
                Badlapur East, Thane<br />
                Mumbai - 421503
              </p>
              <p className="text-muted-foreground">
                Phone: <a href="tel:+919968682200" className="hover:text-primary">+91 9968682200</a>
              </p>
                </div>
                
            {/* Delhi Office */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Delhi Office:</h3>
              <p className="text-muted-foreground mb-2">
                My Nomadsafari Holidays<br />
                Dwarka Sec 3<br />
                New Delhi - 110078
              </p>
              <p className="text-muted-foreground">
                Phone: <a href="tel:+917042910449" className="hover:text-primary">+91 7042910449</a>
              </p>
                </div>
                
            {/* Contact Person */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Contact Person:</h3>
              <p className="text-muted-foreground">Deven Deshpande</p>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Email:</h3>
              <p className="text-muted-foreground">
                <a href="mailto:info@mynomadsafariholidays.in" className="hover:text-primary">
                  info@mynomadsafariholidays.in
                </a>
              </p>
            </div>
            </div>

          {/* Office Hours */}
            <div>
            <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
          </div>
        </div>
  );
};

export default Contact;
