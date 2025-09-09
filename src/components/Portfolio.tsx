import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 scroll-mt-24 glass-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by government entities, NGOs, educational institutions, and the general public
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm">
            <CardHeader>
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                <StarIcon className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold">Government Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                We have successfully partnered with government entities to deliver comprehensive ICT solutions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Computing Solutions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Imaging and Printing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Network Infrastructure</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Display and Presentation Hardware</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Surveillance & Security</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-secondary/10 to-primary/10 backdrop-blur-sm">
            <CardHeader>
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-secondary to-primary flex items-center justify-center mb-4">
                <MagnifyingGlassIcon className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold">Other Entities</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Our diverse client base includes various organizations across different sectors.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span>NGOs & Non-Profit Organizations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span>Educational Institutions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span>The General Public</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span>Private Corporations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span>Small & Medium Enterprises</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Business Solutions</h3>
            <p className="text-lg text-muted-foreground max-w-4xl">
              We are an advantage to modern society because we lead with cutting-edge technologies, 
              providing the best customer service and quality products with a rich network of strategic 
              relationships. Customers also benefit from reliable local technical support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;