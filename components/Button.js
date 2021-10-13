import {motion} from "framer-motion";
import React from "react";

const Button = ({onClick, icon, text, style, children}) => {
	return (
		<motion.button
			whileHover={{scale: 1.1}}
			whileTap={{scale: 0.9}}
			onClick={onClick}
			className={`flex w-52 mt-3 bg-pink-500
					        hover:bg-pink-600 hover:to-blue-600 focus:outline-none text-white text-2xl
					        uppercase font-bold shadow-md rounded-lg mx-auto p-2 ` + style}>
			<div className="flex sm:flex-cols-12 gap-6">
				<div className="col-span-1">
					{icon}
				</div>
				<div className="col-span-2 pt-1.5">{text || children}</div>
			</div>
		</motion.button>
	)
}
export default Button