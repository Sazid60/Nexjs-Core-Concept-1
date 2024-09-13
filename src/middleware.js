// import { NextResponse } from "next/server"

// const user = true;

// export const middleware = (request) => {
//     // conditional 
//     // if(request.nextUrl.pathname.startsWith('/about')){
//     //     return NextResponse.redirect(new URL('/contacts', request.url))
//     // }

//     if (!user) {
//         return NextResponse.redirect(new URL('/login', request.url))
//     }
//     return NextResponse.next()

//     // return NextResponse.redirect(new URL('/about/history', request.url))
//     // eta path name thik rakhbe

//     // return NextResponse.rewrite(new URL('/about/history', request.url))
//     // eta pathname rewrite kore only /about dekhabe
// }

// // export const config = {
// //     // matcher: "/about"
// //     matcher: ["/about", "/services"]
// //     // j kuno akta jodi match kore take redirect kore pathai dibe or rewrite kore felbe
// // }

// export const config = {
//     matcher: ["/dashboard", "/services"]
// }


// For Cookies checking
import { NextResponse } from "next/server"



export const middleware = (request) => {

    const cookies = request.cookies.get('token')
    
    if (!cookies) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next()
}


export const config = {
    matcher: ["/dashboard", "/services"]
}