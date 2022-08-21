import style from './message.module.css'

export const Message = ({text}) => {
    return <>
        <p className={style.message}>{ text }</p>
    </>
}