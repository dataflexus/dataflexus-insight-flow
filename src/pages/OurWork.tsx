import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BarChart3, Users, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OurWork = () => {
  const navigate = useNavigate();

  const dashboards = [
    {
      title: "User Acquisition Dashboard",
      description: "Comprehensive analytics and insights on user acquisition channels, conversion rates, and campaign performance metrics.",
      icon: Users,
      url: "https://lookerstudio.google.com/u/0/reporting/12d496b2-ad06-4fdf-9a98-af34470f4b6f/page/p_yg32sozftd",
      gradient: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-500"
    },
    {
      title: "Performance Analytics Dashboard",
      description: "Real-time performance metrics, data visualization, and key business indicators to track your success.",
      icon: BarChart3,
      url: "https://lookerstudio.google.com/u/0/reporting/4baf5b85-4073-4028-9551-1462cf6e0556/page/p_yg32sozftd",
      gradient: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Back button */}
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          className="mb-8 text-white hover:bg-white/10"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Home
        </Button>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
            Our Work
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our interactive dashboards showcasing real-time data insights and analytics
          </p>
        </div>

        {/* Dashboard cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {dashboards.map((dashboard, index) => {
            const Icon = dashboard.icon;
            return (
              <Card 
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${dashboard.gradient} flex items-center justify-center mb-4`}>
                    <Icon className={`w-8 h-8 ${dashboard.iconColor}`} />
                  </div>
                  <CardTitle className="text-2xl text-white mb-2">
                    {dashboard.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {dashboard.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={() => window.open(dashboard.url, "_blank")}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    View Dashboard
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-sm">
            These dashboards are powered by Google Looker Studio and update in real-time
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
