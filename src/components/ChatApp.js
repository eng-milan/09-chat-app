import { IoIosArrowBack } from "react-icons/io";
import { BiDotsVerticalRounded } from "react-icons/bi";
import userAvatar from "../images/avatar.jpg"
import dog1 from "../images/dog-image-1.jpg"
import dog2 from "../images/dog-image-2.jpg"
import dog3 from "../images/dog-image-3.jpg"

function ChatApp() {
    return <div>
        <div className="flex justify-between items-center bg-gradient-to-r from-[#8838ff] to-[#e942ff]">
            <IoIosArrowBack className="text-[24px] text-[#ffffff]" />
            <div className="flex">
                <img className="w-[50px] rounded-[50%] border border-[#ffffff] border-2" src={userAvatar} alt="user avatar" />
                <div>
                    <h2 className="text-[22px] text-[#ffffff] font-bold">Samuel Green</h2>
                    <span className="text-[#d89eff]">Available to Walk</span>
                </div>
            </div>
            <BiDotsVerticalRounded className="text-[24px] text-[#d89eff]" />
        </div>
        <div>
            <p>That sounds great. I'd be happy to discuss more.</p>
            <p>Could you send over some pictures of your dog. please?</p>
            <div className="flex">
                <img className="w-[100px] h-[100px]" src={dog1} alt="dog" />
                <img className="w-[100px] h-[100px]" src={dog2} alt="dog" />
                <img className="w-[100px] h-[100px]" src={dog3} alt="dog" />
            </div>
            <p>Here are a few pictures. She's a happy girl!</p>
            <p>Can you make it?</p>
            <p>She looks so happy! The time we discussed works. How long shall I take her out for?</p>
            <div className="flex">
                <input type="radio" />
                <span>30 minute walk</span>
                <span>$29</span>
            </div>
            <div className="flex">
                <input type="radio" />
                <span>1 hour walk</span>
                <span>$49</span>
            </div>
            <input type="text" placeholder="Type a message..." />
        </div>
    </div>
}

export default ChatApp