import 'tailwindcss/tailwind.css'
import {AuthProvider} from '../providers/authProvider'

// WRAP THE APP WITH THE PROVIDER IN ORDER TO GET ACCESS TO THE GLOBAL STATE
// https://www.netlify.com/blog/2020/12/01/using-react-context-for-state-management-in-next.js/
function MyApp({Component, pageProps}) {
	return (
		<AuthProvider>
			<Component {...pageProps} />
		</AuthProvider>
	)
}

export default MyApp
