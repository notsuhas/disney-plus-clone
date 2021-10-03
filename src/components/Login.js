import React from "react";
import styled from "styled-components";

function Login() {
	return (
		<Container>
			<CTA>
				<CTALogoOne src="/images/cta-logo-one.svg" />
				<SignUpButton>GET IT ALL THERE</SignUpButton>
				<Description>
					Get Premier Access to Raya and the Last Dragon for an additional fee
					with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
					The Disney Bundle will increase by $1.
				</Description>
				<CTALogoTwo src="/images/cta-logo-two.png" />
			</CTA>
		</Container>
	);
}

export default Login;

const Container = styled.div`
	position: relative;
	height: calc(100vh - 70px);
	padding: 0 calc(3.5vw + 5px);
	display: flex;
	align-items: top;
	justify-content: center;
    

	&::before {
		background-position: top;
		background-size: cover;
		background-repeat: no-repeat;
		background-image: url("/images/login-background.jpg");
		position: absolute;
		content: "";
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: -1;
        opacity: 0.7;
	}
`;

const CTA = styled.div`
	max-width: 650px;
	padding: 80px 40px;
	width: 90%;
	display: flex;
	flex-direction: column;
    margin-top: 100px;
    align-items: center;
`;

const CTALogoOne = styled.img``;

const SignUpButton = styled.a`
	width: 100%;
	background-color: #0063e5;
	font-weight: bold;
	color: #f9f9f9;
	padding: 17px 0px;
	margin-top: 8px;
	margin-bottom: 12px;
	border-radius: 4px;
	text-align: center;
	font-size: 18px;
	transition: all 250ms;
	letter-spacing: 1.5px;

	&:hover {
		background-color: #0483ee;
	}
`;

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;

`;

const CTALogoTwo = styled.img`
    width: 90%;

`;
