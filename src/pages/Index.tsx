import GamingHero from "@/components/ui/laser-focus-crypto-hero-section";
import { Footer } from "@/components/Footer";
import { Newspaper, MessageSquare, Trophy, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Newspaper,
      title: "Gaming News",
      description: "Stay updated with the latest gaming news, reviews, and industry updates.",
      link: "/news",
    },
    {
      icon: MessageSquare,
      title: "Community Forums",
      description: "Connect with fellow gamers, share strategies, and make new friends.",
      link: "/community",
    },
    {
      icon: Trophy,
      title: "Tournaments",
      description: "Compete in exciting tournaments and prove your skills to the world.",
      link: "/community",
    },
    {
      icon: Gamepad2,
      title: "AI Gaming Bot",
      description: "Meet Whobee, our interactive 3D AI companion for gamers.",
      link: "/robot",
    },
  ];

  const games = [
    { name: "Valorant", players: "12.5K", image: "🎯" },
    { name: "Fortnite", players: "8.2K", image: "🏝️" },
    { name: "CS2", players: "15.1K", image: "💣" },
    { name: "League of Legends", players: "20.3K", image: "⚔️" },
    { name: "Apex Legends", players: "6.8K", image: "🔥" },
    { name: "Minecraft", players: "9.4K", image: "⛏️" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <GamingHero />

      {/* Features Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute top-0 left-1/4 h-80 w-80 rounded-full bg-secondary/20 blur-[200px]" />
        
        <div className="xl:max-w-7xl max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-display mb-4 tracking-wider">
              LEVEL UP YOUR <span className="text-primary text-glow-cyan">EXPERIENCE</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for the ultimate gaming journey, all in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <Link
                key={i}
                to={feature.link}
                className="card-gaming p-6 group"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors border border-primary/20">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground font-display mb-2 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Games Section */}
      <section className="py-20 px-6 bg-card/50">
        <div className="xl:max-w-7xl max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-display mb-4 tracking-wider">
              TRENDING <span className="text-secondary text-glow-purple">GAMES</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              See what the community is playing right now
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {games.map((game, i) => (
              <div
                key={i}
                className="card-gaming p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-5xl mb-4">{game.image}</div>
                <h3 className="font-semibold text-foreground font-display tracking-wide mb-1">
                  {game.name}
                </h3>
                <p className="text-sm text-primary">
                  {game.players} online
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/20 blur-[200px]" />
        
        <div className="xl:max-w-7xl max-w-6xl mx-auto relative z-10">
          <div className="glass-card p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-display mb-6 tracking-wider">
              READY TO <span className="gradient-text">DOMINATE</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of gamers and start your journey today. Sign up with Discord or Google in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth" className="btn-discord flex items-center justify-center gap-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Continue with Discord
              </Link>
              <Link to="/auth" className="btn-google flex items-center justify-center gap-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
