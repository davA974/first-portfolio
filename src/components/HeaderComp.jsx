import React from 'react'
import rick from "../assets/images/rick.png"
import { FacebookOutlined, GithubOutlined, LinkedinOutlined, MessageOutlined, TwitterOutlined } from '@ant-design/icons'
const HeaderComp = () => {
  return (
    <header>
        <div className="left">
            <img src={rick} alt='user'/>
            <div className='user-info'>
                <h1>David M</h1>
                <h3>développeur Web</h3>
                <div className='Contacts'>
                    <div className='contact-item'>
                        <LinkedinOutlined/> 
                    </div>
                    <div className='contact-item'>
                        <TwitterOutlined/> 
                    </div>
                    <div className='contact-item'>
                        <GithubOutlined/> 
                    </div>
                    <div className='contact-item'>
                        <FacebookOutlined/> 
                    </div>
                </div>
            </div>
        </div>

        <div className="right">
            <button className ='contact-btn' icon={<MessageOutlined/>}>Send me a message</button>
        </div>
    </header>
  )
}

export default HeaderComp