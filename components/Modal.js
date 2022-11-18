function Modal({children}){
    return (
        <div className='fixed bg-black bg-opacity-40 top-0 right-0 bottom-0 left-0'>
            <div className='absolute w-full flex justify-center top-1/4'>
                <div className="rounded-lg p-4 flex flex-col max-w-2xl w-full bg-white">
                    {children}
                </div> 
            </div>
        </div>
    )
}

export default Modal 