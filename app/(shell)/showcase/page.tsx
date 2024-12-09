import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="py-10 container mx-auto">
      <div className="grid grid-cols-3 gap-20">
        <div>
          <Link href="/showcase/ppid-jakarta-timur">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/images/showcase/ppid-jakarta-timur/hero-banner.webp"
                alt="PPID Jakarta Timur"
                fill
                className="object-cover hover:scale-105 transition-all"
              />
            </div>
          </Link>

          <div className="mt-4">
            <Link href="/showcase/ppid-jakarta-timur">
              <h2 className="text-main font-bold font-baloo text-2xl">
                PPID Jakarta Timur
              </h2>
            </Link>
            <div className="mt-4 flex gap-4">
              <div className="text-accent font-medium text-xs border border-accent rounded-full px-4 py-1">
                Laravel
              </div>
              <div className="text-accent font-medium text-xs border border-accent rounded-full px-4 py-1">
                TailwindCSS
              </div>
            </div>
          </div>
        </div>

        <div>
          <Link href="/showcase/jakarta-timur">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/images/showcase/jakarta-timur/hero-banner.webp"
                alt="Jakarta Timur Main Website"
                fill
                className="object-cover hover:scale-105 transition-all"
              />
            </div>
          </Link>

          <div className="mt-4">
            <Link href="/showcase/jakarta-timur">
              <h2 className="text-main font-bold font-baloo text-2xl">
                Jakarta Timur Main Website
              </h2>
            </Link>
            <div className="mt-4 flex gap-4">
              <div className="text-accent font-medium text-xs border border-accent rounded-full px-4 py-1">
                NextJS
              </div>
              <div className="text-accent font-medium text-xs border border-accent rounded-full px-4 py-1">
                TailwindCSS
              </div>
              <div className="text-accent font-medium text-xs border border-accent rounded-full px-4 py-1">
                Prisma ORM
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
