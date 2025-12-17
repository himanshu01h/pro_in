import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Clock, MessageSquare, Eye, TrendingUp } from "lucide-react";

const News = () => {
  const featuredNews = {
    title: "Season 5 Championship Finals: Everything You Need to Know",
    excerpt: "The biggest esports event of the year is here. Get ready for intense competition, massive prize pools, and unforgettable moments.",
    category: "Esports",
    date: "2 hours ago",
    views: "15.2K",
    comments: 234,
    image: "🏆",
  };

  const newsArticles = [
    {
      title: "New Battle Pass Revealed with Exclusive Skins",
      excerpt: "Check out all the new cosmetics coming in the next update.",
      category: "Updates",
      date: "4 hours ago",
      views: "8.5K",
      image: "🎮",
    },
    {
      title: "Pro Player Interview: Tips for Climbing Ranked",
      excerpt: "Learn from the best with these expert strategies.",
      category: "Guides",
      date: "6 hours ago",
      views: "12.3K",
      image: "📈",
    },
    {
      title: "Community Spotlight: Best User-Created Maps",
      excerpt: "Discover the most creative maps made by our community.",
      category: "Community",
      date: "8 hours ago",
      views: "5.7K",
      image: "🗺️",
    },
    {
      title: "Hardware Review: Best Gaming Monitors 2024",
      excerpt: "Find the perfect display for competitive gaming.",
      category: "Reviews",
      date: "12 hours ago",
      views: "9.1K",
      image: "🖥️",
    },
    {
      title: "Patch Notes 2.5: Balance Changes Explained",
      excerpt: "Breaking down all the meta shifts in the latest update.",
      category: "Updates",
      date: "1 day ago",
      views: "18.4K",
      image: "⚖️",
    },
    {
      title: "Upcoming Game Releases: December 2024",
      excerpt: "Mark your calendars for these highly anticipated titles.",
      category: "Releases",
      date: "1 day ago",
      views: "7.8K",
      image: "📅",
    },
  ];

  const categories = ["All", "Esports", "Updates", "Guides", "Reviews", "Community"];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="relative py-12 px-6 overflow-hidden">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-primary/20 blur-[200px]" />
          
          <div className="xl:max-w-7xl max-w-6xl mx-auto relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground font-display tracking-wider">
                GAMING <span className="text-primary text-glow-cyan">NEWS</span>
              </h1>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    i === 0
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Featured Article */}
            <div className="card-gaming p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-8xl text-center md:text-left">{featuredNews.image}</div>
                <div>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-bold rounded-full font-display mb-4 inline-block">
                    {featuredNews.category}
                  </span>
                  <h2 className="text-3xl font-bold text-foreground font-display mb-4 tracking-wide">
                    {featuredNews.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {featuredNews.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredNews.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      {featuredNews.views}
                    </span>
                    <span className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      {featuredNews.comments}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* News Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsArticles.map((article, i) => (
                <article
                  key={i}
                  className="card-gaming p-6 hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
                >
                  <div className="text-5xl mb-4">{article.image}</div>
                  <span className="px-2 py-0.5 bg-secondary/20 text-secondary text-xs font-bold rounded font-display mb-2 inline-block">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground font-display mb-2 tracking-wide">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {article.views}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="btn-ghost">
                Load More Articles
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default News;
