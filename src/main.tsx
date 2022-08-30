import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

function Bootstrap() {
	return (
		!import.meta.env.DEV
			? (<App />)
			: (
				<React.StrictMode>
					<App />
				</React.StrictMode>
			)
	)
}

document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
		<Bootstrap />
	)
})

