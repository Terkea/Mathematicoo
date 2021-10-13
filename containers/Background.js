const Background = ({children}) => {
	return (
		<div
			className="min-w-screen min-h-screen bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center"
			style={{backgroundImage: `url('/assets/gradient-2.svg')`}}>
			{children}
		</div>
	)
}

export default Background