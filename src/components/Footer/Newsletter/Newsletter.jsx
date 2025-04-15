import "./Newsletter.scss"
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useForm, ValidationError } from '@formspree/react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
function Newsletter() {
    const [state, handleSubmit] = useForm("xdkaqjzj");
    if (state.succeeded) {
        return (<div className="newsletter-section">
            <h1 className="succeed">Thanks for joining!</h1>
            <DotLottieReact className="su"
      src="https://lottie.host/9e58ae14-a51a-450f-b06a-652fe1ba5bd4/w9av1sVUfN.lottie"
      loop
      autoplay
    />
            
            </div>)
    }
    return (
        <div className="newsletter-section" >
            <div className="newsletter-content">
                <span className="small-text">Newslette</span>
                <form action=""onSubmit={handleSubmit}>

                    <span className="big-text">
                Sign up for latest updates and offers
                </span>

                <div className="form">
                    <input type="text" placeholder="Email Address" name="email"/>
                    <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
                    <button disabled={state.submitting}> {state.submitting ? "submitting" :"submit"}</button>
                </div>
                <div className="text">Will be used in accordance with our Privacy Policy</div>
                </form>
                
                
                <div className="social-icons">
                <div className="icon">
                    <FaFacebook size={14} />
                    </div>
                    <div className="icon">
                    <FaTwitter size={14}/>
                    </div>
                    <div className="icon">
                    <FaInstagram size={14}/>
                    </div>
                    <div className="icon">
                    <FaLinkedin size={14}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
