import { NextResponse } from "next/server";
// import mongoose from "mongoose";
// import { connectionSrt } from "@/lib/dbconnect";
export async function GET(req,res) {

    // await mongoose.connect(connectionSrt);
    // console.log("Connected Successfully");
    return NextResponse.json([411048,411046,411040]);
}