import withAuth from "../components/private/PrivateRoot";
import * as React from "react";
import {useEffect, useState} from "react";
import Modal from "../components/ModalWindow/Modal"
import {router} from "next/client";
import {logout} from "../helpers/AuthHelper";

//функция выхода из аккаунта не доработана и вызывает непредвиденные ошибки, поэтому ее пока нет
//токен можно удалить из браузера для тестов

function Index() {
    const [modalActive, setModalActive]=useState(false)
    //const [out,setOut]=useState(false)
    // useEffect(() => {
    //
    //     console.log('Out form: ', out)
    //     if (out) {
    //         logout()
    //         router.push('/')
    //     }
    // }, [])
    // async function exit(){
    //     if (authExists()) {
    //         awlogout()
    //         if (!authExists()) {
    //             router.push('/firstpage')
    //         }
    //     }
    // }



    return(
        <div>
            <div>
                <div className="w-full space-y-5 md:w-3/5 md:pr-16">
                    <button className="w-full px-3 py-4 font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-500 transition 0.4s" onClick={() => setModalActive(true)}>Модальное окно для резюме</button>
                </div>
            </div>



            {/*Здесь Анин код, который неправильно отображается*/}

            {/*<div>*/}

            {/*<div className="Wrapper clear"/>*/}
            {/*<header className="d-flex justify-between">*/}
            {/*<div className="d-flex align-center ml-50 mt-10">*/}
            {/*<img width={135} height={60} src="/img/logo_button.svg"/>*/}
            {/*</div>*/}
            {/*<div className="search-block d-flex align-center justify-center mt-25">*/}
            {/*<img width={29} height={29} src="/img/magnifier1.svg" alt="Search"/>*/}
            {/*<input placeholder="Поиск..."/>*/}

            {/*</div>*/}
            {/*<ul className="HeaderIcon d-flex justify-between">*/}
            {/*<li className="mr-30 mt-30">*/}
            {/*<img className="mr-30" width={30} height={30} src="/img/user_button.svg"/>*/}
            {/*<img className="mr-30" width={30} height={30} src="/img/massage_button.svg"/>*/}
            {/*<img className="mr-30" width={30} height={30} src="/img/notifications_button.svg"/>*/}
            {/*<img className="mr-30" width={30} height={30} src="/img/settings_button.svg"/>*/}
            {/*</li>*/}
            {/*</ul>*/}
            {/*</header>*/}
            {/*<hr className="m"/>*/}
            {/*<div>*/}
            {/*<div>*/}
            {/*<img className="photo" src="/img/photo.jpg" />*/}
            {/*<h1 className="name"> katya_photovl</h1>*/}

            {/*<li>*/}
            {/*<button className="followers d-flex align-center justify-center">Подписчики</button>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*<button className="following d-flex align-center justify-center">Подписки</button>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*<button className="money d-flex align-center justify-center">Кошелёк</button>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*<button className="resume d-flex align-center justify-center hover:bg-indigo-500" onClick={() => setModalActive(true)}>(Модальное окно для будущего резюме) Резюме</button>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*<button className="follow d-flex align-center justify-center ">Подписаться</button>*/}
            {/*</li>*/}

            {/*</div>*/}
            {/*<div className="content d-flex"/>*/}
            {/*<div className="posts d-flex justify-between align-center"/>*/}
            {/*<div className="responsive">*/}
            {/*<div className="gallery">*/}
            {/*<img width={240} height={185} src="/img/posts/pic1.jpg" alt="" />*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*<div className="responsive">*/}
            {/*<div className="gallery">*/}
            {/*<img width={240} height={185} src="/img/posts/pic2.jpg" alt="" />*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*<div className="responsive">*/}
            {/*<div className="gallery">*/}
            {/*<img width={240} height={185} src="/img/posts/pic3.jpg" alt="" />*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*<div className="responsive">*/}
            {/*<div className="gallery">*/}
            {/*<img width={240} height={185} src="/img/posts/pic4.jpg" alt="" />*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*    </div>*/}
        {/*<div>*/}
        {/*<img width={240} height={185} src="/img/posts/pic2.jpg" alt="" />*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*<img width={240} height={185} src="/img/posts/pic3.jpg" alt="" />*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*<img width={240} height={185} src="/img/posts/pic4.jpg" alt="" />*/}
        {/*</div>*/}
        {/*        </div>*/}
            <Modal active={modalActive} setActive={setModalActive}>
                <p>Здесь будет резюме</p>

            </Modal>

        </div>

    )
}
export default withAuth(Index)