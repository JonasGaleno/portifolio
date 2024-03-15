import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request, response: Response) {
    const secretKey = process?.env?.RECAPTCHA_SECRET_KEY;
    let success:boolean = false;
    const postData = await request.json();
    const { googleRecaptchaToken, name, email, message } = postData;

    console.log(
        "googleRecaptchaToken,name,email,message:",
        googleRecaptchaToken?.slice(0, 10) + "...",
        name,
        email,
        message
    );

    let res: any;
    const formData = `secret=${secretKey}&response=${googleRecaptchaToken}`;
    
    try {
        res = await axios.post(
            "https://www.google.com/recaptcha/api/siteverify",
            formData,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
    } catch (e) {
        console.log("recaptcha error:", e);
    }

    if (res && res.data?.success && res.data?.score > 0.5) {
        success = true;

        console.log(`Sucesso no captcha com pontuação: ${res.data?.score}`)
    }

    return NextResponse.json({ 
        success: success, 
        name, 
        score: res.data?.score 
    });
}