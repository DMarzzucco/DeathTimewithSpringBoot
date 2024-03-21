import { useState, useRef } from "react";
import { InpForm } from "./Comp";
import emailjs from "@emailjs/browser";
import { Confirm, Loader } from "./FormComps";
export function Forml() {
    const reForm = useRef();
    const [mesSent, setMesSent] = useState(false);
    const [sending, setSending] = useState(false);
    const sendEmail = async (event) => {
        event.preventDefault();
        setSending(true);
        const serviceID = "service_xhmxkjl";
        const template = "template_7yi1umj";
        const key = "iT8BqbWUbZqyQKCa9";
        try {
            await emailjs.sendForm(serviceID, template, reForm.current, key);
            setMesSent(true);
        } catch (error) {
            console.log(error);
        } finally { setSending(false); }
    }
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-40"> Contact Me</h1>
                {mesSent && <Confirm />}
                <form ref={reForm} onSubmit={sendEmail} className="flex flex-col p-2 -ml-3 items-center ">
                    <InpForm type={"text"} name={"name"} placeholder={"Name"} />
                    {sending && <Loader />}
                    <InpForm type={"text"} name={"phone"} placeholder={"Phone"} pattern={"[0-9]*"} title={"Just Numbers..."} />
                    <InpForm type={"text"} name={"mail"} placeholder={"Mail"} />
                    <InpForm type={"text"} name={"cont"} placeholder={"Context"} />
                    <textarea name="message" id="" cols="30" rows="10" placeholder="Message"
                        required className="w-full p-2 m-2 border rounded-lg border-Gr bg-blackGray" />
                    <input type="submit" value={"Send"} className="cursor-pointer w-full 
                    p-2 m-2 border rounded-lg border-Gr bg-blackGray
                     hover:bg-slate-300 hover:text-blackGray" />
                </form>
            </div>
        </>
    )
}