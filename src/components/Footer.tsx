import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="xl:max-w-7xl max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-foreground font-display">
              CryptoFlow
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              The future of crypto trading. Track, manage, and trade with confidence on a platform built for you.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 font-display">Navigation</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <Link to="/robot" className="text-muted-foreground hover:text-foreground transition-colors">Robot</Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
              <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">Services</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 font-display">Connect</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Discord</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Telegram</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 CryptoFlow. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
