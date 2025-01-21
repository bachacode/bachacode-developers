import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";

interface TeamCardProps {
  memberName: string;
  profession: string;
  description: string;
  linkedinUrl?: string;
  githubUrl?: string;
  icon?: IconProp;
  optionalIcon?: IconProp;
}

export default function TeamCard({
  memberName,
  profession,
  description,
  linkedinUrl,
  githubUrl,
  icon,
  optionalIcon,
}: TeamCardProps) {
  return (
    <div className="p-3 lg:w-full flex">
      <div className="h-full flex flex-col items-center sm:justify-start justify-center text-center sm:text-left flex-grow">
        <div className="flex-grow bg-white border border-gray-500 rounded p-6 transition-shadow shadow-md hover:shadow-lg relative flex flex-col">
          {optionalIcon && (
            <FontAwesomeIcon
              icon={optionalIcon}
              className="absolute top-2 right-2 text-gray-500"
            />
          )}
          <div className="flex justify-center md:justify-between pb-3">
            <div className="flex flex-col items-center md:items-start">
              <span className="title-font font-medium text-lg text-gray-900">
                {memberName}
              </span>
              <h3 className="text-gray-500 mb-3">{profession}</h3>
            </div>
            {icon ? (
              <FontAwesomeIcon
                className="hidden md:block w-12 h-12 text-primary"
                icon={icon}
              />
            ) : (
              <div className="hidden"></div>
            )}
          </div>
          <p className="mb-4 flex-grow">{description}</p>
          <span className="inline-flex">
            {linkedinUrl ? (
              <a
                title={`Página de Linkedin de ${memberName}`}
                className="text-gray-500 hover:text-primary transition-colors"
                href={linkedinUrl}
              >
                <FontAwesomeIcon className="w-8 h-8" icon={faLinkedin} />
              </a>
            ) : (
              <span
                title="LinkedIn no disponible"
                className="text-gray-300 cursor-not-allowed"
              >
                <FontAwesomeIcon className="w-8 h-8" icon={faLinkedin} />
              </span>
            )}
            {githubUrl ? (
              <a
                title={`Página de Github de ${memberName}`}
                className="ml-2 text-gray-500 hover:text-primary transition-colors"
                href={githubUrl}
              >
                <FontAwesomeIcon className="w-8 h-8" icon={faGithub} />
              </a>
            ) : (
              <span
                title="GitHub no disponible"
                className="ml-2 text-gray-300 cursor-not-allowed"
              >
                <FontAwesomeIcon className="w-8 h-8" icon={faGithub} />
              </span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
