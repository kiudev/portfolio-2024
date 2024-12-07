interface TimelineItemProps {
  date: string;
  label: string;
  title: string;
  company: string;
  content: React.ReactNode[];
}

export default function Timeline({ items }: { items: TimelineItemProps[] }) {
  return (
    <div className={` -my-6 w-full`}>
      {items.map((item, index) => (
        <div key={index}>
          <div className="relative sm:pl-32 py-4 group hover:bg-blue-100 hover:bg-opacity-10 transition-all rounded-xl">
            {/* Time + Title */}
            <time className="sm:absolute left-5 lg:left-10 translate-y-0.5 inline-flex items-center justify-center text-[11px] font-semibold uppercase w-32 h-6 mb-3 sm:mb-0 text-blue-100 bg-blue-400 rounded-full min-[640px]:-ml-[20px]">
              {item.date}
            </time>
            <div className="lg:ml-10 px-6 sm:-ml-32">
              <div className="text-md font-bold -ml-6 min-[640px]:mt-9 lg:mt-0">
                {`${item.title} • ${item.company}`}

              </div>
              <div className="text-blue-100 text-sm -ml-6 -mb-3">

              </div>
              {/* Description */}
              <div className="text-blue-100 text-opacity-65 text-sm -ml-6 mt-2">
                {item.content}
              </div>
            </div>
            {/* Company */}
          </div>
        </div>
      ))}
    </div>
  );
}
