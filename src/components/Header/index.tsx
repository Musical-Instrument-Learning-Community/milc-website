import React  from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import NavLink from '../NavLink'
import {LoginView} from '../userManagment/index'
import { HashRouter as Router, Route, Switch, useLocation } from 'react-router-dom'

interface IHeaderProps {
	text?: string
	project?: string
}

const useStyles = makeStyles(() => ({
	/* stylelint-disable */
	headerWrap: {
		display: 'flex',
		height: 60,
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '0 40px',
	},
	navlinkWrap: {
		display: 'flex',
		marginBottom: 0,
		'@media (max-width:780px)': {
			// eslint-disable-line no-useless-computed-key
			display: 'none',
		},
	},
	logo: {
		flex: 1,
	},
	liWrap: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	userIcon: {
		'&:hover': {
			cursor: 'pointer',
		},
	},
}))

const TestDropdownBox = () => <Box>test dropdown</Box>

const Header: React.FC<IHeaderProps> = () => {
	const classes = useStyles({})
	return (
		<Box className={classes.headerWrap}>
			<Box className={classes.logo} />
			<ul className={classes.navlinkWrap}>
				<NavLink text='Home' link='#' dropDown={<TestDropdownBox />} />
				<NavLink text='Finding a Tutor' link='/#/tutors' />
				<NavLink text='Account' link='/#/account' />
			</ul>
			<Box className={classes.userIcon}>
				<LoginView />
				{/* <Router>
				<Route path='/'>
				
				</Route>
				<Route path='/Register'>
				<Signup />
				</Route>
				</Router> */}
				
			</Box>
		</Box>
	)
}

export default Header
