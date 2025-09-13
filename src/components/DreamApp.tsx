import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Loader2, Sparkles, MessageSquare } from "lucide-react";

export const DreamApp = () => {
  const [dreamApp, setDreamApp] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!dreamApp.trim()) return;

    setLoading(true);
    setSubmitted(true);

    try {
      const response = await fetch("https://recursive-tech.app.n8n.cloud/webhook/create-ecommerce", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dream_application: dreamApp,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        
        // Parse the Gemini API response structure
        let analysisText = "";
        
        if (Array.isArray(data) && data.length > 0) {
          // Handle the array structure from Gemini API
          const geminiResponse = data[0];
          if (geminiResponse.content && geminiResponse.content.parts && geminiResponse.content.parts.length > 0) {
            analysisText = geminiResponse.content.parts[0].text;
          }
        } else if (typeof data === 'string') {
          // Handle plain text response
          analysisText = data;
        } else if (data.analysis || data.text || data.response) {
          // Handle other possible response formats
          analysisText = data.analysis || data.text || data.response;
        }
        
        if (analysisText) {
          setResponse(analysisText);
        } else {
          setResponse("Sorry, we couldn't process the analysis. Please try again later.");
        }
      } else {
        setResponse("Sorry, there was an error processing your request. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponse("Sorry, there was an error processing your request. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setDreamApp("");
    setResponse("");
    setSubmitted(false);
    setLoading(false);
  };

  return (
    <section id="dream-app" className="container py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Describe Your{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Dream Application
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Tell us about your app idea and let our AI analyze the requirements, features, and technical approach needed to bring your vision to life.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Input
                placeholder="e.g., A mobile app for food delivery with real-time tracking, payment integration, and restaurant management..."
                value={dreamApp}
                onChange={(e) => setDreamApp(e.target.value)}
                className="min-h-[120px] text-base p-4 resize-none"
                style={{ height: "120px" }}
                required
              />
              <div className="text-sm text-muted-foreground text-center">
                Be as detailed as possible - include features, target users, and any specific requirements
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                type="submit" 
                size="lg" 
                className="px-8 py-3"
                disabled={!dreamApp.trim()}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Analyze My Dream App
              </Button>
            </div>
          </form>
        ) : (
          <div className="space-y-6">
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Your Dream Application
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">"{dreamApp}"</p>
              </CardContent>
            </Card>

            {loading ? (
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center space-x-3">
                    <Loader2 className="w-6 h-6 animate-spin" />
                    <span>Our AI is analyzing your dream application...</span>
                  </div>
                </CardContent>
              </Card>
            ) : response ? (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      AI Analysis & Recommendations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none dark:prose-invert">
                      <div 
                        className="whitespace-pre-wrap font-sans text-sm leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: response
                            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                            .replace(/\*(.*?)\*/g, '<em>$1</em>')
                            .replace(/^## (.*$)/gim, '<h2 class="text-xl font-semibold mt-6 mb-3 text-primary">$1</h2>')
                            .replace(/^### (.*$)/gim, '<h3 class="text-lg font-medium mt-4 mb-2">$1</h3>')
                            .replace(/^\* (.*$)/gim, '<li class="ml-4 mb-1">• $1</li>')
                            .replace(/\n\n/g, '</p><p class="mb-4">')
                            .replace(/^(.)/gim, '<p class="mb-4">$1')
                            .replace(/(.*)$/gim, '$1</p>')
                        }}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
                  <CardContent className="pt-6">
                    <div className="text-center space-y-4">
                      <h3 className="text-xl font-semibold">Ready to Make Your Dream App a Reality?</h3>
                      <p className="text-muted-foreground">
                        Our expert team at Recursive Tech can transform this analysis into a fully functional application. 
                        Let's discuss your project and provide a detailed quote.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button 
                          size="lg" 
                          className="px-8"
                          onClick={() => {
                            // Store dream application in localStorage
                            localStorage.setItem('dreamApplication', dreamApp);
                            
                            // Scroll to contact section
                            const contactSection = document.getElementById('contact');
                            if (contactSection) {
                              contactSection.scrollIntoView({ behavior: 'smooth' });
                              
                              // Trigger a custom event to notify the contact form
                              setTimeout(() => {
                                window.dispatchEvent(new CustomEvent('dreamAppSelected', { 
                                  detail: { dreamApp } 
                                }));
                              }, 500);
                            }
                          }}
                        >
                          Contact Us Now
                        </Button>
                        <Button variant="outline" size="lg" onClick={resetForm}>
                          Analyze Another Idea
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
};