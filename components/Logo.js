import {motion} from "framer-motion";
import React from "react";

const Logo = ({scale}) => {
	return (
		<motion.div
			animate={{scale: scale}}
			transition={{duration: 0.5}}
		>
			<img src="/assets/hero.svg" alt="hero" style={{height: '150px'}}/>
		</motion.div>
	)
}

export default Logo