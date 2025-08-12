import { Badge, Button, Card } from "@radix-ui/themes";
import { FaBuilding, FaCalendarDays } from "react-icons/fa6";

const ExperienceSection = ({ experience, education, certifications }) => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
          Experience & Education
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="mb-6">Work Experience</h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card key={index} size="2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h4 className="flex items-center gap-2 mb-1">
                        <FaBuilding className="w-4 h-4" />
                        {exp.company} - {exp.role}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendarDays className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
