import { AspectRatio } from "./ui/aspect-ratio";

export const BlogDetail = () => {
  return (
    <>
      <AspectRatio ratio={21 / 9} className="p-0">
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="blog image"
          className="rounded-md object-cover h-full w-full"
        />
      </AspectRatio>

      <div className="mt-12 md:px-8">
        <h2 className="text-6xl font-black tracking-tighter ">
          The Future of Fintech in 2024
        </h2>
        <div className="flex rounded-lg mt-6 border-2 items-center justify-between bg-secondary">
          <div className="w-full flex flex-col justify-center items-center h-full border-r-2 p-4">
            <h2 className="text-xs font-semibold tracking-widest text-muted-foreground">
              CATEGORY
            </h2>
            <p className="text-lg font-semibold">Fintech</p>
          </div>
          <div className="w-full flex flex-col justify-center items-center h-full p-4">
            <h2 className="text-xs font-semibold tracking-widest text-muted-foreground">
              DATE
            </h2>
            <p className="text-lg font-semibold">2022-01-01</p>
          </div>
        </div>
      </div>
    </>
  );
};
