import Sidebar from "@/components/Sidebar";
import PlaybackBar from "@/components/PlaybackBar";
import PlaylistCard from "@/components/PlaylistCard";
import album1 from "@/assets/album-1.jpg";
import album2 from "@/assets/album-2.jpg";
import album3 from "@/assets/album-3.jpg";
import album4 from "@/assets/album-4.jpg";
import album5 from "@/assets/album-5.jpg";
import album6 from "@/assets/album-6.jpg";

const Index = () => {
  const playlists = [
    {
      title: "Cosmic Dreams",
      description: "Float through space with ethereal soundscapes",
      image: album1,
    },
    {
      title: "Neon Nights",
      description: "Future beats and electric energy",
      image: album2,
    },
    {
      title: "Beach Sunset",
      description: "Chill tropical vibes for your soul",
      image: album3,
    },
    {
      title: "Urban Tales",
      description: "City sounds and midnight stories",
      image: album4,
    },
    {
      title: "Liquid Flow",
      description: "Smooth transitions and mellow grooves",
      image: album5,
    },
    {
      title: "Retro Wave",
      description: "80s nostalgia meets modern production",
      image: album6,
    },
  ];

  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-24">
        <div className="px-8 py-6">
          {/* Header */}
          <h1 className="text-4xl font-bold mb-8">{greeting()}</h1>

          {/* Featured Playlists Grid */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Playlists</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {playlists.map((playlist) => (
                <PlaylistCard key={playlist.title} {...playlist} />
              ))}
            </div>
          </section>

          {/* Recently Played */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Recently Played</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {playlists.slice(0, 5).map((playlist) => (
                <PlaylistCard key={`recent-${playlist.title}`} {...playlist} />
              ))}
            </div>
          </section>

          {/* Made For You */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Made For You</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {playlists.slice(2).map((playlist) => (
                <PlaylistCard key={`made-${playlist.title}`} {...playlist} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <PlaybackBar />
    </div>
  );
};

export default Index;
