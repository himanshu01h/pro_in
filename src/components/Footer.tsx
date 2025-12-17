import { Link } from "react-router-dom";
import { Gamepad2, Twitter, MessageCircle, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="xl:max-w-7xl max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                <Gamepad2 className="w-6 h-6 text-primary" />
              </div>
              <span className="text-2xl font-bold text-foreground font-display tracking-wider">
                HACK<span className="text-primary">GAMERS</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md text-lg">
              Your ultimate gaming hub. Connect with gamers, discover the latest news, and level up your gaming experience.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 border border-transparent transition-all duration-300">
                <Twitter className="w-5 h-5 text-muted-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 border border-transparent transition-all duration-300">
                <MessageCircle className="w-5 h-5 text-muted-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 border border-transparent transition-all duration-300">
                <Youtube className="w-5 h-5 text-muted-foreground" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 font-display text-lg">Navigation</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/robot" className="text-muted-foreground hover:text-primary transition-colors">AI Bot</Link>
              <Link to="/news" className="text-muted-foreground hover:text-primary transition-colors">News</Link>
              <Link to="/community" className="text-muted-foreground hover:text-primary transition-colors">Community</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 font-display text-lg">Support</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground">
            © 2024 HackGamers. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Made with 💜 for gamers worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
