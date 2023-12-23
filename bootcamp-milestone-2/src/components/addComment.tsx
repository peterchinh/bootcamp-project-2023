'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import styles from "./addComment.module.css";


export default function AddComment({ slug }: { slug: string }) {
    const url = slug; // url to corresponding api comment router
    const router = useRouter();

    // useState hook to initialize user's and comment's state
    const [user, setUser] = useState('')
    const [comment, setComment] = useState('')

    const handleReply = async () => {
        // Check if inputs are valid (doesn't consist of only whitespace)
        if (user.trim() !== '' && comment.trim() !== '') {
            const data = { user, comment }; // store user and comment as data to send to api
            try {
                // Send a POST request to the specified API endpoint with the given data
                const res = await fetch(`${process.env.API_URL}/api/${url}`, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    cache: "no-store",
                });

                // Throw error if request failed
                if (!res.ok) {
                    throw new Error("Failed to fetch blog");
                }

                // Clear fields
                setUser('');
                setComment(''); 
                
                // Refresh the page after successful POST
                router.refresh();

                return res.json();
            }
            catch (err: unknown) {
                return null;
            }
            
        }
    }

    return (
        <div className={styles.addComment}>
            <input
                type="text"
                placeholder="Your name"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                className={styles.user}
            />
            <textarea
                placeholder="Add your comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className={styles.comment}
            ></textarea>
            <button onClick={handleReply} className={styles.reply}>Reply</button>
        </div>
    );
}