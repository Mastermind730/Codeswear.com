import mongoose from "mongoose";
import { product } from "@/lib/model/products";
import { connectionSrt } from "@/lib/dbconnect";
import { NextResponse } from "next/server";




export async function GET() {
    let data = [];
    let tshirts = {};

    try {
        await mongoose.connect(connectionSrt);
        data = await product.find();

        for (let item of data) {
            if (item.title in tshirts) {
                if (!tshirts[item.title].color.includes(item.color) && item.availableQty > 0) {
                    tshirts[item.title].color.push(item.color);
                }
                if (!tshirts[item.title].size.includes(item.size) && item.availableQty > 0) {
                    tshirts[item.title].size.push(item.size);
                }
            } else {
                tshirts[item.title] = JSON.parse(JSON.stringify(item));
                if (item.availableQty > 0) {
                    tshirts[item.title].color = [item.color];
                    tshirts[item.title].size = [item.size];
                }
            }
        }
    } catch (error) {
        data = { success: false };
    }

    return NextResponse.json(tshirts);
}



export async function POST(req) {
    try {
        const payload = await req.json();

        // Connect to MongoDB
        await mongoose.connect(connectionSrt);

        // Create a new product instance
        let newProduct = new product(payload);

        // Save the product to the database
        const result = await newProduct.save();

        // Close the MongoDB connection
        await mongoose.connection.close();

        return NextResponse.json({ result, success: true });
    } catch (error) {
        console.error("Error:", error.message);

        // Make sure to close the MongoDB connection in case of an error
        await mongoose.connection.close();

        return NextResponse.json({ error: "Connection failed", success: false });
    }
}