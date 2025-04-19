
export type SkillDetails = {
    text: string,
    title: string,
    details?: string
}

export enum LANGUAGES_AND_FRAMEWORKS {
    JS = 'JavaScript',
    TS = 'TypeScript',
    DART = 'Dart',
    CSHARP = 'C#',
    SWIFT = 'Swift',
    RUBY = 'Ruby',
    GO = 'Go',
    HTML_CSS = 'HTML5 / CSS3',
    REACT = 'React / Next',
    ANGULAR = 'Angular',
    SVELTE = 'Svelte',
    FLUTTER = 'Flutter',
    NATIVEIOS = 'Native iOS',
    NODE = 'Node',
    DOT_NET = '.Net',
    MONGO = 'MongoDB',
    SQL = 'MS SQL',
    COSMOSDB = 'CosmosDB',
    REDIS = 'Redis',
    SQLITE = 'SQLite',
    FIREBASE = 'Firebase'
}

export type SkillModel = {

}

export const Skills = {
    [LANGUAGES_AND_FRAMEWORKS.JS]: {
        title: 'JavaScript',
        experience: '15 years',
        details: [
            'I have been building software in JavaScript for most of my career, and consider myself to be able to accomplish nearly any real-world task with it.',
            'I have built JavaScript applications for nearly every company that I have worked at.  I am highly proficient at building with most JavaScript frameworks and libraries.'
        ]
    },
    [LANGUAGES_AND_FRAMEWORKS.TS]: {
        title: 'TypeScript',
        experience: '6 years',
        details: [
            'I work with TypeScript nearly every day in some capacity.  Whether that is building React webapps, Node backend apps, or Angular MFEs, TypeScript is my current primary language.',
            `I have deployed production client-facing TypeScript applications at multiple large companies, such as Carvana and Google.  The website you're currently reading this on was written in TypeScript and React.`
        ]
    },
    [LANGUAGES_AND_FRAMEWORKS.DART]: {
        title: 'Dart',
        experience: '2 years',
        details: [
            `I love Dart, and I've used it to build applications with the Flutter framework, including one as a client project for Lennar while I was working at PricewaterhouseCoopers.`,
            `I am proficient at both Dart and Flutter, and can both architect and develop cross-platform mobile apps in it.`
        ]
    },
    [LANGUAGES_AND_FRAMEWORKS.CSHARP]: {
        title: 'C#',
        experience: '12 years',
        details: [
            `C# and I go way back.  I have been developing in C# in 2004 when the Mono framework was first released.  I have used C# and the .Net framework to build applications at many companies, including for Raymond James and R. R. Donnelley.`
        ]
    },
    [LANGUAGES_AND_FRAMEWORKS.SWIFT]: {
        title: 'Swift',
        experience: '1 year',
        details: ['']
    },
    [LANGUAGES_AND_FRAMEWORKS.RUBY]: {
        title: 'Ruby',
        experience: '1 year',
        details: ['']
    },
    [LANGUAGES_AND_FRAMEWORKS.GO]: {
        title: 'Go',
        experience: '1 year',
        details: ['']
    },
    [LANGUAGES_AND_FRAMEWORKS.HTML_CSS]: {
        title: 'HTML5 / CSS3',
        experience: '15 years',
        details: ['']
    },
    [LANGUAGES_AND_FRAMEWORKS.REACT]: {
        title: 'React',
        experience: '6 years',
        details: ['']
    },
    [LANGUAGES_AND_FRAMEWORKS.ANGULAR]: {
        title: 'Angular',
        experience: '6 years',
        details: ['']
    },
    [LANGUAGES_AND_FRAMEWORKS.SVELTE]: {
        title: 'Svelte',
        experience: '1 year',
        details: ['']
    },
    [LANGUAGES_AND_FRAMEWORKS.FLUTTER]: {
        title: 'Flutter',
        experience: '2 years',
        details: ['']
    },
    [LANGUAGES_AND_FRAMEWORKS.NATIVEIOS]: {
        title: 'Native iOS',
        experience: '1 year',
        details: ['']
    },
    [LANGUAGES_AND_FRAMEWORKS.NODE]: {
        title: 'Node',
        experience: '12 years',
        details: ['']
    },
    [LANGUAGES_AND_FRAMEWORKS.DOT_NET]: {
        title: '.Net',
        experience: '12 years',
        details: ['']
    },
    [LANGUAGES_AND_FRAMEWORKS.MONGO]: {
        title: 'Mongo',
        experience: '6 years',
        details: ['']
    },
    [LANGUAGES_AND_FRAMEWORKS.SQL]: {
        title: 'SQL',
        experience: '10 years',
        details: ['']
    },
    [LANGUAGES_AND_FRAMEWORKS.COSMOSDB]: {
        title: 'Cosmos',
        experience: '2 years',
        details: ['']
    },
    [LANGUAGES_AND_FRAMEWORKS.REDIS]: {
        title: 'Redis',
        experience: '2 years',
        details: ['']
    },
    [LANGUAGES_AND_FRAMEWORKS.SQLITE]: {
        title: 'SQLite',
        experience: '2 years',
        details: ['']
    },
    [LANGUAGES_AND_FRAMEWORKS.FIREBASE]: {
        title: 'Firebase',
        experience: '2 years',
        details: ['']
    }
}

