import { Card, CardDescription, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export const BlogCard = () => {
  return (
    <Card className="p-4 relative bg-white overflow-clip ">
      <div className="h-full w-[.2rem] bg-primary absolute left-0 top-0"></div>

      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className=" text-accent-foreground ">
            Badge
          </Badge>
          <Badge variant="outline">Badge</Badge>
        </div>
        <div>
          <p className="text-muted-foreground text-xs ">2022-01-01</p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <CardTitle className="text-lg">Future of Fintech</CardTitle>
        <CardDescription className="line-clamp-2 text-muted-foreground ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
          corrupti expedita nihil amet deleniti laboriosam nesciunt repellat
          odit placeat rem praesentium, perferendis molestiae eius ducimus animi
          eaque, nemo dolore illo!
        </CardDescription>
      </div>
    </Card>
  );
};
