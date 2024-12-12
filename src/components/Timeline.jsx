const { useId } = require("react")

export function Timeline() {
    let id = useId()
  
    return (
    //   <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-visible">
      <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden left-0 lg:overflow-visible">
        <svg
          className="absolute left-0 top-0 h-full w-1.5"
          aria-hidden="true"
        >
          <defs>
            <pattern id={id} width="6" height="8" patternUnits="userSpaceOnUse">
              <path
                d="M0 0H6M0 8H6"
                className="stroke-sky-900/10 xl:stroke-white/10 dark:stroke-white/10"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${id})`} />
        </svg>
      </div>
    )
  }