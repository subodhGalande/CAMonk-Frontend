import { AspectRatio } from "./ui/aspect-ratio";

export const BlogDetail = () => {
  return (
    <div className="pb-6">
      <AspectRatio ratio={21 / 9} className="p-0">
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="blog image"
          className="rounded-t-xl object-cover h-full w-full"
        />
      </AspectRatio>

      <div className="mt-12 md:px-8">
        <h2 className="text-6xl font-black tracking-tighter ">
          The Future of Fintech in 2024
        </h2>

        {/* CATEGORY AND DATE */}
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

        {/* BLOG DESC */}
        <div className="mt-12">
          <p className="text-2xl text-foreground font-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
            corrupti expedita nihil amet deleniti laboriosam nesciunt repellat
            odit placeat rem praesentium, perferendis molestiae eius ducimus
            animi eaque, nemo dolore illo!
          </p>
        </div>

        {/* BLOG CONTENT */}
        <div className="mt-6">
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
            corrupti expedita nihil amet deleniti laboriosam nesciunt repellat
            odit placeat rem praesentium, perferendis molestiae eius ducimus
            animi eaque, nemo dolore illo!
          </p>
        </div>

        {/* TAGS */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Tags</h2>

          <div className="mt-4 flex gap-2 md:w-1/3 flex-wrap">
            <div className="px-4 py-2 border-2 w-fit text-sm ">FINTECH</div>
            <div className="px-4 py-2 border-2 w-fit text-sm ">FINTECH</div>
            <div className="px-4 py-2 border-2 w-fit text-sm ">FINTECH</div>
            <div className="px-4 py-2 border-2 w-fit text-sm ">FINTECH</div>
            <div className="px-4 py-2 border-2 w-fit text-sm ">FINTECH</div>
          </div>
        </div>
      </div>
    </div>
  );
};
