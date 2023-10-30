import { NextResponse } from "next/server";

export default middleware= (request) =>{
    console.log('holaaaaa');
    return NextResponse.next()
}