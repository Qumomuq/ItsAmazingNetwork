import Navbar from "../components/navbar/Navbar.jsx";
import BodyE from "../components/bodyE/BodyE";
import withAuth from "../components/private/PrivateRoot";
import {useMobileMenuState} from "../components/dashboard/useMobileMenuState";
import { Flex, HStack, useColorModeValue as mode } from '@chakra-ui/react'
import {MobileHamburgerMenu} from "../components/dashboard/MobileHamburgerMenu";
import {NavMenu} from "../components/dashboard/NavMenu";
import {Logo} from "../components/dashboard/Logo";
import {Notification} from "../components/dashboard/Notification";
import {ProfileDropdown} from "../components/dashboard/ProfileDropdown";
import {PageHeader} from "../components/dashboard/PageHeader";
import {PageContent} from "../components/dashboard/PageContent";
import * as React from "react";
import {useEffect, useState} from "react";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
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
//     const { isMenuOpen, toggle } = useMobileMenuState()
//
//
//     const licenses = useTypedSelector(state => state.licenses)
//     const {getLicensesData} = useActions()
//     useEffect(() => {
//         getLicensesData()
//     }, [])
//
//     return (<>
//             <Flex direction="column" bg={mode('gray.100', 'gray.800')} height="100vh">
//                 <Flex align="center" bg="blue.600" color="white" px="6" minH="16">
//                     <Flex justify="space-between" align="center" w="full">
//                         <MobileHamburgerMenu onClick={toggle} isOpen={isMenuOpen} />
//                         <NavMenu.Mobile />
//
//                         {/* Desktop Logo placement */}
//                         <Logo display={{ base: 'none', lg: 'block' }} flexShrink={0} h="5" marginEnd="10" />
//
//                         {/* Desktop Navigation Menu */}
//                         <NavMenu.Desktop />
//
//                         {/* Mobile Logo placement */}
//                         <Logo flex={{ base: '1', lg: '0' }} display={{ lg: 'none' }} flexShrink={0} h="5" />
//
//                         <HStack spacing="3">
//                             <Notification display={{ base: 'none', lg: 'inline-flex' }} />
//                             <ProfileDropdown />
//                         </HStack>
//                     </Flex>
//                 </Flex>
//
//                 <PageHeader  />
//                 {!licenses.loading && <PageContent />}
//             </Flex>
//
//         </>
//     )
// }
export default withAuth(Index)