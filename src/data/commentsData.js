import dog1 from "../images/dog-image-1.jpg"
import dog2 from "../images/dog-image-2.jpg"
import dog3 from "../images/dog-image-3.jpg"

const commentsData = [
    {
        id: 1,
        user: "Samuel Green",
        comment: "That sounds great. I'd be happy to discuss more."
    },
    {
        id: 2,
        user: "Samuel Green",
        comment: "Could you send over some pictures of your dog. please?"
    },
    {
        id: 3,
        user: "admin",
        images: [
            dog1, dog2, dog3
        ]
    },
    {
        id: 4,
        user: "admin",
        comment: "Here are a few pictures. She's a happy girl!"
    },
    {
        id: 5,
        user: "admin",
        comment: "Can you make it?"
    },
    {
        id: 6,
        user: "Samuel Green",
        comment: "She looks so happy! The time we discussed works. How long shall I take her out for?"
    },
    {
        id: 7,
        user: "Samuel Green",
        walkingOptions: [{ time: "30 minute walk", fee: "$29" }, { time: "1 hour walk", fee: "$49" }]
    }
]

export default commentsData