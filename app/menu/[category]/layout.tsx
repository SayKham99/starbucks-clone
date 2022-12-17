import { Props } from '../../../models/interface'

export default function ProductLayout({ children }: Props) {
	return (
		<>
			<div>
				<div>{children}</div>
			</div>
		</>
	)
}
