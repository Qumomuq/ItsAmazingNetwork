import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {useUser} from "../hooks/useUser";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {authExists} from "../helpers/AuthHelper";
import Link from 'next/link'
import Head from 'next/head'
import {background} from "@chakra-ui/react";
import '../pages/_document'




function LoginPage() {
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

    // async function successLogin() {
    //     await getAuthUser(password, email)
    //     if (authExists()) {
    //         router.push('/')
    //     }
    // }

    return (
        displayAuthForm&&
        <>
        <div id="main" className="flex  mr-auto ml-auto justify-content-center align-items-center">
            <div className="flex"></div>
            <div className="flex align-items-center justify-content-center">
                <div>
                    <img id="notebook" src="/notebook.png"/>
                    <img id="inside_notebook" src="/img.png"/>
                </div>
                <div id="iconicFull" className="m-5">
                    <div id="iconicLabel" className="container">
                        <p id="iconicTitle" className="ml-4 ml-10">Iconic</p>
                        <p id="iconicText" >про твою уникальность</p>
                    </div>
                    <div id="but" className="container">
                        <form action="/login">
                            <button className="butEntrance ml-14">Войти</button>
                        </form>
                        <form action="/registration">
                            <button className="butReg ml-14 m-5">Зарегистрироваться</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex"></div>
        </div>
    </>
     )

  }

  export default LoginPage