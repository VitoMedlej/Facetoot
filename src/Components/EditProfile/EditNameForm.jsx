import UpdateName from "./UpdateName"

const EditNameForm = ({user}) => {
    const formik = UpdateName()

    return (
        <form 
        className='mt-3 flex justify-between'
        onSubmit={formik.handleSubmit}>
            <label className='text-md hidden sm:block' htmlFor="name">New name:</label>
            <input
                className='border lg:w-80 bg-gray-100 px-1 py-0 outline-none border-black sm:mx-3'
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}/>

            <button disabled={formik.values.name.length > 5 && formik.values.name !== user.displayName ? false : true } 
            type="submit"
             className='text-blue-600 text-lg'>Change</button>
        </form>
    )
}

export default EditNameForm
