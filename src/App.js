import ChatApp from "./components/ChatApp"
import Footer from "./components/Footer"

function App() {
  return <main className="bg-[#f5f3f7] h-screen">
    <div className="px-[40px]">
      {/* <div className="absolute -leftd-[25%] w-[50%] h-[50%] rounded-b-[50%] bg-gradient-to-b from-[#e942ff] to-[#8838ff]" /> */}
      <ChatApp />
      <div className="flex flex-col items-center">
        <h1 className="text-[40px] text-[#3e2753] font-medium">Simple booking</h1>
        <p className="text-center text-[#a39daa]">
          Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangements and make
          bookings. Once the walk has been completed you can rate your walker and book again all through the chat.
        </p>
      </div>
    </div>
    <Footer className="fixed bottom-0 w-full bg-[#f5f3f7]" />
  </main>
}

export default App;
