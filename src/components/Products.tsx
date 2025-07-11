
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, GitMerge, BarChart3, Zap } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: 1,
      icon: Database,
      title: "Data Import",
      description: "Connect all your platforms in real-time",
      details: [
        "Meta Ads, Google Ads, TikTok Ads integration",
        "Mobile Measurement Partners (MMPs)",
        "Web analytics tools connection",
        "API refreshes multiple times daily",
        "Custom metrics and dimensions",
        "Flexible refresh frequency"
      ],
      color: "bg-blue-500"
    },
    {
      id: 2,
      icon: GitMerge,
      title: "Data Integration & Transformation",
      description: "Unify and normalize all your data sources",
      details: [
        "Cross-platform data normalization",
        "Unified database architecture",
        "Custom business logic implementation",
        "UTM parameter extraction",
        "Projection formulas",
        "Noise reduction and cleaning"
      ],
      color: "bg-green-500"
    },
    {
      id: 3,
      icon: BarChart3,
      title: "Visualization",
      description: "Custom Looker Studio dashboards",
      details: [
        "Fully customized dashboard design",
        "Actionable insights surfacing",
        "Team-specific visualizations",
        "Intuitive data exploration",
        "No cookie-cutter templates",
        "Powerful analysis interface"
      ],
      color: "bg-purple-500"
    },
    {
      id: 4,
      icon: Zap,
      title: "Special Projects",
      description: "Custom solutions for unique business needs",
      details: [
        "Auto-filled Google Sheets",
        "Automated performance decks",
        "Custom alert systems",
        "Campaign monitoring",
        "Performance notifications",
        "Workflow integration"
      ],
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our 4 Core Products
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive data solutions designed to grow with your business, 
            from real-time imports to custom insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${product.color}`}>
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-slate-900 group-hover:text-blue-600 transition-colors">
                      {product.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 text-lg">
                      {product.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {product.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      <span className="text-slate-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
