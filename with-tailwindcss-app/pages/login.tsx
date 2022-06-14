import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {useUser} from "../hooks/useUser";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {authExists} from "../helpers/AuthHelper";
import Link from 'next/link'
import Head from "next/head";
import '../pages/_document'

function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
    let [displayAuthForm, setDisplayAuthForm] = useState(false)
    const user = useUser()

    useEffect(() => {
        setDisplayAuthForm(localStorage !== undefined && !user)
        console.log('Auth form: ', displayAuthForm)
        if (user) {
            router.push('/')
        }
    }, [user])

    const AuthSelect = useTypedSelector(state => state.auth)
    const {getAuthUser} = useActions()

    async function successLogin() {
         getAuthUser(password, email)
        if (authExists()) {
            router.push('/')
        }
    }

    return (
        displayAuthForm &&
            <section>
        <div id="dev0">

            <p className = "iconic">Iconic</p>
            <p className = "text_number">Введите номер</p>
            <p className = "text_number text_dop">Ваш номер телефона будет<br/> использоваться для входа в аккаунт</p>
            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="inputLogin" placeholder="Email или телефон"/><br/>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="inputLogin " placeholder="Пароль"/>
            <form >
                <button onClick={successLogin} className="butNext ">Продолжить</button>
            </form>
            <p className="w-full mt-4 text-sm text-center text-gray-500">Нет аккаунта?
             <Link href="/registration" className="text-blue-500 underline">Зарегистрируйтесь здесь</Link></p>
        </div>
            </section>
        // <section className=" w-full px-8 bg-gray-100  xl:px-8">
        //     <div className="max-w-5xl mx-auto">
        //         <div className="flex h-screen flex-col items-center md:flex-row">
        //
        //             <div className="w-full space-y-5 md:w-3/5 md:pr-16">
        //                 <p className="font-medium text-indigo-600 uppercase">Название сайта</p>
        //                 <h2 className="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
        //                     Что-нибудь еще очень интересное...
        //                 </h2>
        //                 <p className="text-xl text-gray-600 md:pr-16">Learn how to engage with your visitors and teach
        //                     them about your mission. We're revolutionizing the way customers and businesses
        //                     interact.</p>
        //             </div>
        //
        //             <div className="w-full mt-16 md:mt-0 md:w-2/5">
        //                 <div
        //                     className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 shadow-2xl px-7 rounded-3xl">
        //                     <h3 className="mb-6 text-2xl font-medium text-center">Sign in to your Account</h3>
        //                     <input type="text" name="email"
        //                            className="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 focus:ring focus:ring-indigo-600 focus:outline-none rounded-full"
        //                            placeholder="Email address"
        //                            value={email} onChange={(e) => setEmail(e.target.value)}/>
        //                     <input type="password" name="password"
        //                            className="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 focus:ring focus:ring-indigo-600 focus:outline-none rounded-full"
        //                            placeholder="Password"
        //                            value={password} onChange={(e) => setPassword(e.target.value)}/>
        //                     <div className="block">
        //                         <button onClick={successLogin}
        //                                 className="w-full px-3 py-4 font-medium text-white bg-indigo-600 rounded-full">Log
        //                             Me In
        //                         </button>
        //                     </div>
        //                     <p className="w-full mt-4 text-sm text-center text-gray-500">Нет аккаунта?
        //                         <Link href="/registration" className="text-blue-500 underline">Зарегистрируйтесь здесь</Link></p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>

    )
}

export default LoginPage