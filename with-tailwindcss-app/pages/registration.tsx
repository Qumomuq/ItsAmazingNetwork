import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {useUser} from "../hooks/useUser";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";


function registrationPage() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [phone, setPhone] = useState("")
    const [password2, setPassword2] = useState("")
    const router = useRouter()
    let [displayAuthForm, setDisplayAuthForm] = useState(false)
    const user = useUser()
    useEffect(() => {
        setDisplayAuthForm(localStorage !== undefined && !user)
        console.log('Auth form: ', displayAuthForm)
        if (user) {
            router.push('/')
        }
    }, [])

    const {getAuthUser} = useActions()
    const reg = useTypedSelector(state => state.reg)
    const {getRegUser} = useActions()


    // let re = /@mail.ru/gi;
    // let str = email;
    // let newstr = str.replace(re, '');
    // console.log(newstr)

    async function successReg() {
        if (password !== password2) {
            console.log("Passwords do not match", "danger");
        } else {
            if (await getRegUser(username,password,email,first_name,last_name,phone)) {
                router.push('/login')
            }
        }
    }

    return (
        <>
        displayAuthForm &&
        <section className="w-full bg-white ">
            <div className="mx-auto max-w-8xl">
                <div className="flex flex-col h-screen lg:flex-row">
                    <div
                        className="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100">
                        <div
                            className="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
                            <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                                <div className="relative">
                                    <p className="mb-2 font-medium text-gray-700 uppercase">Название сайта</p>
                                    <h2 className="text-5xl font-bold text-gray-900 xl:text-6xl">Преимущества сайта</h2>
                                </div>
                                <p className="text-2xl text-gray-700">We've created a simple formula to follow in order
                                    to gain more out of your business and your application.</p>
                                <a href="#_"
                                   className="inline-block px-8 py-5 text-xl font-medium text-center text-white transition duration-200 bg-indigo-600 hover:bg-indigo-700 ease rounded-full">Get
                                    Started Today</a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full bg-white lg:w-6/12 xl:w-5/12">
                        <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                            <h4 className="w-full text-3xl font-bold">Signup</h4>
                            <p className="text-lg text-gray-500">or, if you have an account you can <a href="/login"
                                                                                                       className="text-indigo-600 underline">sign
                                in</a></p>
                            <div  className="relative w-full mt-10 space-y-8">
                                <div className="relative">
                                    <label className="font-medium text-gray-900">Name</label>
                                    <input type="text"
                                           className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-50 rounded-full"
                                           placeholder="Enter Your Name"/>
                                    {/*// onChange={(e) => setEmail(e.target.value)} value={email} />*/}
                                </div>
                                <div className="relative">
                                    <label className="font-medium text-gray-900">Username</label>
                                    <input type="text"
                                           className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-50 rounded-full"
                                           placeholder="Enter Your Username"
                                           onChange={(e) => setUsername(e.target.value)} value={username}/>
                                </div>
                                <div className="relative">
                                    <label className="font-medium text-gray-900">Password</label>
                                    <input type="password"
                                           className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-50 rounded-full"
                                           placeholder="Password"
                                           onChange={(e) => setPassword(e.target.value)} value={password}/>
                                </div>
                                <div className="relative">
                                    <label className="font-medium text-gray-900">Email</label>
                                    <input type="text"
                                           className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-50 rounded-full"
                                           placeholder="Enter Your Email Address"
                                           onChange={(e) => setEmail(e.target.value)} value={email}/>
                                </div>
                                <div className="relative">
                                    <label className="font-medium text-gray-900">First </label>
                                    <input type="text"
                                           className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-50 rounded-full"
                                           placeholder="Enter Your first"
                                           onChange={(e) => setFirst_name(e.target.value)} value={first_name}/>
                                </div>
                                <div className="relative">
                                    <label className="font-medium text-gray-900">Last</label>
                                    <input type="text"
                                           className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-50 rounded-full"
                                           placeholder="Enter Your last"
                                           onChange={(e) => setLast_name(e.target.value)} value={last_name}/>
                                </div>
                                <div className="relative">
                                    <label className="font-medium text-gray-900">Phone</label>
                                    <input type="text"
                                           className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-50 rounded-full"
                                           placeholder="Enter Your phone"
                                           onChange={(e) => setPhone(e.target.value)} value={phone}/>
                                </div>
                                <div className="relative">
                                    <label className="font-medium text-gray-900">Repeat the password </label>
                                    <input type="password"
                                           className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-50 rounded-full"
                                           placeholder="Password"
                                           onChange={(e) => setPassword2(e.target.value)} value={password2}/>
                                </div>
                                <div className="relative">
                                    <button onClick={successReg}
                                            className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-indigo-600 hover:bg-indigo-700 ease rounded-full">Create
                                        Account
                                    </button>
                                    <a href="#"
                                       className="inline-block w-full px-5 py-4 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 hover:bg-gray-100 ease rounded-full">Sign
                                        up with Google</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
            <style>

            </style>
        </>
    )
};


export default registrationPage;
