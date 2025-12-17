import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TrendingUp, Wallet, Bot, BarChart3, Lock, Repeat } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Spot Trading",
      description: "Trade 100+ cryptocurrency pairs with tight spreads and instant execution.",
      features: ["Zero trading fees", "Advanced order types", "Real-time market data"],
    },
    {
      icon: Wallet,
      title: "Secure Wallet",
      description: "Store your assets safely with our multi-signature cold storage solution.",
      features: ["Multi-sig security", "Insurance coverage", "Instant transfers"],
    },
    {
      icon: Bot,
      title: "AI Trading Bot",
      description: "Automate your trading strategy with our intelligent AI-powered bots.",
      features: ["24/7 automation", "Custom strategies", "Risk management"],
    },
    {
      icon: BarChart3,
      title: "Portfolio Analytics",
      description: "Get deep insights into your portfolio performance with advanced analytics.",
      features: ["Performance tracking", "Risk analysis", "Tax reports"],
    },
    {
      icon: Lock,
      title: "Staking",
      description: "Earn passive income by staking your crypto assets with competitive APY.",
      features: ["Up to 12% APY", "Flexible terms", "Auto-compound"],
    },
    {
      icon: Repeat,
      title: "DeFi Integration",
      description: "Access the best DeFi protocols directly from your CryptoFlow account.",
      features: ["Yield farming", "Liquidity pools", "Cross-chain swaps"],
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-primary/20 blur-[200px]" />
          
          <div className="xl:max-w-7xl max-w-6xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground font-display mb-6 animate-fade-in">
                Our <span className="gradient-text-accent">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Everything you need to succeed in the crypto market, all in one platform.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-6">
          <div className="xl:max-w-7xl max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="glass-card p-8 hover:border-primary/50 transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground font-display mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-card/50">
          <div className="xl:max-w-7xl max-w-6xl mx-auto">
            <div className="glass-card p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-primary/30 blur-[100px]" />
              <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-primary/20 blur-[100px]" />
              
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-foreground font-display mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Join thousands of traders who trust CryptoFlow for their cryptocurrency trading needs.
                </p>
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  Start Trading Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
