import dbConnect from "../../../utils/dbConnect.js";
import Post from "../../../model/Posts.js";

dbConnect();

export default async (request, response) => {
    const { method } = request;

    switch(method){
        case "GET":
            try {
                const posts = await Post.find({});
                response.status(200).json({ success: true, data: posts })
            } catch (error) {
                response.status(400).json({ success: false })
            }
            break;
        case "POST":
            try {
                const post = await Post.create(request.body);
                response.status(201).json({ success: true, data: post })
            } catch (error) {
                response.status(400).json({ success: false })
            }
            break;
        default:
            response.status(400).json({ success: false, error: "Request Verb Must be Either GET or POST"})
    }
}