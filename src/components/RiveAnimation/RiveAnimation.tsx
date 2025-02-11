import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';

interface RiveAnimationProps {
	rivFile: string;
	stateMachine?: string;
	artboard?: string;
	width?: number;
	height?: number;
}

const RiveAnimation: React.FC<RiveAnimationProps> = ({
	rivFile,
	stateMachine,
	artboard,
	width = 400,
	height = 400,
}) => {
	const { rive, RiveComponent } = useRive({
		src: rivFile,
		stateMachines: stateMachine ? [stateMachine] : undefined,
		artboard: artboard,
		autoplay: true,
		layout: new Layout({
			fit: Fit.Contain,
			alignment: Alignment.Center,
		}),
	});

	return (
		<div style={{ width, height }}>
			<RiveComponent />
		</div>
	);
};

export default RiveAnimation;
