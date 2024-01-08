import './community.css';

function Community () {
    return (
        <div className='community'>
            <div className='community_container'>
                <div className='com_text1'>
                    JOIN SHOPPING COMMUNITY TO 
                    GET MONTHLY PROMO
                </div>
                <div className='com_text2'>
                    Type your email down below and be young wild generation
                </div>
                <div className='input_form'>
                    <form className='form_input'>
                        <div className='main_input'>
                        <input className='input' type="text" placeholder="Add your email here" required/>
                        </div>
                        <div className='btn_main'>
                        <button type="submit" class="btn_form">
                            <span>SEND</span>
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Community;