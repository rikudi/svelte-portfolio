import { error } from "@sveltejs/kit"
import { convertToSlug } from "$lib/functions"

import yaml from "js-yaml"
import fs from "fs"
const projects = yaml.load(fs.readFileSync("./src/data/projects.yml", "utf8")) as Array<any>

export function load({ params }) {
    if (projects.some((item: any) => convertToSlug(item.title) === params.slug)) {
        let currentItemIndex = projects.findIndex((obj: any) => convertToSlug(obj.title) == params.slug)
        return projects[currentItemIndex]
    }
    throw error(404, "Not found")
}