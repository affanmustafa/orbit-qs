import { useState } from 'react';
import RiveAnimation from '@/components/RiveAnimation/RiveAnimation';
import './App.css';

function App() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-black">
			<RiveAnimation
				rivFile="/orbit.riv"
				stateMachine="State Machine 1"
				width={500}
				height={500}
			/>
		</div>
	);
}

export default App;
