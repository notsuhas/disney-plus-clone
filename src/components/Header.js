import React from "react";
import styled from "styled-components";

function Header() {
	return (
		<Nav>
			<Logo src="/images/logo.svg" />
			<NavMenu>
				<a href="">
					<img src="/images/home-icon.svg" alt="home" />
					<span>Home</span>
				</a>
				<a href="">
					<img src="/images/search-icon.svg" alt="search" />
					<span>Search</span>
				</a>
				<a href="">
					<img src="/images/watchlist-icon.svg" alt="watchlist" />
					<span>Watchlist</span>
				</a>
				<a href="">
					<img src="/images/original-icon.svg" alt="original" />
					<span>Original</span>
				</a>
				<a href="">
					<img src="/images/movie-icon.svg" alt="movie" />
					<span>Movies</span>
				</a>
				<a href="">
					<img src="/images/series-icon.svg" alt="series" />
					<span>Series</span>
				</a>
			</NavMenu>
			<UserImg src="https://lh3.googleusercontent.com/ogw/ADea4I6znVqwfGehoLlYvD4m2v_3rfJl-U8K-Kp8wVxKew=s192-c-mo"></UserImg>
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
