import { url } from "inspector";

export type SkillLink = {
    label: string;
    url: string;
}

export type SkillDetails = {
    title: string,
    experience: string,
    details?: string[],
    links?: SkillLink 
}

export enum LANGUAGES_AND_FRAMEWORKS {
    JS = 'JavaScript',
    TS = 'TypeScript',
    DART = 'Dart',
    CSHARP = 'C#',
    SWIFT = 'Swift',
    RUBY = 'Ruby',
    HTML_CSS = 'HTML5 / CSS3',
    REACT = 'React / Next',
    ANGULAR = 'Angular',
    FLUTTER = 'Flutter',
    NATIVEIOS = 'Native iOS',
    NODE = 'Node',
    DOT_NET = '.Net',
    MONGO = 'MongoDB',
    SQL = 'MS SQL',
    FIREBASE = 'Firebase'
}



export const Skills = {
    [LANGUAGES_AND_FRAMEWORKS.JS]: {
        title: 'JavaScript',
        experience: '15 years',
        details: [
            'I have been building software in JavaScript for most of my career, and consider myself able to accomplish nearly any real-world task with it.',
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
            `I love Dart, and I've used it to build applications with the Flutter framework, including one as a client project for Lennar that is still on the Apple App Store while I was working at PricewaterhouseCoopers.`,
            `I am proficient at both Dart and Flutter, and can both architect and develop cross-platform mobile apps in it.`
        ]
    },
    [LANGUAGES_AND_FRAMEWORKS.CSHARP]: {
        title: 'C#',
        experience: '12 years',
        details: [
            `C# and I go way back.  I have been developing in C# since 2004 when the Mono framework was first released.  I have used C# and the .Net framework to build applications at many companies, including for Raymond James and R. R. Donnelley.`,
            `I am highly proficient at writing C# and .Net apps, and can both architect and develop enterprise-level software for it.`
        ]
    },
    [LANGUAGES_AND_FRAMEWORKS.SWIFT]: {
        title: 'Swift',
        experience: '1 year',
        details: [
            'I have worked with Swift and native iOS development to build apps for iPhones and the Apple Watch.  I have a current Apple Watch app released on the App Store that you can install.  I am able to read and write Swift with moderate proficiency.'
        ],
        links: [
            {label: 'DieCast Watch', url: 'https://apps.apple.com/us/app/diecast-watch/id1533496780'}
        ]
    },
    [LANGUAGES_AND_FRAMEWORKS.RUBY]: {
        title: 'Ruby',
        experience: '1 year',
        details: [
            `I built and maintained a sweepstakes game website in Ruby On Rails for Transitions Lenses while I was a senior developer at FKQ Marketing.`, `I really enjoyed my time working with Ruby, and I would happily work on more RoR projects.  Unfortunately I rarely encounter Ruby in the wild these days, so I haven't had an opportunity to use it in a while.`
        ]
    },
    [LANGUAGES_AND_FRAMEWORKS.HTML_CSS]: {
        title: 'HTML5 / CSS3',
        experience: '15 years',
        details: [
            `I would categorize myself as primarily a UX Developer, and most of the applications that I build use HTML and CSS.  I have worked directly with designers at Google, Carvana, PwC, and many more companies to build maintainable semantic HTML and clean CSS for a wide variety of production websites.`,
            `I can build dang near anything in HTML and CSS, and I enjoy doing it.`
        ]
    },
    [LANGUAGES_AND_FRAMEWORKS.REACT]: {
        title: 'React',
        experience: '6 years',
        details: [
            `I am extremely proficient at building apps with React, as well as its common supporting libraries like Redux and TanStack Query.  I have released multiple production apps for major companies in React.`,
            `This website was built using NextJS which is a framework for React.`
        ]
    },
    [LANGUAGES_AND_FRAMEWORKS.ANGULAR]: {
        title: 'Angular',
        experience: '7 years',
        details: [`I have built many enterprise applications in Angular, including at my current job where we use the MEAN (Mongo/Express/Angular/Node) stack by default.`, `I've been using Angular since it first released (including AngularJS) and I am familiar with all major features including the recent switch to standalone components and signals.`, `I have also worked on internal Angular projects at Google, such as the admin UI for Project Loon.`]
    },
    [LANGUAGES_AND_FRAMEWORKS.FLUTTER]: {
        title: 'Flutter',
        experience: '2 years',
        details: [`I love Flutter, and I've used it to build both personal and enterprise apps.  While employed at PwC, I architected and led development of a mobile app for Lennar that was released on the Apple App Store.`,
            `I am proficient at both Dart and Flutter, and can both architect and develop cross-platform mobile apps in it.`]
    },
    [LANGUAGES_AND_FRAMEWORKS.NATIVEIOS]: {
        title: 'Native iOS',
        experience: '1 year',
        details: ['I have worked with Swift and native iOS development to build apps for iPhones and the Apple Watch.  I have a current Apple Watch app released on the App Store that you can install.  I am able to read and write Swift with moderate proficiency.'],
        links: [
            {label: 'DieCast Watch', url: 'https://apps.apple.com/us/app/diecast-watch/id1533496780'}
        ]
    },
    [LANGUAGES_AND_FRAMEWORKS.NODE]: {
        title: 'Node',
        experience: '12 years',
        details: ['Node is my primary backend framework, and I work with it every day as a Technical Lead at PwC.  I am responsible for writing, architecting, and analyzing Node microservices for a large variety of projects.', `I have built and published multiple NPM packages to my company's internal Artifactory.`]
    },
    [LANGUAGES_AND_FRAMEWORKS.DOT_NET]: {
        title: '.Net',
        experience: '12 years',
        details: ['I have extensive experience writing .Net webservices and apps for organizations both large and small.  While my current company is mostly MEAN stack, we still support multiple .Net microservices that are deployed in Docker containers on our K8s clusters.', `I have additional direct experience writing Blazor frontends, as well as Unity apps.`],
        links: [
            {lable: 'Blazor BanjoApp repository', url: 'https://github.com/DigitalDaring/BanjoApp'}
        ]
    },
    [LANGUAGES_AND_FRAMEWORKS.MONGO]: {
        title: 'Mongo',
        experience: '7 years',
        details: ['I have used MongoDB for a wide variety of projects, both enterprise and personal.  My current company uses MongoDB Atlas cloud services, as well as Docker containers throughout our K8s clusters. I have received direct training from the team at Mongo as part of my career at PwC.']
    },
    [LANGUAGES_AND_FRAMEWORKS.SQL]: {
        title: 'SQL',
        experience: '10 years',
        details: [`It has been a few years since I worked with SQL on a regular basis, but I have extensive experience using MS-SQL to do everything from storing bank records (at Raymond James) to sweepstakes entries (at FKQ Marketing).  I am comfortable designing complex relational databases and making architectural tradeoff decisions regarding normalization and index optimization.`]
    },
    [LANGUAGES_AND_FRAMEWORKS.FIREBASE]: {
        title: 'Firebase',
        experience: '2 years',
        details: ['I have used Firebase almost exclusively for building mobile apps.  I have experience with its database offering (Firestore), as well as its push notifications service (Cloud Messaging) and have deployed client code for Lennar to the Apple App Store with Firebase integration.']
    }
};

