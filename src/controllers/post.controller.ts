import { Request, Response } from "express";
import { connect } from '../database';
import { Post} from '../interface/post.interface'


export async function getPosts(req: Request ,res: Response): Promise<Response> {
    const conn = await connect();
    const posts = await conn.query('SELECT * FROM posts');
    return res.json(posts[0])
};

export async function createPost(req:Request, res:Response) {
    const newPost: Post = req.body;
    const conn = await connect();
    conn.query('INSERT INTO posts SET ?', [newPost])
    return res.json({
        "message": 'Post Created'
    });
};