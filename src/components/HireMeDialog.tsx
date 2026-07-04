import { useState, type ReactNode } from "react";
import { z } from "zod";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { trackEvent } from "@/lib/analytics";

const schema = z.object({
  name: z
    .string()
    .trim()
    .nonempty({ message: "Please enter your name" })
    .max(100, { message: "Name is too long" }),
  email: z
    .string()
    .trim()
    .email({ message: "Enter a valid email" })
    .max(255, { message: "Email is too long" }),
  company: z.string().trim().max(120, { message: "Company name is too long" }).optional(),
  budget: z.string().trim().max(60).optional(),
  message: z
    .string()
    .trim()
    .nonempty({ message: "Please describe your project" })
    .max(2000, { message: "Message is too long (2000 char max)" }),
});

const CONTACT_EMAIL = "abeltegegn191@gmail.com";

export function HireMeDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      budget: (form.elements.namedItem("budget") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const result = schema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as string;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);
    const v = result.data;

    const subject = encodeURIComponent(`Project inquiry from ${v.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${v.name}`,
        `Email: ${v.email}`,
        v.company ? `Company: ${v.company}` : null,
        v.budget ? `Budget: ${v.budget}` : null,
        "",
        v.message,
      ]
        .filter(Boolean)
        .join("\n"),
    );

    trackEvent("hire_me_submitted", { hasCompany: !!v.company, hasBudget: !!v.budget });
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    toast.success("Opening your email client…", {
      description: "Your message is ready to send. I'll reply within 24 hours.",
    });

    setSubmitting(false);
    setOpen(false);
    form.reset();
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (next) trackEvent("hire_me_opened");
        if (!next) setErrors({});
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl font-semibold tracking-tight">
            Let’s work together
          </DialogTitle>
          <DialogDescription>
            Tell me about your project and I’ll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Jane Doe" maxLength={100} />
              {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="jane@company.com"
                maxLength={255}
              />
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="company">
                Company <span className="text-muted-foreground">(optional)</span>
              </Label>
              <Input id="company" name="company" placeholder="Acme Inc." maxLength={120} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="budget">
                Budget <span className="text-muted-foreground">(optional)</span>
              </Label>
              <Input id="budget" name="budget" placeholder="$5k–$10k" maxLength={60} />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="message">Project details</Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              placeholder="What are you building, timeline, goals…"
              maxLength={2000}
            />
            {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
          </div>

          <DialogFooter>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60 sm:w-auto"
            >
              {submitting ? "Sending…" : "Send inquiry"}
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
