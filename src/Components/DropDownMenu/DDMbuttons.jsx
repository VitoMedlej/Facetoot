
const DDMbuttons = ({children ,text  ,iconStyle ,onClick}) => {
    return (
        <div 
            onClick={() => onClick && onClick() }
        className='cursor-pointer hover:bg-gray-200 my-1 flex pl-2 py-2 items-center  w-80'>
         <div className={iconStyle}>
        {children}  
        </div>
           
             <button  className='font-medium '>{text}</button>
         </div>
    )
}

export default DDMbuttons
