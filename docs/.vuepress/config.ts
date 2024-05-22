import { defaultTheme } from "vuepress";

export default {
    locales: {
        '/': {
            lang: 'en-US',
        },
        "/zh-cn/": {
            lang: '中文',
        }
    },
    base: "/LPrefabDoc/",
    dest: "$(sourceDir)/../../liufei2008.github.io/LPrefabDoc",
    theme: defaultTheme({
        locales: {
            '/':
            {
                colorModeSwitch: true,
                selectLanguageText: 'Languages',
                selectLanguageName: 'English',
                selectLanguageAriaLabel: 'Languages',
                editLink: true,
                editLinkText: 'Edit this page on Github',
                docsRepo: "https://github.com/liufei2008/LPrefab_Document_Source",
                docsBranch: "master",
                docsDir: "docs",
                editLinkPattern: ":repo/edit/:branch/:path",
                logo: "logo.png",
                home: "/Prefab/",
                sidebar: [
                    {
                        text: "Get Started",
                        link: '/Prefab/',
                    },
                    {
                        text: "Prefab Editor",
                        link: '/PrefabEditor/',
                    },
                    {
                        text: "Prefab Interface",
                        link: "/PrefabInterface/",
                    },
                    // {
                    //     text: "Prefab Sequence",
                    //     link: "/PrefabSequence/",
                    // },
                    {
                        text: "Prefab Variant",
                        link: "/PrefabVariant/"
                    },
                    {
                        text: "Why Use Prefab",
                        link: "/WhyPrefab/"
                    }
                ]
            },
            // '/zh-cn/':
            // {
            //     selectLanguageText: '选择语言',
            //     selectLanguageName: '中文',
            //     selectLanguageAriaLabel: 'Languages',
            //     editLinkText: '在Github上编辑此页面',
            //     docsRepo: "https://github.com/liufei2008/LPrefab_Document_Source",
            //     docsBranch: "master",
            //     docsDir: "docs",
            //     editLinkPattern: ":repo/edit/:branch/:path",
            //     logo: "logo.png",
            //     home: "/Prefab/",
            //     sidebar: [
            //         {
            //             text: "开始使用",
            //             link: '/zh-cn/Prefab/',
            //         },
            //         {
            //             text: "预制体编辑器",
            //             link: '/zh-cn/PrefabEditor/',
            //         },
            //         {
            //             text: "预制体接口",
            //             link: "/zh-cn/PrefabInterface/",
            //         },
            //         // {
            //         //     text: "Prefab Sequence",
            //         //     link: "/zh-cn/PrefabSequence/",
            //         // },
            //         {
            //             text: "预制体变体",
            //             link: "/zh-cn/PrefabVariant/"
            //         },
            //         {
            //             text: "为什么要用预制体？",
            //             link: "/zh-cn/WhyPrefab/"
            //         }
            //     ]
            // }
        },
    }),
}