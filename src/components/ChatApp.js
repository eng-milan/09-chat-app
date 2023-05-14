import { IoIosArrowBack } from "react-icons/io";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Comment from "./Comment"
import commentsData from "../data/commentsData"
import userAvatar from "../images/avatar.jpg"

function ChatApp() {

    const renderedComments = commentsData.map((comment) => {

        const renderedImages = (images) => {
            return images.map((image) => {
                return <img key={image} className="w-[100px] h-[100px]" src={image} alt="dog" />
            })
        }

        const renderedOptions = (options) => {
            return options.map((option) => {
                return <div className="flex" key={option.time}>
                    <input type="radio" id={option.time} />
                    <label htmlFor={option.time} >{option.time}</label>
                    <span>{option.fee}</span>
                </div>
            })
        }
        return <div className={comment.user === "admin" ? "bg-[#ffffff] text-[#6e5d7e]" : "bg-[#d89eff] text-[#9241c8]"} key={comment.id}>
            {comment.comment ? <p>{comment.comment}</p> : null}
            {comment.images ?
                <div className="flex">{renderedImages(comment.images)}</div>
                : null}
            {comment.walkingOptions ? renderedOptions(comment.walkingOptions) : null}
        </div>
    })

    return <div className="p-[10px] bg-[#ffffff] rounded-[30px]">
        <div className="bg-[#f5f3f7] rounded-t-[30px]">
            <div className="flex justify-between items-center pt-[40px] px-[15px] pb-[20px] bg-gradient-to-r from-[#8838ff] to-[#e942ff] rounded-t-[30px]">
                <div className="flex items-center">
                    <IoIosArrowBack className="text-[24px] text-[#ffffff]" />
                    <img className="w-[50px] rounded-[50%] border border-[#ffffff] border-2" src={userAvatar} alt="user avatar" />
                    <div>
                        <h2 className="text-[22px] text-[#ffffff] font-medium">Samuel Green</h2>
                        <span className="text-[#d89eff]">Available to Walk</span>
                    </div>
                </div>
                <BiDotsVerticalRounded className="text-[24px] text-[#d89eff]" />
            </div>
            <div className="">
                {renderedComments}
            </div>
        </div>
    </div>
    // return <div className="p-[10px] bg-[#ffffff] rounded-[30px]">
    //     <div className="bg-[#f5f3f7] rounded-[30px]">
    //         <div className="flex justify-between items-center pt-[40px] px-[15px] pb-[20px] bg-gradient-to-r from-[#8838ff] to-[#e942ff] rounded-t-[30px]">
    //             <div className="flex items-center">
    //                 <IoIosArrowBack className="text-[24px] text-[#ffffff]" />
    //                 <img className="w-[50px] rounded-[50%] border border-[#ffffff] border-2" src={userAvatar} alt="user avatar" />
    //                 <div>
    //                     <h2 className="text-[22px] text-[#ffffff] font-medium">Samuel Green</h2>
    //                     <span className="text-[#d89eff]">Available to Walk</span>
    //                 </div>
    //             </div>
    //             <BiDotsVerticalRounded className="text-[24px] text-[#d89eff]" />
    //         </div>
    //         <div>
    //             <p>That sounds great. I'd be happy to discuss more.</p>
    //             <p>Could you send over some pictures of your dog. please?</p>
    //             <div className="flex">
    //                 <img className="w-[100px] h-[100px]" alt="dog" />
    //                 <img className="w-[100px] h-[100px]" alt="dog" />
    //                 <img className="w-[100px] h-[100px]" alt="dog" />
    //             </div>
    //             <p>Here are a few pictures. She's a happy girl!</p>
    //             <p>Can you make it?</p>
    //             <p>She looks so happy! The time we discussed works. How long shall I take her out for?</p>
    //             <div className="flex">
    //                 <input type="radio" />
    //                 <span>30 minute walk</span>
    //                 <span>$29</span>
    //             </div>
    //             <div className="flex">
    //                 <input type="radio" />
    //                 <span>1 hour walk</span>
    //                 <span>$49</span>
    //             </div>
    //             <input type="text" placeholder="Type a message..." />
    //         </div>
    //     </div>
    // </div>
}

export default ChatApp