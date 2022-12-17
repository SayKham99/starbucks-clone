import { Props } from '../../../../../models/interface'

export default function CategoryLayout({ children }: Props) {
	return (
		<>
			<div>
				<div>{children}</div>
			</div>
		</>
	)
}
