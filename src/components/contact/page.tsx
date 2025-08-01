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
        <section id="contact">
            <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
                <form className="my-8" onSubmit={handleSubmit}>
                    <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                        <LabelInputContainer>
                            <Label htmlFor="firstname">Name</Label>
                            <Input id="firstname" name="name" placeholder="Shaurya" type="text" required />
                        </LabelInputContainer>
                    </div>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" name="email" placeholder="shauryasha090@gmail.com" type="email" required />
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
                        />
                    </LabelInputContainer>
                    <button
                        className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                        type="submit"
                    >
                        Send &rarr;
                        <BottomGradient />
                    </button>
                </form>
                {status === "success" && (
                    <p className="mt-4 text-green-500 text-sm">Thanks for contacting me! 🎉</p>
                )}
                {status === "error" && (
                    <p className="mt-4 text-red-500 text-sm">Oops! Something went wrong. Please try again.</p>
                )}

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
