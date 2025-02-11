import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/electron-vite.animate.svg';
import './App.css';
import { Button } from '@/components/ui/button';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
				<img src={reactLogo} className="h-20" alt="React logo" />
				<img src={viteLogo} className="h-20" alt="Vite logo" />
				<h1 className="text-3xl font-bold">Hello, Shadcn and Tailwind!</h1>
				<Button onClick={() => setCount(count + 1)} className="mt-4">
					Count is {count}
				</Button>
			</div>
		</>
	);
}

export default App;
