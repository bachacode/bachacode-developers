import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface TeamCardProps {
  memberName: string;
  profession: string;
  description: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

export default function TeamCard({
  memberName,
  profession,
  description,
  linkedinUrl,
  githubUrl,
}: TeamCardProps) {
  return (
    <div className="p-3 lg:w-full">
      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <div className="flex-grow bg-white border border-gray-500 rounded p-6 transition-shadow shadow-md hover:shadow-lg">
          <span className="title-font font-medium text-lg text-gray-900">
            {memberName}
          </span>
          <h3 className="text-gray-500 mb-3">{profession}</h3>
          <p className="mb-4">{description}</p>
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
