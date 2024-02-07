// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Experience {
			date: string;
			title: string;
			company: string;
			description: string;
			role: string;
			place: string;
			location: string;
			type: string;
			desc?: string;
			bullets: string[];
		  }

		  interface Education {
			date: string;
			degree: string;
			major: string;
			location: string;
			school: string;
		  }

		  interface Course {
			date: number;
			title: string;
			school: string;
			location: string;
			desc: string;
		  }

		  interface Certification {
			date: number;
			title: string;
			issuer: string;
			location: string;
			desc: string;
		  }

		  interface Project {
			title: string;
			thumb: string;
			date: string;
			url: string;
			content: string;
			photos: string[];
			tags: string[];
			tools: string[];
		  }
		  
		  interface Resume {
			title: string;
			first_name: string;
			last_name: string;
			tagline: string;
			experiences: Experience[];
			skills: string[];
			educations: Education[];
			coursework: Course[];
			certifications: Certification[];
			contacts: string[];
		  }
	}
}

declare module '$app/stores' {
	export const page: {
	  url: {
		pathname: string;
	  }
	}
  }

declare module "*.yml" {
	const content: string;
	export default content;
  }

export {};
