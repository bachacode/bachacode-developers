import { Project } from "../ProjectShowcase";
import en from "./en";
import es from "./es";

const projects = new Map<"es" | "en", Project[]>();
projects.set("en", en);
projects.set("es", es);

export default projects;
