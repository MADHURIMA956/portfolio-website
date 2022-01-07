export const PopupMail =(props) => {
    return(props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                {props.children}
                <button className="close-btn" onClick={()=> props.setTrigger(false)}>close</button>
            </div>
        </div>
    ) :"";
}