import { InteractiveRobotSpline } from "@/components/ui/interactive-3d-robot";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

const Robot = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 relative">
        <div className="relative w-full h-screen overflow-hidden">
          <InteractiveRobotSpline
            scene={ROBOT_SCENE_URL}
            className="absolute inset-0 z-0"
          />

          <div className="absolute inset-0 z-10 pt-32 px-6 pointer-events-none">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 backdrop-blur-sm border border-border/30 mb-6">
                <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs font-bold rounded-full font-display">INTERACTIVE</span>
                <span className="text-sm text-muted-foreground">Drag to interact with Whobee</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground font-display mb-4 text-glow-cyan animate-fade-in tracking-wider">
                MEET WHOBEE
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Your AI gaming companion. Click and drag to explore the future of gaming assistance.
              </p>
            </div>
          </div>

          {/* Gradient overlays */}
          <div className="absolute inset-0 z-[1] bg-gradient-to-t from-background via-transparent to-background/50 pointer-events-none" />
          <div className="absolute top-20 right-20 h-60 w-60 rounded-full bg-primary/30 blur-[150px] pointer-events-none" />
          <div className="absolute bottom-20 left-20 h-40 w-40 rounded-full bg-secondary/30 blur-[100px] pointer-events-none" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Robot;
