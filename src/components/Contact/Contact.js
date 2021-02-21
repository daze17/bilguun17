import React from 'react'
import { useForm } from 'react-hook-form';
import './Contact.css'

const Contact = ()=>{
        // 
        const { register, handleSubmit, errors } = useForm();
        const onSubmit = (data) => {
          alert(`Thank you for your message from ${data.email}`);
          const templateId = 'template_vktnqtu';
          const serviceID = 'service_ddwb238';
          sendFeedback(serviceID, templateId, { name: data.name, textmessage: data.textmessage, email: data.email, number: data.number })
      }

      const sendFeedback = (serviceID, templateId, variables) => {
        window.emailjs.send(
            serviceID, templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
    }
    return(
    <div >
            <div className="bg-svg-slant-gray">
                <svg
                    class="slant-gray"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    >
                    <polygon points="0,100 100,0 100,100" />
                </svg>
            </div>
        <div className="contact" id="Contact">
                <div className="contact-wrapper">
                        <div className="contact-text-wrapper">
                            <h1 className="about-title" data-aos="fade-up">CONTACT</h1>
                                <form className="contact-form" onSubmit={handleSubmit(onSubmit)} > 
                                
                                  <input type="text" placeholder="Your name" name="username" 
                                    ref={register({required: 'blank',
                                                  minLength: {
                                                    value: 2,
                                                    message: 'too short'
                                                  },
                                                  maxLength: {
                                                    value: 34,
                                                    message: 'too long'
                                                  }
                                                  })} />
                                  {errors.username && <p className="error_text">{errors.username.message}</p>}
                                  
                                  
                                  <input type="text" placeholder="Email" name="email" 
                                    ref={register({required: true,
                                                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                                  })} /> 
                                  {errors.email && <p className="error_text">invalid email</p>}
                              
                                  <input type="tel" placeholder="Mobile number" name="number"
                                   />
                                  
                                  <textarea placeholder="Message " name="textmessage"  
                                    ref={register({required: 'oops, you forgot your message!',
                                                   minLength: {
                                                     value: 5,
                                                     message: "too short"
                                                   }
                                    })} />
                                    {errors.textmessage && <p className="error_text">{errors.textmessage.message}</p>}
                                  <button type="submit"> Send </button>
                                </form>
                        </div>
                </div>
            </div>        
    </div>
    )
}

export default Contact