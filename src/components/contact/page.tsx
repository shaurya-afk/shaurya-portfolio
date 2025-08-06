"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

export function Contact() {
    const [status, setStatus] = React.useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const res = await fetch("https://formspree.io/f/xnnzbqgy", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: formData,
            });

            if (res.ok) {
                setStatus("success");
                form.reset(); // clear form
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        }
        console.log("Form submitted");
    };
    
    return (
        <section className="py-10">
            <div className="max-w-4xl mx-auto px-4">
                <h2 id="contact-heading" className="sr-only">
                    Contact Shaurya Sharma - Get in Touch
                </h2>
                
                <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
                    <form className="my-8" onSubmit={handleSubmit} aria-labelledby="contact-heading">
                        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                            <LabelInputContainer>
                                <Label htmlFor="firstname">Name</Label>
                                <Input 
                                    id="firstname" 
                                    name="name" 
                                    placeholder="Shaurya" 
                                    type="text" 
                                    required 
                                    aria-describedby="name-help"
                                />
                                <div id="name-help" className="sr-only">
                                    Please enter your full name
                                </div>
                            </LabelInputContainer>
                        </div>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="email">Email Address</Label>
                            <Input 
                                id="email" 
                                name="email" 
                                placeholder="shauryasha090@gmail.com" 
                                type="email" 
                                required 
                                aria-describedby="email-help"
                            />
                            <div id="email-help" className="sr-only">
                                Please enter a valid email address
                            </div>
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="message" className="mb-2 block text-sm font-medium">
                                Tell me something?
                            </Label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="I want to connect!"
                                className="w-full h-32 rounded-md border border-neutral-300 bg-transparent px-4 py-2 text-sm text-white placeholder-neutral-500 outline-none focus:ring-2 focus:ring-beige resize-none"
                                required
                                aria-describedby="message-help"
                            />
                            <div id="message-help" className="sr-only">
                                Please enter your message or inquiry
                            </div>
                        </LabelInputContainer>
                        <button
                            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                            type="submit"
                            aria-describedby="submit-status"
                        >
                            Send &rarr;
                            <BottomGradient />
                        </button>
                        
                        <div id="submit-status" aria-live="polite">
                            {status === "success" && (
                                <p className="mt-4 text-green-500 text-sm">Thanks for contacting me! 🎉</p>
                            )}
                            {status === "error" && (
                                <p className="mt-4 text-red-500 text-sm">Oops! Something went wrong. Please try again.</p>
                            )}
                        </div>
                    </form>
                </div>
                
                {/* Additional contact information for SEO */}
                <div className="mt-12 text-center">
                    <h3 className="text-lg font-semibold mb-6">Other Ways to Connect</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                        <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
                            <h4 className="font-medium mb-2">Email</h4>
                            <p className="text-neutral-600 dark:text-neutral-400">
                                <a href="mailto:shauryasha090@gmail.com" className="hover:underline">
                                    shauryasha090@gmail.com
                                </a>
                            </p>
                        </div>
                        <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
                            <h4 className="font-medium mb-2">GitHub</h4>
                            <p className="text-neutral-600 dark:text-neutral-400">
                                <a href="https://github.com/shaurya-afk" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    github.com/shaurya-afk
                                </a>
                            </p>
                        </div>
                        <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
                            <h4 className="font-medium mb-2">LinkedIn</h4>
                            <p className="text-neutral-600 dark:text-neutral-400">
                                <a href="https://linkedin.com/in/shaurya-afk" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    linkedin.com/in/shaurya-afk
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};
