var slcDinnerClub = {
    numberOfMembers: function(){
        return slcDinnerClub.members.length;
    },
    averageAge: 30,
    members: [
        {
            name: "Stacy",
            age: 31,
            isMarried: true,
            favoriteRestaurants: [
                {
                    name: "White Horse",
                    address: "123 Temple St. SLC, 89765",
                    cuisine: "American",
                },
                {
                    name: "Caputo's",
                    address: "475 Capitol St. SLC, 98765",
                    cuisine: "Deli",
                },
                {
                    name: "Ad Hoc",
                    address: "9800 Yountville St. SLC, 64734",
                    cuisine: "New American",
                }
        ]
        },
        {
            name: "Bill",
            age: 30,
            isMarried: false,
            favoriteRestaurants: [
                {
                    name: "R&R",
                    address: "500 Lehi St. SLC, 56788",
                    cuisine: "BBQ",
                },
                {
                    name: "Shoyu",
                    address: "708 University St. SLC, 98065",
                    cuisine: "Ramen",
                }
            ]
        },
        {
            name: "Abby",
            age: 28,
            isMarried: false,
            favoriteRestaurants: [
                {
                    name: "Le Petit Prince",
                    address: "976 Roman Way, SLC, 56798",
                    cuisine: "Italian",
                }
            ]
        }
]
}

slcDinnerClub.meetingDay = "Fridays";
slcDinnerClub.yearEstablished = 2017;
slcDinnerClub.members[3] = "Carl";
slcDinnerClub.members[4] = "Dan";

console.log(slcDinnerClub.numberOfMembers());
console.log(slcDinnerClub.meetingDay);
console.log(slcDinnerClub.yearEstablished);