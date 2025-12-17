import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Zap, Globe, Users } from "lucide-react";

const About = () => {
  const stats = [
    { value: "$2B+", label: "Trading Volume" },
    { value: "150K+", label: "Active Users" },
    { value: "99.9%", label: "Uptime" },
    { value: "50+", label: "Countries" },
  ];

  const features = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Multi-layer encryption and cold storage to keep your assets safe 24/7.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Execute trades in milliseconds with our high-performance matching engine.",
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Trade from anywhere in the world with support for 100+ cryptocurrencies.",
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Our dedicated team is always ready to help you succeed.",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-primary/20 blur-[200px]" />
          
          <div className="xl:max-w-7xl max-w-6xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground font-display mb-6 animate-fade-in">
                About <span className="gradient-text-accent">CryptoFlow</span>
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
                We're building the future of decentralized finance, making crypto trading accessible, secure, and seamless for everyone.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card p-6 text-center animate-fade-in"
                  style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                >
                  <div className="text-4xl font-bold text-foreground font-display mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-6 bg-card/50">
          <div className="xl:max-w-7xl max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground font-display mb-6">
                  Our Mission
                </h2>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  At CryptoFlow, we believe that financial freedom should be accessible to everyone. Our mission is to democratize cryptocurrency trading by providing a platform that's powerful enough for professionals yet simple enough for beginners.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Founded in 2021, we've grown from a small team of crypto enthusiasts to a global platform serving traders in over 50 countries. We're committed to transparency, security, and innovation.
                </p>
              </div>
              <div className="glass-card p-8 animate-pulse-glow">
                <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-6xl">🚀</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-6">
          <div className="xl:max-w-7xl max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground font-display text-center mb-12">
              Why Choose Us
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground font-display mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
