import { Home, Search, Library, Heart, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-black flex flex-col h-screen">
      {/* Logo */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary">Spotify</h1>
      </div>

      {/* Main Navigation */}
      <nav className="px-3 flex-1">
        <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground mb-2">
          <Home className="mr-3 h-5 w-5" />
          Home
        </Button>
        <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground mb-2">
          <Search className="mr-3 h-5 w-5" />
          Search
        </Button>
        <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground mb-2">
          <Library className="mr-3 h-5 w-5" />
          Your Library
        </Button>

        <div className="mt-6 mb-2">
          <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground mb-2">
            <Plus className="mr-3 h-5 w-5" />
            Create Playlist
          </Button>
          <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
            <Heart className="mr-3 h-5 w-5 fill-primary text-primary" />
            Liked Songs
          </Button>
        </div>

        <Separator className="my-4 bg-border" />

        {/* Playlist List */}
        <div className="space-y-2 overflow-y-auto">
          {["Chill Vibes", "Workout Mix", "Focus Flow", "Party Hits", "Road Trip", "Sleep Sounds"].map((playlist) => (
            <button
              key={playlist}
              className="w-full text-left text-sm text-muted-foreground hover:text-foreground px-3 py-2 rounded transition-colors"
            >
              {playlist}
            </button>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
