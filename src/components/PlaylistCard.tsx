import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlaylistCardProps {
  title: string;
  description: string;
  image: string;
}

const PlaylistCard = ({ title, description, image }: PlaylistCardProps) => {
  return (
    <div className="bg-card rounded-lg p-4 hover:bg-muted/50 transition-all duration-200 group cursor-pointer">
      <div className="relative mb-4">
        <img
          src={image}
          alt={title}
          className="w-full aspect-square object-cover rounded-md shadow-lg"
        />
        <Button
          size="icon"
          className="absolute bottom-2 right-2 bg-primary hover:bg-primary/90 rounded-full h-12 w-12 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 shadow-xl"
        >
          <Play className="h-5 w-5 fill-current text-black" />
        </Button>
      </div>
      <h3 className="font-semibold mb-2 truncate">{title}</h3>
      <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
    </div>
  );
};

export default PlaylistCard;
