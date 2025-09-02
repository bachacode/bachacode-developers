import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface HostingServiceCardProps {
    title: string
    description: string
    features: {
        title: string
        description: string
    }[]
    reversed: boolean
}

export function HostingServiceCard({ title, description, features, reversed }: HostingServiceCardProps) {
    return (
        <Card className={`gap-3 bg-white p-4 flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"}`}>
            <CardHeader className="text-center md:w-6/12">
                <CardTitle className="text-3xl font-bold mb-2">{title}</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">{description}</CardDescription>
            </CardHeader>

            <CardContent className="grid grid-cols-3 gap-3 md:w-6/12">
                {features.map((feature, index) => (
                    <div key={index} className="flex space-x-1.5 items-start">
                        <div>
                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
                        </div>
                        <Tooltip>
                            <TooltipTrigger>
                                <h3 className="font-light text-start decoration-dotted underline decoration-muted-foreground decoration underline-offset-4">
                                    {feature.title}
                                </h3>
                            </TooltipTrigger>
                            <TooltipContent className="text-sm text-pretty rounded max-w-xs">
                                {feature.description}
                            </TooltipContent>
                        </Tooltip>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}
