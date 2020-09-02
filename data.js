var questions = [
    {
        id: 1,
        question: "Do you like basketball?",
        ans: [
            {
                label: "Yes",
                value: "Yes"
            },
            {
                label: "No",
                value: "No"
            },
        ],
        isLast: false,
        type: 'radio',
        rules: {
            minSelectedAns: 1,
            maxSelectedAns: null
        },
    },
    {
        id: 2,
        question: "Which of the following brands would you consider to be your favourite? [Pick top two]",
        ans: [
            {
                label: "NIKE",
                value: "nike"
            },
            {
                label: "Adidas",
                value: "adidas"
            },
            {
                label: "UnderArmour",
                value: "underarmour"
            },
            {
                label: "PUMA",
                value: "puma"
            },
            {
                label: "New Balance",
                value: "newbalance"
            },
        ],
        isLast: false,
        type: 'checkbox',
        rules: {
            minSelectedAns: 2,
            maxSelectedAns: 2
        },
    },
    {
        id: 3,
        question: "How much do you like to watch NBA?",
        ans: 10,
        isLast: true,
        type: 'rating',
        minDescri: 'Hate it',
        maxDescri: 'Love',
        rules: {
            minSelectedAns: 1,
            maxSelectedAns: null
        },
    }
]
