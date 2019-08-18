const data = [
    {
        meta: {
            name: "ClientEarth",
            link: "https://www.clientearth.org/",
            label: "client-earth",
        },
        description: {
            content: "ClientEarth is a charity that uses the power of the law to protect the planet and the people who live on it. We are lawyers and environmental experts who are fighting against the climate crisis and to protect nature and the environment.",
            updatedBy: "Alexander", updatedAt: "2019-08-18"
        },
        established: {
            content: "2008",
            updatedBy: "Alexander", updatedAt: "2019-08-06"
        },
        activeCountries: {
            content: "Europe, China, Central & West Africa",
            updatedBy: "Andre", updatedAt: "2019-08-18"
        },
        employees: {
            content: "- 103 in 2017\n- 43 in 2012",
            updatedBy: "Andre", updatedAt: "2019-08-06"
        },
        yearlyIncome: {
            content: "- 11.5M £ in 2017" +
                "\n- 7.3M £ in 2016" +
                "\n- 3.3M £ in 2012" +
                "\n- 2.6M £ in 2011",
            updatedBy: "Andre", updatedAt: "2019-08-18"
        },

    },
    {
        meta: {
            name: "Extinction Rebellion",
            link: "https://rebellion.earth",
            label: "extinction-rebellion",
        },
        description: {
            content: "Extinction Rebellion (XR) is an international movement that uses non-violent civil disobedience in an attempt to halt mass extinction and minimise the risk of social collapse.",
            updatedBy: "Alexander", updatedAt: "2019-08-18"
        },
        established: {
            content: "2018",
            updatedBy: "Alexander", updatedAt: "2019-08-06"
        },
        kpis: {
            content: "- People in custody\n- Participants in actions\n- Members\n- Press Mentions",
            updatedBy: "Alexander", updatedAt: "2019-08-06",

        },
        activeCountries: {
            content: "It's largest base is in the UK but local groups are forming in hundreds of locations worldwide.",
            updatedBy: "Alexander", updatedAt: "2019-08-18",

        },
        actions: {
            content: "XR had it's most visible action so far when it caused [disruption in 5 UK cities in July 2019 (e.g. by blocking bridges in London)](https://rebellion.earth/2019/07/10/from-monday-15-july-extinction-rebellions-summer-uprising-act-now-to-cause-major-disruption-across-five-uk-cities/). " +
                "Other, smaller acts of civil disobedience happen increasingly frequently world-wide.",
            updatedBy: "Alexander", updatedAt: "2019-08-18",

        },
        pressArticles: {
            content: "They have a [press section](https://rebellion.earth/press/). No structured assessment has happened yet.",
            updatedBy: "Alexander", updatedAt: "2019-08-18",

        },
    },
    {
        meta: {
            name: "WWF",
            link: "http://wwf.panda.org/",
            label: "wwf",
        },
        description: {
            content: "The WWF is active since 1961 and therefore a well experienced player within the environmental engagement game. The biggest Pro on WWF is that it is well known and People trust the organization. They do not have a precise focus on the climate crises but there is also a focus on it. One of their goals for 2030 is to reduce greenhouse gas emissions by 40%.",
            updatedBy: "Andre", updatedAt: "2019-08-18"
        },
        established: {
            content: "[1961](http://wwf.panda.org/knowledge_hub/history/)",
            updatedBy: "Andre", updatedAt: "2019-08-06"
        },
        kpis: {
            content: "- Actions done / pa \n- Participants in actions\n- Members\n- Press Mentions",
            updatedBy: "Andre", updatedAt: "2019-08-06",

        },
        activeCountries: {
            content: "[about 100 countries](http://wwf.panda.org/knowledge_hub/history/50_years_of_achievements/)",
            updatedBy: "Andre", updatedAt: "2019-08-18",

        },
        actions: {
            content: "-",
            updatedBy: "Andre", updatedAt: "2019-08-18",

        },
        pressArticles: {
            content: "-",
            updatedBy: "Andre", updatedAt: "2019-08-18",

        },

    },
    {
        meta: {
            name: "Greenpeace",
            link: "",
            label: "greenpeace",
        },
    },
    {
        meta: {
            name: "Ende Gelände",
            link: "",
            label: "ende-gelaende",
        },
    },
    {
        meta: {
            name: "CERES",
            link: "",
            label: "ceres",
        },
    },
    {
        meta: {
            name: "World Ressource Institution",
            link: "",
            label: "world-resource-institution",
        },
    },
    {
        meta: {
            name: "350.org",
            link: "",
            label: "350-org",
        },
    },
    {
        meta: {
            name: "Sierra Club",
            link: "https://www.sierraclub.org/",
            label: "sierra-club",
        },
        established: {
            content: "1892",
            updatedBy: "Alexander", updatedAt: "2019-08-18"
        },
        kpis: {
            content: "unclear",
            updatedBy: "Alexander", updatedAt: "2019-08-18",

        },
        description: {
            content: "One of the oldest wildlife protection organization." +
                "\n- Progressive liberal standpoint" +
                "\n- Promotes and guides outdoor recreational activity" +
                "\n- Lobbies, endorses political candidates",
            updatedBy: "Alexander", updatedAt: "2019-08-18"
        },
        actions: {
            content: "It's not clear from the [website](https://www.sierraclub.org/climate-and-energy) what exactly actions look like." +
                "\n- 4,500 rallies and events",
            updatedBy: "Alexander", updatedAt: "2019-08-18",

        },
        activeCountries: {
            content: "USA (primarily) and Canada ([Sierra Club Canada](http://www.sierraclub.ca/))",
            updatedBy: "Alexander", updatedAt: "2019-08-18"
        },
        yearlyIncome: {
            content: "[$ 100M] (https://www.latimes.com/archives/la-xpm-2011-nov-19-la-me-sierra-club-20111119-story.html)",
            updatedBy: "Alexander", updatedAt: "2011-11-19"
        },
        members: {
            content: "[3.5+ M] (https://www.sierraclub.org/about-sierra-club)",
            updatedBy: "Alexander", updatedAt: "2011-11-19"
        },
        employees: {
            content: "[about 600] (https://www.latimes.com/archives/la-xpm-2011-nov-19-la-me-sierra-club-20111119-story.html)",
            updatedBy: "Alexander", updatedAt: "2011-11-19"
        },
        participation: {
            content: "[3M+ petition signatures] ()",
            updatedBy: "Alexander", updatedAt: "2011-11-19"
        },
    },
    {
        meta: {
            name: "Idle no more",
            link: "",
            label: "idle-no-more",
        },
    },
    {
        meta: {
            name: "Union of concerned Scientists",
            link: "",
            label: "union-of-concerned-scientists",
        },
    },
    {
        meta: {
            name: "Hambacher Forst",
            link: "",
            label: "hambacher-forst",
        },
    },
];