import React  from "react";
import Card from "../components/core/Card";
import BookingSection from "../components/core/BookingSection";
import Navbar from "../components/Navbar";
import Footer from "../components/core/Footer";
import TimeLine from "../components/core/TimeLine";
import ReadingSection from "../components/core/ReadingSection";
import { Modal } from "../components/modals/Modal";
import { LogoutModal } from "../components/modals/LogoutModal";
import { useContext } from "react";
import ModalContext from "../context/ModalContext"; 

const Home = () => {
  
  const{openLogoutModal,setOpenLogoutModal} = useContext(ModalContext);
  return (
    <div className="">
      
      <div>
        {/* section 1 */}
        <div className="flex w-[100%]  ">
          <Navbar />
        </div>
        <div className="flex flex-col text-white items-center justify-between">
          <div className="">
            <Card />
          </div>
          <div>
            <BookingSection />
          </div>
        </div>

        {/* section 2 */}

        {/* section 3 */}
        <TimeLine />

        {/* section 4 footer */}
        <div>
          <ReadingSection />
        </div>
        <div>
          <Footer />
        </div>
      </div>
      <Modal open={openLogoutModal} setOpen={setOpenLogoutModal}  >
      <LogoutModal setOpen={setOpenLogoutModal}></LogoutModal>
      </Modal>
    </div>
  );
};

export default Home;
