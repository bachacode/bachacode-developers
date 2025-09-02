import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "@/components/cards/Card";

interface HostingServiceCardProps {
  title: string;
  description: string;
  features: {
    title: string;
    description: string;
  }[];
  reversed: boolean;
}

export function HostingServiceCard({
  title,
  description,
  features,
  reversed,
}: HostingServiceCardProps) {
  return (
    <Card
      className={`flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      <CardHeader className="text-center md:w-6/12">
        <CardTitle className="mb-2 text-3xl font-bold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground text-lg">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="grid grid-cols-3 gap-3 md:w-6/12">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-1.5">
            <div>
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-600"
              />
            </div>
            <Tooltip>
              <TooltipTrigger>
                <h3 className="decoration-muted-foreground decoration text-start font-light underline decoration-dotted underline-offset-4">
                  {feature.title}
                </h3>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs rounded text-sm text-pretty">
                {feature.description}
              </TooltipContent>
            </Tooltip>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
