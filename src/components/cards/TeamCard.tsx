import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

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
    <Card className="bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded gap-3">

      <CardHeader>
        {optionalIcon && (
          <FontAwesomeIcon
            icon={optionalIcon}
            className="absolute top-2 right-2 text-muted-foreground"
          />
        )}
        <div className="flex justify-center md:justify-between">
          <div className="flex flex-col items-center md:items-start">
            <span className="title-font text-lg font-medium">
              {memberName}
            </span>
            <h3 className="text-muted-foreground">{profession}</h3>
          </div>
          {icon && (
            <FontAwesomeIcon
              className="text-primary hidden text-4xl md:block"
              icon={icon}
            />
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        {description}
      </CardContent>

      <CardFooter>
        {linkedinUrl ? (
          <a
            title={`${memberName}`}
            className="hover:text-primary text-muted-foreground transition-colors"
            href={linkedinUrl}
          >
            <FontAwesomeIcon className="text-3xl" icon={faLinkedin} />
          </a>
        ) : (
          <span
            title="Not available"
            className="cursor-not-allowed text-muted-foreground/30"
          >
            <FontAwesomeIcon className="text-3xl" icon={faLinkedin} />
          </span>
        )}
        {githubUrl ? (
          <a
            title={`${memberName}`}
            className="hover:text-primary ml-2 text-muted-foreground transition-colors"
            href={githubUrl}
          >
            <FontAwesomeIcon className="text-3xl" icon={faGithub} />
          </a>
        ) : (
          <span
            title="Not available"
            className="ml-2 cursor-not-allowed text-muted-foreground/40"
          >
            <FontAwesomeIcon className="text-3xl" icon={faGithub} />
          </span>
        )}
      </CardFooter>

    </Card>
  );
}
