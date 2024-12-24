import { FaJava, FaNodeJs, FaPython } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";

export default function Technologies() {
    return (
        <div className="pb-24">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div>
                    <RiReactjsLine className="text-7xl" />
                </div>
                <div className="p-4">
                    <TbBrandNextjs className="text-7xl" />
                </div>
                <div className="p-4">
                    <GrMysql className="text-7xl" />
                </div>
                <div className="p-4">
                    <FaNodeJs className="text-7xl" />
                </div>
                <div className="p-4">
                    <FaJava className="text-7xl" />
                </div>
                <div className="p-4">
                    <FaPython className="text-7xl" />
                </div>
            </div>
        </div>
    );
}
