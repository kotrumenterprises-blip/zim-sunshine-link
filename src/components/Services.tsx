import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ComputerDesktopIcon,
  GlobeAltIcon, 
  PrinterIcon,
  PresentationChartBarIcon,
  LockClosedIcon,
  WrenchScrewdriverIcon
} from "@heroicons/react/24/outline";

const Services = () => {
  const services = [
    {
      title: "Computing Solutions",
      description: "Comprehensive range of computing hardware and software solutions for businesses and organizations.",
      icon: ComputerDesktopIcon,
    },
    {
      title: "Network Infrastructure", 
      description: "Design, implementation, and maintenance of robust network systems for optimal connectivity.",
      icon: GlobeAltIcon,
    },
    {
      title: "Imaging & Printing",
      description: "Professional printing solutions and imaging equipment for all your documentation needs.",
      icon: PrinterIcon,
    },
    {
      title: "Display & Presentation",
      description: "High-quality display systems and presentation hardware for meetings and conferences.", 
      icon: PresentationChartBarIcon,
    },
    {
      title: "Surveillance & Security",
      description: "Advanced security systems and surveillance equipment to protect your assets.",
      icon: LockClosedIcon,
    },
    {
      title: "Technical Support",
      description: "24/7 reliable technical support with local expertise and rapid response times.",
      icon: WrenchScrewdriverIcon,
    },
  ];

  return (
    <section id="services" className="py-20 scroll-mt-24 glass-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide cutting-edge ICT solutions backed by strategic partnerships and local technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;