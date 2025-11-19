import { useEffect, useRef, useState } from "react";
import { type UseEmblaCarouselType } from "embla-carousel-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Extracting the Embla API type from the UseEmblaCarouselType tuple
type EmblaApi = UseEmblaCarouselType[1];

// =============== AUTOPLAY HOOK ==================
function useAutoplay(emblaApi: EmblaApi | undefined, delay = 3000) {
  useEffect(() => {
    if (!emblaApi) return;

    let timer = setInterval(() => {
      emblaApi.scrollNext();
    }, delay);

    const container = emblaApi.rootNode();
    const pause = () => clearInterval(timer);
    const resume = () => {
      timer = setInterval(() => emblaApi.scrollNext(), delay);
    };

    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", resume);

    return () => {
      clearInterval(timer);
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", resume);
    };
  }, [emblaApi, delay]);
}

// =============== LAZY IMAGE COMPONENT ==================
type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
};

function LazyImage({ src, alt, className }: LazyImageProps) {
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        root: null, // viewport (or can be carousel container)
        rootMargin: "100px", // start loading a bit before it fully appears
        threshold: 0.1,
      }
    );

    observer.observe(imgRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={imgRef} className="w-full h-full">
      {isInView ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={className}
        />
      ) : (
        // Optional skeleton / placeholder
        <div className={`w-full h-full animate-pulse bg-muted ${className ?? ""}`} />
      )}
    </div>
  );
}

// ================= IMAGES ====================
const images = [
  { src: "/images/gir.jpg", alt: "Tourism place 1" },
  { src: "/images/aks.jpg", alt: "Tourism place 2" },
  { src: "/images/loadern12.jpg", alt: "Tourism place 3" },
  { src: "/images/ranki.jpg", alt: "Tourism place 4" },
  { src: "/images/images7.jpg", alt: "Tourism place 5" },
  { src: "/images/sta.jpg", alt: "Tourism place 6" },
  { src: "/images/white.jpg", alt: "Tourism place 7" },
  { src: "/images/images.jpg", alt: "Tourism place 8" },
];

// ================= SLIDER COMPONENT ==================
function Slider() {
  const [embla, setEmbla] = useState<EmblaApi | undefined>(undefined);

  useAutoplay(embla, 3000); // 3s autoplay

  return (
    <div className="w-full px-4 py-6">
      <Card className="w-full shadow-md">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-6">
            WELCOME TO GUJARAT TURISM ADMIN PANEL
          </h2>

          <div className="flex justify-center">
            <Carousel
              setApi={setEmbla}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl"
            >
              <CarouselContent>
                {images.map((img, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/3 lg:basis-1/3"
                  >
                    <div className="p-2">
                      <div className="h-56 md:h-64 w-full overflow-hidden rounded-md">
                        <LazyImage
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Slider;
