import { Badge, Button, Card } from "@radix-ui/themes";
import {
  FaRegClock,
  FaRegUser,
  FaArrowTrendUp,
  FaLink,
  FaGithub,
} from "react-icons/fa6";

const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
          projects
        </h2>

        <div className="space-y-8">
          {projects.map((project) => (
            <Card key={project.id} size="3">
              <div className="flex flex-col lg:flex-row lg:gap-8">
                <div className="lg:flex-1">
                  <div>
                    <h3>{project.name}</h3>
                    <FaRegClock />
                    <div>{project.period}</div>
                  </div>

                  <div>
                    <Badge>{project.role}</Badge>
                  </div>

                  <p>{project.summary}</p>

                  <div>
                    <h4>주요 성과</h4>
                    <ul>
                      {project.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>

                  {project.metrics && (
                    <div>
                      <h4>성과 지표</h4>
                      <div>
                        {project.metrics.users && (
                          <div>
                            <FaRegUser />
                            {project.metrics.users.toLocaleString()} users
                          </div>
                        )}
                        {project.metrics.teams && (
                          <div>
                            <FaRegUser />
                            <span>{project.metrics.teams} teams</span>
                          </div>
                        )}
                        {project.metrics.monthly_active_users && (
                          <div>
                            <FaArrowTrendUp />
                            <span>
                              {project.metrics.monthly_active_users} MAU
                            </span>
                          </div>
                        )}
                        {project.metrics.peak_rps && (
                          <div>
                            <FaArrowTrendUp />
                            <span>{project.metrics.peak_rps} RPS</span>
                          </div>
                        )}
                        {project.metrics.p95_latency_ms && (
                          <div>
                            <FaRegClock />
                            <span>p95: {project.metrics.p95_latency_ms}ms</span>
                          </div>
                        )}
                        {project.metrics.availability && (
                          <div>
                            <FaArrowTrendUp />
                            <span>{project.metrics.availability} uptime</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div>
                    {Object.entries(project.stack).map(([category, techs]) =>
                      techs?.map((tech, techIndex) => (
                        <Badge
                          key={`${category}-${techIndex}`}
                          variant="outline"
                        >
                          {tech}
                        </Badge>
                      ))
                    )}
                  </div>
                  <div>
                    {project.links.repo && (
                      <Button asChild variant="outline" size="2">
                        <a
                          href={project.links.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub className="w-4 h-4 mr-2" />
                          Repository
                        </a>
                      </Button>
                    )}
                    {project.links.repo_backend && (
                      <Button asChild variant="outline" size="2">
                        <a
                          href={project.links.repo_backend}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub className="w-4 h-4 mr-2" />
                          Backend
                        </a>
                      </Button>
                    )}
                    {project.links.repo_frontend && (
                      <Button asChild variant="outline" size="2">
                        <a
                          href={project.links.repo_frontend}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub className="w-4 h-4 mr-2" />
                          Frontend
                        </a>
                      </Button>
                    )}
                    {project.links.demo_url && (
                      <Button asChild variant="outline" size="2">
                        <a
                          href={project.links.demo_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
