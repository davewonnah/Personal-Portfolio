import { skillCategories } from "@/data/skills";
import { SectionHeader } from "./section-header";
import { SkillIcon } from "./skill-icons";

export function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-border px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          index="02"
          eyebrow="Toolkit"
          title="What I reach for"
          description="Not every tool I've touched — just the ones I keep coming back to."
        />

        {/* Categories as an editorial definition list */}
        <div className="divide-y divide-border border-y border-border">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="grid gap-4 py-7 sm:grid-cols-[180px_1fr] sm:gap-8"
            >
              <h3 className="font-serif text-xl font-medium text-foreground">
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="group inline-flex items-center gap-2 rounded-full border border-border bg-paper px-3.5 py-1.5 text-sm text-foreground transition-colors hover:border-accent/60 hover:text-accent"
                  >
                    <span className="text-muted-foreground transition-colors group-hover:text-accent">
                      <SkillIcon name={skill.name} />
                    </span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
