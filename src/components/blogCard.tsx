import {
  Banknote,
  Cpu,
  Briefcase,
  GraduationCap,
  ScrollText,
  Heart,
} from "lucide-react";
import { Card, CardDescription, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { formatBlogDate } from "../lib/formatDate";
import type { Blog } from "../types/blog";

const categoryIcons: Record<string, React.ElementType> = {
  FINANCE: Banknote,
  TECH: Cpu,
  CAREER: Briefcase,
  EDUCATION: GraduationCap,
  REGULATIONS: ScrollText,
  LIFESTYLE: Heart,
};

export const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <Card
      className="
        group p-4 relative bg-white overflow-hidden w-full
        transition-all duration-200
        hover:shadow-md hover:-translate-y-[2px]
      "
    >
      {/* LEFT BAR (slide + fade) */}
      <div
        className="
          absolute left-0 top-0 h-full w-[.25rem] bg-primary
          -translate-x-full opacity-0
          group-hover:translate-x-0 group-hover:opacity-100
          transition-all duration-200
        "
      />

      <div className="flex items-center justify-between">
        {/* CATEGORIES */}
        <div className="flex flex-wrap gap-1">
          {blog.category.map((cat) => {
            const Icon = categoryIcons[cat];

            return (
              <Badge
                key={cat}
                variant="outline"
                className="
                  flex items-center gap-1 text-[0.65rem]
                  transition-colors duration-200
                  group-hover:text-primary group-hover:border-primary
                "
              >
                {Icon && (
                  <Icon
                    className="
                      w-3 h-3
                      transition-colors duration-200
                      group-hover:text-primary
                    "
                  />
                )}
                {cat}
              </Badge>
            );
          })}
        </div>

        <p className="text-muted-foreground text-xs">
          {formatBlogDate(blog.date)}
        </p>
      </div>

      <div className="flex flex-col gap-1 mt-2">
        <CardTitle className="text-lg leading-tight">{blog.title}</CardTitle>

        <CardDescription className="line-clamp-2">
          {blog.description}
        </CardDescription>
      </div>
    </Card>
  );
};
