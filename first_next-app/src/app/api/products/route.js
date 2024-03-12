import { NextResponse } from "next/server";

export async function GET(req){
    return NextResponse.json({"mesg" : "hello nextjs api"})
}