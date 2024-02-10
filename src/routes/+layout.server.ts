//Reads and loads the data from yaml files and passes it to the layout.svelte file
import yaml from "js-yaml"
import fs from "fs"
import path from "path"

const resumePath = path.resolve('./src/data/resume.yml');
const aboutPath = path.resolve('./src/data/about.yml');
const projectsPath = path.resolve('./src/data/projects.yml');

const resume = yaml.load(fs.readFileSync(resumePath, 'utf8'));
const about = yaml.load(fs.readFileSync(aboutPath, 'utf8'));
const projects = yaml.load(fs.readFileSync(projectsPath, 'utf8'));

console.log(projects)

export function load({ params }) {
    return {
      resume,
      about,
      projects,
    }
}