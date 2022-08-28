import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";

const Authentication = () => {
    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);
    
    //     if (response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    // }, []); //on mount once

    return (
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
            {/* <button onClick={ signInWithGoogleRedirect }>
                Sign in with Google Redirect
            </button> */}
        </div>
    );
};

export default Authentication;