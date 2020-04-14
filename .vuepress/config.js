module.exports = {
    title: 'Learn DITA Basics',
    description: 'This site teaches you the basics of DITA, or the Darwin Information Typing Architecture',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about' },

        ],
        sidebar: [
            ["what-is-DITA", "What is DITA?"],
            ["/why-use-DITA", "Why use DITA?"],
            {
                title: 'DITA Foundations',
                children: [
                    ["/building-blocks", "Overview"],
                    ["/topics/topic-structure", "Topic structure"],
                    ["/topics/tasks", "Tasks"],
                    ["/topics/concept", "Concepts"]
                ]
            }
            
        ],
        repo: "https://github.com/technicaltidbits/learn-dita",
        repoLabel: "Contribute!",
        editLinks: true,
        editLinkText: "Help us improve this page!",
        lastUpdated: "Last Updated"  
    }
}