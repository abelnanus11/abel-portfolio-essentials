import gebeya from "@/assets/collab-gebeya.jpg.asset.json";
import liquid from "@/assets/collab-liquid.jpg.asset.json";
import dreamtech from "@/assets/collab-dreamtech.jpg.asset.json";

type Collaborator = {
  name: string;
  logo: string;
  description: string;
};

const collaborators: Collaborator[] = [
  {
    name: "Gebeya Inc.",
    logo: gebeya.url,
    description:
      "AT Technologies has worked with Gebeya Inc. to build advanced marketplace infrastructure. Through this collaboration, we launched customized, AI-driven service marketplaces utilizing Gebeya Jenga tools to optimize digital ecosystem scaling.",
  },
  {
    name: "Liquid Intelligent Technologies",
    logo: liquid.url,
    description:
      "AT Technologies collaborated with Liquid Intelligent Technologies to drive large-scale digital infrastructure projects — optimizing a 110,000+ km pan-African terrestrial fiber network, maintaining Azure Hyperconverged Infrastructure (HCI) in East African data centers, integrating commercial cybersecurity units for managed cyber defense, and deploying cross-border Nokia telecom links across key African trade routes.",
  },
  {
    name: "Dream Tech (DreamTech Ethiopia)",
    logo: dreamtech.url,
    description:
      "AT Technologies collaborated with Dream Tech to deliver robust software and automation — engineering Dream ERP with native Amharic support and full ERCA tax integration, a centralized School Management Platform, a Hospital Management Platform for digital medical records, and cross-platform iOS/Android apps for ride-hailing, e-commerce, and logistics.",
  },
];

function CollaboratorCard({ name, logo, description }: Collaborator) {
  return (
    <article className="flex w-[340px] shrink-0 flex-col overflow-hidden border border-border bg-card transition-colors hover:border-primary/50 sm:w-[420px]">
      <div className="flex h-40 items-center justify-center border-b border-border bg-background p-6">
        <img
          src={logo}
          alt={`${name} logo`}
          loading="lazy"
          className="max-h-full max-w-[70%] object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-lg font-semibold tracking-tight text-foreground">
          {name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </article>
  );
}

export function CollaboratorMarquee() {
  return (
    <div className="group relative overflow-hidden py-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />
      <div className="flex w-max animate-marquee-slow group-hover:[animation-play-state:paused]">
        {[0, 1].map((groupIndex) => (
          <div
            key={groupIndex}
            className="flex shrink-0 items-stretch gap-6 pr-6"
            aria-hidden={groupIndex === 1}
          >
            {collaborators.map((c, i) => (
              <CollaboratorCard key={`${groupIndex}-${c.name}-${i}`} {...c} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
