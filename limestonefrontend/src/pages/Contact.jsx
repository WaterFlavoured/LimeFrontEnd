import React from 'react'
import './Contact.css'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7e68840b-137e-495c-80d9-c67c6817a32e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contactF'>
        <div className='contactF-title'>
          <h2>GET IN TOUCH</h2>
          <h1>Reach out now and let's<br />start a converstation</h1>
          <p>someemail@limestoneconcrete.ca | 519-420-6969</p>
        </div>

        <form className='contactF-form' onSubmit={onSubmit}>
          <div className='contactF-form-topRow'>
            <div className='contactF-form-topRow-inputs'>
              <input type='text' placeholder='Your Name*' name='name' required/>
              <input type="text" placeholder='Phone' name='phone'/>
            </div>
            <div className='contactF-form-topRow-inputs'>
              <input type="text" name="email" id="" placeholder='Email*' required/>
              <input type="text" name="address" id="" placeholder='Address'/>
            </div>
          </div>
          <textarea placeholder="What's on your mind?" className='textArea' name='message'/>
          <button type='submit' className='submitFormButton'>Submit</button>
        </form>
    </div>
  )
}

export default Contact