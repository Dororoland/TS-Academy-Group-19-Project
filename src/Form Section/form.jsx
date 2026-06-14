
import { use, useState } from 'react'
import './form.css'
import buttonicon from  '../assets/btn-arrow.svg'



// form input event handler


export default function FormSec() {

    //Store User Details

    const [fullName, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [message, setMessage] = useState('')

    const formUserInfo = {
        userFullName: fullName,
        userEmail: email,
        phone: phoneNumber,
        userMessage : message
    }

    //Send User Details to End-point

    const submitHandler = async (e) => {
        e.preventDefault()

        const data = new URLSearchParams();

        data.append("fullName", formUserInfo.fullName);
        data.append("email", formUserInfo.email);
        data.append("phoneNumber", formUserInfo.phoneNumber);
        data.append("message", formUserInfo.message);

        console.log(formUserInfo)
        

        const response = await fetch ("https://whitebricks.com/tsacademy.php", {
            method: "POST",
            headers: {
                "Content-Type" : "application/x-www-form-urlencoded"},
            body: data,
            }
        )

        console.log("Status", response.status);
        console.log('sent:', data)

        alert('Submitted')
        
        }

    




    return (
        <section id="form" className='form-section'>
            
            <div className='text-sect'>
                <h2>
                    Have Questions About Planetary Science?
                </h2>
                <p>
Interested in learning more about space, astronomy, or how planetary data is collected and analyzed? Reach out and we’ll get back to you.
                </p>
                

            </div>

<form onSubmit={submitHandler}>   
   <div className='form-container'>

        <div className='innerform-container'> 
            <label className='input-label'>Full Name<span>*</span></label>
            <input type='text' name='Fullname' className='inputs' placeholder='Full Name' value={fullName} onChange={(e) => setName(e.target.value)}  required></input>
        </div>
    
        <div className='innerform-container'> 
            <label className='input-label'>Email<span>*</span></label>
            <input type='email' name='email' className='inputs' placeholder='example@example.com' value={email} onChange={(e) => setEmail(e.target.value)}  required></input>
        </div>
     
        <div className='innerform-container'>
            <label className='input-label'>Phone Number<span>*</span></label>
            <input type='number' name='phonenumber' className='inputs' placeholder='Please enter a valid phone number.' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}  required></input>
        </div>
        
        <div className='innerform-container'> 
            <label className='input-label' >Message<span>*</span></label>
            <input type='text' name='message' id='message-input' className='inputs' maxLength={100} placeholder='Enter your message' value={message} onChange={(e) => setMessage(e.target.value)} required></input>
            <p>100 characters</p>
        </div>

    </div>


        <div className='button-container'>
            <button type='submit' className='form-btn'>
                Submit
                    <img
                        src={buttonicon}
                        alt="Company logo"
                        width={15}
                        height={15}
                        loading="lazy"
                    />
            </button>
        
        </div>
    </form>

</section>


    )

    
}
