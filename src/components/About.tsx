
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Zap, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We grow with our clients in every data-related aspect, not just as a tool provider."
    },
    {
      icon: Zap,
      title: "Flexibility First",
      description: "We adapt to your goals, tech stack, and workflows while maintaining competitive costs."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "No two clients are the same, and our solutions are built with that in mind."
    },
    {
      icon: TrendingUp,
      title: "Results Focused",
      description: "We help you uncover deeper insights and build trust in automation."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Why Choose Dataflexus?
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            In today's marketing landscape, having real-time data is critical to acting fast and maximizing campaign performance. 
            Being able to identify issues, optimize budgets, and detect winning strategies on time is what makes a data-driven 
            marketing plan successful.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 text-left">
            <p className="text-lg text-slate-700">
              <strong className="text-blue-600">Our Core Advantage:</strong> Flexibility. We adapt to your goals, tech stack, 
              and workflows — all while maintaining highly competitive costs. We understand that no two clients are the same, 
              and our solutions are built with that in mind.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-slate-50">
              <CardContent className="p-6">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Successful Clients
          </h3>
          <p className="text-xl text-blue-100 mb-6">
            Join the growing number of businesses that trust Dataflexus with their data solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-blue-100">Successful Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Reliability</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-blue-100">Data Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
