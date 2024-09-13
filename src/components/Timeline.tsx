interface TimelineItemProps {
  date: string;
  label: string;
  title: string;
  company: string;
  content: string;
  homepage: string;
}

export default function Timeline({ items }: { items: TimelineItemProps[] }) {
  return (
    <div className={` -my-6`}>
      {items.map((item, index) => (
        <div key={index}>
          <a href={item.homepage} target="_blank">
            <div className="relative px-6 sm:pl-32 py-4 group hover:bg-blue-100 hover:bg-opacity-10 transition-all rounded-xl">
              {/* Purple label */}

              {/* Time + Title */}
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-blue-500 sm:before:ml-[10.4rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-blue-500 after:border-4 after:box-content after:border-blue-100 after:rounded-full sm:after:ml-[10.4rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-5 translate-y-0.5 inline-flex items-center justify-center text-[11px] font-semibold uppercase w-32 h-6 mb-3 sm:mb-0 text-blue-100 bg-blue-400 rounded-full">
                  {item.date}
                </time>
                <div className="text-xl font-bold text-blue-100 ml-14">
                  {item.title}
                </div>
                <svg
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  width="20"
                  height="20"
                  className="absolute right-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                    fill="#E2E8F0"
                  ></path>
                </svg>
              </div>
              {/* Company */}
              <div className="text-blue-100 text-sm ml-14">{item.company}</div>
              {/* Description */}
              <div className="text-blue-100 text-opacity-65 text-sm ml-14 mt-2">
                {item.content}
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
