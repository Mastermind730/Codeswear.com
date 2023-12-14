import mongoose from "mongoose";

 const productModel= new mongoose.Schema({
        title:{type:String,required:true},
        slug:{type:String,required:true,unique:true},
        desc:{type:String,required:true},
        img:{type:String,required:true},
        category:{type:String,required:true},
        size:{type:String},
        color:{type:String},
        price:{type:String,required:true},
        availableQty:{type:Number,required:true},
        products:[{
            productId:{type:String,required:true},
            quantity:{type:String,required:true}
        }],
        address:{type:String,required:true},
        amount:{type:Number,required:true},
        status:{type:String,default:"pending",required:true},


 },{timestamps:true});


 export const product=mongoose.models.products || mongoose.model("products",productModel)