import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { Loader2, CheckCircle, Phone, Mail, User, Instagram } from "lucide-react";

export const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    instagram: "",
    dreamApplication: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Check if user came from Dream App section with pre-filled data
  useEffect(() => {
    // Check localStorage for dream application
    const storedDreamApp = localStorage.getItem('dreamApplication');
    if (storedDreamApp) {
      setFormData(prev => ({
        ...prev,
        dreamApplication: storedDreamApp
      }));
      // Clear from localStorage after using
      localStorage.removeItem('dreamApplication');
    }

    // Listen for custom event from Dream App section
    const handleDreamAppSelected = (event: CustomEvent) => {
      setFormData(prev => ({
        ...prev,
        dreamApplication: event.detail.dreamApp
      }));
    };

    window.addEventListener('dreamAppSelected', handleDreamAppSelected as EventListener);
    
    return () => {
      window.removeEventListener('dreamAppSelected', handleDreamAppSelected as EventListener);
    };
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.whatsapp.trim()) {
      setError("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://recursive-tech.app.n8n.cloud/webhook/11ea5a6a-ddd6-40d9-b017-fcb5338d05e2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          whatsapp: formData.whatsapp,
          instagram: formData.instagram || null,
          dreamApplication: formData.dreamApplication || null,
          timestamp: new Date().toISOString(),
          source: "website_contact_form"
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", whatsapp: "", instagram: "", dreamApplication: "" });
      } else {
        setError("Sorry, there was an error sending your message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Sorry, there was an error sending your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setError("");
    setFormData({ name: "", email: "", whatsapp: "", instagram: "", dreamApplication: "" });
  };

  return (
    <section id="contact">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Ready to Start Your{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Project?
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Get in touch with our expert team and let's bring your vision to life.
        </p>

        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto" />
                  <h4 className="text-xl font-semibold text-green-800 dark:text-green-200">
                    Thank You for Contacting Us!
                  </h4>
                  <p className="text-green-700 dark:text-green-300">
                    We've received your information and our team will get back to you within 24 hours.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={resetForm}
                    className="border-green-300 text-green-700 hover:bg-green-100 dark:border-green-700 dark:text-green-300 dark:hover:bg-green-900/30"
                  >
                    Send Another Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-4">
                  <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Full Name *
                  </label>
                  <Input
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-muted/50 dark:bg-muted/80"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@company.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-muted/50 dark:bg-muted/80"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    WhatsApp Number *
                  </label>
                  <Input
                    placeholder="+62 812 3456 7890"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                    className="bg-muted/50 dark:bg-muted/80"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Instagram className="w-4 h-4" />
                    Instagram (Optional)
                  </label>
                  <Input
                    placeholder="@your_instagram"
                    value={formData.instagram}
                    onChange={(e) => handleInputChange("instagram", e.target.value)}
                    className="bg-muted/50 dark:bg-muted/80"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L13.09 8.26L18 9L13.09 9.74L12 15L10.91 9.74L6 9L10.91 8.26L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 12L20.09 17.26L25 18L20.09 18.74L19 24L17.91 18.74L13 18L17.91 17.26L19 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 12L6.09 17.26L11 18L6.09 18.74L5 24L3.91 18.74L-1 18L3.91 17.26L5 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Dream Application (Optional)
                </label>
                <textarea
                  placeholder="Describe your dream application idea... (This field can be auto-filled from the Dream App section above)"
                  value={formData.dreamApplication}
                  onChange={(e) => handleInputChange("dreamApplication", e.target.value)}
                  className="min-h-[100px] w-full px-3 py-2 bg-muted/50 dark:bg-muted/80 border border-input rounded-md text-sm resize-vertical focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                  rows={4}
                />
                {formData.dreamApplication && (
                  <p className="text-xs text-muted-foreground">
                    💡 Great! We'll include this in our discussion when we contact you.
                  </p>
                )}
              </div>

              <div className="text-center pt-4">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="px-12 py-3"
                  disabled={loading || !formData.name.trim() || !formData.email.trim() || !formData.whatsapp.trim()}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground text-center">
                * Required fields. We'll contact you within 24 hours.
              </p>
            </form>
          )}
        </div>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
