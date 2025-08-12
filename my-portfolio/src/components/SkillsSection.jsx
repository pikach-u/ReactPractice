import { Badge, Card } from "@radix-ui/themes";

const SkillsSection = ({ skills }) => {
  const skillCategories = [
    { title: "Backend", skills: skills.backend },
    { title: "Database", skills: skills.databases },
    { title: "Infra & DevOps", skills: skills.infra_devops },
    { title: "Frontend", skills: skills.frontend },
    { title: "Testing", skills: skills.testing },
    { title: "Observability", skills: skills.observability },
    { title: "Tools", skills: skills.tools },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
          Skills
        </h2>

        <div>
          {skillCategories.map((category, index) => (
            <Card key={index} size="2">
              <h3>{category.title}</h3>

              <div>
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex}>{skill}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
