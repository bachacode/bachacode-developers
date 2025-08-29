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
}

export default function TeamCard({
  memberName,
  profession,
  description,
  linkedinUrl,
  githubUrl,
  icon,
}: TeamCardProps) {
  const t = useTranslations("about_us.our_team.cards");
  return (
    <Card className="gap-3 rounded bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <CardHeader className="relative">
        <div className="flex flex-col items-start">
          <span className="title-font text-lg font-medium">{memberName}</span>
          <h3 className="text-muted-foreground">{profession}</h3>
        </div>
        {icon && (
          <FontAwesomeIcon
            className="text-primary opacity-60 absolute top-0 right-2 z-10 -translate-y-4 hidden text-6xl md:block"
            icon={icon}
          />
        )}
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
