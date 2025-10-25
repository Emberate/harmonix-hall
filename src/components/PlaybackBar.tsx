import { Heart, Play, SkipBack, SkipForward, Shuffle, Repeat, Mic2, ListMusic, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const PlaybackBar = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-secondary border-t border-border h-24 px-4">
      <div className="flex items-center justify-between h-full max-w-screen-2xl mx-auto">
        {/* Currently Playing */}
        <div className="flex items-center gap-4 w-80">
          <div className="w-14 h-14 bg-muted rounded"></div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Midnight Dreams</p>
            <p className="text-xs text-muted-foreground truncate">The Dreamers</p>
          </div>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center gap-2 flex-1 max-w-2xl">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Shuffle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <SkipBack className="h-4 w-4" />
            </Button>
            <Button size="icon" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-10 w-10">
              <Play className="h-5 w-5 fill-current" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <SkipForward className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Repeat className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Progress Bar */}
          <div className="flex items-center gap-2 w-full">
            <span className="text-xs text-muted-foreground w-10 text-right">2:34</span>
            <Slider defaultValue={[40]} max={100} step={1} className="flex-1" />
            <span className="text-xs text-muted-foreground w-10">5:42</span>
          </div>
        </div>

        {/* Extra Controls */}
        <div className="flex items-center gap-2 w-80 justify-end">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Mic2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <ListMusic className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Volume2 className="h-4 w-4" />
          </Button>
          <Slider defaultValue={[70]} max={100} step={1} className="w-24" />
        </div>
      </div>
    </footer>
  );
};

export default PlaybackBar;
