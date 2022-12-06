import Props from '../models/props'

export default function Head({ children }: Props) {
	return (
		<>
			{children}
			<meta content='width=device-width, initial-scale=1' name='viewport' />
			<link rel='icon' href='/favicon.ico' />
		</>
	)
}
