import React, { useEffect } from "react";
import styled from "styled-components";

import {
	selectUserName,
	selectUserPhoto,
	setUserLogin,
	setSignOut,
} from "../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { auth, provider } from "../firebase";

function Header() {
	const dispatch = useDispatch();
	const history = useHistory();
	const userName = useSelector(selectUserName);
	const userPhoto = useSelector(selectUserPhoto);

	useEffect(() => {
		auth.onAuthStateChanged(async (user) => {
			if (user) {
				dispatch(
					setUserLogin({
						name: user.displayName,
						email: user.email,
						photo: user.photoURL,
					})
				);
				history.push("/");
			}
		});
	});

	const signIn = () => {
		auth.signInWithPopup(provider).then((result) => {
			let user = result.user;
			dispatch(
				setUserLogin({
					name: user.displayName,
					email: user.email,
					photo: user.photoURL,
				})
			);
			history.push("/");
		});
	};

	const signOut = () => {
		auth.signOut().then(() => {
			dispatch(setSignOut());
			history.push("/login");
		});
	};

	return (
		<Nav>
			<Logo src="/images/logo.svg" />
			{!userName ? (
				<LoginContainer>
					<Login onClick={signIn}>Login</Login>
				</LoginContainer>
			) : (
				<>
					<NavMenu>
						<a href="#">
							<img src="/images/home-icon.svg" alt="home" />
							<span>Home</span>
						</a>
						<a href="#">
							<img src="/images/search-icon.svg" alt="search" />
							<span>Search</span>
						</a>
						<a href="#">
							<img src="/images/watchlist-icon.svg" alt="watchlist" />
							<span>Watchlist</span>
						</a>
						<a href="#">
							<img src="/images/original-icon.svg" alt="original" />
							<span>Original</span>
						</a>
						<a href="#">
							<img src="/images/movie-icon.svg" alt="movie" />
							<span>Movies</span>
						</a>
						<a href="#">
							<img src="/images/series-icon.svg" alt="series" />
							<span>Series</span>
						</a>
					</NavMenu>
					<UserImg
						onClick={signOut}
						src="https://lh3.googleusercontent.com/ogw/ADea4I6znVqwfGehoLlYvD4m2v_3rfJl-U8K-Kp8wVxKew=s192-c-mo"></UserImg>
				</>
			)}
		</Nav>
	);
}

export default Header;

const Nav = styled.div`
	height: 70px;
	background-color: #090b13;
	display: flex;
	align-items: center;
	padding: 0 36px;
	overflow-x: hidden;
`;

const Logo = styled.img`
	width: 80px;
`;

const NavMenu = styled.div`
	display: flex;
	flex: 1;
	margin-left: 25px;
	align-items: center;

	a {
		display: flex;
		align-items: center;
		padding: 0 12px;
		color: white;

		img {
			height: 20px;
		}

		span {
			font-size: 13px;
			letter-spacing: 1.42px;
			text-transform: uppercase;
			position: relative;

			&:after {
				content: "";
				height: 2px;
				background: white;
				position: absolute;
				left: 0;
				right: 0;
				bottom: -6px;
				opacity: 0;
				transform-origin: left center;
				transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
				transform: scaleX(0);
			}
		}

		&:hover {
			span:after {
				transform: scaleX(1);
				opacity: 1;
			}
		}
	}
`;

const UserImg = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 50%;
	cursor: pointer;
`;

const Login = styled.div`
	border: 1px solid #f9f9f9;
	padding: 8px 16px;
	border-radius: 4px;
	letter-spacing: 1.5px;
	text-transform: uppercase;
	background-color: rgba(0, 0, 0, 0.6);
	cursor: pointer;
	transition: all 0.2 ease 0s;

	&:hover {
		background-color: #f9f9f9;
		color: black;
		border-color: transparent;
	}
`;

const LoginContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-end;
`;
