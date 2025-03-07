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
    <div className="flex p-3 lg:w-full">
      <div className="flex h-full grow flex-col items-center justify-center text-center sm:justify-start sm:text-left">
        <div className="relative flex grow flex-col rounded border border-gray-500 bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
          {optionalIcon && (
            <FontAwesomeIcon
              icon={optionalIcon}
              className="absolute top-2 right-2 text-gray-500"
            />
          )}
          <div className="flex justify-center pb-3 md:justify-between">
            <div className="flex flex-col items-center md:items-start">
              <span className="title-font text-lg font-medium text-gray-900">
                {memberName}
              </span>
              <h3 className="mb-3 text-gray-500">{profession}</h3>
            </div>
            {icon ? (
              <FontAwesomeIcon
                className="text-primary hidden text-4xl md:block"
                icon={icon}
              />
            ) : (
              <div className="hidden"></div>
            )}
          </div>
          <p className="mb-4 grow">{description}</p>
          <span className="inline-flex space-x-1">
            {linkedinUrl ? (
              <a
                title={`Página de Linkedin de ${memberName}`}
                className="hover:text-primary text-gray-500 transition-colors"
                href={linkedinUrl}
              >
                <FontAwesomeIcon className="text-3xl" icon={faLinkedin} />
              </a>
            ) : (
              <span
                title="LinkedIn no disponible"
                className="cursor-not-allowed text-gray-300"
              >
                <FontAwesomeIcon className="text-3xl" icon={faLinkedin} />
              </span>
            )}
            {githubUrl ? (
              <a
                title={`${memberName}'s Github page`}
                className="hover:text-primary ml-2 text-gray-500 transition-colors"
                href={githubUrl}
              >
                <FontAwesomeIcon className="text-3xl" icon={faGithub} />
              </a>
            ) : (
              <span
                title="Not available"
                className="ml-2 cursor-not-allowed text-gray-300"
              >
                <FontAwesomeIcon className="text-3xl" icon={faGithub} />
              </span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
