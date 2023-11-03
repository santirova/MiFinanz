import { NextResponse } from "next/server";

export default middleware= (request) =>{
    return NextResponse.next()
}