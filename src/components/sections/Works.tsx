import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.4, 0.7)}>
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        glareColor="#aaa6c3"
      >
        <div className="relative group bg-secondary rounded-3xl p-6 hover:border-secondary/40 transition-colors duration-300 border border-transparent">
          {/* Project Image */}
          <div className="relative overflow-hidden rounded-2xl mb-5 aspect-video bg-tertiary">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
          </div>

          {/* Project Info */}
          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((tag) => (
                <p
                  key={tag.name}
                  className={`text-[12px] font-medium px-3 py-1 rounded-full bg-tertiary/50 border border-tertiary/30 ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>
            <h3 className="text-[20px] font-bold text-white mb-2 leading-tight">
              {name}
            </h3>
            <p className="text-secondary text-[14px] leading-relaxed mb-6">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <a
                href={sourceCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-tertiary hover:bg-secondary rounded-xl text-white text-[14px] font-medium transition-all duration-300 border border-tertiary/50"
              >
                <img
                  src={github}
                  alt="github"
                  className="h-5 w-5"
                />
                View Source
              </a>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="mt-12">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary max-w-2xl mx-auto text-[15px] leading-relaxed text-center"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 px-4 sm:px-6 lg:px-8">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
