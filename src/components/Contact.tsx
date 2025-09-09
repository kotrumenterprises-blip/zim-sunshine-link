import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EnvelopeIcon, MapPinIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

const Contact = () => {
  return (
    <section id="contact" className="py-20 scroll-mt-24 glass-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your ICT infrastructure? Let's discuss how we can help your organization succeed.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Contact Abercroft</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                    <EnvelopeIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Email Us</h3>
                  <p className="text-muted-foreground">contact@abercroft.co.zw</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                    <MapPinIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Location</h3>
                  <p className="text-muted-foreground">Zimbabwe</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                    <CheckBadgeIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Support</h3>
                  <p className="text-muted-foreground">24/7 Technical Support</p>
                </div>
              </div>

              <div className="text-center pt-8 border-t border-border">
                <Button variant="hero" size="lg" className="text-lg px-12 py-6">
                  Start Your Project Today
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Get in touch with our team to discuss your ICT requirements and receive a personalized consultation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;