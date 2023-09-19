import userEvent from "@testing-library/user-event";

export const design2 = {
    conferenceName: "Conference Name",
    subNumber: 1500,
    prevSubNumber: 1300,
    acceptRate: 50,
    trendTag: [
        {name: "Neural Network", id: 157},
        {name: "Data Analysis", id: 131},
        {name: "fake data 1", id: 121},
        {name: "fake data 2", id: 121},
        {name: "fake data 3", id: 121},
        {name: "fake data 4", id: 121},
        {name: "fake data 5", id: 121},
        {name: "fake data 6", id: 121}],
    awards: [
        {award: "Best paper", paperTitle: "paper title that is usually pretty long"},
        {award: "Best paper", paperTitle: "paper title that is usually pretty long"},
        {award: "Best paper", paperTitle: "paper title that is usually pretty long"}]
};

export const design1 = {
    searchProfiles: [
        {type: "user", name: "Hao Li", image: ""},
        {type: "user", name: "JW Hong", image: ""}
    ],
    searchPapers: [
        {type: "paper", title: "Programming Network Stack for Middleboxes with Rubik", authors: "Hao Li, Xian; Charghao Wu, Xian; Guanda Sun, Peng Zhang, and Danfeng Shan, Xian"},
        {type: "paper", title: "Are you ready for artificial Mozart and Skrillex? An experiment testing expectancy violation theory and AI music", authors: "JW Hong, Q Peng, Hao Li Xian, JW Hong"}
    ]
}