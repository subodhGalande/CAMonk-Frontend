import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Checkbox } from "./ui/checkbox";
import { useBlogPost } from "@/hooks/useBlogPost";
import type { BlogData } from "@/hooks/useBlogPost";
import { useState } from "react";
import { toast } from "sonner";
import * as React from "react";

const categories = [
  "Finance",
  "Tech",
  "Career",
  "Education",
  "Regulations",
  "Lifestyle",
];

export const CreateBlog = () => {
  const [open, setOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const { mutate, isPending } = useBlogPost();

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const finalData: BlogData = {
      title: data.title as string,
      description: data.description as string,
      coverImage: data.coverImage as string,
      content: data.content as string,
      category: selectedCategories.map((cat) => cat.toUpperCase()),
      date: new Date().toISOString(),
    };

    mutate(finalData, {
      onSuccess: () => {
        toast.success("Blog post created successfully!");
        setOpen(false);
        setSelectedCategories([]);
        e.currentTarget.reset();
      },
      onError: (error) => {
        toast.error("Failed to create blog post");
        console.error(error);
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle>Create New Blog</DialogTitle>
        </DialogHeader>
        <ScrollArea className="flex-1 p-6">
          <form onSubmit={handleSubmit} id="create-blog-form">
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="title">Title</FieldLabel>
                  <Input
                    name="title"
                    id="title"
                    required
                    placeholder="Enter blog title"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="category">Categories</FieldLabel>
                  <div className="flex gap-4 flex-wrap">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center gap-2">
                        <Checkbox
                          id={category}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => toggleCategory(category)}
                        />
                        <FieldLabel
                          htmlFor={category}
                          className=" font-normal text-foreground/80 "
                        >
                          {category}
                        </FieldLabel>
                      </div>
                    ))}
                  </div>
                </Field>

                <Field>
                  <FieldLabel htmlFor="coverImage">Cover Image URL</FieldLabel>
                  <Input
                    name="coverImage"
                    id="coverImage"
                    type="url"
                    required
                    placeholder="https://example.com/image.jpg"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="description">Description</FieldLabel>
                  <Input
                    name="description"
                    id="description"
                    required
                    placeholder="A brief summary of the blog"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="content">Content</FieldLabel>
                  <textarea
                    name="content"
                    id="content"
                    required
                    rows={8}
                    className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] min-h-[150px]"
                    placeholder="Write your blog content here..."
                  />
                </Field>
              </FieldGroup>
            </FieldSet>
          </form>
        </ScrollArea>
        <div className="p-6 pt-2 flex justify-end gap-2 border-t">
          <DialogClose asChild>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit" form="create-blog-form" disabled={isPending}>
            {isPending ? "Creating..." : "Create Blog"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
