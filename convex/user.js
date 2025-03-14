import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createUser=mutation({
    args:{
        userName:v.string(),
        email:v.string(),
        imageUrl:v.string()
    },
    handler:async(ctx,args)=>{
        // check if user is already existing ..
        const user = await ctx.db.query('users').filter((q)=> q.eq(q.field('email'),args.email)).collect();

        if (user?.length == 0){
            // user is new Insert into database:
            await ctx.db.insert('users',{
                email:args.email,
                userName:args.userName,
                imageUrl:args.imageUrl
            });

            return "New User is Inserted "
        }

        return "User Already Existing"

    }
})