import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from '../../firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user);
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(userDocRef);
    };
    return (
        <div>
            <h2>Sing In Page</h2>
            <button onClick={logGoogleUser}>Sign In With Google Popup</button>
        </div>
    );
};

export default SignIn;
