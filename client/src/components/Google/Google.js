import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => 
	console.log(response + ' Line 6');
	
	// onSuccess = () =>{
	// 	console.log("hello")
	// }
	// onFailure = () =>{
	// 	console.log('jk, not working')
	// }

	<GoogleLogin
			clientId="922670117255-bcnqfjfaqpc8h7d1ct293i25t1465gv5.apps.googleusercontent.com"
			buttonText="Login"
			onSuccess={responseGoogle}
			onFailure={responseGoogle}
		
	/>;

export default GoogleLogin;
