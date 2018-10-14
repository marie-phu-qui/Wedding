import React from 'react'

class Rsvp extends React.Component{
    constructor(props){
    super(props)
        this.state ={}
        this.form = this.form.bind(this)
    }

    form(){

        document.getElementById('contact-form').addEventListener('submit', function(event) {
            
            event.preventDefault();
            var form = this
            window.form = form
            emailjs.sendForm('gmail', 'template_AGwbaEfV', form);
            
        })

        setTimeout(() => {
            this.props.handleClick()
        }, 50);
    }

    render(){
        return (         
        <div class="container">      
            <div id="formPage" class="field">
             <form id="contact-form">       
            {/* Name Form */}
            <label class="label">Name</label>
            <div class="name">
                 <div class="field">
                    <div class="control">
                     <input class="input is-primary" type="text" name="from_name" placeholder="First and Last Name"/>
                </div>
            </div>
        </div>
            {/* RSVP */}
        <label class="label">Are you able to attend ?</label>
            <div class="yesnoo">
                 <div class="field">
                    <div class="control">
                    <input class="input is-primary" type="text" name="from_rsvp" placeholder="Yes / No/ Maybe"/>
                </div>
            </div>
        </div>
            {/* Plus one? */}
            <label class="label">Any plus 1 ?</label>
            <div class="plusone">
                <div class="field">
                    <div class="control">
                     <input class="input is-primary" type="text" name="from_plusone" placeholder="First and Last Name"/>
                </div>
            </div>
        </div>
            {/* Babies and small kids */}
            <label class="label">Will there be any babies, toddlers, or children coming with you ? </label>
            <div class="field">
        <div class="control">
        <input class="input is-primary" type="text" name="from_babies" placeholder="How many, age, etc"/>
        </div>
        </div>
            {/* Where will you be staying */}
            <label class="label">Where will you be staying ?</label>
            <div class="location">
            <div class="field">
        <div class="control">
        <input class="input is-primary" type="text" name="from_location" placeholder="i.e. Wellington or Martinborough"/>
        </div>
        </div>
        </div>
        
            {/* Will you you be attending the bbq the next day */}
        <label class="label">Attending the BBQ on Sunday 28 April ?</label>
            <div class="yesno">
            <div class="field">
        <div class="control">
        <input class="input is-primary" type="text" name="from_bbq" placeholder="Yes / No/ Maybe"/>
        </div>
        </div>
        </div>
            {/* Any Dietary req */}
            <label class="label">If you have any dietary requirements, please provide details</label>
            <div class="field">
        <div class="control">
        <input class="input is-primary" type="text" name="from_diet"/>
        </div>
        </div>
            {/* Email*/}
            <label class="label">Email</label>
            <div class="email">
            <div class="control has-icons-left has-icons-right">
            <input class="input is-danger" type="email" placeholder="Your_email@gmail.com"name="user_email"/>
            <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
        </span>
            </div> 
            </div>
            {/* Message form */}
            <label class="label">Message</label>
            <div class="field">
        <div class="control">
        <textarea class="textarea is-primary" type="text" name="message_html" placeholder="Enter message here"></textarea>
        </div>
        </div>


            <div class="field">
        <div class="control">
        </div>
        </div>
        
            <input onClick={this.form} class="button is-link" type="submit" value="Send"/>
        </form>
        </div>
        </div>
        
        )
    }
}

export default Rsvp