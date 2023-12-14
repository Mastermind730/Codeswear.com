import mongoose from "mongoose";

 const OrderModel= new mongoose.Schema({
        userId: { type: String, required: true },
        products:[{
            productId:{type:String,required:true},
            quantity:{type:String,required:true}
        }],
        address:{type:String,required:true},
        amount:{type:Number,required:true},
        status:{type:String,default:"pending",required:true},


 },{timestamps:true});


 export const orders=mongoose.models.orders || mongoose.model("orders",OrderModel)