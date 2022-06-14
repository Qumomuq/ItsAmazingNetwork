import { useRouter } from 'next/router'
import {useUser} from "../../hooks/useUser";

import { ElementType, useEffect } from 'react'

export default function withAuth(WrappedComponent: any) {
    const Wrapper = (props: unknown) => {
        const router = useRouter()
        useEffect(() => {
            const user = useUser()
            if (!user) {
                router.replace('/firstpage')
            }
        }, [])
        return <WrappedComponent {...props} />
    }

    return Wrapper
}