import { cn } from "@/lib/utils"

interface WaveDividerProps {
  position: "top" | "bottom"
  className?: string
  flip?: boolean
}

export function WaveDivider({ position, className, flip = false }: WaveDividerProps) {
  return (
    <div
      className={cn(
        "absolute left-0 w-full overflow-hidden leading-0 z-10",
        position === "top" ? "top-0" : "bottom-0",
        className,
      )}
    >
      <svg
        className={cn("relative block w-full h-[50px] sm:h-[70px] md:h-[100px]", flip && "rotate-180")}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="fill-current"
        ></path>
      </svg>
    </div>
  )
}

export function CurveDivider({ position, className, flip = false }: WaveDividerProps) {
  return (
    <div
      className={cn(
        "absolute left-0 w-full overflow-hidden leading-0 z-10",
        position === "top" ? "top-0" : "bottom-0",
        className,
      )}
    >
      <svg
        className={cn("relative block w-full h-[50px] sm:h-[70px] md:h-[100px]", flip && "rotate-180")}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
          className="fill-current"
        ></path>
      </svg>
    </div>
  )
}

export function TiltDivider({ position, className, flip = false }: WaveDividerProps) {
  return (
    <div
      className={cn(
        "absolute left-0 w-full overflow-hidden leading-0 z-10",
        position === "top" ? "top-0" : "bottom-0",
        className,
      )}
    >
      <svg
        className={cn("relative block w-full h-[50px] sm:h-[70px] md:h-[100px]", flip && "rotate-180")}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-current"></path>
      </svg>
    </div>
  )
}
