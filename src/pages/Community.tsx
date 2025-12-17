import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MessageSquare, Users, Trophy, Flame, Pin, Clock, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";

const Community = () => {
  const forumCategories = [
    { name: "General Discussion", threads: 1234, icon: MessageSquare, color: "primary" },
    { name: "Game Strategies", threads: 892, icon: Trophy, color: "secondary" },
    { name: "Looking for Group", threads: 567, icon: Users, color: "accent" },
    { name: "Off-Topic", threads: 445, icon: Flame, color: "neon-pink" },
  ];

  const hotThreads = [
    {
      title: "Best settings for competitive play? Share your configs!",
      author: "ProGamer_X",
      replies: 156,
      views: "4.2K",
      lastActivity: "5 min ago",
      pinned: true,
    },
    {
      title: "Season 5 Meta Discussion - What's working for you?",
      author: "MetaKnight",
      replies: 234,
      views: "8.7K",
      lastActivity: "12 min ago",
      pinned: true,
    },
    {
      title: "New player here! Any tips for getting started?",
      author: "NewbieGamer2024",
      replies: 89,
      views: "2.1K",
      lastActivity: "23 min ago",
      pinned: false,
    },
    {
      title: "Team recruitment for upcoming tournament [Diamond+]",
      author: "TeamCaptain",
      replies: 45,
      views: "1.5K",
      lastActivity: "1 hour ago",
      pinned: false,
    },
    {
      title: "Bug report: Audio issues after latest patch",
      author: "TechSupport_Fan",
      replies: 67,
      views: "3.3K",
      lastActivity: "2 hours ago",
      pinned: false,
    },
  ];

  const onlineUsers = [
    { name: "ShadowStrike", status: "In Game", avatar: "🎮" },
    { name: "CyberNinja", status: "Online", avatar: "🥷" },
    { name: "PixelQueen", status: "In Queue", avatar: "👑" },
    { name: "BlastMaster", status: "Online", avatar: "💥" },
    { name: "FrostByte", status: "Away", avatar: "❄️" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="relative py-12 px-6 overflow-hidden">
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-secondary/20 blur-[200px]" />
          
          <div className="xl:max-w-7xl max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground font-display mb-4 tracking-wider">
                COMMUNITY <span className="text-secondary text-glow-purple">HUB</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Connect with fellow gamers, share strategies, and build lasting friendships.
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-3 space-y-6">
                {/* Categories */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {forumCategories.map((cat, i) => (
                    <div
                      key={i}
                      className="card-gaming p-4 cursor-pointer hover:scale-105 transition-transform duration-300"
                    >
                      <div className={`w-10 h-10 rounded-lg bg-${cat.color}/20 flex items-center justify-center mb-3`}>
                        <cat.icon className={`w-5 h-5 text-${cat.color}`} />
                      </div>
                      <h3 className="font-semibold text-foreground font-display text-sm tracking-wide">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {cat.threads} threads
                      </p>
                    </div>
                  ))}
                </div>

                {/* Hot Threads */}
                <div className="card-gaming overflow-hidden">
                  <div className="p-4 border-b border-border flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Flame className="w-5 h-5 text-primary" />
                      <h2 className="text-xl font-bold text-foreground font-display tracking-wide">
                        HOT THREADS
                      </h2>
                    </div>
                    <Link to="/auth" className="btn-primary text-sm py-2">
                      New Thread
                    </Link>
                  </div>

                  <div className="divide-y divide-border">
                    {hotThreads.map((thread, i) => (
                      <div
                        key={i}
                        className="p-4 hover:bg-muted/30 transition-colors cursor-pointer"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              {thread.pinned && (
                                <Pin className="w-4 h-4 text-primary" />
                              )}
                              <h3 className="font-semibold text-foreground hover:text-primary transition-colors">
                                {thread.title}
                              </h3>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>by {thread.author}</span>
                              <span className="flex items-center gap-1">
                                <MessageSquare className="w-3 h-3" />
                                {thread.replies}
                              </span>
                              <span>{thread.views} views</span>
                            </div>
                          </div>
                          <div className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {thread.lastActivity}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Online Users */}
                <div className="card-gaming p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <h3 className="font-bold text-foreground font-display tracking-wide">
                      ONLINE NOW
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {onlineUsers.map((user, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-2xl">{user.avatar}</span>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground text-sm truncate">
                            {user.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {user.status}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    +2,847 more online
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="card-gaming p-4">
                  <h3 className="font-bold text-foreground font-display tracking-wide mb-4">
                    COMMUNITY STATS
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Members</span>
                      <span className="text-foreground font-medium">52,847</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Threads</span>
                      <span className="text-foreground font-medium">12,456</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Posts</span>
                      <span className="text-foreground font-medium">189,234</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Online Now</span>
                      <span className="text-primary font-medium">2,852</span>
                    </div>
                  </div>
                </div>

                {/* Join CTA */}
                <div className="card-gaming p-4 text-center">
                  <ThumbsUp className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground font-display mb-2">
                    JOIN THE CONVERSATION
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Sign up to post, react, and connect with gamers!
                  </p>
                  <Link to="/auth" className="btn-secondary w-full text-sm">
                    Sign Up Free
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Community;
