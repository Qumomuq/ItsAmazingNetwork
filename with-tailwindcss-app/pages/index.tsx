import withAuth from "../components/private/PrivateRoot";
import * as React from "react";
import {useEffect, useState} from "react";
import Modal from "../components/ModalWindow/Modal"

function Index() {
    const [modalActive, setModalActive]=useState(true)
    return(
        <>
            <div className="w-full space-y-5 md:w-3/5 md:pr-16">
                <p className="font-medium text-indigo-600 uppercase">Название сайта</p>
                <h2 className="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
                    Что-нибудь еще очень интересное...
                </h2>
                <div>
                    <button className="w-full px-3 py-4 font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-500 transition 0.4s" onClick={() => setModalActive(true)}>Модальное окно для резюме</button>
                </div>
                <p className="text-xl text-gray-600 md:pr-16">Learn how to engage with your visitors and teach
                    them about your mission. We're revolutionizing the way customers and businesses
                    interact.</p>

            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <p>Здесь будет резюме</p>
                <div>rrr</div>
            </Modal>
        </>
    )
}
export default withAuth(Index)