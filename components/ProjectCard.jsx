import Link from "next/link";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Github,
  ExternalLink,
  Brain,
  Server,
  Smartphone,
  Code2,
  Sparkles,
  Gamepad2,
  Globe,
} from "lucide-react";

// Picks an icon + gradient based on category so each card feels distinct
// without relying on screenshots.
const categoryTheme = (category = "") => {
  const c = category.toLowerCase();
  if (c.includes("devops") && c.includes("ai"))
    return { Icon: Sparkles, gradient: "from-fuchsia-500 via-purple-500 to-indigo-500" };
  if (c.includes("devops"))
    return { Icon: Server, gradient: "from-sky-500 via-cyan-500 to-emerald-500" };
  if (c.includes("ai"))
    return { Icon: Brain, gradient: "from-rose-500 via-pink-500 to-orange-500" };
  if (c.includes("native"))
    return { Icon: Smartphone, gradient: "from-emerald-500 via-teal-500 to-cyan-500" };
  if (c.includes("game"))
    return { Icon: Gamepad2, gradient: "from-amber-500 via-orange-500 to-red-500" };
  if (c.includes("next"))
    return { Icon: Globe, gradient: "from-slate-700 via-zinc-700 to-neutral-900" };
  if (c.includes("react"))
    return { Icon: Code2, gradient: "from-blue-500 via-indigo-500 to-violet-500" };
  return { Icon: Code2, gradient: "from-primary via-primary/80 to-primary/60" };
};

const monogram = (name = "") =>
  name
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase() || "AV";

const ProjectCard = ({ project }) => {
  const { Icon, gradient } = categoryTheme(project.category);
  const stack = project.stack || [];
  const hasLive = project.link && project.link !== "/" && project.link !== "";
  const hasGithub = project.github && project.github !== "/" && project.github !== "";

  return (
    <Card className="group relative flex flex-col h-full overflow-hidden border-border/60 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Header band */}
      <div className={`relative h-[160px] bg-gradient-to-br ${gradient} overflow-hidden`}>
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        {/* Soft blobs */}
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/20 blur-2xl" />
        <div className="absolute -bottom-12 -left-6 w-44 h-44 rounded-full bg-black/10 blur-2xl" />

        {/* Category */}
        <Badge className="absolute top-4 left-4 uppercase text-[11px] tracking-wider font-semibold bg-white/15 text-white border border-white/30 backdrop-blur-sm hover:bg-white/25">
          {project.category}
        </Badge>

        {/* Monogram + icon */}
        <div className="relative h-full flex items-center justify-center gap-4 px-6">
          <span className="text-white/90 font-extrabold text-5xl tracking-tight drop-shadow-sm">
            {monogram(project.name)}
          </span>
          <span className="h-12 w-px bg-white/40" />
          <Icon className="text-white/90" size={44} strokeWidth={1.6} />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-6 py-5">
        <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {project.name}
        </h4>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
          {project.Description}
        </p>

        {/* Stack chips */}
        {stack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {stack.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium px-2 py-1 rounded-md bg-secondary/60 text-secondary-foreground border border-border/60"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-3 mt-auto pt-2 border-t border-border/60">
          {hasGithub && (
            <Link
              href={project.github}
              target="_blank"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Github size={16} /> Code
            </Link>
          )}
          {hasLive && (
            <Link
              href={project.link}
              target="_blank"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors ml-auto"
            >
              Live <ExternalLink size={16} />
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
