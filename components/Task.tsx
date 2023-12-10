import React, {ReactNode} from "react";
import Checkbox from "@/components/Checkbox";

type Props = {
    key: number,
    isCompleted: boolean,
    children: ReactNode
}

export default function Task(props: Props) {
    return (
        <>
        <Checkbox/>
        <div className="p-4 flex w-full bg-gray-500 border border-gray-400 rounded-lg">

        </div>
        </>
    );
}