import {useFormik} from 'formik';
import {AiOutlineSearch} from 'react-icons/ai'
const NavInput = () => {

    const formik = useFormik({
        initialValues: {
            searchKeyword: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });
    return (
        <form
            className='flex text-center items-center  border rounded-full lg:w-80'
            onSubmit={formik.handleSubmit}>
            <button type="submit border-1    ">
                <AiOutlineSearch className='text-xl h-9 mx-2 '/>
                </button>

            <input
                className=' pl-1 pr-3 w-full py-2 rounded-r-full  outline-none '
                placeholder="Search Posts or Users"
                id="searchKeyword"
                name="searchKeyword"
                type="search"
                onChange={formik.handleChange}
                value={formik.values.searchKeyword}/>

        </form>
    );
};
export default NavInput;
