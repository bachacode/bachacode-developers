import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("about_us.our_team.cards");
  return (
    <Card className="gap-3 rounded bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <CardHeader>
        {optionalIcon && (
          <FontAwesomeIcon
            icon={optionalIcon}
            className="text-muted-foreground absolute top-2 right-2"
          />
        )}
        <div className="flex justify-center md:justify-between">
          <div className="flex flex-col items-center md:items-start">
            <span className="title-font text-lg font-medium">{memberName}</span>
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
      <CardContent className="pb-2">{description}</CardContent>

      <CardFooter>
        {linkedinUrl ? (
          <a
            title={t("linkedin", { name: memberName })}
            className="hover:text-primary text-muted-foreground transition-colors"
            href={linkedinUrl}
          >
            <FontAwesomeIcon className="text-3xl" icon={faLinkedin} />
          </a>
        ) : (
          <span
            title={t("not_available")}
            className="text-muted-foreground/30 cursor-not-allowed"
          >
            <FontAwesomeIcon className="text-3xl" icon={faLinkedin} />
          </span>
        )}
        {githubUrl ? (
          <a
            title={t("github", { name: memberName })}
            className="hover:text-primary text-muted-foreground ml-2 transition-colors"
            href={githubUrl}
          >
            <FontAwesomeIcon className="text-3xl" icon={faGithub} />
          </a>
        ) : (
          <span
            title={t("not_available")}
            className="text-muted-foreground/40 ml-2 cursor-not-allowed"
          >
            <FontAwesomeIcon className="text-3xl" icon={faGithub} />
          </span>
        )}
      </CardFooter>
    </Card>
  );
}
