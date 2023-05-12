import Link from "next/link"
import React from "react"

interface RedeSocialProp{
    icone: any
    url: string
}

export default function RedeSocial(props: RedeSocialProp){
    return (
        <Link href={props.url} target="_blank">
            <div className="bg-zinc-800 rounded-lg p-1 mr-3 cursor-pointer">
                {React.cloneElement(props.icone, {
                    size: 35,
                    strokeWidth: 1,
                    className: "text-indigo-500",
                })}

            </div>
        </Link>
    )
}