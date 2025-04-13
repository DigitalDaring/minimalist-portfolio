
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
        title: 'JS',
        text: 'JavaScript: 15 years',
        details: 'I have been building applications in JavaScript for most of my career.  I have built applications that serve millions of customers a day when I worked at Google.  I am highly proficient at building with most JavaScript frameworks and libraries.'
    },
    [LANGUAGES_AND_FRAMEWORKS.TS]: {
        title: 'TypeScript',
        text: 'TypeScript: 6 years',
        details: 'I have deployed production client-facing applications at multiple large companies, such as Carvana and Google.'
    },
    [LANGUAGES_AND_FRAMEWORKS.DART]: {
        title: 'Dart',
        text: 'Dart: 2 years',
        details: ''
    },
    [LANGUAGES_AND_FRAMEWORKS.CSHARP]: {
        title: 'C#',
        text: 'C#: 12 years',
        details: ''
    },
    [LANGUAGES_AND_FRAMEWORKS.SWIFT]: {
        title: 'Swift',
        text: 'Swift: 1 year',
        details: ''
    },
    [LANGUAGES_AND_FRAMEWORKS.RUBY]: {
        title: 'Ruby',
        text: 'Ruby: 1 year',
        details: ''
    },
    [LANGUAGES_AND_FRAMEWORKS.GO]: {
        title: 'Go',
        text: 'GoLang: 1 year',
        details: ''
    },
    [LANGUAGES_AND_FRAMEWORKS.HTML_CSS]: {
        title: 'HTML5 / CSS3',
        text: 'HTML5 / CSS3: 15 years',
        details: ''
    },
    [LANGUAGES_AND_FRAMEWORKS.REACT]: {
        title: 'React',
        text: 'React: 6 years',
        details: ''
    },
    [LANGUAGES_AND_FRAMEWORKS.ANGULAR]: {
        title: 'Angular',
        text: 'Angular: 6 years',
        details: ''
    },
    [LANGUAGES_AND_FRAMEWORKS.SVELTE]: {
        title: 'Svelte',
        text: 'Svelte: 1 year',
        details: ''
    },
    [LANGUAGES_AND_FRAMEWORKS.FLUTTER]: {
        title: 'Flutter',
        text: 'Flutter: 2 years',
        details: ''
    },
    [LANGUAGES_AND_FRAMEWORKS.NATIVEIOS]: {
        title: 'Native iOS',
        text: 'Native iOS: 1 year',
        details: ''
    },
    [LANGUAGES_AND_FRAMEWORKS.NODE]: {
        title: 'Node',
        text: 'Node: 12 years',
        details: ''
    },
    [LANGUAGES_AND_FRAMEWORKS.DOT_NET]: {
        title: '.Net',
        text: '.Net / .NetCore: 12 years',
        details: ''
    },
    [LANGUAGES_AND_FRAMEWORKS.MONGO]: {
        title: 'Mongo',
        text: 'Mongo: 6 years',
        details: ''
    },
    [LANGUAGES_AND_FRAMEWORKS.SQL]: {
        title: 'SQL',
        text: 'SQL: 10 years',
        details: ''
    },
    [LANGUAGES_AND_FRAMEWORKS.COSMOSDB]: {
        title: 'Cosmos',
        text: 'CosmosDB: 2 years',
        details: ''
    },
    [LANGUAGES_AND_FRAMEWORKS.REDIS]: {
        title: 'Redis',
        text: 'Redis: 2 years',
        details: ''
    },
    [LANGUAGES_AND_FRAMEWORKS.SQLITE]: {
        title: 'SQLite',
        text: 'SQLite: 2 years',
        details: ''
    },
    [LANGUAGES_AND_FRAMEWORKS.FIREBASE]: {
        title: 'Firebase',
        text: 'Firebase: 2 years',
        details: ''
    }
}

