import { Props } from '../../../../../models/interface'
import Head from '../../../../head'

export default function SlugLayout({ children }: Props) {
	return (
		<>
			<Head>
				<title>Drinks: Starbucks Coffee Company</title>
			</Head>
			<div>
				<div>{children}</div>
			</div>
		</>
	)
}
