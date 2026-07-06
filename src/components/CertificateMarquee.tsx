const certificates = [
  { name: "Anthropic", detail: "Claude AI" },
  { name: "Meta", detail: "Front-End Developer" },
  { name: "Google", detail: "Cloud Professional" },
  { name: "Microsoft", detail: "Azure Certified" },
];

function CertCard({ name, detail }: { name: string; detail: string }) {
  return (
    <div className="flex min-w-[240px] items-center gap-4 rounded-xl border border-border bg-card px-6 py-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/15 font-serif text-lg font-semibold text-primary">
        {name.charAt(0)}
      </div>
      <div>
        <p className="text-sm font-semibold tracking-tight text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground">{detail}</p>
      </div>
    </div>
  );
}

export function CertificateMarquee() {
  return (
    <div className="group relative overflow-hidden py-4">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0 gap-6 pr-6" aria-hidden={group === 1}>
            {certificates.map((c, i) => (
              <CertCard key={`${group}-${c.name}-${i}`} name={c.name} detail={c.detail} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
